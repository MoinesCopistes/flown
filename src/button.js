import { BUTTONS } from "./buttons";
import { THRESHOLDS } from "./levels";
import { comparaison } from "./utils";

import { clk_sound, end_sound, win_sound } from "./sound_effects";

export function addButton(buttonName) {
    let button = BUTTONS[buttonName]; 
    let div = document.createElement("div");   
    let btn = document.createElement("button");
    div.appendChild(btn);
    btn.style.setProperty("--color", button["color"]);
    btn.className = "transformation"
    div.addEventListener("click", () => {
        let i = window.switched ? 1 : 0;
        if (buttonName == "blank")  {
            window.user_ops[i] = []
        } else {
            window.user_ops[i].push(buttonName)
        }
        btn.disabled = true;

        clk_sound.pause();
        clk_sound.currentTime = 0;
        clk_sound.play();

        button["callback"]();
        window.user_p5.redraw()
        btn.disabled = false;
        let percentage = comparaison(window.reference, window.user);
        document.getElementById("bar").style.height = `${(percentage) * 100}%`;
        if (percentage >= THRESHOLDS[window.level]) {
            if (window.game.challengeMode) {
                window.fireworks.start()
                setTimeout(() => {
                    window.fireworks.stop()
                }, 10000)
                return;
            }
            setTimeout(() => {

                if(window.level == 4) {
                    end_sound.pause();
                    end_sound.currentTime = 0;
                    end_sound.play();
                } else {
                    win_sound.pause();
                    win_sound.currentTime = 0;
                    win_sound.play();
                }

                /*window.level += 1;
                window.user_p5.loadLevel();
                window.reference_p5.loadLevel();*/
                window.game.toggleCanvasSwap();

            }, 500)

        }
    });
    if (button["animation"] != null) {
        const animationName = `button-animation-${Math.random()}`.replace(".", "");
        const styleSheet = document.styleSheets[0];

        styleSheet.insertRule(
            `@keyframes ${animationName} { ${button["animation"]} }`,
            styleSheet.cssRules.length
        );
    
        div.addEventListener("mouseover", function() {
            btn.style.animation = `${animationName} 1s ease-in-out forwards`;
        });
    
        div.addEventListener("mouseout", function() {
            btn.style.animation = "";
        });
    }

    div.appendChild(btn);

    let container = document.getElementById("buttons");
    container.appendChild(div);


}

import { BUTTONS } from "./buttons";
import { THRESHOLDS } from "./levels";
import { comparaison } from "./utils";

export function addButton(buttonName) {
    let button = BUTTONS[buttonName];    
    console.log("adding button")
    console.log(button["color"])
    let btn = document.createElement("button")
    btn.style.setProperty("--color", button["color"]);
    btn.className = "transformation"
    btn.addEventListener("click", () => {
        btn.disabled = true;
        button["callback"]();
        window.user_p5.redraw()
        btn.disabled = false;
        if (comparaison(window.reference, window.user) >= THRESHOLDS[window.level]) {
            setTimeout(() => {
                /*window.level += 1;
                window.user_p5.loadLevel();
                window.reference_p5.loadLevel();*/
                window.game.toggleCanvasSwap();

            }, 500)
           
        }
    });
    console.log(button["animation"])
    if (button["animation"] != null) {
        const animationName = `button-animation-${Math.random()}`.replace(".", "");
        const styleSheet = document.styleSheets[0];
    
        styleSheet.insertRule(
            `@keyframes ${animationName} { ${button["animation"]} }`,
            styleSheet.cssRules.length
        );
        btn.style.animation = `${animationName} 5s ease-in-out forwards`;
    }
    let container = document.getElementById("buttons");
    container.appendChild(btn);


}

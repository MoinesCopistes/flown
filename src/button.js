import { comparaison } from "./utils";

export function addButton(container, color, callback, animation = null) {
    console.log("adding button")
    console.log(color)
    let btn = document.createElement("button")
    btn.style.setProperty("--color", color);
    btn.className = "transformation"
    btn.addEventListener("click", () => {
        btn.disabled = true;
        callback();
        window.user_p5.redraw()
        btn.disabled = false;
        if (comparaison(window.reference, window.user) >= 0.95) {
            setTimeout(() => {
                /*window.level += 1;
                window.user_p5.loadLevel();
                window.reference_p5.loadLevel();*/
                window.game.toggleCanvasSwap();

            }, 500)
           
        }
    });
    console.log(animation)
    if (animation != null) {
        const animationName = `button-animation-${Math.random()}`.replace(".", "");
        const styleSheet = document.styleSheets[0];
    
        styleSheet.insertRule(
            `@keyframes ${animationName} { ${animation} }`,
            styleSheet.cssRules.length
        );
        btn.style.animation = `${animationName} 5s ease-in-out forwards`;
    }
    container.appendChild(btn);


}
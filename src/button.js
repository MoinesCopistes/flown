export function addButton(container, color, callback) {

    let btn = document.createElement("button")
    btn.style.setProperty("--color", color);
    btn.className = "transformation"
    btn.addEventListener("click", () => {
        btn.disabled = true;
        callback();
        window.user_p5.redraw()
        btn.disabled = false;
    });
    container.appendChild(btn)
    
}
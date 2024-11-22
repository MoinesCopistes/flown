export function addButton(container, color, callback) {

    let btn = document.createElement("button")
    btn.style.setProperty("--color", color);
    btn.className = "transformation"
    btn.addEventListener("click", callback)
    container.appendChild(btn)
    
}
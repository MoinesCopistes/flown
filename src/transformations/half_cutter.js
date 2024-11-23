import { get_base } from "../utils"

export function half_cutter(image, p) {
    let base = p.createGraphics(p.width, p.height);
    base.image(image, 0, 0)
    base.fill(255);
    base.noStroke();
    base.rect(0, 0, base.width / 2, base.height)
    return base.get()
}
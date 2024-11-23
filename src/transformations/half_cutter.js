import { get_base } from "../utils"

export function half_cutter(image, p) {
    let base = p.createGraphics(p.width, p.height);
    base.drawingContext.imageSmoothingEnabled = false;
    base.image(image, 0, 0)
    base.fill(255);
    base.noStroke();
    base.noSmooth();
    base.rect(0, 0, base.width / 2, base.height)
    image = base.get()
    base.remove()
    base = null;
    return image
}
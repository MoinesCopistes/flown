import { get_base } from "../utils"

export function Rect(image, p) {
    let base = p.createGraphics(p.width, p.height);
    base.drawingContext.imageSmoothingEnabled = false;
    base.image(image, 0, 0)
    base.fill(0,0,0);
    base.noStroke();
    base.noSmooth();
    base.rect((base.width / 3) ,(base.height / 3),(base.width / 3),(base.height / 3));
    image = base.get()
    base.remove()
    base = null;
    return image
}

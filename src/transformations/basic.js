import { get_base } from "../utils"

export function basicTransform(image, p) {
    let base = get_base(p);
    base.fill(0);
    base.noSmooth();
    base.noStroke();
    base.rect(-100, -25, 200, 50)
    image = base.get()
    base.remove()
    base = null;
    return image
}
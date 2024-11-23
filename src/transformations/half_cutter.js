import { get_base } from "../utils"

export function half_cutter(image, p) {
    let base = get_base(p);
    base.clear()
    base.fill(0);
    base.rect(base.width / 2, base.height / 2, -base.width / 2, -base.height)
    let mask = base.get()
    image.mask(mask)
    return image
}
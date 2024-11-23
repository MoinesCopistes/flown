import { get_base } from "../utils"

export function form_rounding(image,p){
    let pi = image;
    let mask = p.createGraphics(p.width, p.height);

    mask.clear(); // Black (transparent when used as a mask)
    mask.fill(255);     // White (visible when used as a mask)
    mask.circle(pi.width / 2, pi.height / 2, 100); // Draw the circle mask

    // Apply the mask to the content
    image.mask(mask);
    return image;
}

export function Round(image, p) {
    let base = p.createGraphics(p.width, p.height);
    base.image(image, 0, 0)
    base.fill(0,0,0);
    base.noStroke();
    base.circle(image.width / 2, image.height / 2, 100);
    image = base.get()
    base.remove()
    base = null;
    return image
}

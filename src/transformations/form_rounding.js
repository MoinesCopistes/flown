export function form_rounding(image,p){
    let pi = image;
    let mask = p.createGraphics(p.width, p.height);
   
    mask.clear(); // Black (transparent when used as a mask)
    mask.fill(255);     // White (visible when used as a mask)
    mask.circle(pi.width / 2, pi.height / 2, 50); // Draw the circle mask

    // Apply the mask to the content
    image.mask(mask);
    return image;
}

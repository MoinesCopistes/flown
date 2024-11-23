export function form_triangle(image,p){
    let pi = image;
    let mask = p.createGraphics(p.width, p.height);

    mask.clear(); // Black (transparent when used as a mask)
    mask.fill(255);     // White (visible when used as a mask)
    mask.triangle(300,200,400,200,350,100); // Draw the circle mask

    // Apply the mask to the content
    image.mask(mask);
    return image;
}

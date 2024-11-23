export function form_rounding(){
    let p = window.user_p5;
    let mask = p.createGraphics(p.width, p.height);
   
    mask.clear(); // Black (transparent when used as a mask)
    mask.fill(255);     // White (visible when used as a mask)
    mask.circle(p.width / 2, p.height / 2, 50); // Draw the circle mask

    // Apply the mask to the content
    window.user.mask(mask);
    return window.user;
}

export function line_cutter(image,p){
    let base = p.createGraphics(p.width, p.height);
    base.drawingContext.imageSmoothingEnabled = false;
    base.image(image, 0, 0)
    base.fill(255,255,255);
    base.noStroke();
    base.rect((base.width / 2) - 2.5 ,0,5,300);
    image = base.get()
    base.remove()
    base = null;
    return image
}

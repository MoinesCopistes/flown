export function rotate(image, p) {
  let base = p.createGraphics(p.width, p.height);
  base.drawingContext.imageSmoothingEnabled = false;
  base.translate(p.width / 2, p.height / 2);
  base.rotate(Math.PI/2)
  base.noSmooth();
  base.image(image, -p.width / 2, -p.height / 2, p.width, p.height);
  image = base.get()
  base.remove()
  base = null;
  image.filter(p.THRESHOLD, 0.5)
  return image
}

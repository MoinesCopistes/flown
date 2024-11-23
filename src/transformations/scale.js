export function scale(scale_factor, image) {
  let p = window.user_p5;

  let base = p.createGraphics(p.width, p.height);
  base.drawingContext.imageSmoothingEnabled = false;

  p.noSmooth();
  

  image.resize(scale_factor * image.width, 0);
  let xOffset = (p.width - image.width) / 2;
  let yOffset = (p.height - image.height) / 2;

  base.image(image, xOffset, yOffset);

  return base.get();
}


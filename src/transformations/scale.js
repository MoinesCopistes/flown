export function scale(scale_factor, image) {
  let p = window.user_p5;

  // Create a fresh canvas
  let base = p.createGraphics(p.width, p.height);

  // Resize the image to the desired scale factor
  image.resize(scale_factor * image.width, 0);

  // Center the image by calculating offsets
  let xOffset = (p.width - image.width) / 2;
  let yOffset = (p.height - image.height) / 2;

  // Draw the scaled image centered on the canvas
  base.image(image, xOffset, yOffset);

  return base.get();
}
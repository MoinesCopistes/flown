export function get_base(p) {
  let base = p.createGraphics(p.width, p.height)
  base.translate(p.width / 2, p.height / 2);
  base.background(255);
  base.drawingContext.imageSmoothingEnabled = false;
  return base;
}

export function comparaison(reference, user){
  reference.loadPixels();
  user.loadPixels();
  let r = reference.pixels;
  let u = user.pixels;
  let count = 0;
  for(let i = 0; i < r.length; i += 1){
      if (r[i] === u[i] && r[i + 1] === u[i + 1] && r[i + 2] === u[i + 2] && r[i + 3] === u[i + 3]) {

        count++;        
      }
  }

  return ((ret / (r.length / 4)) * 100) > 90;
}

export function logUniqueRGBA(image) {
image.loadPixels();
let uniqueColors = new Set();

for (let i = 0; i < image.pixels.length; i += 4) {
  let r = image.pixels[i];
  let g = image.pixels[i + 1];
  let b = image.pixels[i + 2];
  let a = image.pixels[i + 3];
  let rgba = `rgba(${r},${g},${b},${a})`;
  uniqueColors.add(rgba);
}

// Log the unique RGBA values to the console
console.log(Array.from(uniqueColors));
}

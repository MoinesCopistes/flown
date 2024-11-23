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
  let sum = 0;
  let count = 0;
  for(let i = 0; i < r.length; i += 4){
      // black pixel in ref
      if (r[i] === 0 && r[i+3] != 0) {
        count++;
        // that is also in user drawing
        if (u[i] === 0 && u[i+3] != 0) {
            sum++;
            continue;        
        }
      }

      // black pixel in user drawing not in ref
      if (u[i] === 0 && u[i+3] != 0) {
        count++;
      }
      
  }

  return sum/count;
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

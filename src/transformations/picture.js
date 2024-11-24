export function grayscale(image, p, b_levels, g_size) {
  p.noSmooth();
  let width0 = image.width;
  let height0 = image.height;
  let cols = image.width / g_size;
  let rows = image.height / g_size;
  image.resize(cols, rows);
  image.loadPixels();
  for (let y = 0; y < image.height; y++) {
    for (let x = 0; x < image.width; x++) {
      let index = (x + y * image.width) * 4;
      let r = image.pixels[index];
      let g = image.pixels[index + 1];
      let b = image.pixels[index + 2];
      let alpha = image.pixels[index + 3];
      let g_scale = (r + g + b) / 3;
      let level = p.round((g_scale / 255) * (b_levels - 1));
      let mappedGray = level * (255 / (b_levels - 1));
      image.pixels[index] = mappedGray;
      image.pixels[index + 1] = mappedGray;
      image.pixels[index + 2] = mappedGray;
      image.pixels[index + 3] = alpha;
    }
  }
  image.updatePixels();
  image.resize(width0, height0);
  return image;
}

export function drawAscii(img, p) {
  // const asciiChars = ["@", "%", "#", "*", "=", "-", ".", " "];
  const s = [4,2,1,3,0]
  const charWidth = 9;
  const charHeight = 9;
  // p.image(img, 0, 0);
  p.textFont("monospace", charHeight);
  p.textAlign(p.CENTER, p.CENTER);

  const cols = p.floor(img.width / charWidth);
  const rows = p.floor(img.height / charHeight);

  img.loadPixels();
  let brightnesses = []
  let minB = 255;
  let maxB = 0;
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      const x = j * charWidth;
      const y = i * charHeight;

      const pixelIndex = 4 * (y * img.width + x);

      const r = img.pixels[pixelIndex];
      const g = img.pixels[pixelIndex + 1];
      const b = img.pixels[pixelIndex + 2];
      const brightness = (r + g + b) / 3;
      brightnesses.push(brightness)
      if (brightness < minB) {
        minB = brightness
      }
      if (brightness > maxB) {
        maxB = brightness
      }
    }
  }

  p.shapesMap = {}
  for (let i = 0; i < s.length; i++) {
    p.shapesMap[i] = []
  }

  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      const x = j * charWidth;
      const y = i * charHeight;
      let brightness = brightnesses[i*cols + j] 
      const charIndex = p.floor(
        p.map(brightness, minB, maxB, 0, s.length - 1),
      );

      let xd = 0* p.width;

      let screenX = (x + charWidth / 2 ) + xd;
      let screenY = (y + charHeight / 2);
      p.shapesMap[s[charIndex]].push([screenX, screenY, 0, 0])
}  }
  for (let i = 0; i < s.length; i++) {
    p.shapesMap[i] = p.shuffle(p.shapesMap[i])
  }
}

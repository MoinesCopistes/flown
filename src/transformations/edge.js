export function edge(img, p) {
    let new_image = p.createImage(img.width, img.height);
    new_image.loadPixels();
    img.loadPixels();
  
    // Direct access to pixels array for img
    let imgPixels = img.pixels;
    let newPixels = new_image.pixels;
  
    // Iterate over all pixels (skip borders)
    for (let i = 1; i < img.width - 1; i++) {
        for (let j = 1; j < img.height - 1; j++) {
            let sum = 0;
            let count = 0;
  
            // Hardcoded 3x3 neighborhood (relative coordinates)
            for (let k = -1; k <= 1; k++) {
                for (let l = -1; l <= 1; l++) {
                    let x = (i + k) * 4 + (j + l) * img.width * 4; // calculate pixel index for img
                    let r = imgPixels[x];
                    let g = imgPixels[x + 1];
                    let b = imgPixels[x + 2];
                    let a = imgPixels[x + 3];
                    if (a == 0) {
                        sum += 255;
                        count ++;
                        continue;
                    }
                    
                    // Use grayscale value or 255 for transparency (could be adjusted as needed)
                    sum += (r + g + b) / 3;
                    count++;
                    
                }
            }
  
            // Avoid division by zero (if count is 0, skip)
            if (count > 0) {
                let average = sum / count;
                let index = (i + j * img.width) * 4;
  
                // If the average is less than 255, make the pixel black
                if (average > 0 && average < 255) {
                    newPixels[index] = 0;   // Red
                    newPixels[index + 1] = 0; // Green
                    newPixels[index + 2] = 0; // Blue
                    newPixels[index + 3] = 255; // Alpha
                }
            }
        }
    }
  
    // Apply new pixel data
    new_image.updatePixels();
    return new_image;
  }
  
export function scale(image, p) {
    // Create a graphics buffer with the same size as the image
    let base = p.createGraphics(p.width, p.height);

    // Get the dimensions of the original image
    let imgWidth = image.width;
    let imgHeight = image.height;

    // Compute the center of the original image
    let centerX = imgWidth / 2;
    let centerY = imgHeight / 2;

    // Load the pixel arrays
    base = base.get()
    image.loadPixels();
    base.loadPixels();

    // Loop through every pixel in the input image
    for (let x = 0; x < imgWidth; x++) {
        for (let y = 0; y < imgHeight; y++) {
            // Get the color of the current pixel in the image
            let r = image.pixels[(y * imgWidth + x) * 4];  // R value
            let g = image.pixels[(y * imgWidth + x) * 4+1];  // R value
            let b = image.pixels[(y * imgWidth + x) * 4+2];  // R value
            let a = image.pixels[(y * imgWidth + x) * 4+3];  // R value
            // Calculate the new coordinates in the base image
            // Scale the coordinates by 2 and adjust so the center remains the same
            let newX = (x - centerX) * 2 + base.width / 2;
            let newY = (y - centerY) * 2 + base.height / 2;

            // Set the 2x2 block in the base graphics
            // Ensure that the new coordinates stay within the bounds of the base image
            if (newX >= 0 && newX + 1 < base.width && newY >= 0 && newY + 1 < base.height) {
                for (let k = 0; k <= 1; k++) {
                    for (let j = 0; j <= 1; j++) {
                        let baseIndex = (Math.floor(newY+k) * base.width + Math.floor(newX+j)) * 4;
                        base.pixels[baseIndex] = r;
                        base.pixels[baseIndex + 1] = g;
                        base.pixels[baseIndex + 2] = b;
                        base.pixels[baseIndex + 3] = a;
                    }
                }
            }
        }
    }

    // Update the pixels in the base image
    base.updatePixels();

    return base;
}

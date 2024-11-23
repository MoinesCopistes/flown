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
            let c = image.pixels[(y * imgWidth + x) * 4];  // R value
            let c1 = image.pixels[(y * imgWidth + x) * 4 + 1];  // G value
            let c2 = image.pixels[(y * imgWidth + x) * 4 + 2];  // B value
            let c3 = image.pixels[(y * imgWidth + x) * 4 + 3];  // A value (alpha)

            // Calculate the new coordinates in the base image
            // Scale the coordinates by 2 and adjust so the center remains the same
            let newX = (x - centerX) * 2 + base.width / 2;
            let newY = (y - centerY) * 2 + base.height / 2;

            // Set the 2x2 block in the base graphics
            // Ensure that the new coordinates stay within the bounds of the base image
            if (newX >= 0 && newX + 1 < base.width && newY >= 0 && newY + 1 < base.height) {
                // Assign the color to a 2x2 block in the base image pixel array
                let baseIndex = (Math.floor(newY) * base.width + Math.floor(newX)) * 4;

                // Set the color at the calculated index (for the first pixel)
                base.pixels[baseIndex] = c;
                base.pixels[baseIndex + 1] = c1;
                base.pixels[baseIndex + 2] = c2;
                base.pixels[baseIndex + 3] = c3;

                // Set the color for the adjacent pixels in the 2x2 block
                let baseIndex2 = (Math.floor(newY) * base.width + Math.floor(newX + 1)) * 4;
                base.pixels[baseIndex2] = c;
                base.pixels[baseIndex2 + 1] = c1;
                base.pixels[baseIndex2 + 2] = c2;
                base.pixels[baseIndex2 + 3] = c3;

                let baseIndex3 = ((Math.floor(newY + 1)) * base.width + Math.floor(newX)) * 4;
                base.pixels[baseIndex3] = c;
                base.pixels[baseIndex3 + 1] = c1;
                base.pixels[baseIndex3 + 2] = c2;
                base.pixels[baseIndex3 + 3] = c3;

                let baseIndex4 = ((Math.floor(newY + 1)) * base.width + Math.floor(newX + 1)) * 4;
                base.pixels[baseIndex4] = c;
                base.pixels[baseIndex4 + 1] = c1;
                base.pixels[baseIndex4 + 2] = c2;
                base.pixels[baseIndex4 + 3] = c3;
            }
        }
    }

    // Update the pixels in the base image
    base.updatePixels();

    return base;
}

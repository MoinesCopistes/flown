import { blank } from "./basic";

export function merge(image1, image2, p) {
    let base = blank(p)
    base.loadPixels();
    image1.loadPixels();
    image2.loadPixels();
    let pi = image1.pixels;
    let pi2 = image2.pixels;
    let length = pi.length;
    for (let x = 0; x < length; x+=4) {
       if  ((pi[x]    == 0 && pi[x+3]  != 0) || 
            (pi2[x]   == 0 && pi2[x+3] != 0) || 
            (pi[x+1]  == 0 && pi[x+3]  != 0) || 
            (pi2[x+1] == 0 && pi2[x+3] != 0) || 
            (pi[x+2]  == 0 && pi[x+3]  != 0) || 
            (pi2[x+2] == 0 && pi2[x+3] != 0)) {
        base.pixels[x] = 0;
        base.pixels[x+1] = 0;
        base.pixels[x+2] = 0;
        base.pixels[x+3] = 255;
       }
    }
    base.updatePixels();
    return base;
}

export function inverse(image,p){
    image.loadPixels();
    let pi = image.pixels;

    for(let i = 0; i < pi.length; i += 4){

        if(pi[i] == 0 && pi[i+3] != 0){
            pi[i] = 255;
            pi[i + 1] = 255;
            pi[i + 2] = 255;
        } else {
            pi[i] = 0;
            pi[i + 1] = 0;
            pi[i + 2] = 0;
        }
        pi[i+3] = 255;

    }

    image.updatePixels();


    return image;
}
export function inverse(){
    window.user.loadPixels();
    let p = window.user.pixels;
   
    for(let i = 0; i < p.length; i += 4){
        if(p[i] === 0){
            p[i] = 255;
            p[i + 1] = 255;
            p[i + 2] = 255;
        } else {
            p[i] = 0;
            p[i + 1] = 0;
            p[i + 2] = 0;
        }
    }

    console.log(p);

    window.user.updatePixels();

    return window.user;
}

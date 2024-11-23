export function get_base(p) {
    let base = p.createGraphics(p.width, p.height)
    base.translate(p.width / 2, p.height / 2);
    base.background(255);
    return base;
}

export function Comparaison(reference, user){
    reference.loadPixels();
    user.loadPixels();
    let r = reference.pixels;
    let u = user.pixels;
    let ret = true;
    for(let i = 0; i < r.length; i += 1){
        if(r[i] != u[i]){
            ret = false;        
        }
    }
    return ret;
}

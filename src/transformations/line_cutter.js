export function line_cutter(){
    let p = window.user_p5;
    let base = p.createGraphics(p.width, p.height);
    base.fill(255,255,255);
    base.rect(347.5,0,5,300);
    return base.get();
}

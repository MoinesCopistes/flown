export function get_base(p) {
    let base = p.createGraphics(p.width, p.height)
    base.translate(p.width / 2, p.height / 2);
    base.background(255);
    return base;
}

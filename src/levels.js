import { get_base } from "./utils";

export function blank(p) {
    return get_base(p).get()
}

export function level1(p) {
    let base = get_base(p);
    base.fill(0);
    base.noSmooth();
    base.circle(0, 0, 50)
    return base.get()
}
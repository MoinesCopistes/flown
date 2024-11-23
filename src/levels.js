import { get_base } from "./utils";
import { basicTransform } from "./transformations/basic";
import { half_cutter } from "./transformations/half_cutter";
import { scale } from "./transformations/scale";
import { rotate } from "./transformations/rotation";
import { form_rounding } from "./transformations/form_rounding";
import { inverse } from "./transformations/inverse";
import { line_cutter } from "./transformations/line_cutter";

export function blank(p) {
    return get_base(p).get()
}

export function level1(p) {
    let image = blank(p);
    image = basicTransform(image,p);
    return image;
}

export function level2(p) {
    let image = blank(p);
    image = basicTransform(image,p);
    image = form_rounding(image,p);
    return image;
}

export function level3(p) {
    let image = blank(p);
    image = basicTransform(image,p);
    image = form_rounding(image,p);
    image = line_cutter(image,p);
    return image;
}

export function level4(p) {
    let image = blank(p);
    image = basicTransform(image,p);
    image = form_rounding(image,p);
    image = line_cutter(image,p);
    image = inverse(image,p);
    return image;
}

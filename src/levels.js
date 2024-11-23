import { get_base } from "./utils";
import { Rect } from "./transformations/basic";
import { half_cutter } from "./transformations/half_cutter";
import { scale } from "./transformations/scale2";
import { rotate } from "./transformations/rotation";
import { form_rounding, Round} from "./transformations/form_rounding";
import { form_triangle, Triangle } from "./transformations/form_triangle";
import { inverse } from "./transformations/inverse";
import { line_cutter } from "./transformations/line_cutter";
import { edge } from "./transformations/edge";
import { merge } from "./transformations/merge";

export const LEVELS = [level1, level2, level3, level4, level5]

export function blank(p) {
    return get_base(p).get()
}

export function level1(p) {
    let image = blank(p);
    image = Rect(image,p);
    image = rotate(image,p);
    image = Rect(image,p);
    return image;
}

export function level2(p) {
    let image = blank(p);
    image = Triangle(image,p);
    image = rotate(image,p);
    image = rotate(image,p);
    image = Triangle(image,p);
    return image;
}

export function level3(p) {
    let image = blank(p);
    image = Rect(image,p);
    image = half_cutter(image,p);
    image = Round(image,p);
    image = rotate(image,p);
    image = half_cutter(image,p);
    image = scale(image,p);
    image = Round(image,p);
    return image;
}

export function level4(p) {
    let image = blank(p);
    image = Rect(image,p);
    image = rotate(image,p);
    image = half_cutter(image,p);
    image = rotate(image,p);
    let image2 = blank(p);
    image2 = Rect(image2,p);
    image2 = edge(image2,p);
    image2 = half_cutter(image2,p);
    image2 = rotate(image2,p);
    return merge(image,image2,p);
}

export function level5(p) {
    let image1 = blank(p);
    image1 = Rect(image1,p);
    image1 = half_cutter(image1,p);

    let image2 = blank(p);
    image2 = Rect(image2,p);
    image2 = half_cutter(image2,p);
    image2 = edge(image2,p);
    image2 = rotate(image2,p);
    image2 = rotate(image2,p);

    let image3 = merge(image1,image2,p);
    let image4 = rotate(image3,p);
    image4 = rotate(image3,p);

    return merge(image3,image4,p);
}

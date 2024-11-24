import { Rect } from "./transformations/basic";
import { half_cutter } from "./transformations/half_cutter";
import { scale } from "./transformations/scale2";
import { rotate } from "./transformations/rotation";
import { Round} from "./transformations/form_rounding";
import { Triangle } from "./transformations/form_triangle";
import { edge } from "./transformations/edge";
import { merge } from "./transformations/merge";
import { blank } from "./transformations/basic";
import { addButton } from "./button"
export const LEVELS = [level1, level2, level3, level4, level5];
export const THRESHOLDS = [0.95, 0.95, 0.95, 1, 0.95];

export function level1(p,d) {
    if (d) {
        addButton("blank");
        addButton("rect");
        addButton("edge");
    }

    let image = blank(p);
    image = Rect(image, p);
    image = edge(image,p)
    return image;
}

export function level2(p,d) {
    if (d) {
        addButton("triangle");   
        addButton("rotate");   
    }

    let image = blank(p);
    image = Triangle(image,p);
    image = rotate(image,p);
    image = rotate(image,p);
    image = Triangle(image,p);
    return image;
}

export function level3(p,d) {

    if (d) {
        addButton("round");
        addButton("half_cutter");
        addButton("scale");
    }
   

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

export function level4(p,d) {

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

export function level5(p, d) {
    if (d) {
        addButton("switch");
        addButton("merge");
    }

    let image1 = blank(p);
    image1 = Rect(image1,p);
    image1 = edge(image1,p);

    let image2 = blank(p);
    image2 = Rect(image2,p);
    image2 = half_cutter(image2,p);
    let image3 = merge(image1,image2,p);
    let image4 = rotate(image3,p);
    image4 = merge(image3, image4, p);

    return image4
}

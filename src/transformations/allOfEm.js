import { blank, Rect } from "./basic";
import { edge } from "./edge";
import { form_rounding, Round } from "./form_rounding";
import { Triangle, form_triangle } from "./form_triangle";
import { half_cutter } from "./half_cutter";
import { inverse } from "./inverse";
import { line_cutter } from "./line_cutter";
import { merge } from "./merge";
import { rotate } from "./rotation";
import { scale } from "./scale2";

export const TRANSFORMATIONS = {
    "rect": Rect,
    "blank": blank,
    "edge": edge,
    "form_rounding": form_rounding,
    "round": Round,
    "triangle_rounding": form_triangle,
    "triangle": Triangle,
    "half_cutter": half_cutter,
    "inverse": inverse,
    "line_cutter": line_cutter,
    "merge": merge,
    "rotate": rotate, 
    "scale": scale
}
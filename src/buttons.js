import { Rect } from "./transformations/basic";
import { half_cutter } from "./transformations/half_cutter";
import { scale } from "./transformations/scale2";
import { rotate } from "./transformations/rotation";
import { form_rounding, Round} from "./transformations/form_rounding";
import { form_triangle, Triangle } from "./transformations/form_triangle";
import { inverse } from "./transformations/inverse";
import { line_cutter } from "./transformations/line_cutter";
import { edge } from "./transformations/edge";
import { blank } from "./transformations/basic";
import { merge } from "./transformations/merge";

export const BUTTONS = {
    rect: {
        color: "red",
        animation: `0% {
                            border-radius: 0%;
                         }
                     100% {
                             border-radius: 12px;
                          }`,
        callback: () => {
            window.user = Rect(window.user, window.user_p5)
        }
    },
    half_cutter: {
        color: "blue",
        animation: `
                        0% {
                            clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);
                        }
                        100% {
                            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
                        }
                        `,
        callback: () => {
            window.user = half_cutter(window.user, window.user_p5)
        }
    },
    blank: {
        color: "green",
        animation: `
                        0% {
                        background: transparent;
                        opacity: 0;
                    }
                    75% {
                        background: var(--color);
                        opacity: 0.5;
                    }
                    100% {
                        background: var(--color);
                        opacity: 1;
                    }
                    `,
        callback: () => {
            window.user = blank(window.user_p5)
        }
    },
    scale: {
        color: "gray",
        animation: `
                        0% {
                        transform: scale(0.5);
                    }
                    100% {
                        transform: scale(1);
                    }
                    `,
        callback: () => {
            window.user = scale(window.user, window.user_p5)
        }
    },
    rotate: {
        color: "yellow",
        animation: `
                        0% {
                        transform: rotate(90deg);
                        opacity: 0;
                    }
                    100% {
                        transform: rotate(0deg);
                        opacity: 1;
                    }
                    `,
        callback: () => {
            window.user = rotate(window.user, window.user_p5)
        }
    },
    edge: {
        color: "brown",
        animation: `
                        0% {
                          background-color: transparent;
                          box-shadow: 0 0 0 2px var(--color) inset;
                        }
                        100% {
                          background-color: var(--color);
                          box-shadow: none;
                        }
                        `,
        callback: () => {
            window.user = edge(window.user, window.user_p5)
        }
    },
    round: {
        color: "orange",
        animation: `
                        0% {
                          border-radius: 100%;
                        }
                        100% {
                          border-radius: 10px;
                        }
                        `,
        callback: () => {
            window.user = Round(window.user, window.user_p5)
        }
    },
    triangle: {
        color: "pink",
        animation: `
                        0% {
                          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
                        }
                        5% {
                          clip-path: polygon(45% 0%, 0% 100%, 100% 100%, 55% 0%);
                        }

                        100% {
                          clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%);
                        }
                        `,
        callback: () => {
            window.user = Triangle(window.user, window.user_p5)
        }
    },
    switch: {
        color: "purple",
        animation: null,
        callback: () => {
            window.game.switchCanvas();
        }
    },
    merge: {
        color : "lime",
        animation: null,
        callback: () => {
            window.user = merge(window.user, window.user2, window.user_p5);
        }
    }
}


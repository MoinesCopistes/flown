import { Rect } from "./transformations/basic";
import { half_cutter } from "./transformations/half_cutter";
import { scale } from "./transformations/scale2";
import { rotate } from "./transformations/rotation";
import { Round} from "./transformations/form_rounding";
import { Triangle } from "./transformations/form_triangle";
import { edge } from "./transformations/edge";
import { blank } from "./transformations/basic";
import { merge } from "./transformations/merge";

export const BUTTONS = {
    rect: {
        color: "#e74c3c",
        animation: `0% {
                        border-radius: 12px;
                         }
                     100% {                            
                        border-radius: 0%;
                        }`,
        callback: () => {
            window.user = Rect(window.user, window.user_p5)
        }
    },
    half_cutter: {
        color: "#2980b9",
        animation: `
                        0% {
                            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
                            
                        }
                        100% {
                            clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);
                        }
                        `,
        callback: () => {
            window.user = half_cutter(window.user, window.user_p5)
        }
    },
    blank: {
        color: "#27ae60",
        animation: `
                    0% {
                        background: var(--color);
                        opacity: 1;

                    }
                    25% {
                        background: var(--color);
                        opacity: 0.5;
                    }
                    100% {
                        background: transparent;
                        opacity: 0;
                    }
                    `,
        callback: () => {
            window.user = blank(window.user_p5)
        }
    },
    scale: {
        color: "#7f8c8d",
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
        color: "#f1c40f",
        animation: `
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(90deg);
                    }
                    `,
        callback: () => {
            window.user = rotate(window.user, window.user_p5)
        }
    },
    edge: {
        color: "#c0392b",
        animation: `
                        0% {
                          background-color: var(--color);
                          box-shadow: none;
                        }
                        100% {
                          background-color: transparent;
                          box-shadow: 0 0 0 2px var(--color) inset;

                        }
                        `,
        callback: () => {
            window.user = edge(window.user, window.user_p5)
        }
    },
    round: {
        color: "#e67e22",
        animation: `
                        0% {
                            border-radius: 10px;
                          
                        }
                        100% {
                            border-radius: 100%;
                        }
                        `,
        callback: () => {
            window.user = Round(window.user, window.user_p5)
        }
    },
    triangle: {
        color: "#9b59b6",
        animation: `
                        0% {
                            clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%);

                        }
                        99% {
                          clip-path: polygon(49% 0%, 0% 100%, 100% 100%, 51% 0%);
                        }

                        100% {
                           clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
                        }
                        `,
        callback: () => {
            window.user = Triangle(window.user, window.user_p5)
        }
    },
    switch: {
        color: "#8e44ad",
        animation:  `
                0% {
                    background-color: #8e44ad
                }
                100% {
                    background-color: #71bb52
                }
        `,
        callback: () => {
            window.game.switchCanvas();
        }
    },
    merge: {
        color : "#2ecc71",
        animation: `
        0% {
        background: linear-gradient(to right, #71bb52 50%, #8e44ad 50%);
        }
        50% {
        background: linear-gradient(to right, #71bb52 50%, #8e44ad 50%);
        }
        100% {
        background: linear-gradient(to right, #71bb52 50%, #8e44ad 50%);
        }`,
        callback: () => {
            window.user = merge(window.user, window.user2, window.user_p5);
        }
    }
}


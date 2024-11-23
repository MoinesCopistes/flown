import { addButton } from "./button";
import { blank, level1, level2 } from "./levels";
import { Rect } from "./transformations/basic";
import { half_cutter } from "./transformations/half_cutter";
import { scale } from "./transformations/scale2";
import { rotate } from "./transformations/rotation";
import { form_rounding, Round} from "./transformations/form_rounding";
import { form_triangle, Triangle } from "./transformations/form_triangle";
import { inverse } from "./transformations/inverse";
import { line_cutter } from "./transformations/line_cutter";

import { edge } from "./transformations/edge";
import { logUniqueRGBA } from "./utils";
import { merge } from "./transformations/merge";

import { drawAscii, grayscale } from "./transformations/picture";  

class Game {
  switchCanvas() {
          let tmp = window.user;
          window.user = window.user2;
          window.user2 = tmp; 
  }
  setLevel(level) {
    window.level = level;
    window.user_p5.loadLevel();
    window.reference_p5.loadLevel();
  }
  canvasHandle(globalImageName) {
    return (p) => {
      window[globalImageName + "_p5"] = p;
      p.loadLevel = function () {
        p.background(255);
        window[globalImageName] =
          globalImageName == "reference" ? window.level(p) : blank(p);
        p.redraw();
      };
      p.setup = function () {
        p.pixelDensity(10);
        p.createCanvas(700, 300);
        p.background(255);
        // avoid looping at 60fps
        p.noLoop();
        window.user2 = blank(p);
        p.loadLevel();
        p.drawingContext.imageSmoothingEnabled = false;
      };
      p.draw = function () {
        p.background(255);
        let image = window[globalImageName];
        if (image) {
          p.image(image, 0, 0);
        }
        if (globalImageName == "user") {
        let image = window.user2;
        if (image) {  
          p.stroke(255, 0, 0);  // Set the stroke color (red in this case)
          p.strokeWeight(4);  // Set stroke weight (thickness)
          
          // Draw a rectangle around the image
          p.rect(15, 15, p.width/4, p.height/4);  
          p.image(image, 15, 15, p.width/4, p.height/4)
        }

      }
      };
    };
  }

  constructor() {
    this.canvas_container = document.getElementById("canvases");
    this.buttonsContainer = document.getElementById("buttons");
    this.pictureContainer = document.getElementById("picture");
    this.pictureCreated = false; // Flag to check if the new canvas has been created
    this.isSwapped = false; // Flag to track the current canvas state
    window.level = level1;

    // This is how to add a new button
    addButton(this.buttonsContainer, "red", () => {
      window.user = Rect(window.user, window.user_p5)
    },`
    0% {
      border-radius: 0%;
    }
    100% {
      border-radius: 12px;
    }
    `)
    addButton(this.buttonsContainer, "blue", () => {
      window.user = half_cutter(window.user, window.user_p5)
    }, `
    0% {
        clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);
    }
    100% {
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }
    `)
    addButton(this.buttonsContainer, "green", () => {
        window.user = blank(window.user_p5)
    },`
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
    `)
    addButton(this.buttonsContainer, "gray", () => {
      window.user = scale(window.user, window.user_p5)
    },`
        0% {
        transform: scale(0.5);
    }
    100% {
        transform: scale(1);
    }
    `)        
    addButton(this.buttonsContainer, "yellow", () => {
      window.user = rotate(window.user, window.user_p5)
    },`
        0% {
        transform: rotate(90deg);
        opacity: 0;
    }
    100% {
        transform: rotate(0deg);
        opacity: 1;
    }
    `)

    addButton(this.buttonsContainer, "brown", () => {
      window.user = edge(window.user, window.user_p5)
    },`
    0% {
      background-color: transparent;
      box-shadow: 0 0 0 2px var(--color) inset;
    }
    100% {
      background-color: var(--color);
      box-shadow: none;
    }
    `)

    addButton(this.buttonsContainer, "purple", () => {
      window.user = inverse(window.user, window.user_p5)
    }, `
    0% {
      background-color: #3498db;
    }
    100% {
      background-color: #9b59b6;
    }
    `)
    addButton(this.buttonsContainer, "orange", () => {
      window.user = form_rounding(window.user, window.user_p5)
    },`
    0% {
      border-radius: 100%;
    }
    100% {
      border-radius: 10px;
    }
    `)
    addButton(this.buttonsContainer, "pink", () => {
      window.user = form_triangle(window.user, window.user_p5)
    },`
    0% {
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }
    5% {
      clip-path: polygon(45% 0%, 0% 100%, 100% 100%, 55% 0%);
    }

    100% {
      clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%);
    }
    `)
    addButton(this.buttonsContainer, "#474787", () => {
      window.user = line_cutter(window.user, window.user_p5)
    },`
    0% {
      background: linear-gradient(to right, transparent 0%, transparent 48%, var(--color) 50%, transparent 52%, transparent 100%);
    }
    100% {
      background: var(--color);
    }
    `)
    addButton(this.buttonsContainer, "#34e8eb", () => {
      this.toggleCanvasSwap();
    });
    addButton(this.buttonsContainer, "black", () => {
      this.setLevel(level2)
    })
    addButton(this.buttonsContainer, "#81ecec", () => {
                  this.switchCanvas();
                  window.user = blank(window.user_p5);
                  window.user = merge(window.user, window.user2, window.user_p5);
    })
    addButton(this.buttonsContainer, "blue", () => {
      this.switchCanvas()
    })
    addButton(this.buttonsContainer, "red", () => {
      window.user = merge(window.user, window.user2, window.user_p5);
})
    console.log(this.reference_canvas)
    new p5(this.canvasHandle("reference"), this.canvas_container);
    new p5(this.canvasHandle("user"), this.canvas_container);
  }

  toggleCanvasSwap() {
      if (this.isSwapped) {
          // Currently showing the new canvas, switch back to initial canvases
          this.pictureContainer.style.display = "none";
          this.buttonsContainer.style.display = "flex";
          this.canvas_container.style.display = "flex"; // Restore the display style
          this.isSwapped = false;
      } else {
          // Currently showing initial canvases, switch to new canvas
          this.canvas_container.style.display = "none";
          this.buttonsContainer.style.display = "none";
          this.pictureContainer.style.display = "block";
          // Create the p5 instance if not already created
          if (!this.newCanvasCreated) {
              new p5(this.newCanvasSketch.bind(this), this.pictureContainer);
              this.newCanvasCreated = true;
          }
          this.isSwapped = true;
      }
  }

  newCanvasSketch(p) {
    let img;
    p.setup = () => {
      p.drawingContext.imageSmoothingEnabled = false;
      p.createCanvas(1400, 850);
      img = p.loadImage("https://i1.sndcdn.com/artworks-x8zI2HVC2pnkK7F5-4xKLyA-t1080x1080.jpg", () => {
        let grayscale_pic = grayscale(img, p, 9, 4);
        drawAscii(grayscale_pic, p)
        // p.image(grayscale_pic, p.width/2 - img.width/2, 0, img.width, img.height);
      });
    };
  }
}

window.Game = Game;

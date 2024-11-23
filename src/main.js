import { addButton } from "./button";
import { blank, level1, level2 } from "./levels";
import { Rect } from "./transformations/basic";
import { half_cutter } from "./transformations/half_cutter";
import { scale } from "./transformations/scale2";
import { rotate } from "./transformations/rotation";
import { form_rounding } from "./transformations/form_rounding";
import { inverse } from "./transformations/inverse";
import { line_cutter } from "./transformations/line_cutter";

import { edge } from "./transformations/edge";
import { logUniqueRGBA } from "./utils";
class Game {
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
        p.loadLevel();
      };
      p.draw = function () {
        p.background(255);
        let image = window[globalImageName];
        if (image) {
          p.image(image, 0, 0);
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
      window.user = Rect(window.user, window.user_p5);
    });
    addButton(this.buttonsContainer, "blue", () => {
      window.user = half_cutter(window.user, window.user_p5);
    });
    addButton(this.buttonsContainer, "green", () => {
      window.user = blank(window.user_p5);
    });
    addButton(this.buttonsContainer, "gray", () => {
      window.user = scale(window.user, window.user_p5);
    });
    addButton(this.buttonsContainer, "yellow", () => {
      window.user = rotate(window.user, window.user_p5);
    });
    addButton(this.buttonsContainer, "black", () => {
      this.setLevel(level2);
    });
    addButton(this.buttonsContainer, "brown", () => {
      window.user = edge(window.user, window.user_p5);
    });
    addButton(this.buttonsContainer, "purple", () => {
      window.user = inverse(window.user, window.user_p5);
    });
    addButton(this.buttonsContainer, "orange", () => {
      window.user = form_rounding(window.user, window.user_p5);
    });
    // Add the new button below existing buttons
    addButton(this.buttonsContainer, "pink", () => {
      this.toggleCanvasSwap();
    });

    console.log(this.reference_canvas);
    new p5(this.canvasHandle("reference"), this.canvas_container);
    new p5(this.canvasHandle("user"), this.canvas_container);
  }
  
  toggleCanvasSwap() {
      if (this.isSwapped) {
          // Currently showing the new canvas, switch back to initial canvases
          this.pictureContainer.style.display = "none";
          this.canvas_container.style.display = "flex"; // Restore the display style
          this.isSwapped = false;
      } else {
          // Currently showing initial canvases, switch to new canvas
          this.canvas_container.style.display = "none";
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
      p.createCanvas(700, 500);
      img = p.loadImage("https://cdn.webshopapp.com/shops/276355/files/453554637/golden-retriever.jpg", () => {
        p.image(img, p.width/2 - img.width/2, 0, img.width, img.height);
      });
    };
  }
}

window.Game = Game;

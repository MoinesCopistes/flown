import { addButton } from "./button";
import { level1, level2 } from "./levels";
import { blank } from "./transformations/basic";
import { logUniqueRGBA } from "./utils";

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
import { blank } from "./transformations/basic";
import { addButton } from "./button"

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
    this.pictureContainer = document.getElementById("picture");
    this.pictureCreated = false; // Flag to check if the new canvas has been created
    this.isSwapped = false; // Flag to track the current canvas state
    window.level = level1;

  

    window.game = this;
    
    console.log(this.reference_canvas)
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
      p.drawingContext.imageSmoothingEnabled = false;
      p.createCanvas(700, 500);
      img = p.loadImage("https://cdn.webshopapp.com/shops/276355/files/453554637/golden-retriever.jpg", () => {
        let grayscale_pic = grayscale(img, p, 9, 4);
        drawAscii(grayscale_pic, p)
        // p.image(grayscale_pic, p.width/2 - img.width/2, 0, img.width, img.height);
      });
    };
  }
}

window.Game = Game;

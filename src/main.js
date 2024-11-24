import {  LEVELS } from "./levels";
import { blank } from "./transformations/basic";

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
          globalImageName == "reference" ? LEVELS[window.level](p, true) : blank(p);
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
        if (image && window.level > 2) {  
 
          p.image(image, 15, 15, p.width/4, p.height/4)
          p.stroke("#8e44ad");  // Set the stroke color (purple in this case)
          p.strokeWeight(4);  // Set stroke weight (thickness)
          p.noFill();
          
          // Draw a rectangle around the image
          p.rect(15, 15, p.width/4, p.height/4);  
        }

      }
      };
    };
  }

  constructor() {
    this.canvas_container = document.getElementById("canvases");
    this.pictureContainer = document.getElementById("picture");
    this.buttonsContainer = document.getElementById("buttons");
    this.bar = document.getElementById("bar");
    this.pictureCreated = false; // Flag to check if the new canvas has been created
    this.isSwapped = false; // Flag to track the current canvas state
    window.level = 0;
    window.game = this;
    console.log(this.reference_canvas)
    new p5(this.canvasHandle("reference"), this.canvas_container);
    new p5(this.canvasHandle("user"), this.canvas_container);
    new p5(this.newCanvasSketch, this.pictureContainer);

    

  }

  toggleCanvasSwap() {
      if (this.isSwapped) {
          window.sketch_p5.noLoop();
          // Currently showing the new canvas, switch back to initial canvases
          this.pictureContainer.style.display = "none";
          document.getElementById("container").style.display = "block";
          this.buttonsContainer.style.display = "flex";
          this.canvas_container.style.display = "flex"; // Restore the display style
          this.isSwapped = false;
      } else {
          window.sketch_p5.current_shape = window.reference;
          window.sketch_p5.start = window.sketch_p5.millis()
          window.sketch_p5.loop();
          this.canvas_container.style.display = "none";
          this.buttonsContainer.style.display = "none";
          this.pictureContainer.style.display = "block";
          document.getElementById("container").style.display = "none";
          // Create the p5 instance if not already created
          if (!this.newCanvasCreated) {
              this.newCanvasCreated = true;
          }
          this.isSwapped = true;
      }
  }

  newCanvasSketch(p) {
    let img;
    window.sketch_p5 = p;
    p.setup = () => {
      p.drawingContext.imageSmoothingEnabled = false;
      p.canvas = p.createCanvas(1400, 850);
      p.buffer = p.createGraphics(1400, 850);
      img = p.loadImage("https://i1.sndcdn.com/artworks-x8zI2HVC2pnkK7F5-4xKLyA-t1080x1080.jpg", () => {
        let grayscale_pic = grayscale(img, p, 9, 4);
        drawAscii(grayscale_pic, p)
        // p.image(grayscale_pic, p.width/2 - img.width/2, 0, img.width, img.height);
      });
      p.noLoop()
    };
    p.draw  = () => {

      let animTime = 6;

      if (p.shapesMap == undefined) {
        return;
      }
      p.background(255);
      p.image(p.buffer, 0, 0);
      let time = (p.millis() - p.start)/1000;
      for (let i = 0; i < p.shapesMap[window.level].length; i++) {
        let item = p.shapesMap[window.level][i];
        let destX = item[0];
        let destY = item[1];
        let ct = time - i/1000;

        if (ct < 0) {
          continue;
        }
        let x = p.lerp(item[2], destX, Math.min(ct/animTime, 1));
        let y = p.lerp(item[3], destY, Math.min(ct/animTime, 1));
        p.image(p.current_shape, x, y, 9, 9);
      }
      let maxI = p.shapesMap[window.level].length;
      if ((time-maxI/1000-animTime - 0.5) > 0) {
        p.buffer.copy(p.canvas, 0, 0, p.canvas.width, p.canvas.height, 0, 0, p.buffer.width, p.buffer.height);
        p.noLoop()
        let button = p.createButton("");
      // Create an SVG image for the button
        const svgImg = p.createImg(
          "https://i1.sndcdn.com/artworks-x8zI2HVC2pnkK7F5-4xKLyA-t1080x1080.jpg"
        );
        svgImg.size(50, 50); // Set the size of the SVG
        svgImg.parent(button); // Attach the SVG to the button
        button.position(window.width + 200, 10); // Position the button
        button.mousePressed(() => {
          button.remove();
          window.game.setLevel(window.level+1)
          window.game.bar.style.height = `0%`;
          window.game.toggleCanvasSwap()
        }); // Attach an event to the button
      }
    }
  }
}

window.Game = Game;

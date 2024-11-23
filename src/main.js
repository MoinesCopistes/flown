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
          globalImageName == "reference" ? LEVELS[window.level](p) : blank(p);
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
 
          p.image(image, 15, 15, p.width/4, p.height/4)
          p.stroke("#8e44ad");  // Set the stroke color (red in this case)
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
    this.pictureCreated = false; // Flag to check if the new canvas has been created
    this.isSwapped = false; // Flag to track the current canvas state
    window.level = 0;
    window.game = this;
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
      // Create a button using p5.js
      let button = p.createButton("");
      // Create an SVG image for the button
      const svgImg = p.createImg(
        "https://i1.sndcdn.com/artworks-x8zI2HVC2pnkK7F5-4xKLyA-t1080x1080.jpg"
      );
      svgImg.size(50, 50); // Set the size of the SVG
      svgImg.parent(button); // Attach the SVG to the button
      button.position(window.width + 200, 10); // Position the button
      button.mousePressed(() => {
        this.setLevel(window.level+1)
        this.toggleCanvasSwap()
      }); // Attach an event to the button
      img = p.loadImage("https://i1.sndcdn.com/artworks-x8zI2HVC2pnkK7F5-4xKLyA-t1080x1080.jpg", () => {
        let grayscale_pic = grayscale(img, p, 9, 4);
        drawAscii(grayscale_pic, p)
        // p.image(grayscale_pic, p.width/2 - img.width/2, 0, img.width, img.height);
      });
    };
  }
}

window.Game = Game;

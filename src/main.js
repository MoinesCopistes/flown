import {  LEVELS, parseReference } from "./levels";
import { blank } from "./transformations/basic";

import { drawAscii, grayscale } from "./transformations/picture";  

import { close_sound } from "./sound_effects";

class Game {
  switchCanvas() {
          let tmp = window.user;
          window.user = window.user2;
          window.user2 = tmp; 
          window.switched = !window.switched;
  }
  setLevel(level) {
    window.level = level;
    window.user_p5.loadLevel();
    window.reference_p5.loadLevel();
    window.user2 = blank(window.user_p5);
  }
  canvasHandle(globalImageName) {
    return (p) => {
      window[globalImageName + "_p5"] = p;
      p.loadLevel = function () {
        p.background(255);
        if (window.game.challengeMode) {
          window[globalImageName] =
            globalImageName == "reference" ? parseReference(window.sea.get("reference"), p) : blank(p);
        } else {
          window[globalImageName] =
          globalImageName == "reference" ? LEVELS[window.level](p, true) : blank(p);

        }
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
        if (image && (window.level > 3 || window.game.challengeMode)) {  
 
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
    window.sea = new URLSearchParams(document.location.href.split("/").pop());
    if (window.sea.has("reference")) {
      this.challengeMode = true;
    } else {
      this.challengeMode = false;
    }
    window.switched = false;
    this.canvas_container = document.getElementById("canvases");
    this.pictureContainer = document.getElementById("picture");
    this.buttonsContainer = document.getElementById("buttons");
    this.bar = document.getElementById("bar");
    this.pictureCreated = false; // Flag to check if the new canvas has been created
    this.isSwapped = false; // Flag to track the current canvas state
    window.level = 0;
    window.user_ops = [[], []]
    document.getElementById("share").addEventListener("click", () => {
      let ref = btoa(JSON.stringify(window.user_ops))
      console.log(`${document.location.host}/?reference=${ref}`)
    })
    window.game = this;
    console.log(this.reference_canvas)
    new p5(this.canvasHandle("reference"), this.canvas_container);
    new p5(this.canvasHandle("user"), this.canvas_container);
    new p5(this.newCanvasSketch, this.pictureContainer);

    window.fireworks = new Fireworks.Fireworks(document.getElementById("fireworks"), {
      autoresize: false,
      opacity: 0.5,
      acceleration: 1.05,
      friction: 0.97,
      gravity: 1.5,
      particles: 50,
      traceLength: 3,
      traceSpeed: 10,
      explosion: 5,
      intensity: 50,
      flickering: 50,
      lineStyle: 'round',
      hue: {
        min: 0,
        max: 360
      },
      delay: {
        min: 30,
        max: 60
      },
      rocketsPoint: {
        min: 50,
        max: 50
      },
      lineWidth: {
        explosion: {
          min: 1,
          max: 4
        },
        trace: {
          min: 0.1,
          max: 1
        }
      },
      brightness: {
        min: 50,
        max: 80
      },
      decay: {
        min: 0.015,
        max: 0.03
      },
      mouse: {
        click: false,
        move: false,
        max: 1
      }
    })
    fireworks.updateSize({
      width: window.innerWidth,
      height: window.innerHeight
    })

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
      img = p.loadImage("https://i.guim.co.uk/img/media/dd3882c4ad0fd11a14cffc7e5edaabe5ce8a8b53/0_85_1077_646/master/1077.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=ed76b3cad05b6af61ecb4a059c3294ab", (img) => {
        img.resize(img.width/img.height*p.height, p.height);
        let grayscale_pic = grayscale(img, p, 9, 4);
        p.img = grayscale_pic;
        drawAscii(grayscale_pic, p)
        // p.image(grayscale_pic, p.width/2 - img.width/2, 0, img.width, img.height);
      });
      p.noLoop()
    };
    p.keyPressed = (a) => {
      if (a.keyCode == p.ENTER) {
        let maxI = p.shapesMap[window.level].length;
        p.start = p.millis() - 1000*maxI;
      }
   
     
    }
    p.draw  = () => {

      let reductionTime = 1;
      let animTime = 3;
      let time = (p.millis() - p.start)/1000;

      if (p.shapesMap == undefined) {
        return;
      }
      p.background(255);
      // show image for debug purposes
      //p.image(img, p.width/2-img.width/2, 0);
      p.image(p.buffer, 0, 0);
      
      if (time < reductionTime) {
        let ratio = p.lerp(1, 0, time/reductionTime);
        p.image(p.current_shape, p.width/2-p.current_shape.width*ratio/2, p.height/2-p.current_shape.height*ratio/2, p.current_shape.width*ratio, p.current_shape.height*ratio)
        return;
      } 
      time -= reductionTime;

    


      for (let i = 0; i < p.shapesMap[window.level].length; i++) {
        let item = p.shapesMap[window.level][i];
        let destX = item[0] + p.width/2-img.width/2;
        let destY = item[1];

        let currX = item[2] + p.width/2;
        let currY = item[3] + p.height/2;

        let ct = time - i/1000;

        if (ct < 0) {
          continue;
        }
        let x = p.lerp(currX, destX, Math.min(ct/animTime, 1));
        let y = p.lerp(currY, destY, Math.min(ct/animTime, 1));
        p.image(p.current_shape, x, y, 9, 9);
      }
      let maxI = p.shapesMap[window.level].length;
      if ((time-maxI/1000-animTime - 0.2) > 0) {
        p.buffer.copy(p.canvas, 0, 0, p.canvas.width, p.canvas.height, 0, 0, p.buffer.width, p.buffer.height);
        if (window.level == LEVELS.length-4) {
            //p.background(255)
            //p.image(window.final_img, p.width/2-img.width/2, 0);
            window.fireworks.start()
            setTimeout(() => {
                window.fireworks.stop()
            }, 10000)
        }
        p.noLoop()
        let button = p.createButton("");
        button.id("close")
      // Create an SVG image for the button
        const svgImg = p.createImg(
          "https://www.svgrepo.com/show/442475/close-circle.svg"
        );
        svgImg.size(50, 50); // Set the size of the SVG
        svgImg.parent(button); // Attach the SVG to the button
        button.position(window.width + 200, 10); // Position the button
        button.mousePressed(() => {

          close_sound.pause();
          close_sound.currentTime = 0;
          close_sound.play();

          button.remove();
          window.game.setLevel(window.level+1)
          window.game.bar.style.height = `0%`;
          window.game.toggleCanvasSwap()
        }); // Attach an event to the button
      }
    }
  }
}


document.addEventListener("DOMContentLoaded", () => {
  window.game = new Game()
})
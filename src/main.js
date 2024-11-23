import { addButton } from "./button"
import { blank, level1, level2, level3, level4 } from "./levels";
import { basicTransform } from "./transformations/basic";
import { half_cutter } from "./transformations/half_cutter";
import { scale } from "./transformations/scale";
import { rotate } from "./transformations/rotation";
import { form_rounding } from "./transformations/form_rounding";
import { inverse } from "./transformations/inverse";
import { line_cutter } from "./transformations/line_cutter";
class Game {
    
    setLevel(level) {
      window.level = level;
      window.user_p5.loadLevel();
      window.reference_p5.loadLevel();
    }
    canvasHandle(globalImageName) {
        return (p) => {
            window[globalImageName+"_p5"] = p
            p.loadLevel = function () {
              p.background(255);
              window[globalImageName] = globalImageName == "reference" ? window.level(p) : blank(p)
              p.redraw()
            }
            p.setup = function () {
                p.pixelDensity(10);
                p.createCanvas(700, 300);
                p.background(255);
                // avoid looping at 60fps
                p.noLoop()
                p.loadLevel()
              };
              p.draw = function () {
                p.background(255);
                let image = window[globalImageName]
                if (image) {  
                  p.image(image, 0, 0)
                }
              };            
        }
    }

    constructor() {
        this.canvas_container = document.getElementById("canvases")
        this.buttonsContainer = document.getElementById("buttons")

        window.level = level1

        // This is how to add a new button
        addButton(this.buttonsContainer, "red", () => {
          window.user = basicTransform(window.user, window.user_p5)
        })
        addButton(this.buttonsContainer, "blue", () => {
          window.user = form_rounding(window.user, window.user_p5)
        })
        addButton(this.buttonsContainer, "green", () => {
            window.user = blank(window.user_p5)
        })
        addButton(this.buttonsContainer, "gray", () => {
          window.user = scale(2)
        })        
        addButton(this.buttonsContainer, "yellow", () => {
          window.user = rotate(0.785)
        })

        addButton(this.buttonsContainer, "black", () => {
          this.setLevel(level4)
        })

        addButton(this.buttonsContainer, "orange", () => {
          window.user = inverse(window.user, window.user_p5);
        })
        
        
        console.log(this.reference_canvas)
        new p5(this.canvasHandle("reference"), this.canvas_container);
        new p5(this.canvasHandle("user"), this.canvas_container);

    }
}

window.Game = Game

import { addButton } from "./button"
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
          window.user = Rect(window.user, window.user_p5)
        })
        addButton(this.buttonsContainer, "blue", () => {
          window.user = half_cutter(window.user, window.user_p5)
        })
        addButton(this.buttonsContainer, "green", () => {
            window.user = blank(window.user_p5)
        })
        addButton(this.buttonsContainer, "gray", () => {
          window.user = scale(window.user, window.user_p5)
        })        
        addButton(this.buttonsContainer, "yellow", () => {
          window.user = rotate(window.user, window.user_p5)
        })
        addButton(this.buttonsContainer, "black", () => {
          this.setLevel(level2)
        })
        addButton(this.buttonsContainer, "brown", () => {
          window.user = edge(window.user, window.user_p5)
        })
        
        addButton(this.buttonsContainer, "purple", () => {
          window.user = inverse(window.user, window.user_p5)
        })
        addButton(this.buttonsContainer, "orange", () => {
          window.user = form_rounding(window.user, window.user_p5)
        })
        addButton(this.buttonsContainer, "pink", () => {
          window.user = form_triangle(window.user, window.user_p5)
        })
        addButton(this.buttonsContainer, "#2ecc71", () => {
          window.user = Triangle(window.user, window.user_p5)
        })
        addButton(this.buttonsContainer, "#2c3e50", () => {
          window.user = Round(window.user, window.user_p5)
        })
        addButton(this.buttonsContainer, "#474787", () => {
          window.user = line_cutter(window.user, window.user_p5)
        })
        console.log(this.reference_canvas)
        new p5(this.canvasHandle("reference"), this.canvas_container);
        new p5(this.canvasHandle("user"), this.canvas_container);

    }
}

window.Game = Game

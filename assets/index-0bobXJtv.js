var R=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports);var ie=R((oe,C)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}})();function j(i){let t=i.createGraphics(i.width,i.height);return t.translate(i.width/2,i.height/2),t.background(255),t.drawingContext.imageSmoothingEnabled=!1,t}function F(i,t){i.loadPixels(),t.loadPixels();let e=i.pixels,n=t.pixels,o=0,s=0;for(let l=0;l<e.length;l+=4){if(e[l]===0&&e[l+3]!=0&&(s++,n[l]===0&&n[l+3]!=0)){o++;continue}n[l]===0&&n[l+3]!=0&&s++}return o/s}function b(i,t){let e=t.createGraphics(t.width,t.height);return e.drawingContext.imageSmoothingEnabled=!1,e.image(i,0,0),e.fill(0,0,0),e.noStroke(),e.noSmooth(),e.rect(e.width/3,e.height/3,e.width/3,e.height/3),i=e.get(),e.remove(),e=null,i}function u(i){return j(i).get()}function E(i,t){let e=t.createGraphics(t.width,t.height);return e.drawingContext.imageSmoothingEnabled=!1,e.image(i,0,0),e.fill(255),e.noStroke(),e.noSmooth(),e.rect(0,0,e.width/2,e.height),i=e.get(),e.remove(),e=null,i}function A(i,t){let e=t.createGraphics(t.width,t.height);e.drawingContext.imageSmoothingEnabled=!1;let n=i.width,o=i.height,s=n/2,l=o/2;e=e.get(),i.loadPixels(),e.loadPixels();for(let r=0;r<n;r++)for(let h=0;h<o;h++){let d=i.pixels[(h*n+r)*4],a=i.pixels[(h*n+r)*4+1],c=i.pixels[(h*n+r)*4+2],p=i.pixels[(h*n+r)*4+3],f=(r-s)*2+e.width/2,w=(h-l)*2+e.height/2;if(f>=0&&f+1<e.width&&w>=0&&w+1<e.height)for(let g=0;g<=1;g++)for(let x=0;x<=1;x++){let m=(Math.floor(w+g)*e.width+Math.floor(f+x))*4;e.pixels[m]=d,e.pixels[m+1]=a,e.pixels[m+2]=c,e.pixels[m+3]=p}}return e.updatePixels(),e}function y(i,t){let e=t.createGraphics(t.width,t.height);return e.drawingContext.imageSmoothingEnabled=!1,e.translate(t.width/2,t.height/2),e.rotate(Math.PI/2),e.noSmooth(),e.image(i,-t.width/2,-t.height/2,t.width,t.height),i=e.get(),e.remove(),e=null,i.filter(t.THRESHOLD,.5),i}function G(i,t){let e=i,n=t.createGraphics(t.width,t.height);return n.drawingContext.imageSmoothingEnabled=!1,n.clear(),n.fill(255),n.circle(e.width/2,e.height/2,100),i.mask(n),i}function S(i,t){let e=t.createGraphics(t.width,t.height);return e.image(i,0,0),e.fill(0,0,0),e.noStroke(),e.circle(i.width/2,i.height/2,100),i=e.get(),e.remove(),e=null,i}function H(i,t){let e=t.createGraphics(t.width,t.height);return e.drawingContext.imageSmoothingEnabled=!1,e.clear(),e.fill(255),e.triangle(300,200,400,200,350,100),i.mask(e),i}function P(i,t){let e=t.createGraphics(t.width,t.height);return e.image(i,0,0),e.fill(0,0,0),e.noStroke(),e.triangle(300,200,400,200,350,100),i=e.get(),e.remove(),e=null,i}function L(i,t){let e=t.createImage(i.width,i.height);e.loadPixels(),i.loadPixels();let n=i.pixels,o=e.pixels;for(let s=1;s<i.width-1;s++)for(let l=1;l<i.height-1;l++){let r=0,h=0;for(let d=-1;d<=1;d++)for(let a=-1;a<=1;a++){let c=(s+d)*4+(l+a)*i.width*4,p=n[c],f=n[c+1],w=n[c+2];if(n[c+3]==0){r+=255,h++;continue}r+=(p+f+w)/3,h++}if(h>0){let d=r/h,a=(s+l*i.width)*4;d>0&&d<255&&(o[a]=0,o[a+1]=0,o[a+2]=0,o[a+3]=255)}}return e.updatePixels(),e}function _(i,t,e){let n=u(e);n.loadPixels(),i.loadPixels(),t.loadPixels();let o=i.pixels,s=t.pixels,l=o.length;for(let r=0;r<l;r+=4)(o[r]==0&&o[r+3]!=0||s[r]==0&&s[r+3]!=0||o[r+1]==0&&o[r+3]!=0||s[r+1]==0&&s[r+3]!=0||o[r+2]==0&&o[r+3]!=0||s[r+2]==0&&s[r+3]!=0)&&(n.pixels[r]=0,n.pixels[r+1]=0,n.pixels[r+2]=0,n.pixels[r+3]=255);return n.updatePixels(),n}const O={rect:{color:"#e74c3c",animation:`0% {
                        border-radius: 12px;
                         }
                     100% {                            
                        border-radius: 0%;
                        }`,callback:()=>{window.user=b(window.user,window.user_p5)}},half_cutter:{color:"#2980b9",animation:`
                        0% {
                            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
                            
                        }
                        100% {
                            clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);
                        }
                        `,callback:()=>{window.user=E(window.user,window.user_p5)}},blank:{color:"#27ae60",animation:`
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
                    `,callback:()=>{window.user=u(window.user_p5)}},scale:{color:"#7f8c8d",animation:`
                    0% {
                        transform: scale(0.5);
                    }
                    100% {
                        transform: scale(1);
                    }
                    `,callback:()=>{window.user=A(window.user,window.user_p5)}},rotate:{color:"#f1c40f",animation:`
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(90deg);
                    }
                    `,callback:()=>{window.user=y(window.user,window.user_p5)}},edge:{color:"#c0392b",animation:`
                        0% {
                          background-color: var(--color);
                          box-shadow: none;
                        }
                        100% {
                          background-color: transparent;
                          box-shadow: 0 0 0 2px var(--color) inset;

                        }
                        `,callback:()=>{window.user=L(window.user,window.user_p5)}},round:{color:"#e67e22",animation:`
                        0% {
                            border-radius: 10px;
                          
                        }
                        100% {
                            border-radius: 100%;
                        }
                        `,callback:()=>{window.user=S(window.user,window.user_p5)}},triangle:{color:"#9b59b6",animation:`
                        0% {
                            clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%);

                        }
                        99% {
                          clip-path: polygon(49% 0%, 0% 100%, 100% 100%, 51% 0%);
                        }

                        100% {
                           clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
                        }
                        `,callback:()=>{window.user=P(window.user,window.user_p5)}},switch:{color:"#01a3a4",animation:`
                0% {
                    background-color: #01a3a4
                }
                100% {
                    background-color: #feca5b
                }
        `,callback:()=>{window.game.switchCanvas()}},merge:{color:"#2ecc71",animation:`
        0% {
        background: linear-gradient(to right, #feca5b 50%, #01a3a4 50%);
        opacity : 0;
        }
        50% {
        background: linear-gradient(to right, #feca5b 50%, #01a3a4 50%);
        opacity ; 0.5;
        }
        100% {
        background: linear-gradient(to right, #feca5b 50%, #01a3a4 50%);
        opacity : 1;
        }`,callback:()=>{window.user=_(window.user,window.user2,window.user_p5)}}};let M=new Audio("click.wav"),I=new Audio("win.wav"),B=new Audio("close.wav"),T=new Audio("end.wav");function v(i){let t=O[i],e=document.createElement("div"),n=document.createElement("button");if(e.appendChild(n),n.style.setProperty("--color",t.color),n.className="transformation",e.addEventListener("click",()=>{let s=window.switched?1:0;i=="blank"?window.user_ops[s]=[]:window.user_ops[s].push(i),n.disabled=!0,M.pause(),M.currentTime=0,M.play(),t.callback(),window.user_p5.redraw(),n.disabled=!1;let l=F(window.reference,window.user);if(document.getElementById("bar").style.height=`${l*100}%`,l>=q[window.level]){if(window.game.challengeMode){window.fireworks.start(),setTimeout(()=>{window.fireworks.stop()},1e4);return}setTimeout(()=>{window.level==4?(T.pause(),T.currentTime=0,T.play()):(I.pause(),I.currentTime=0,I.play()),window.game.toggleCanvasSwap()},500)}}),t.animation!=null){const s=`button-animation-${Math.random()}`.replace(".",""),l=document.styleSheets[0];l.insertRule(`@keyframes ${s} { ${t.animation} }`,l.cssRules.length),e.addEventListener("mouseover",function(){n.style.animation=`${s} 1s ease-in-out forwards`}),e.addEventListener("mouseout",function(){n.style.animation=""})}e.appendChild(n),document.getElementById("buttons").appendChild(e)}function $(i,t){i.loadPixels();let e=i.pixels;for(let n=0;n<e.length;n+=4)e[n]==0&&e[n+3]!=0?(e[n]=255,e[n+1]=255,e[n+2]=255):(e[n]=0,e[n+1]=0,e[n+2]=0),e[n+3]=255;return i.updatePixels(),i}function N(i,t){let e=t.createGraphics(t.width,t.height);return e.drawingContext.imageSmoothingEnabled=!1,e.image(i,0,0),e.fill(255,255,255),e.noStroke(),e.rect(e.width/2-2.5,0,5,300),i=e.get(),e.remove(),e=null,i}const W={rect:b,blank:u,edge:L,form_rounding:G,round:S,triangle_rounding:H,triangle:P,half_cutter:E,inverse:$,line_cutter:N,merge:_,rotate:y,scale:A},z=[D,X,Y,V,J],q=[.95,.95,.95,1,.95];function D(i,t){t&&(v("blank"),v("rect"),v("rotate"));let e=u(i);return e=b(e,i),e=y(e,i),e}function X(i,t){t&&v("triangle");let e=u(i);return e=P(e,i),e=y(e,i),e=y(e,i),e=P(e,i),e}function Y(i,t){t&&(v("round"),v("half_cutter"),v("scale"));let e=u(i);return e=b(e,i),e=E(e,i),e=S(e,i),e=y(e,i),e=E(e,i),e=A(e,i),e=S(e,i),e}function V(i,t){t&&v("edge");let e=u(i);e=b(e,i),e=y(e,i),e=E(e,i),e=y(e,i);let n=u(i);return n=b(n,i),n=L(n,i),n=E(n,i),n=y(n,i),_(e,n,i)}function J(i,t){t&&(v("switch"),v("merge"));let e=u(i);e=b(e,i),e=L(e,i);let n=u(i);n=b(n,i),n=E(n,i);let o=_(e,n,i),s=y(o,i);return s=_(o,s,i),s}function U(i,t){let e=Object.keys(O);for(let l=0;l<e.length;l++)v(e[l]);let n=JSON.parse(atob(i));if(n.length==0)return u(t);n[0].reverse(),n[1].reverse();let o=[u(t),u(t)],s=!1;for(;;){let l=s?1:0,r=n[l].pop();if(r==null)break;if(r=="switch"){s=!s;continue}r=="merge"?o[l]=_(o[0],o[1],t):o[l]=W[r](o[l],t)}return o[s?1:0]}function K(i,t,e,n){t.noSmooth();let o=i.width,s=i.height,l=i.width/n,r=i.height/n;i.resize(l,r),i.loadPixels();for(let h=0;h<i.height;h++)for(let d=0;d<i.width;d++){let a=(d+h*i.width)*4,c=i.pixels[a],p=i.pixels[a+1],f=i.pixels[a+2],w=i.pixels[a+3],g=(c+p+f)/3,m=t.round(g/255*(e-1))*(255/(e-1));i.pixels[a]=m,i.pixels[a+1]=m,i.pixels[a+2]=m,i.pixels[a+3]=w}return i.updatePixels(),i.resize(o,s),i}function Q(i,t){const e=[4,2,1,3,0],n=9,o=9;t.textFont("monospace",o),t.textAlign(t.CENTER,t.CENTER);const s=t.floor(i.width/n),l=t.floor(i.height/o);i.loadPixels();let r=[],h=255,d=0;for(let a=0;a<l;a+=1)for(let c=0;c<s;c+=1){const p=c*n,w=4*(a*o*i.width+p),g=i.pixels[w],x=i.pixels[w+1],m=i.pixels[w+2],k=(g+x+m)/3;r.push(k),k<h&&(h=k),k>d&&(d=k)}t.shapesMap={};for(let a=0;a<e.length;a++)t.shapesMap[a]=[];for(let a=0;a<l;a+=1)for(let c=0;c<s;c+=1){const p=c*n,f=a*o;let w=r[a*s+c];const g=t.floor(t.map(w,h,d,0,e.length-1));let x=0*t.width,m=p+n/2+x,k=f+o/2;t.shapesMap[e[g]].push([m,k,0,0])}for(let a=0;a<e.length;a++)t.shapesMap[a]=t.shuffle(t.shapesMap[a])}class Z{switchCanvas(){let t=window.user;window.user=window.user2,window.user2=t,window.switched=!window.switched}setLevel(t){window.level=t,window.user_p5.loadLevel(),window.reference_p5.loadLevel(),window.user2=u(window.user_p5)}canvasHandle(t){return e=>{window[t+"_p5"]=e,e.loadLevel=function(){e.background(255),window.game.challengeMode?window[t]=t=="reference"?U(window.sea.get("reference"),e):u(e):window[t]=t=="reference"?z[window.level](e,!0):u(e),e.redraw()},e.setup=function(){e.pixelDensity(10),e.createCanvas(700,300),e.background(255),e.noLoop(),window.user2=u(e),e.loadLevel(),e.drawingContext.imageSmoothingEnabled=!1},e.draw=function(){e.background(255);let n=window[t];if(n&&e.image(n,0,0),t=="user"){let o=window.user2;o&&(window.level>3||window.game.challengeMode)&&(e.image(o,15,15,e.width/4,e.height/4),e.stroke("#8e44ad"),e.strokeWeight(4),e.noFill(),e.rect(15,15,e.width/4,e.height/4))}}}}constructor(){window.sea=new URLSearchParams(document.location.href.split("/").pop()),window.sea.has("reference")?this.challengeMode=!0:this.challengeMode=!1,window.switched=!1,this.canvas_container=document.getElementById("canvases"),this.pictureContainer=document.getElementById("picture"),this.buttonsContainer=document.getElementById("buttons"),this.bar=document.getElementById("bar"),this.pictureCreated=!1,this.isSwapped=!1,window.level=0,window.user_ops=[[],[]],document.getElementById("share").addEventListener("click",()=>{let t=btoa(JSON.stringify(window.user_ops));document.getElementById("link1").value=document.location.href,document.getElementById("link2").value=`https://${document.location.host}/?reference=${t}`,document.getElementById("modal").style.display="grid"}),window.game=this,console.log(this.reference_canvas),new p5(this.canvasHandle("reference"),this.canvas_container),new p5(this.canvasHandle("user"),this.canvas_container),new p5(this.newCanvasSketch,this.pictureContainer),document.getElementById("close_modal").addEventListener("click",()=>{document.getElementById("modal").style.display="none"}),document.getElementById("link1cp").addEventListener("click",()=>{navigator.clipboard.writeText(document.getElementById("link1").value)}),document.getElementById("link2cp").addEventListener("click",()=>{navigator.clipboard.writeText(document.getElementById("link2").value)}),window.fireworks=new Fireworks.Fireworks(document.getElementById("fireworks"),{autoresize:!1,opacity:.5,acceleration:1.05,friction:.97,gravity:1.5,particles:50,traceLength:3,traceSpeed:10,explosion:5,intensity:50,flickering:50,lineStyle:"round",hue:{min:0,max:360},delay:{min:30,max:60},rocketsPoint:{min:50,max:50},lineWidth:{explosion:{min:1,max:4},trace:{min:.1,max:1}},brightness:{min:50,max:80},decay:{min:.015,max:.03},mouse:{click:!1,move:!1,max:1}}),fireworks.updateSize({width:window.innerWidth,height:window.innerHeight})}toggleCanvasSwap(){this.isSwapped?(window.sketch_p5.noLoop(),this.pictureContainer.style.display="none",document.getElementById("main").style.opacity=100,this.isSwapped=!1):(window.sketch_p5.current_shape=window.reference,window.sketch_p5.start=window.sketch_p5.millis(),window.sketch_p5.loop(),this.pictureContainer.style.display="block",document.getElementById("main").style.opacity=0,this.newCanvasCreated||(this.newCanvasCreated=!0),this.isSwapped=!0)}newCanvasSketch(t){let e;window.sketch_p5=t,t.setup=()=>{t.drawingContext.imageSmoothingEnabled=!1,t.canvas=t.createCanvas(1400,850),t.buffer=t.createGraphics(1400,850),e=t.loadImage("https://i.guim.co.uk/img/media/dd3882c4ad0fd11a14cffc7e5edaabe5ce8a8b53/0_85_1077_646/master/1077.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=ed76b3cad05b6af61ecb4a059c3294ab",n=>{n.resize(n.width/n.height*t.height,t.height);let o=K(n,t,9,4);t.img=o,Q(o,t)}),t.noLoop()},t.keyPressed=n=>{if(n.keyCode==t.ENTER){let o=t.shapesMap[window.level].length;t.start=t.millis()-1e3*o}},t.draw=()=>{let n=1,o=3,s=(t.millis()-t.start)/1e3;if(t.shapesMap==null)return;if(t.background(255),t.image(t.buffer,0,0),s<n){let r=t.lerp(1,0,s/n);t.image(t.current_shape,t.width/2-t.current_shape.width*r/2,t.height/2-t.current_shape.height*r/2,t.current_shape.width*r,t.current_shape.height*r);return}s-=n;for(let r=0;r<t.shapesMap[window.level].length;r++){let h=t.shapesMap[window.level][r],d=h[0]+t.width/2-e.width/2,a=h[1],c=h[2]+t.width/2,p=h[3]+t.height/2,f=s-r/1e3;if(f<0)continue;let w=t.lerp(c,d,Math.min(f/o,1)),g=t.lerp(p,a,Math.min(f/o,1));t.image(t.current_shape,w,g,9,9)}let l=t.shapesMap[window.level].length;if(s-l/1e3-o-.2>0){t.buffer.copy(t.canvas,0,0,t.canvas.width,t.canvas.height,0,0,t.buffer.width,t.buffer.height),window.level==z.length-1&&(window.fireworks.start(),setTimeout(()=>{window.fireworks.stop()},1e4)),t.noLoop();let r=t.createButton("");r.id("close");const h=t.createImg("https://www.svgrepo.com/show/442475/close-circle.svg");h.size(50,50),h.parent(r),r.mousePressed(()=>{B.pause(),B.currentTime=0,B.play(),r.remove(),window.game.setLevel(window.level+1),window.game.bar.style.height="0%",window.game.toggleCanvasSwap()})}}}}document.addEventListener("DOMContentLoaded",()=>{window.game=new Z});(function(i){var t=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global;typeof define=="function"&&define.amd?define(["exports"],function(e){t.ParticleNetwork=i(t,e)}):typeof C=="object"&&C.exports?C.exports=i(t,{}):t.ParticleNetwork=i(t,{})})(function(i,t){var e=function(n){this.canvas=n.canvas,this.g=n.g,this.particleColor=n.options.particleColor,this.x=Math.random()*this.canvas.width,this.y=Math.random()*this.canvas.height,this.velocity={x:(Math.random()-.5)*n.options.velocity,y:(Math.random()-.5)*n.options.velocity}};return e.prototype.update=function(){(this.x>this.canvas.width+20||this.x<-20)&&(this.velocity.x=-this.velocity.x),(this.y>this.canvas.height+20||this.y<-20)&&(this.velocity.y=-this.velocity.y),this.x+=this.velocity.x,this.y+=this.velocity.y},e.prototype.h=function(){this.g.beginPath(),this.g.fillStyle=this.particleColor,this.g.globalAlpha=.7,this.g.arc(this.x,this.y,1.5,0,2*Math.PI),this.g.fill()},t=function(n,o){this.i=n,this.i.size={width:this.i.offsetWidth,height:this.i.offsetHeight},o=o!==void 0?o:{},this.options={particleColor:o.particleColor!==void 0?o.particleColor:"#fff",background:o.background!==void 0?o.background:"#1a252f",interactive:o.interactive!==void 0?o.interactive:!0,velocity:this.setVelocity(o.speed),density:this.j(o.density)},this.init()},t.prototype.init=function(){if(this.k=document.createElement("div"),this.i.appendChild(this.k),this.l(this.k,{position:"absolute",top:0,left:0,bottom:0,right:0,"z-index":1}),/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.background))this.l(this.k,{});else{if(!/\.(gif|jpg|jpeg|tiff|png)$/i.test(this.options.background))return console.error("Please specify a valid background image or hexadecimal color"),!1;this.l(this.k,{background:'url("'+this.options.background+'") no-repeat center',"background-size":"cover"})}var n=document.getElementById("main");if(this.k.appendChild(n),!/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.particleColor))return console.error("Please specify a valid particleColor hexadecimal color"),!1;this.canvas=document.createElement("canvas"),this.i.appendChild(this.canvas),this.g=this.canvas.getContext("2d"),this.canvas.width=this.i.size.width,this.canvas.height=this.i.size.height,this.l(this.i,{position:"relative"}),this.l(this.canvas,{"z-index":"0",position:"relative"}),window.addEventListener("resize",(function(){return this.i.offsetWidth===this.i.size.width&&this.i.offsetHeight===this.i.size.height?!1:(this.canvas.width=this.i.size.width=this.i.offsetWidth,this.canvas.height=this.i.size.height=this.i.offsetHeight,clearTimeout(this.m),void(this.m=setTimeout((function(){this.o=[];for(var s=0;s<this.canvas.width*this.canvas.height/this.options.density;s++)this.o.push(new e(this));this.options.interactive&&this.o.push(this.p),requestAnimationFrame(this.update.bind(this))}).bind(this),500)))}).bind(this)),this.o=[];for(var o=0;o<this.canvas.width*this.canvas.height/this.options.density;o++)this.o.push(new e(this));this.options.interactive&&(this.p=new e(this),this.p.velocity={x:0,y:0},this.o.push(this.p),this.canvas.addEventListener("mousemove",(function(s){this.p.x=s.clientX-this.canvas.offsetLeft,this.p.y=s.clientY-this.canvas.offsetTop}).bind(this)),this.canvas.addEventListener("mouseup",(function(s){this.p.velocity={x:(Math.random()-.5)*this.options.velocity,y:(Math.random()-.5)*this.options.velocity},this.p=new e(this),this.p.velocity={x:0,y:0},this.o.push(this.p)}).bind(this))),requestAnimationFrame(this.update.bind(this))},t.prototype.update=function(){this.g.clearRect(0,0,this.canvas.width,this.canvas.height),this.g.globalAlpha=1;for(var n=0;n<this.o.length;n++){this.o[n].update(),this.o[n].h();for(var o=this.o.length-1;o>n;o--){var s=Math.sqrt(Math.pow(this.o[n].x-this.o[o].x,2)+Math.pow(this.o[n].y-this.o[o].y,2));s>120||(this.g.beginPath(),this.g.strokeStyle=this.options.particleColor,this.g.globalAlpha=(120-s)/120,this.g.lineWidth=.7,this.g.moveTo(this.o[n].x,this.o[n].y),this.g.lineTo(this.o[o].x,this.o[o].y),this.g.stroke())}}this.options.velocity!==0&&requestAnimationFrame(this.update.bind(this))},t.prototype.setVelocity=function(n){return n==="fast"?1:n==="slow"?.33:n==="none"?0:.66},t.prototype.j=function(n){return n==="high"?5e3:n==="low"?2e4:isNaN(parseInt(n,10))?1e4:n},t.prototype.l=function(n,o){for(var s in o)n.style[s]=o[s]},t});var ee=document.getElementById("particle-canvas"),te={particleColor:"#888",interactive:!0,speed:"slow",density:"high"};new ParticleNetwork(ee,te)});export default ie();

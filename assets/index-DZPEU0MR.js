(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=e(o);fetch(o.href,r)}})();function R(n){let t=n.createGraphics(n.width,n.height);return t.translate(n.width/2,n.height/2),t.background(255),t.drawingContext.imageSmoothingEnabled=!1,t}function H(n,t){n.loadPixels(),t.loadPixels();let e=n.pixels,i=t.pixels,o=0,r=0;for(let a=0;a<e.length;a+=4){if(e[a]===0&&e[a+3]!=0&&(r++,i[a]===0&&i[a+3]!=0)){o++;continue}i[a]===0&&i[a+3]!=0&&r++}return o/r}function k(n,t){let e=t.createGraphics(t.width,t.height);return e.drawingContext.imageSmoothingEnabled=!1,e.image(n,0,0),e.fill(0,0,0),e.noStroke(),e.noSmooth(),e.rect(e.width/3,e.height/3,e.width/3,e.height/3),n=e.get(),e.remove(),e=null,n}function h(n){return R(n).get()}function _(n,t){let e=t.createGraphics(t.width,t.height);return e.drawingContext.imageSmoothingEnabled=!1,e.image(n,0,0),e.fill(255),e.noStroke(),e.noSmooth(),e.rect(0,0,e.width/2,e.height),n=e.get(),e.remove(),e=null,n}function T(n,t){let e=t.createGraphics(t.width,t.height);e.drawingContext.imageSmoothingEnabled=!1;let i=n.width,o=n.height,r=i/2,a=o/2;e=e.get(),n.loadPixels(),e.loadPixels();for(let l=0;l<i;l++)for(let d=0;d<o;d++){let w=n.pixels[(d*i+l)*4],s=n.pixels[(d*i+l)*4+1],c=n.pixels[(d*i+l)*4+2],x=n.pixels[(d*i+l)*4+3],f=(l-r)*2+e.width/2,u=(d-a)*2+e.height/2;if(f>=0&&f+1<e.width&&u>=0&&u+1<e.height)for(let g=0;g<=1;g++)for(let y=0;y<=1;y++){let m=(Math.floor(u+g)*e.width+Math.floor(f+y))*4;e.pixels[m]=w,e.pixels[m+1]=s,e.pixels[m+2]=c,e.pixels[m+3]=x}}return e.updatePixels(),e}function v(n,t){let e=t.createGraphics(t.width,t.height);return e.drawingContext.imageSmoothingEnabled=!1,e.translate(t.width/2,t.height/2),e.rotate(Math.PI/2),e.noSmooth(),e.image(n,-t.width/2,-t.height/2,t.width,t.height),n=e.get(),e.remove(),e=null,n.filter(t.THRESHOLD,.5),n}function A(n,t){let e=n,i=t.createGraphics(t.width,t.height);return i.drawingContext.imageSmoothingEnabled=!1,i.clear(),i.fill(255),i.circle(e.width/2,e.height/2,100),n.mask(i),n}function S(n,t){let e=t.createGraphics(t.width,t.height);return e.image(n,0,0),e.fill(0,0,0),e.noStroke(),e.circle(n.width/2,n.height/2,100),n=e.get(),e.remove(),e=null,n}function $(n,t){let e=t.createGraphics(t.width,t.height);return e.drawingContext.imageSmoothingEnabled=!1,e.clear(),e.fill(255),e.triangle(300,200,400,200,350,100),n.mask(e),n}function C(n,t){let e=t.createGraphics(t.width,t.height);return e.image(n,0,0),e.fill(0,0,0),e.noStroke(),e.triangle(300,200,400,200,350,100),n=e.get(),e.remove(),e=null,n}function L(n,t){let e=t.createImage(n.width,n.height);e.loadPixels(),n.loadPixels();let i=n.pixels,o=e.pixels;for(let r=1;r<n.width-1;r++)for(let a=1;a<n.height-1;a++){let l=0,d=0;for(let w=-1;w<=1;w++)for(let s=-1;s<=1;s++){let c=(r+w)*4+(a+s)*n.width*4,x=i[c],f=i[c+1],u=i[c+2];if(i[c+3]==0){l+=255,d++;continue}l+=(x+f+u)/3,d++}if(d>0){let w=l/d,s=(r+a*n.width)*4;w>0&&w<255&&(o[s]=0,o[s+1]=0,o[s+2]=0,o[s+3]=255)}}return e.updatePixels(),e}function E(n,t,e){let i=h(e);i.loadPixels(),n.loadPixels(),t.loadPixels();let o=n.pixels,r=t.pixels,a=o.length;for(let l=0;l<a;l+=4)(o[l]==0&&o[l+3]!=0||r[l]==0&&r[l+3]!=0||o[l+1]==0&&o[l+3]!=0||r[l+1]==0&&r[l+3]!=0||o[l+2]==0&&o[l+3]!=0||r[l+2]==0&&r[l+3]!=0)&&(i.pixels[l]=0,i.pixels[l+1]=0,i.pixels[l+2]=0,i.pixels[l+3]=255);return i.updatePixels(),i}const G={rect:{color:"#e74c3c",animation:`0% {
                        border-radius: 12px;
                         }
                     100% {                            
                        border-radius: 0%;
                        }`,callback:()=>{window.user=k(window.user,window.user_p5)}},half_cutter:{color:"#2980b9",animation:`
                        0% {
                            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
                            
                        }
                        100% {
                            clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);
                        }
                        `,callback:()=>{window.user=_(window.user,window.user_p5)}},blank:{color:"#27ae60",animation:`
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
                    `,callback:()=>{window.user=h(window.user_p5)}},scale:{color:"#7f8c8d",animation:`
                    0% {
                        transform: scale(0.5);
                    }
                    100% {
                        transform: scale(1);
                    }
                    `,callback:()=>{window.user=T(window.user,window.user_p5)}},rotate:{color:"#f1c40f",animation:`
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(90deg);
                    }
                    `,callback:()=>{window.user=v(window.user,window.user_p5)}},edge:{color:"#c0392b",animation:`
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
                        `,callback:()=>{window.user=C(window.user,window.user_p5)}},switch:{color:"#01a3a4",animation:`
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
        }`,callback:()=>{window.user=E(window.user,window.user2,window.user_p5)}}};let P=new Audio("click.wav"),I=new Audio("win.wav"),B=new Audio("close.wav"),M=new Audio("end.wav");function b(n){let t=G[n],e=document.createElement("div"),i=document.createElement("button");if(e.appendChild(i),i.style.setProperty("--color",t.color),i.className="transformation",e.addEventListener("click",()=>{let r=window.switched?1:0;n=="blank"?window.user_ops[r]=[]:window.user_ops[r].push(n),i.disabled=!0,P.pause(),P.currentTime=0,P.play(),t.callback(),window.user_p5.redraw(),i.disabled=!1;let a=H(window.reference,window.user);if(document.getElementById("bar").style.height=`${a*100}%`,a>=N[window.level]){if(window.game.challengeMode){window.fireworks.start(),setTimeout(()=>{window.fireworks.stop()},1e4);return}setTimeout(()=>{window.level==4?(M.pause(),M.currentTime=0,M.play()):(I.pause(),I.currentTime=0,I.play()),window.game.toggleCanvasSwap()},500)}}),t.animation!=null){const r=`button-animation-${Math.random()}`.replace(".",""),a=document.styleSheets[0];a.insertRule(`@keyframes ${r} { ${t.animation} }`,a.cssRules.length),e.addEventListener("mouseover",function(){i.style.animation=`${r} 1s ease-in-out forwards`}),e.addEventListener("mouseout",function(){i.style.animation=""})}e.appendChild(i),document.getElementById("buttons").appendChild(e)}function F(n,t){n.loadPixels();let e=n.pixels;for(let i=0;i<e.length;i+=4)e[i]==0&&e[i+3]!=0?(e[i]=255,e[i+1]=255,e[i+2]=255):(e[i]=0,e[i+1]=0,e[i+2]=0),e[i+3]=255;return n.updatePixels(),n}function j(n,t){let e=t.createGraphics(t.width,t.height);return e.drawingContext.imageSmoothingEnabled=!1,e.image(n,0,0),e.fill(255,255,255),e.noStroke(),e.rect(e.width/2-2.5,0,5,300),n=e.get(),e.remove(),e=null,n}const z={rect:k,blank:h,edge:L,form_rounding:A,round:S,triangle_rounding:$,triangle:C,half_cutter:_,inverse:F,line_cutter:j,merge:E,rotate:v,scale:T},O=[W,X,Y,D,J],N=[.95,.95,.95,1,.95];function W(n,t){t&&(b("blank"),b("rect"),b("rotate"));let e=h(n);return e=k(e,n),e=v(e,n),e}function X(n,t){t&&b("triangle");let e=h(n);return e=C(e,n),e=v(e,n),e=v(e,n),e=C(e,n),e}function Y(n,t){t&&(b("round"),b("half_cutter"),b("scale"));let e=h(n);return e=k(e,n),e=_(e,n),e=S(e,n),e=v(e,n),e=_(e,n),e=T(e,n),e=S(e,n),e}function D(n,t){t&&b("edge");let e=h(n);e=k(e,n),e=v(e,n),e=_(e,n),e=v(e,n);let i=h(n);return i=k(i,n),i=L(i,n),i=_(i,n),i=v(i,n),E(e,i,n)}function J(n,t){t&&(b("switch"),b("merge"));let e=h(n);e=k(e,n),e=L(e,n);let i=h(n);i=k(i,n),i=_(i,n);let o=E(e,i,n),r=v(o,n);return r=E(o,r,n),r}function U(n,t){let e=Object.keys(G);for(let a=0;a<e.length;a++)b(e[a]);let i=JSON.parse(atob(n));if(i.length==0)return h(t);i[0].reverse(),i[1].reverse();let o=[h(t),h(t)],r=!1;for(;;){let a=r?1:0,l=i[a].pop();if(l==null)break;if(l=="switch"){r=!r;continue}l=="merge"?o[a]=E(o[0],o[1],t):o[a]=z[l](o[a],t)}return o[r?1:0]}function q(n,t,e,i){t.noSmooth();let o=n.width,r=n.height,a=n.width/i,l=n.height/i;n.resize(a,l),n.loadPixels();for(let d=0;d<n.height;d++)for(let w=0;w<n.width;w++){let s=(w+d*n.width)*4,c=n.pixels[s],x=n.pixels[s+1],f=n.pixels[s+2],u=n.pixels[s+3],g=(c+x+f)/3,m=t.round(g/255*(e-1))*(255/(e-1));n.pixels[s]=m,n.pixels[s+1]=m,n.pixels[s+2]=m,n.pixels[s+3]=u}return n.updatePixels(),n.resize(o,r),n}function K(n,t){const e=[4,2,1,3,0],i=9,o=9;t.textFont("monospace",o),t.textAlign(t.CENTER,t.CENTER);const r=t.floor(n.width/i),a=t.floor(n.height/o);n.loadPixels();let l=[],d=255,w=0;for(let s=0;s<a;s+=1)for(let c=0;c<r;c+=1){const x=c*i,u=4*(s*o*n.width+x),g=n.pixels[u],y=n.pixels[u+1],m=n.pixels[u+2],p=(g+y+m)/3;l.push(p),p<d&&(d=p),p>w&&(w=p)}t.shapesMap={};for(let s=0;s<e.length;s++)t.shapesMap[s]=[];for(let s=0;s<a;s+=1)for(let c=0;c<r;c+=1){const x=c*i,f=s*o;let u=l[s*r+c];const g=t.floor(t.map(u,d,w,0,e.length-1));let y=0*t.width,m=x+i/2+y,p=f+o/2;t.shapesMap[e[g]].push([m,p,0,0])}for(let s=0;s<e.length;s++)t.shapesMap[s]=t.shuffle(t.shapesMap[s])}class V{switchCanvas(){let t=window.user;window.user=window.user2,window.user2=t,window.switched=!window.switched}setLevel(t){window.level=t,window.user_p5.loadLevel(),window.reference_p5.loadLevel(),window.user2=h(window.user_p5)}canvasHandle(t){return e=>{window[t+"_p5"]=e,e.loadLevel=function(){e.background(255),window.game.challengeMode?window[t]=t=="reference"?U(window.sea.get("reference"),e):h(e):window[t]=t=="reference"?O[window.level](e,!0):h(e),e.redraw()},e.setup=function(){e.pixelDensity(10),e.createCanvas(700,300),e.background(255),e.noLoop(),window.user2=h(e),e.loadLevel(),e.drawingContext.imageSmoothingEnabled=!1},e.draw=function(){e.background(255);let i=window[t];if(i&&e.image(i,0,0),t=="user"){let o=window.user2;o&&(window.level>3||window.game.challengeMode)&&(e.image(o,15,15,e.width/4,e.height/4),e.stroke("#8e44ad"),e.strokeWeight(4),e.noFill(),e.rect(15,15,e.width/4,e.height/4))}}}}constructor(){window.sea=new URLSearchParams(document.location.href.split("/").pop()),window.sea.has("reference")?this.challengeMode=!0:this.challengeMode=!1,window.switched=!1,this.canvas_container=document.getElementById("canvases"),this.pictureContainer=document.getElementById("picture"),this.buttonsContainer=document.getElementById("buttons"),this.bar=document.getElementById("bar"),this.pictureCreated=!1,this.isSwapped=!1,window.level=0,window.user_ops=[[],[]],document.getElementById("share").addEventListener("click",()=>{let t=btoa(JSON.stringify(window.user_ops));document.getElementById("link1").value=document.location.href,document.getElementById("link2").value=`${document.location.href.split("?")[0]}/?reference=${t}`,document.getElementById("modal").style.display="grid"}),window.game=this,console.log(this.reference_canvas),new p5(this.canvasHandle("reference"),this.canvas_container),new p5(this.canvasHandle("user"),this.canvas_container),new p5(this.newCanvasSketch,this.pictureContainer),document.getElementById("close_modal").addEventListener("click",()=>{document.getElementById("modal").style.display="none"}),document.getElementById("link1cp").addEventListener("click",()=>{navigator.clipboard.writeText(document.getElementById("link1").value)}),document.getElementById("link2cp").addEventListener("click",()=>{navigator.clipboard.writeText(document.getElementById("link2").value)}),window.fireworks=new Fireworks.Fireworks(document.getElementById("fireworks"),{autoresize:!1,opacity:.5,acceleration:1.05,friction:.97,gravity:1.5,particles:50,traceLength:3,traceSpeed:10,explosion:5,intensity:50,flickering:50,lineStyle:"round",hue:{min:0,max:360},delay:{min:30,max:60},rocketsPoint:{min:50,max:50},lineWidth:{explosion:{min:1,max:4},trace:{min:.1,max:1}},brightness:{min:50,max:80},decay:{min:.015,max:.03},mouse:{click:!1,move:!1,max:1}}),fireworks.updateSize({width:window.innerWidth,height:window.innerHeight})}toggleCanvasSwap(){this.isSwapped?(window.sketch_p5.noLoop(),this.pictureContainer.style.display="none",document.getElementById("main").style.opacity=100,this.isSwapped=!1):(window.sketch_p5.current_shape=window.reference,window.sketch_p5.start=window.sketch_p5.millis(),window.sketch_p5.loop(),this.pictureContainer.style.display="block",document.getElementById("main").style.opacity=0,this.newCanvasCreated||(this.newCanvasCreated=!0),this.isSwapped=!0)}newCanvasSketch(t){let e;window.sketch_p5=t,t.setup=()=>{t.drawingContext.imageSmoothingEnabled=!1,t.canvas=t.createCanvas(1400,850),t.buffer=t.createGraphics(1400,850),e=t.loadImage("./rick.webp",i=>{i.resize(i.width/i.height*t.height,t.height);let o=q(i,t,9,4);t.img=o,K(o,t)}),t.noLoop()},t.keyPressed=i=>{if(i.keyCode==t.ENTER){let o=t.shapesMap[window.level].length;t.start=t.millis()-1e3*o}},t.draw=()=>{let i=1,o=3,r=(t.millis()-t.start)/1e3;if(t.shapesMap==null)return;if(t.background(255),t.image(t.buffer,0,0),r<i){let l=t.lerp(1,0,r/i);t.image(t.current_shape,t.width/2-t.current_shape.width*l/2,t.height/2-t.current_shape.height*l/2,t.current_shape.width*l,t.current_shape.height*l);return}r-=i;for(let l=0;l<t.shapesMap[window.level].length;l++){let d=t.shapesMap[window.level][l],w=d[0]+t.width/2-e.width/2,s=d[1],c=d[2]+t.width/2,x=d[3]+t.height/2,f=r-l/1e3;if(f<0)continue;let u=t.lerp(c,w,Math.min(f/o,1)),g=t.lerp(x,s,Math.min(f/o,1));t.image(t.current_shape,u,g,9,9)}let a=t.shapesMap[window.level].length;if(r-a/1e3-o-.2>0){t.buffer.copy(t.canvas,0,0,t.canvas.width,t.canvas.height,0,0,t.buffer.width,t.buffer.height),window.level==O.length-1&&(window.fireworks.start(),setTimeout(()=>{window.fireworks.stop()},1e4)),t.noLoop();let l=t.createButton("");l.id("close");const d=t.createImg("https://www.svgrepo.com/show/442475/close-circle.svg");d.size(50,50),d.parent(l),l.mousePressed(()=>{B.pause(),B.currentTime=0,B.play(),l.remove(),window.game.setLevel(window.level+1),window.game.bar.style.height="0%",window.game.toggleCanvasSwap()})}}}}document.addEventListener("DOMContentLoaded",()=>{window.game=new V});

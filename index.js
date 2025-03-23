  /**
   * @type {HTMLCanvasElement}
   */
const canvas = document.querySelector("#myCanvas")
const ctx = canvas.getContext("2d")

let y = 0
let x = 0
let vely = Math.round(3+Math.random()*5)
let velx = Math.round(3+Math.random()*5)
let cor = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
let img = new Image()
img.src = "dvd wow.png"
setInterval(() => {
    ctx.fillStyle = "white"
    ctx.fillRect(0,0,1000,700)
    ctx.fillStyle = cor
    ctx.fillRect(x,y,200,100)
    ctx.globalCompositeOperation = "destination-in"
    ctx.drawImage(img, x, y, 200, 100)
    ctx.globalCompositeOperation = "source-over"
    x = x+velx
    y = y+vely
    if(y >= 700-100){
        vely = vely*-1
        cor = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
    }
    if (x >= 1000-200){
        velx = velx*-1
        cor = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
    }
    if(y <= 0){
        vely = vely*-1
        cor = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
    }
    if (x <= 0){
        velx = velx*-1
        cor = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
    }
}, 1000/60);

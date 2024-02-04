const field = document.getElementById("field")
const context = field.getContext("2d")

const fieldImg = new Image()
fieldImg.src = "img/field.png"

const foodImg = new Image()
foodImg.src = "img/food.png"

const box = 32

let food = {
    x: Math.floor((Math.random()*17)+1)*box,
    y: Math.floor((Math.random()*15)+3)*box
}

const snakeArr = []

snakeArr[0]={
    x: box*9,
    y: box*10
}


let dir;

document.addEventListener("keydown", direction)

function direction(e){
    if(e.keyCode==38 && e.keyCode!=40){
        dir = "up"
    }else if(e.keyCode==39 && e.keyCode!=37){
        dir = "right"
    }else if(e.keyCode==40 && e.keyCode!=38){
        dir = "down"
    }else if(e.keyCode==37 && e.keyCode!=39){
        dir = "left"
    }
}

let score = 0

function drawGame(){
    context.drawImage(fieldImg, 0, 0)
    

    for(let i=0; i<snakeArr.length; i++){
        context.fillStyle = i==0?"green":"red"
        context.fillRect(snakeArr[i].x, snakeArr[i].y, box, box)
    }

    if(food.x!=snakeArr.y && food.y!=snakeArr.y){
        context.drawImage(foodImg, food.x, food.y)
    }

    if(dir=="left") snakeArr[0].x-=box
    if(dir=="right") snakeArr[0].x+=box
    if(dir=="up") snakeArr[0].y-=box
    if(dir=="down") snakeArr[0].y+=box



    if(snakeArr[0].x==food.x && snakeArr[0].y==food.y){
        food = {
            x: Math.floor((Math.random()*17)+1)*box,
            y: Math.floor((Math.random()*15)+3)*box
        }
        score++
    }

    
    if(snakeArr<(1*box)||snakeArr>(17*box)||snakeArr<(2*box)||snakeArr>(16*box)){
        clearInterval(game)
    }

    const snakeHead = {
        x: snakeArr[0]*box,
        y: snakeArr[0]*box
    }

    let scoreXY = {
        x: 1.5*box,
        y: 5*box
    }

    context.fillStyle = "white"
    context.font = "50px Arial"
    context.fillText(score, score, scoreXY.x, scoreXY.y)
}
 


let game = setInterval(drawGame, 100)
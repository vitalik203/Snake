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
    if(e.keyCode==38 && dir!="down"){
        dir = "up"
    }else if(e.keyCode==39 && dir!="left"){
        dir = "right"
    }else if(e.keyCode==40 && dir!="up"){
        dir = "down"
    }else if(e.keyCode==37 && dir!="right"){
        dir = "left"
    }
}

let score = 0

function drawGame(){
    const snakeHead = {
        x: snakeArr[0].x,
        y: snakeArr[0].y
    }
    context.drawImage(fieldImg, 0, 0)
    if(snakeArr[0].x==food.x && snakeArr[0].y==food.y){
        food = {
            x: Math.floor((Math.random()*17)+1)*box,
            y: Math.floor((Math.random()*15)+3)*box
        }
        score++
        snakeArr.unshift(snakeHead)
    }
    
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

    

    if(snakeArr[0].x==-1*box){
        // snakeArr[0].x=17*box
        clearInterval(game)
    }else if(snakeArr[0].x==19*box){
        // snakeArr[0].x=1*box
        clearInterval(game)
    }else if(snakeArr[0].y==1*box){
        // snakeArr[0].y=15*box
        clearInterval(game)
    }else if(snakeArr[0].y==19*box){
        // snakeArr[0].y=3*box
        clearInterval(game)
    }

    
    

    

    let scoreXY = {
        x: 2.5*box,
        y: 1.7*box
    }

    context.fillStyle = "white"
    context.font = "50px Arial"
    context.fillText(score, scoreXY.x, scoreXY.y)

    
}
 


let game = setInterval(drawGame, 100)
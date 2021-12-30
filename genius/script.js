//0 = verde
//1 = vermelho
//2 = amarelo
//3 = azul

let score = 0;

let order = [

];

let clickedOrder = [

];

const blue = document.querySelector('.blue')
const green = document.querySelector('.green')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')

let shuffleOrder = () =>{
    let colorOrder = Math.floor(Math.random() * 4 );
    order[order.length] = colorOrder
    clickedOrder = []

    for (let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1)
    }
}

let lightColor = (element, number) =>{
    number = number * 500;
    setTimeout(()=> {
        element.classList.add('selected')
    }, number - 250)

    setTimeout(()=> {
     element.classList.remove('selected')   
    })
}

//Check if clicked buttons are the same of the order

let checkOrder = () =>{
    for (let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length){
        alert(`[GENIUS] Score: ${score} \n Congrats! Go to the next Level...` )
        nextLevel()
    }
}

// user click function

let click = (color) =>{
        clickedOrder[clickedOrder.length] = color;
        createColorElement(color).classList.add('selected');

        setTimeout(()=>{
            createColorElement(color).classList.remove('selected');
            checkOrder();
        },250)

       
}

let createColorElement = (color) =>{
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
    
}

let nextLevel = () =>{
    score ++;
    shuffleOrder();

}

//gameover

let gameOver = () =>{
    alert(`[GENIUS] GAME OVER :( \n SCORE [${score}] \n Press OK to start again`)
    order =[];
    clickedOrder = [];
    playGame();
}

let playGame = () =>{
    alert (`[WELCOME TO GENIUS !!! STARTING A NEW GAME...]`)
    score = 0;
    nextLevel();
}

green.onclick = () => click(0)
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3)

playGame();
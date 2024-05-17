let buttonColours = ["red", "blue", "green", "yellow"]
let gamePattern = []
let userClickedPattern = []
let level = 0
let started = false

function nextSequence(){
    level++;
    document.querySelector("h1").innerHTML = "Level "+level

    userClickedPattern = []
    randomNumber = Math.floor(Math.random()*4)
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)

    var chosenButton = document.getElementById(randomChosenColour)
    animatePressed(chosenButton)
    displaySound(randomChosenColour)

}
gameButtons = document.querySelectorAll(".btn")
for(let i=0;i<gameButtons.length;i++){
gameButtons[i].addEventListener("click",function(){
    let color = this.id
    animatePressed(this)
    displaySound(color)
    userClickedPattern.push(color)
    checkAnswer(userClickedPattern.length-1)
})
}

document.addEventListener("keypress",function(){
    if(!started){
        started = true
        nextSequence()
    }
})

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] != userClickedPattern[currentLevel]){
    gameover();
}

if(currentLevel == gamePattern.length-1){
    setTimeout(function(){
        nextSequence()
    },1000)
}
}

function gameover(){
    document.querySelector("h1").innerHTML = "Game Over, press any key to restart";
    document.body.classList.add("game-over")
    setTimeout(function(){
        document.body.classList.remove("game-over")
    },200)
    gamePattern = []
    userClickedPattern = []
    started = false
    level = 0
}

function displaySound(color){
    audio = new Audio("./sounds/"+color+".mp3")
    audio.play()
}

function animatePressed(button){
    button.classList.add("pressed")
    setTimeout(function(){
        button.classList.remove("pressed")
    },100)
}
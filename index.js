
// Detecting drum button Press

var numOfDrumBtns = document.querySelectorAll(".drum").length;

for(var i = 0 ; i <numOfDrumBtns ; i++){
        document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
        
        var buttonInnerHTML = this.innerHTML;  
        makesound(buttonInnerHTML);
        animateBtn(buttonInnerHTML);
        
    });
}

// Detecting Keyboard press

document.addEventListener("keypress" , function(event){
    makesound(event.key);
        animateBtn(event.key);
});

// Making Sound on key press

function makesound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;

        // row2..........................................................................

        case "q":
            var clave1 = new Audio("sounds/kicks/808-Clave1.wav");
            clave1.play();
        break;
        case "e":
            var clave2 = new Audio("sounds/kicks/808longkick.wav");
            clave2.play();
        break;
        case "r":
            var clave3 = new Audio("sounds/kicks/Marie 808.wav");
            clave3.play();
        break;
        case "f":
            var conga1 = new Audio("sounds/kicks/808-Conga1.wav");
            conga1.play();
        break;
        case "y":
            var clap1 = new Audio("sounds/snares/808-Clap05.wav");
            clap1.play();
        break;
        case "u":
            var cowbell = new Audio("sounds/snares/808-cowbell2.wav");
            cowbell.play();
        break;
        case "i":
            var rim = new Audio("sounds/snares/808-Rim4.wav");
            rim.play();
        break;

        // row3.............................................................................

        case "z":
            var pedal = new Audio("sounds/kicks/pedal.wav");
            pedal.play();
        break;
        case "x":
            var ramen = new Audio("sounds/kicks/Ramen.wav");
            ramen.play();
        break;
        case "c":
            var kicks13 = new Audio("sounds/kicks/808-Kicks13.wav");
            kicks13.play();
        break;
        case "v":
            var kick7 = new Audio("sounds/kicks/808-Kicks07.wav");
            kick7.play();
        break;
        case "n":
            var open = new Audio("sounds/snares/open.wav");
            open.play();
        break;
        case "o":
            var conga3 = new Audio("sounds/snares/conga3.wav");
            conga3.play();
        break;
        case "p":
            var snar2  = new Audio("sounds/snares/snar2.wav");
            snar2.play();
        break;
    
        default:
            break;
    }

}

function animateBtn(curKey) {
        var activeBtn = document.querySelector("." + curKey);
        activeBtn.classList.add("pressed");
        
        setTimeout(function(){
                activeBtn.classList.remove("pressed");
        } , 100)
}
        



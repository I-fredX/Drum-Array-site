/* This is a drum website project that displays a 7 drum lineup each assigned a keyboard character and a different drum image */
// on click of the drum buttons or press of the character displayed the drum in the image is hit and a sound is played


//  creating a variable that stores all the webpage objects that have the class drum as an array
let drumButtons = document.querySelectorAll(".drum");


// The play sound function uses a series of switch statements to decide the drum to play based on what is passed as a param
function playSound(initiator){
    switch (initiator) {
        case "w":
            let tom1 = new Audio(`./sounds/tom-1.mp3`);
            tom1.play();
            break;
        
        case "a":
            let tom2 = new Audio(`./sounds/tom-2.mp3`)
            tom2.play();
            break;
        
            case "s":
            let tom3 = new Audio(`./sounds/tom-3.mp3`)
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio(`./sounds/tom-4.mp3`)
            tom4.play();
            break;
        
        case "j":
            let snare = new Audio(`./sounds/snare.mp3`)
            snare.play();
            break;
        case "k":
            let crash = new Audio(`./sounds/crash.mp3`)
            crash.play();
            break;
        case "l":
            let kickBass = new Audio(`./sounds/kick-bass.mp3`)
            kickBass.play();
            break;
        default :
            console.log(initiator);              
            break;
    }
}

// This loops through the array of webpage objects and adds an event listener to each, where a click event is listened for
// The button animation function adds a pressed class with specific styling imitating that of a pressed button and removes the styling after 100 milliseconds
for (let ele of drumButtons){
    ele.addEventListener("click", function(){
        let buttonInnerHtml = this.innerHTML
        playSound(buttonInnerHtml)
        buttonAnimation(buttonInnerHtml)
        
        
    });
        
;
}


// This listens for key presses of the characters displayed on the drum buttons and plays the sound of the corresponding drum
document.addEventListener("keydown", function(event){
    // console.log(`${event.key}`);
    let key = event.key
    console.log(key);
    playSound(key)
    buttonAnimation(key)  

})
// creating a func that gives the buttons animation

function buttonAnimation(pressedKey) {
    
    let activeButton = document.querySelector(`.${pressedKey}`)
    activeButton.classList.add("pressed")
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100)
}
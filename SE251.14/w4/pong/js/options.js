/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/

const Options = document.querySelector("#options");
const Sides = document.querySelector(".sides");

Options.addEventListener("click", function(){
    if (Sides.style.display == "none") {
        Sides.style.display = "block";
    }
    else{
        Sides.style.display = "none";
    }
});

/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/

document.addEventListener("DOMContentLoaded", function() {
    const p1Color = document.getElementById
})

/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/

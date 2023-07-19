
var keys = [];
document.addEventListener(`keydown`, (e)=>{
    keys[String.fromCharCode(e.keyCode)] = true;
})

document.addEventListener(`keyup`, (e)=>{
    keys[String.fromCharCode(e.keyCode)] = false;
})

var toggle = document.querySelector(`#toggle`)
var tray = document.querySelector(`.tray`)

var tabs = Array.from(document.querySelectorAll(`nav a`))
var p = document.querySelector(`#editor p`)

toggle.addEventListener(`click`, (e)=>{
    e.preventDefault();
    tray.classList.toggle(`closed`)
})

for(let i=0; i<tabs.length; i++)
{
    tabs[i].addEventListener(`click`, selectTab);
}

function selectTab(e)
{
    for(let i=0; i<tabs.length; i++)
    {
        tabs[i].style.backgroundColor =`#373737`;
    }
    e.target.style.backgroundColor=`#161616`;
    p.innerHTML =  `<b href=#>SE137</b> >> 
                    <b href=#>w6</b> >>
                    <b href=#>Homework</b> >>
                    <b href=#>Tab ${tabs.indexOf(e.target)+1}</b>`
}
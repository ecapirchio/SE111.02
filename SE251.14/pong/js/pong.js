var c = document.querySelector(`#pong`)
var ctx = c.getContext(`2d`)
var timer = setInterval(main, 1000/60)

var fy = .85


var p1 = new Box();
p1.w = 20
p1.h = 150
p1.x = 0 + p1.w/2

var wall = new Box()
wall. x = c.width - 100
wall.color = `black`


function main()
{
    ctx.clearRect(0,0,c.width,c.height)

    if (keys[`w`])
    {
        p1.vy += -p1.force
    }

    if (keys[`s`])
    {
        p1.vy += p1.force
    }

    p1.move();

    if(p1.y < 0 + p1.h/2)
    {
        p1.y = 0 + p1.h/2
    }

    if(p1.y < c.height + p1.h/2)
    {
        p1.y = c.height + p1.h/2
    }

    p1.draw()

}

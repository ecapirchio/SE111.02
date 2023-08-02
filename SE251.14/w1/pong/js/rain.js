//canvas and context
var c = document.querySelector(`#pong`)
var ctx = c.getContext(`2d`)

//timer to make the game run at 60fps
var timer = setInterval(main, 1000/60)

var p = []
var amt = 50

for(let i=0; i<amt; i++)
{
    p[i]=new Box();
    p[i].x = Math.random()*c.width;
    p[i].y = Math.random()*c.height;
    p[i].w = rand(10, 20)
    p[i].h = p[i].w
}

function rand(l, h)
{
    return Math.random() * (h-l) + 1
}

function main()
{
    //erases the canvas
    ctx.clearRect(0,0,c.width,c.height)

    for(let i=0; i<amt; i++)
    {
        p[i].draw()
    }
    
    //p1 accelerates when key is pressed 
    if(keys[`w`])
    {
       p1.vy += -p1.force
    }

    if(keys[`s`])
    {
        p1.vy += p1.force
    }
    //applies friction
    p1.vy *= fy
    //player movement
    p1.move();

    //ball movement
    ball.move()

    //p2 accelerates when key is pressed 
    if(keys[`ArrowUp`])
    {
       p2.vy += -p2.force
    }

    if(keys[`ArrowDown`])
    {
        p2.vy += p2.force
    }
    //applies friction
    p2.vy *= fy
    //player movement
    p2.move();

    //ball movement
    ball.move()

    //p1 collision
    if(p1.y < 0+p1.h/2)
    {
        p1.y = 0+p1.h/2
    }
    if(p1.y > c.height-p1.h/2)
    {
        p1.y = c.height-p1.h/2
    }

    //p2 collision
    if(p2.y < 0+p2.h/2)
    {
        p2.y = 0+p2.h/2
    }
    if(p2.y > c.height-p2.h/2)
    {
        p2.y = c.height-p2.h/2
    }

    //ball collision 
    if(ball.x < 0)
    {
        ball.x = c.width/2
        ball.y = c.height/2
    }
    if(ball.x > c.width)
    {
        ball.x = c.width
        ball.vx = -ball.vx
    }
    if(ball.y < 0)
    {
        ball.y = 0
        ball.vy = -ball.vy
    }
    if(ball.y > c.height)
    {
        ball.y = c.height
        ball.vy = -ball.vy
       
    }

    //p1 with ball collision
    if(ball.collide(p1))
    {
        ball.x = p1.x + p1.w/2 + ball.w/2
        ball.vx = -ball.vx;
    }

    //p2 with ball collision
    if(ball.collide(p2))
    {
        ball.x = p2.x - p2.w/2 - ball.w/2
        ball.vx = -ball.vx;
    }

    //draw the objects
    p1.draw()
    p2.draw()
    ball.draw()
}

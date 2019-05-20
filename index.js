let canvas = document.querySelector('canvas')
let scr = canvas.getContext('2d')
let particle = new Particle(canvas.width/2, canvas.height/2, 45)
let walls = []

walls.push(new Boundary(100, 100, 100, 400))
walls.push(new Boundary(0, 0, 600, 0))
walls.push(new Boundary(0, 0, 0, 500))
walls.push(new Boundary(0, 500, 600, 500))
walls.push(new Boundary(600,500,600,0))
let i=0
function draw(){
  //clearing canvas
  scr.fillStyle = 'black'
  scr.fillRect(0, 0, canvas.width, canvas.height)
  
  //showing particle
  particle.show()
  for(let wall of walls){
    wall.show()
  }
  particle.cast(walls)
}


setInterval(()=>draw(), 16)

canvas.onmousemove = e => {
  particle.move(e.x, e.y)
}
document.onkeydown = e => {
  //left
  if(e.keyCode == 37){
    particle.turnLeft()
  }else if(e.keyCode == 39){
    particle.turnRight()
  }
}

class Particle{
  constructor(x, y){
    this.pos = new Vector(x, y)
    this.rays = new Array()
    for(let i=0; i<360; i+=1){
      this.rays.push(new Ray(this.pos.x, this.pos.y, i))
    }
  }
  show(){
    this.rays.forEach(ray=>{
      ray.show()
    })
  }
  move(x, y){
    this.pos.x = x 
    this.pos.y = y
    for(let ray of this.rays){
      ray.move(x, y)
    }
  }
  cast(walls){
    for(let ray of this.rays){
      let record = Infinity
      let point
      for(let wall of walls){
        let pt = ray.cast(wall)
        if (pt) {
          let d = this.pos.distance(pt)
          if(d<record){
            record = d
            point = pt
          }
          scr.beginPath()
          scr.fillStyle = 'white'
          scr.arc(point.x, point.y, 1.1, 0, 2 * Math.PI)
          scr.fill()
          //drawing line 
          scr.beginPath()
          scr.strokeStyle = "white"
          scr.lineJoin = 'round'
          scr.lineCap = 'round'
          scr.fillStyle = "white"
          scr.moveTo(ray.position.x, ray.position.y)
          scr.lineTo(point.x, point.y)
          scr.stroke()
        }
      }
    }
  }
}
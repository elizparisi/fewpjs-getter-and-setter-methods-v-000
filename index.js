// Add your Circle class here

class Circle {
  constructor(radius){
    this.radius = radius;
  }
  
  set radius(radius){
    this._radius = radius;
  }
  
  get diameter(){
    return this.radius * 2;
  }
  
  get circumference(){
    return Math.PI * this.diameter;
  }
  
  get area(){
    return Math.PI * (this.radius * this.radius)
  }
}
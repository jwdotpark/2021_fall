class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
  area() {
    return this.w * this.h;
  }
}

const r1 = new Rectangle(2, 3);
const r2 = new Rectangle(4, 5);
console.log("Area of r1: " + r1.area());
console.log("Area of r2: " + r2.area());

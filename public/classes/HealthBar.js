class HealthBar {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.health = 50;
  }

  showSelf() {
    push();
    fill("red");
    rect(this.x, this.y, 100, 25);
    fill("yellow");
    rect(this.x, this.y, this.health * 2, 25);
    pop();
    // if (mouseIsPressed) {
    //   this.health -= 0.5;
    // }
  }

  updatePosition(canvasX, canvasY) {
    this.x = canvasX;
    this.y = canvasY;
  }
}

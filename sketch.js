var fixedRect, movingRect;

function setup() {
  createCanvas(800, 800);
  fixedRect = createSprite(400, 400, 50, 50);
  fixedRect.shapeColor = "red";
  movingRect = createSprite(100, 100, 50, 50);
  movingRect.shapeColor = "red";
}

function draw() {
  background("black");
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  console.log(fixedRect.x - movingRect.x);
  myIsTouching();
  drawSprites();
}
function myIsTouching() {
  if (
    movingRect.x - fixedRect.x <= fixedRect.width / 2 + movingRect.width / 2 &&
    fixedRect.x - movingRect.x <= fixedRect.width / 2 + movingRect.width / 2
  ) {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  } else {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
}

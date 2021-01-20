var ball, database, position;




function setup() {
database = firebase.database();    
createCanvas(600,600);

ball = createSprite(50,50,20,20);
ball.shapeColor = "blue";

var ballPosition = database.ref('ball/position');
ballPosition.on("value", readPosition, showError);

}

function draw() {
background(0);
if(keyDown("up")) {
  writePosition(0,-2);  
}
if(keyDown("down")) {
    writePosition(0,2);  
  }
if(keyDown("left")) {
    writePosition(-2,0);  
  }  
  if(keyDown("right")) {
    writePosition(2,0);  
  }  

drawSprites();
}

function writePosition(x,y) {
  database.ref('ball/position').set({
      'x': position.x + x,
      'y': position.y + y
  })
}

function readPosition(data) {
   position = data.val();
   ball.x = position.x;
   ball.y = position.y; 
}

function showError() {
    console.log(error);
}
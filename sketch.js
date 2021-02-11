var ballon;
var height;

function preload(){
  background1=loadImage("Hot Air Ballon-01.png");
  ball1=loadImage("Hot Air Ballon-02.png");
  ball22=loadImage("Hot Air Ballon-03");
}


function setup() {
  createCanvas(800,400);
  ballon=createSprite(400, 200, 50, 50);
  ballon.addImage(ballon1);
  database=firebase.database();
  var  node1=database.ref("ballon/position");
  node1.on("value",readOn,showerr);
}

function draw(){
    background("background1");
    if(keyDown(LEFT_ARROW)){
        ballon.x=ballon.x=-10;
    }
    else if(keyDown(RIGHT_ARROW)){
      ballon.x=ballon.x=+10;
    }
    else if(keyDown(UP_ARROW)){
      ballon.x=ballon.x=-10;
    }
    else if(keyDown(DOWN_ARROW)){
      ballon.x=ballon.x=+10;
    }
    if(keyDown===UP_ARROW){
      updateHeight(0,-10);
      ballon.addAnimation("hotAirBallon",ball22);
      ballon.scale=ballon.scale-10;
    }
    drawSprites();
}

function updateHeight(x,y){
    database.ref("ballon/position").set({x:height.x+x,y:height.y+y});
//     ball.x = ball.x + x;
//     ball.y = ball.y + y;

 }
function readHeight(data){
    position=data.val();
    ballon.x=height.x;
    ballon.y=height.y;

}
function showerr(){
    console.log("show error");
}




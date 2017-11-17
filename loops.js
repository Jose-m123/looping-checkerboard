function setup() {
  createCanvas(500,400);
}

function draw() {
  background(0);
  fill(250);

  var x = 50;
  var count = 0

  if(count%2 === 0){
    fill('white')
    }else{
      fill('black')
    }
  }
  for (var i = 0; i < 3; i++) {
    rect(x, height/2, 40, 40);
    x += 50;
  }m


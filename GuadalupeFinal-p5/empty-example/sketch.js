var diam1=10;


function setup() {
  createCanvas(500, 500);
  background(0,128,255);
}

function draw() {
  
  //fill(0,255,0);
  stroke(200,50,50);
  strokeWeight(5);
  ellipse(250,235,diam1,diam1);
  fill(255,255,0);
  ellipse(random(width),random(height),20,20);
  textSize(30);
  
  textFont("Arial");
  textStyle(BOLD);
  textAlign(CENTER);
  text('COVID-19',250,250);
  console.log(diam1);
}

function mousePressed(){ 
    if(diam1>200){
      diam1=0;
    }else{
     diam1=diam1+20;}
}
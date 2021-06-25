let canvas=document.createElement('canvas');
let x1=window.innerWidth+1100;
let x2=window.innerWidth+500;
let y=400;
let score=0;

function start_game(){
  canvas.width= window.innerWidth;
  canvas.height=window.innerHeight;
  context=canvas.getContext('2d');
  context.font = '50px Arial';
  context.fillStyle='white';
  context.fillText('SCORE: ',canvas.innerWidth/2,canvas.innerHeight/2);
  document.body.insertBefore(canvas,document.body.childNodes[0]);
}  

function add(x_cor,y_cor,color,width,height){
  x_cor=x_cor;
  y_cor=y_cor;
  width=width;
  height=height;
  var store = context;
  store.fillStyle=color;
  store.fillRect(x_cor,y_cor,width,height);

}

function updateArea(){
  clear();
  let rect_1 = add(0,0,'#000',innerWidth,200);
  let rect_2 = add(0,500,'#000',innerWidth,250);
  let rect_3 = add(50,y,'#3498DB',100,100);
  let rect_ob1= add(x1,500,'#333',150,300);
  let rect_ob2= add(x2,0,'#333',150,200);
  x1=x1-6;
  x2=x2-6;
  if(x1<(-150)){
    x1=Math.floor(Math.random() * 1000);
    x1=x1+1500;
  }
  if(x2<(-150)){
    x2=Math.floor(Math.random() * 1000);
    x2=x2+1500;
    if(x2>(x1-500) || x2<(x1+500)){
      x2=x2+1000;
    }
  } 
  
  if(topObs() || bottomObs()){
    stop();
    swal('You missed it mate! You lost :( ');
  }

  
}  
function jump(){
  if(y==400){
    y=200;
  }  
  else{
    y=400;
  }  
}

function topObs(){
  let bottomLeft = 50;
  let bottomRight=150;
  let top = y;
  let obstacleLeftTop = x2;
  let obstacleRightTop = x2+150;
  let obstacleBottom = 200;
  let crash=true;
  if(bottomRight<obstacleLeftTop || bottomLeft>obstacleRightTop || top>obstacleBottom ){
    crash = false;
  }
  return crash;
}

function bottomObs(){
  bottomLeft=50;
  bottomRight=150;
  let bottom = y+100;
  let obstacleLeftBottom=x1;
  let obstacleRightBottom=x1+150;
  let obstacleTop=400;
  let crash=true;
  if(bottomRight<obstacleLeftBottom || bottomLeft>obstacleRightBottom || bottom<obstacleTop){
    crash=false;
  }
  return crash;
}

function scores(font,size,color,x_cor,y_cor){
  let style = canvas.getContext('2d');
  style.font(size+' '+font);
  style.fillStyle=color;
  style.fillText(txt,x_cor,y_cor);
}

function stop(){
  clearInterval(interval);
}


function refresh(){
  interval = setInterval(updateArea,20);
}

function clear(){
  context.clearRect(0,0,canvas.width,canvas.height);
}




var canvas=document.createElement('canvas');

var x1=500;
var x2=900;
var y=400;

function start_game(){
  canvas.width= window.innerWidth;
  canvas.height=window.innerHeight;
  context=canvas.getContext('2d');
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
  var rect_1 = add(0,0,'#000',innerWidth,200);
  var rect_2 = add(0,500,'#000',innerWidth,250);
  var rect_3 = add(50,y,'#3498DB',100,100);
  var rect_ob1= add(x1,500,'#333',150,300);
  var rect_ob2= add(x2,0,'#333',150,200);
  x1=x1-6;
  x2=x2-6;
  if(x1<-150){
    x1=Math.floor(Math.random() * 1000);
    x1=x1+1500;
  }
  if(x2<-150){
    x2=Math.floor(Math.random() * 1000);
    x2=x2+1500;
    if(x2>(x1-1000) || x2<(x1+1000)){
      x2=x2+1000;
    }
  }  
  document.addEventListener('click',function(){
    jump();
  })
  
  function jump(){
    if(y==400){
      y=200;
    }  
    else{
      y=400;
    }  

  }

}


function refresh(){
  interval = setInterval(updateArea,20);
}

function clear(){
  context.clearRect(0,0,canvas.width,canvas.height);
}

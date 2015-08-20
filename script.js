var pos=200;
var pinc=.25

drawit=function(){
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.clearRect(0, 0, c.width, c.height);
for(var x=0;x< 15; x++){
 var r = 350-x*20;
 var st=((pos * (x+1)) % 200)/100;
 var et=(st + 7) % 99;
  ctx.shadowBlur = 20;
 ctx.beginPath();
    
 ctx.lineWidth=25-x;
        ctx.strokeStyle='hsl(186,100%,60%)';
    ctx.shadowColor = '#00FFFF';
 ctx.arc(450, 450, r, et * Math.PI , st * Math.PI);
ctx.stroke();

    ctx.strokeStyle='hsl(186,100%,80%)';
    ctx.shadowColor = '#00FFFF';
    ctx.lineWidth=x/3;
    if(x>3){ctx.arc(450, 450, r/3, et * Math.PI , st * Math.PI);}
    ctx.stroke();
 //ctx.strokeStyle='hsl(' + 186+ ', ' + st*95 + '%, 80%'+',10%)';

   
 //console.log(r + " " + pos + " " +st + " " + et);
pos=(pos+pinc)  %200;
     //console.log(pos + " " + pinc);   
    ctx.shadowBlur = 20;
ctx.font = '20px Arial';
ctx.fillStyle = '#00FFFF';
ctx.fillText(pos, 20, 20);
ctx.fillText(r, 20, 50);
ctx.fillText(et, 20, 70);
ctx.fillText(st*15, 700, 760);
ctx.fillText(et * Math.PI, 700, 790);
ctx.fillText(st * Math.PI, 700, 820);
}
  pinc=.2 * ((100-(Math.abs(100-pos)))/100);   
 if (pinc<.09) pinc=.01;   
   

}

window.setInterval("drawit();", 16);
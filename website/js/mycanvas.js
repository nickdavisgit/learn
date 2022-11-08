/* $(function(){
	function bz(point,t){
	  let Px0=point[0].x,
	      Py0=point[0].y,
	      Px1=point[1].x,
	      Py1=point[1].y,
	      Px2=point[2].x,
	      Py2=point[2].y;
	  let bzpoint={'x':0,'y':0};
	  bzpoint.x=parseInt((Math.pow((1-t), 2)*Px0)+(((1-t)*2*t)*Px1)+(Math.pow(t, 2)*Px2));
	  bzpoint.y=parseInt((Math.pow((1-t), 2)*Py0)+(((1-t)*2*t)*Py1)+(Math.pow(t, 2)*Py2));
	  return bzpoint;
	}
	const canvas = document.getElementById('mycanvas');
	if (!canvas.getContext) return;
	const ctx = canvas.getContext("2d");
	function draw(i){
		ctx.clearRect(0, 0, 500, 500); //清空所有的内容
		ctx.strokeStyle = "red";
		ctx.translate(250,250);
		ctx.beginPath();
		ctx.arc(0,0,100,0,2*Math.PI,false);
		ctx.closePath();
		ctx.stroke();
		
		ctx.strokeStyle = "green";
		ctx.rotate((Math.PI/180)*i);
		ctx.translate(100, 0);
		ctx.beginPath();
		ctx.arc(0,0,10,0,2*Math.PI,false);
		ctx.closePath();
		ctx.stroke();
		ctx.translate(-100,0);
		ctx.rotate(-(Math.PI/180)*i);
		ctx.translate(-250,-250);
		
	}
	var i = 0;
	setInterval(function(){
		if(i == 360){
			i=0;
		}
		draw(i)
		i++;
	},50);
}); */


/* $(function(){
	let ctx,earth;
	function init(){
	    let canvas = document.querySelector("#mycanvas");
	    ctx = canvas.getContext("2d");
		draw();
	 
	}
	init();
	function draw(){
	    ctx.clearRect(0, 0, 300, 300); //清空所有的内容
	    ctx.save();//保存原始原点坐标
	    ctx.translate(150, 150);
		//绘制 太阳
		let rdsun = ctx.createRadialGradient(0,0,10,0,0,40);
		rdsun.addColorStop(0,"red");
		rdsun.addColorStop(1,"yellow");
		ctx.fillStyle = rdsun;
		ctx.beginPath();
		ctx.arc(0,0,50,0,2*Math.PI,false);
		ctx.closePath();
		ctx.fill();
	 
	    //绘制earth轨道
	    ctx.beginPath();
	    ctx.strokeStyle = "rgba(255,0,0,1.0)";
	    ctx.arc(0, 0, 100, 0, 2 * Math.PI)
	    ctx.stroke()
	 
	    let time = new Date();
	    //绘制地球
	    ctx.rotate(2 * Math.PI / 60 * time.getSeconds() + 2 * Math.PI / 60000 * time.getMilliseconds())
	    ctx.translate(100, 0);
		let rdearth = ctx.createRadialGradient(0,0,10,0,0,40);
		rdearth.addColorStop(0,"blue");
		rdearth.addColorStop(1,"yellow");
		ctx.fillStyle = rdearth;
		ctx.beginPath();
		ctx.arc(0,0,20,0,2*Math.PI,false);
		ctx.closePath();
		ctx.fill();
	 
	    //绘制月球轨道
	    ctx.beginPath();
	    ctx.strokeStyle = "rgba(0,255,0,1.0)";
	    ctx.arc(0, 0, 40, 0, 2 * Math.PI);
	    ctx.stroke();
	 
	    //绘制月球
	    ctx.rotate(2 * Math.PI / 6 * time.getSeconds() + 2 * Math.PI / 6000 * time.getMilliseconds());
	    ctx.translate(40, 0);
		let rdmoon = ctx.createRadialGradient(0,0,10,0,0,40);
		rdmoon.addColorStop(0,"lightskyblue");
		rdmoon.addColorStop(1,"yellow");
		ctx.fillStyle = rdmoon;
		ctx.beginPath();
		ctx.arc(0,0,10,0,2*Math.PI,false);
		ctx.closePath();
		ctx.fill();
		
	    ctx.restore();//恢复原始原点坐标
	 
	    requestAnimationFrame(draw);
	}
}); */
$(function(){
	let earth,ctx,canvas;
	function init(){
	    earth = new Image();
	    earth.src = "images/earth.png";
	 
	    canvas = document.querySelector("#mycanvas");
	    ctx = canvas.getContext("2d");
	 
	    earth.onload = function (){
	        draw()
	    };
	 
	}
	init();
	function draw(){
	    ctx.clearRect(0, 0, 300, 300); //清空所有的内容
		ctx.fillStyle = "rgba(255, 255, 255, 0)";
		ctx.fillRect(0,0,canvas.width,canvas.height);//画宇宙背景
	    ctx.save();
	    ctx.translate(150, 150);
		/*绘制 太阳*/
		let rdsun = ctx.createRadialGradient(0,0,10,0,0,40);
		rdsun.addColorStop(0,"red");
		rdsun.addColorStop(1,"yellow");
		ctx.fillStyle = rdsun;
		ctx.beginPath();
		ctx.arc(0,0,50,0,2*Math.PI,false);
		ctx.closePath();
		ctx.fill();
	 
	    //绘制earth轨道
	    ctx.beginPath();
	    ctx.strokeStyle = "rgba(255,0,0,1.0)";
	    ctx.arc(0, 0, 100, 0, 2 * Math.PI)
		ctx.closePath();
	    ctx.stroke()
	 
	    let time = new Date();
	    //绘制地球
	    ctx.rotate(2 * Math.PI / 60 * time.getSeconds() + 2 * Math.PI / 60000 * time.getMilliseconds())
	    ctx.translate(100, 0);
	    ctx.drawImage(earth, -15, -15,30,30)
	 
	    //绘制月球轨道
	    ctx.beginPath();
	    ctx.strokeStyle = "rgba(0,255,0,1.0)";
	    ctx.arc(0, 0, 40, 0, 2 * Math.PI);
		ctx.closePath();
	    ctx.stroke();
	 
	    //绘制月球
	    ctx.rotate(2 * Math.PI / 6 * time.getSeconds() + 2 * Math.PI / 6000 * time.getMilliseconds());
	    ctx.translate(40, 0);
	    let rdmoon = ctx.createRadialGradient(0,0,10,0,0,40);
	    rdmoon.addColorStop(0,"lightskyblue");
	    rdmoon.addColorStop(1,"yellow");
	    ctx.fillStyle = rdmoon;
	    ctx.beginPath();
	    ctx.arc(0,0,10,0,2*Math.PI,false);
	    ctx.closePath();
	    ctx.fill();
		
	    ctx.restore();
	 
	    requestAnimationFrame(draw);
	}
});
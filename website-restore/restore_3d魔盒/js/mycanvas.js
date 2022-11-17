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
	    ctx.strokeStyle = "rgba(255,0,0,0.5)";
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
	    ctx.strokeStyle = "rgba(0,255,0,0.5)";
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
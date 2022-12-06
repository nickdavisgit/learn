$(function(){
	//获取浏览器窗口宽、高
	const window_h = $(window).height();
	const window_w = $(window).width();
	//获取登录框的宽、高
	const login_w = $("#login").width();
	const login_h = $("#login").height();
	//让登录窗口剧中
	$("#login").css({
		"top":((window_h/2)-(login_h/2))+"px",
	});
	console.log("浏览器的宽度和高度为:"+window_w+","+window_h);
	//获取画布
	const canvas_m = document.getElementById("canvas-main");
	//设置canvas画布的大小
	$(canvas_m).prop("width",window_w);
	$(canvas_m).prop("height",window_h);
	//获取画笔
	const ctx = canvas_m.getContext("2d");
	
	main();
	
	//函数区域。。。。
	function clearCanvas(canvas){
		canvas.width = canvas.width;
	}
	async function draw(){
		clearCanvas(canvas_m);
		drawDate(100,100);
		drawRadar((window_w-300),(window_h-150));
		drawInfo();
		let time = new Date();
		ctx.strokeStyle = "aqua";
		ctx.save();
		ctx.translate(window_w/2,window_h/2);
		
		/*绘制顶部横线*/
		ctx.fillStyle = "aqua";
		for(let i = 0;i<=20;i++){
			ctx.beginPath();
			ctx.rect((-300+(i*12)),(-300-(i/2)),(1+i),(1+i));
			ctx.closePath();
			ctx.fill();
		}
		
		for(let i = 0;i<=20;i++){
			ctx.beginPath();
			ctx.rect((300-(i*12)),(-300-(i/2)),(1+i),(1+i));
			ctx.closePath();
			ctx.fill();
		}
		
		ctx.beginPath();
		ctx.arc(0,0,210,0,2*Math.PI);
		ctx.closePath();
		ctx.stroke();
		
		ctx.beginPath();
		ctx.lineWidth = 5;
		ctx.arc(0,0,200,0,2*Math.PI);
		ctx.closePath();
		ctx.stroke();
		
		ctx.beginPath();
		ctx.lineWidth = 25;
		ctx.rotate((2 * Math.PI / 60 * time.getSeconds() + 2 * Math.PI / 60000 * time.getMilliseconds())*10);
		ctx.arc(0,0,180,0,Math.PI/2);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.lineWidth = 25;
		ctx.rotate((2 * Math.PI / 60 * time.getSeconds() + 2 * Math.PI / 60000 * time.getMilliseconds())*15);
		ctx.arc(0,0,150,0,Math.PI/2);
		ctx.stroke();
		
		ctx.restore();
		requestAnimationFrame(draw);
	}
	function drawDate(x,y){
		let time = new Date();
		let year = time.getFullYear();
		let month = time.getMonth()+1;
		let date = time.getDate();
		let day = time.getDay()+1;
		let hours = time.getHours();
		let minutes = time.getMinutes();
		let seconds = time.getSeconds();
		ctx.strokeStyle = "aqua";
		ctx.save();
		ctx.translate(x,y);
		ctx.beginPath();
		ctx.lineWidth = 2.5;
		ctx.arc(0,0,60,0,2*Math.PI);
		ctx.closePath();
		ctx.stroke();
		ctx.beginPath();
		ctx.lineWidth = 5;
		ctx.arc(0,0,50,0,2*Math.PI);
		ctx.closePath();
		ctx.stroke();
		ctx.beginPath();
		ctx.lineWidth = 7.5;
		ctx.arc(0,0,40,Math.PI/2,Math.PI);
		ctx.stroke();
		ctx.font = "20px sans-serif";
		ctx.fillText(year+"年", -30, 0);
		
		/*绘制电路版*/
		ctx.lineWidth =1;
		ctx.beginPath();
		ctx.arc(60,-50,5,0,2*Math.PI);
		ctx.closePath();
		ctx.stroke();
		ctx. beginPath();
		ctx.moveTo(60,-50);
		ctx.lineTo(100,-80);
		ctx.lineTo(200,-80);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.arc(-20,-80,5,0,2*Math.PI);
		ctx.closePath();
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(-20,-80);
		ctx.lineTo(-80,-80);
		ctx.lineTo(-80,450);
		ctx.lineTo(80,450);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(80,450,5,0,2*Math.PI);
		ctx.closePath();
		ctx.stroke();
		
		
		ctx.translate(200,-20);
		ctx.beginPath();
		ctx.lineWidth = 2.5;
		ctx.arc(0,0,50,0,2*Math.PI);
		ctx.closePath();
		ctx.stroke();
		ctx.beginPath();
		ctx.lineWidth = 5;
		ctx.arc(0,0,40,0,2*Math.PI);
		ctx.closePath();
		ctx.stroke();
		ctx.beginPath();
		ctx.lineWidth = 7.5;
		ctx.arc(0,0,30,Math.PI/2,Math.PI);
		ctx.stroke();
		ctx.font = "20px sans-serif";
		ctx.fillText(month+"月", -20, 0);
		
		/*绘制电路版*/
		ctx.lineWidth =1;
		ctx.beginPath();
		ctx.moveTo(60,0);
		ctx.lineTo(100,50);
		ctx.lineTo(200,50);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(200,50,5,0,2*Math.PI);
		ctx.closePath();
		ctx.stroke();
		
		ctx.translate(-200,200);
		ctx.beginPath();
		ctx.lineWidth = 2.5;
		ctx.arc(0,0,40,0,2*Math.PI);
		ctx.closePath();
		ctx.stroke();
		ctx.beginPath();
		ctx.lineWidth = 5;
		ctx.arc(0,0,30,0,2*Math.PI);
		ctx.closePath();
		ctx.stroke();
		ctx.beginPath();
		ctx.lineWidth = 7.5;
		ctx.arc(0,0,20,Math.PI/2,Math.PI);
		ctx.stroke();
		ctx.font = "20px sans-serif";
		ctx.fillText(date+"日", -15, 0);
		
		/*绘制电路版*/
		ctx.lineWidth =1;
		ctx.beginPath();
		ctx.moveTo(60,0);
		ctx.lineTo(100,80);
		ctx.lineTo(300,80);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(300,80,5,0,2*Math.PI);
		ctx.closePath();
		ctx.stroke();
		
		ctx.translate(150,200);
		ctx.beginPath();
		ctx.lineWidth = 2.5;
		ctx.arc(0,0,50,0,2*Math.PI);
		ctx.closePath();
		ctx.stroke();
		ctx.beginPath();
		ctx.lineWidth = 5;
		ctx.arc(0,0,40,0,2*Math.PI);
		ctx.closePath();
		ctx.stroke();
		ctx.beginPath();
		ctx.lineWidth = 7.5;
		ctx.arc(0,0,30,Math.PI/2,Math.PI);
		ctx.stroke();
		ctx.font = "20px sans-serif";
		ctx.fillText("星期"+day, -20, 0);
		
		/*绘制电路版*/
		ctx.lineWidth =1;
		ctx.beginPath();
		ctx.arc(60,0,5,0,2*Math.PI);
		ctx.closePath();
		ctx.stroke();
		ctx. beginPath();
		ctx.moveTo(60,0);
		ctx.lineTo(100,50);
		ctx.lineTo(300,50);
		ctx.stroke();
		
		
		ctx.translate(-50,-300);
		ctx.beginPath();
		ctx.lineWidth = 2.5;
		ctx.closePath();
		ctx.strokeRect(0,0,200,50);
		ctx.beginPath();
		ctx.lineWidth = 4;
		ctx.closePath();
		ctx.strokeRect(5,5,190,40);
		ctx.translate(50,30);
		ctx.font = "20px sans-serif";
		ctx.fillText(hours+":"+minutes+":"+seconds, -20, 2);
		/*绘制电路版*/
		ctx.lineWidth =1;
		ctx.beginPath();
		ctx.arc(60,50,5,0,2*Math.PI);
		ctx.closePath();
		ctx.stroke();
		ctx. beginPath();
		ctx.moveTo(60,50);
		ctx.lineTo(100,80);
		ctx.lineTo(200,80);
		ctx.stroke();
		
		ctx.restore();
	}
	function drawRadar(x,y){
		let time = new Date();
		ctx.strokeStyle = "aqua";
		ctx.save();
		ctx.translate(x, y);
		
		/*绘制电路图*/
		ctx.beginPath();
		ctx.arc(0,-180,5,0,2*Math.PI);
		ctx.closePath();
		ctx.stroke();
		ctx. beginPath();
		ctx.moveTo(0,-180);
		ctx.lineTo(-150,-180);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.arc(-150,-100,5,0,2*Math.PI);
		ctx.closePath();
		ctx.stroke();
		ctx. beginPath();
		ctx.moveTo(-150,-100);
		ctx.lineTo(-50,-100);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.arc(-150,-50,5,0,2*Math.PI);
		ctx.closePath();
		ctx.stroke();
		ctx. beginPath();
		ctx.moveTo(-150,-50);
		ctx.lineTo(-100,-50);
		ctx.stroke();
		
		
		ctx.beginPath();
		ctx.arc(-200,0,5,0,2*Math.PI);
		ctx.closePath();
		ctx.stroke();
		ctx. beginPath();
		ctx.moveTo(-200,0);
		ctx.lineTo(-150,0);
		ctx.lineTo(-120,-20);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.arc(-200,50,5,0,2*Math.PI);
		ctx.closePath();
		ctx.stroke();
		ctx. beginPath();
		ctx.moveTo(-200,50);
		ctx.lineTo(-100,50);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.arc(-150,-150,5,0,2*Math.PI);
		ctx.closePath();
		ctx.stroke();
		ctx. beginPath();
		ctx.moveTo(-150,-150);
		ctx.lineTo(-50,-150);
		ctx.lineTo(-0,-120);
		ctx.stroke();
		
		/*绘制右侧电路版*/
		ctx.beginPath();
		ctx.arc(100,-100,5,0,2*Math.PI);
		ctx.closePath();
		ctx.stroke();
		ctx. beginPath();
		ctx.moveTo(100,-100);
		ctx.lineTo(150,-150);
		ctx.lineTo(200,-150);
		ctx.lineTo(200,150);
		ctx.stroke();
		
		for(let i =0 ;i<=5 ;i++){
			ctx. beginPath();
			ctx.moveTo(250,(-150+(i*50)));
			ctx.lineTo(200,(-150+(i*50)));
			ctx.stroke();
			
			ctx.beginPath();
			ctx.arc(250,(-150+(i*50)),5,0,2*Math.PI);
			ctx.closePath();
			ctx.stroke();
		}
		/*绘制 x,y坐标*/
		ctx.beginPath();
		ctx.moveTo(0,0);
		ctx.lineTo(0,-100);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.moveTo(0,0);
		ctx.lineTo(100,0);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.moveTo(0,0);
		ctx.lineTo(0,100);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.moveTo(0,0);
		ctx.lineTo(-100,0);
		ctx.stroke();
		
		//绘制范围轨道
		ctx.beginPath();
		ctx.strokeStyle = "rgba(0, 184, 182, 0.5)";
		ctx.lineWidth =5;
		ctx.arc(0, 0, 100, 0, 2 * Math.PI)
		ctx.closePath();
		ctx.stroke();
		
		ctx.beginPath();
		ctx.strokeStyle = "aqua";
		ctx.lineWidth =25;
		ctx.arc(0, 0, 80, 0, 2 * Math.PI)
		ctx.closePath();
		ctx.stroke();
		
		ctx.beginPath();
		ctx.strokeStyle = "rgba(0, 73, 72, 0.5)";
		ctx.lineWidth =5;
		ctx.arc(0, 0, 60, 0, 2 * Math.PI)
		ctx.closePath();
		ctx.stroke();
		
		ctx.beginPath();
		ctx.strokeStyle = "rgba(0, 74, 73, 0.5)";
		ctx.lineWidth =20;
		ctx.arc(0, 0, 40, 0, 2 * Math.PI)
		ctx.closePath();
		ctx.stroke();
		
		ctx.beginPath();
		ctx.strokeStyle = "aqua";
		ctx.lineWidth =1;
		ctx.arc(0, 0, 20, 0, 2 * Math.PI)
		ctx.closePath();
		ctx.stroke();
		
		ctx.beginPath();
		ctx.strokeStyle = "aqua";
		ctx.lineWidth =1;
		ctx.arc(0, 0, 10, 0, 2 * Math.PI)
		ctx.closePath();
		ctx.stroke();
		
			 
		//绘制扫描扇形
		ctx.rotate(2 * Math.PI / 60 * time.getSeconds() + 2 * Math.PI / 60000 * time.getMilliseconds());
		
		ctx.beginPath();
		let rds = ctx.createRadialGradient(0,0,10,0,0,40);
		rds.addColorStop(0,"yellow");
		rds.addColorStop(1,"rgba(0,255,0,0.5)");
		ctx.fillStyle = rds;
		ctx.lineWidth = 1;
		ctx.moveTo(0,0);
		ctx.arc(0,0,100,0,Math.PI/6);
		ctx.closePath();
		ctx.fill();
		
		ctx.translate(100, 0);
		
		
		ctx.restore();
	}
	
	async function drawInfo(){
		ctx.lineWidth = 1;
		ctx.strokeStyle = "aqua";
		ctx.save();
		/*绘制信息框*/
		ctx.translate((window_w-300),20);
		ctx.beginPath();
		ctx.rect(0,0,250,250);
		ctx.closePath();
		ctx.stroke();
		
		ctx.beginPath();
		ctx.moveTo(-10,40);
		ctx.lineTo(-50,80);
		ctx.lineTo(-200,80);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.arc(-200, 80, 5, 0, 2 * Math.PI)
		ctx.closePath();
		ctx.stroke();
		
		ctx.lineWidth = 10;
		ctx.beginPath();
		ctx.rect(10,10,230,230);
		ctx.closePath();
		ctx.stroke();
		
		/*写入通知*/
		ctx.font = "20px sans-serif";
		ctx.fillText("欢迎使用智能云系统！",40,40);
		ctx.fillText("重要通知:本系统将于每",20,90);
		ctx.fillText("周日22：00-次日6：00",20,120);
		ctx.fillText("进行定期维护更新！",20,150);
		ctx.fillText("希望您能理解！",50,190);
		ctx.restore();
	}
	
	function randomNum(min,max){
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	function sleep(duration){
		return new Promise(function(resolve,reject){
			setTimeout(resolve,duration);
		});
	}
	
	async function main(){
		console.log("主程序启动");
		draw();
	}
	
});
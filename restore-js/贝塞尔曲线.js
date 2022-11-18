$(function(){
	class Bszer {
		constructor() {
			console.log("贝塞尔曲线类构造函数");
		}
		bszerPoint(points,t){
			let bsx = this.sumBszerX(points,t);
			let bsy = this.sumBszerY(points,t);
			return {x:bsx,y:bsy};
		}
		jiecheng(num){
			if(num<=0){
				return 1;
			}else{
				return num*this.jiecheng(num-1);
			}
		}
		sumBszerX(points,t){
			let bx=0;
			let n=points.length-1;
			for(let i =0 ;i<=n;i++){
				bx += (this.jiecheng(n)/(this.jiecheng(i)*this.jiecheng(n-i)))*Math.pow(t,i)*Math.pow((1-t),(n-i))*points[i].x;
			}
			return bx;
		}
		sumBszerY(points,t){
			let by=0;
			let n=points.length-1;
			for(let i =0 ;i<=n;i++){
				by += (this.jiecheng(n)/(this.jiecheng(i)*this.jiecheng(n-i)))*Math.pow(t,i)*Math.pow((1-t),(n-i))*points[i].y;
			}
			return by;
		}
		bszerPoints(points,step){
			let bszps = [];
			for(let t=0;t<=1;t+=step){
				let point = this.bszerPoint(points,t);
				bszps.push(point);
			}
			return bszps;
		}
		drawBszer(ctx,points,step,color){
			ctx.strokeStyle = color;
			ctx.beginPath();
			for(let t=0;t<=1;t+=step){
				let point = this.bszerPoint(points,t);
				if(t==0){
					ctx.moveTo(point.x,point.y);
				}else{
					ctx.lineTo(point.x,point.y);
				}
				ctx.stroke();
			}
			ctx.restore();
		}
		
	}
	//获取窗口大小
	let window_width = $(window).innerWidth();
	let window_height = $(window).innerHeight();
	const canvas = document.querySelector('canvas');
	//设置canvas铺满屏幕
	canvas.setAttribute('width',window_width);
	canvas.setAttribute('height',window_height);
	const ctx = canvas.getContext("2d");
	ctx.strokeStyle = "red";
	ctx.save();
	const bszer = new Bszer();
	const lines = [];
	const lines_n = 10;
	for(let i=0;i<lines_n;i++){
		let line_l = bszer.bszerPoints([{x:0,y:(i*(window_height/lines_n))},{x:(window_width/2),y:0},{x:(window_width/2),y:window_height}],0.005);
		lines.push(line_l);
		bszer.drawBszer(ctx,[{x:0,y:(i*(window_height/lines_n))},{x:(window_width/2),y:0},{x:(window_width/2),y:window_height}],0.005,"green");
		
		let line_r = bszer.bszerPoints([{x:window_width,y:(i*(window_height/lines_n))},{x:(window_width/2),y:0},{x:(window_width/2),y:window_height}],0.005);
		lines.push(line_r);
		bszer.drawBszer(ctx,[{x:window_width,y:(i*(window_height/lines_n))},{x:(window_width/2),y:0},{x:(window_width/2),y:window_height}],0.005,"green");
	}
	console.log(lines);
	async function mainDraw(){
		while(true){
			await drawBallLine(ctx,lines[randomFun(0,lines_n-1)],30);
			await drawBallLine(ctx,lines[randomFun(0,lines_n-1)],40);
			await drawBallLine(ctx,lines[randomFun(0,lines_n-1)],50);
		}
	}
	mainDraw();
	mainDraw();
	mainDraw();
	mainDraw();
	//画球线函数
	async function drawBallLine(ctx,line,duration){
		canvas.width = canvas.width;
		for(let i=0;i<line.length;i++){
			drawBall(ctx,line[i].x,line[i].y,i*0.09,"aqua");
			await sleep(duration);
		} 
	}
	//画球函数
	function drawBall(ctx,x,y,r,color){
		ctx.fillStyle =color;
		ctx.beginPath();
		ctx.arc(x,y,r,0,2*Math.PI);
		ctx.fill();
	}
	//延迟函数
	function sleep(duration){
		return new Promise(function(resolve,reject){
			setTimeout(resolve,duration);
		});
	}
	//随机数函数
	function randomFun(min,max){
		return Math.floor(Math.random()*(max-min+1)+min);
	}
	
});
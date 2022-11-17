$(function() {
	class Circle{
		constructor(x,y,r){//构造函数
			this.x = x;
			this.y = y;
			this.r = r;
			console.log("圆心是("+this.x+","+this.y+"),半径是"+this.r);
		}
		draw(ctx){
			ctx.fillStyle = "aqua";
			ctx.moveTo(this.x,this.y);
			ctx.arc(this.x,this.y,this.r,0,2*Math.PI,false);
			ctx.fill();
		}
		set cX(nx){
			this.x = nx;
		}
		set cY(ny){
			this.y = ny;
		}
		set cR(nr){
			this.r = nr;
		}
		
	}
	//三阶贝塞尔曲线函数
	function beszer(point,t){
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
	//获取窗口大小
	let window_width = $(window).innerWidth();
	let window_height = $(window).innerHeight();
	let box_login_width = $('#box-login').width();
	let box_login_height = $('#box-login').height();
	
	$('#box-login').css({
		'top':((window_height/2)-(box_login_height/2))+'px',
		'left':((window_width/2)-(box_login_width/2))+'px'
	});
	//获取画布
	const canvas = document.querySelector('canvas');
	//设置canvas铺满屏幕
	canvas.setAttribute('width',window_width);
	canvas.setAttribute('height',window_height);
	const ctx = canvas.getContext('2d');
	//生成曲线点坐标
	function beszerPoints(point){
		const points = [];
		for(let t = 0;t < 1;t += 0.002){
			points.push(beszer(point,t));
		}
		return points;
	}
	const lines = [];
	const lines_n =10;
	for(let n =0;n<lines_n;n++){
		lines.push(beszerPoints([{x:-100,y:n*(window_height/lines_n)},{x:(window_width/2),y:0},{x:(window_width/2),y:(window_height/2)}]));
		lines.push(beszerPoints([{x:window_width+100,y:n*(window_height/lines_n)},{x:(window_width/2),y:0},{x:(window_width/2),y:(window_height/2)}]));
	}
	console.log(lines.length);
	const circle = new Circle(100,100,1);
	async function drawCircle(points,i){
		circle.cX = points[i].x;
		circle.cY = points[i].y;
		circle.cR = i*0.009;
		circle.draw(ctx);
		await sleep(1);
	}
	async function main(){
		let n = randomFun(0,(lines_n*2)-1);
		console.log(n);
		for(let i = 0;i < lines[n].length;i++){
			await drawCircle(lines[n],i);
		}
		canvas.width = canvas.width;
		requestAnimationFrame(main);
	}
	async function mainDraw(){
		await main();
		await main();
		await main();
		await main();
	}
	mainDraw();
	
	
});

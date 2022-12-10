$(function(){
	// 创建画布
	let myCanvas = document.getElementById('canvas-main')
	let myctx = myCanvas.getContext('2d')
	// 自适应窗口
	let width = myCanvas.width = window.innerWidth
	let height = myCanvas.height = window.innerHeight
	window.addEventListener('resize', () => {
	 width = myCanvas.width = window.innerWidth
	 height = myCanvas.height = window.innerHeight
	});
	class Common {
		constructor(name) {
			this.name = name;
			console.log(name);
		}
		randomNums(min,max){
			return Math.floor(Math.random()*(max-min+1))+min;
		}
		
	}
	class Electric extends Common{
		constructor(name,points,r) {
			super(name);
			this.points = points;
			this.r = r;
			console.log(this.points.length);
		}
		draw(ctx){
			ctx.strokeStyle = "aqua";
			ctx.fillStyle = "aqua";
			ctx.save();
			ctx.translate(this.points[0].x,this.points[0].y);
			//画圆点
			ctx.beginPath();
			ctx.arc(this.points[0].x,this.points[0].y,this.randomNums(2,this.r),0,2*Math.PI);
			ctx.fill();
			//画线
			ctx.beginPath();
			ctx.moveTo(this.points[0].x,this.points[0].y);
			for(let i = 1;i<=this.points.length-1;i++){
				ctx.lineTo(this.points[i].x,this.points[i].y);
			}
			ctx.stroke();
			//画圆点
			ctx.beginPath();
			ctx.arc(this.points[this.points.length-1].x,this.points[this.points.length-1].y,this.randomNums(2,this.r),0,2*Math.PI);
			ctx.fill();
			ctx.restore();
			
		}
	}
	for(let i =0;i<5;i++){
		let elec = new Electric('leaf',[
			{x:10,y:10+(i*20)},
			{x:50,y:50+(i*20)},
			{x:150,y:50+(i*20)},
			
		],5);
		elec.draw(myctx);
	}
	for(let i =0;i<5;i++){
		let elec = new Electric('leaf',[
			{x:10+(i*60),y:10},
			{x:50+(i*60),y:50},
			{x:150+(i*60),y:50},
			
		],5);
		elec.draw(myctx);
	}
	
	class Circle extends Common {
		constructor(name,point,r) {
			super(name);
			this.point = point;
			this.r = r;
			this.time = new Date();
		}
		draw(ctx){
			ctx.strokeStyle = "aqua";
			ctx.fillStyle = "auqua";
			ctx.save();
			ctx.translate(this.point.x,this.point.y);
			ctx.clearRect(-this.r,-this.r,2*this.r,2*this.r);
			//画圆
			ctx.beginPath();
			ctx.arc(0,0,this.r,0,2*Math.PI);
			ctx.closePath();
			ctx.stroke();
			ctx.beginPath();
			ctx.arc(0,0,this.r-10,0,2*Math.PI);
			ctx.closePath();
			ctx.stroke();
			
			this.time = new Date();
			ctx.rotate(10*(2*Math.PI/60*this.time.getSeconds()+2*Math.PI/60000*this.time.getMilliseconds()));
			ctx.beginPath();
			ctx.lineWidth = 5;
			ctx.arc(0,0,this.r-5,0,Math.PI/4);
			ctx.stroke();
			
			
			ctx.beginPath();
			ctx.lineWidth = 5;
			ctx.arc(0,0,this.r-5,Math.PI,Math.PI+Math.PI/4);
			ctx.stroke();
			ctx.restore();
		}
	}
	let circle_one = new Circle("circle",{x:100,y:100},100);
	let circle_two = new Circle("circle",{x:300,y:300},100);
	function mainOne(){
		circle_one.draw(myctx);
		requestAnimationFrame(mainOne);
	}
	mainOne();
	function mainTwo(){
		circle_two.draw(myctx);
		requestAnimationFrame(mainTwo);
	}
	mainTwo();
	class Level extends Common{
		constructor(name,point,nums,len,lr){
			super(name);
			this.nums = nums;
			this.point = point;
			this.len = len;
			this.lr = lr;
			
		}
		draw(ctx){
			ctx.fillStyle = "aqua";
			ctx.strokeStyle = "aqua";
			ctx.save();
			ctx.translate(this.point.x,this.point.y);
			if(this.lr){
				ctx.clearRect(0,-(this.len*this.nums/2),(this.len*this.nums*this.nums),(this.len*this.nums));
				for(let i =0;i<=this.nums-1;i++){
					console.log(i);
					ctx.beginPath();
					ctx.rect(0+(i*this.len*this.nums),0-(i*this.len/2),this.len*i,this.len*i);
					ctx.fill();
				}
			}else{
				ctx.clearRect(-(this.len*this.nums*this.nums),-(this.len*this.nums/2),(this.len*this.nums*this.nums),(this.len*this.nums));
				for(let i =0;i<=this.nums-1;i++){
					console.log(i);
					ctx.beginPath();
					ctx.rect(0-(i*this.len*this.nums),0-(i*this.len/2),this.len*i,this.len*i);
					ctx.fill();
				}
			}
			ctx.restore();
			
		}
	}
	let level = new Level("level",{x:500,y:50},15,1,true);
	level.draw(myctx);
	
	
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
			ctx.save();
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
	let bszer = new Bszer();
	let points = bszer.bszerPoints([
		{x:500,y:500},
		{x:510,y:400},
		{x:600,y:600},
		{x:650,y:500}
	],0.05);
	bszer.drawBszer(myctx,points,0.05,"aqua");
	console.log(points);
});
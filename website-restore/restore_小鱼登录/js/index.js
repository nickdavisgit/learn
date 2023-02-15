$(function(){
	let canvas = document.getElementById("myCanvas");
	let ctx = canvas.getContext("2d");
	let wind_w = $(window).innerWidth();
	let wind_h = $(window).innerHeight();
	canvas.width = wind_w;
	canvas.height = wind_h;
	console.log("浏览器可视宽高为:"+wind_w+","+wind_h);
	window.addEventListener('resize', () => {
	 wind_w = canvas.width = window.innerWidth;
	 wind_h = canvas.height = window.innerHeight;
	});
	let fish = new Image();
	fish.onload = function(){
		console.log('fish is onload');
	}
	fish.src = "./images/fishr.png";
	class Wave {
		constructor(name,context) {
			this.ctx = context;
			this.name = name;
			console.log("class name is"+this.name);
		}
		draw(sx,sy,cx,cy,ex,ey,color){
			this.ctx.strokeStyle = color;
			this.ctx.fillStyle = color;
			this.ctx.save();
			//your codes start
			this.ctx.beginPath();
			this.ctx.moveTo(sx,sy);
			this.ctx.quadraticCurveTo(cx,cy,ex,ey);
			//this.ctx.closePath();
			this.ctx.fill();
			//your codes end 
			this.ctx.restore();
		}
		
	}
	let wave = new Wave("wave",ctx);
	function sleep(duration){
		return new Promise(function(resolve,reject){
			setTimeout(resolve,duration);
		});
	}
	//随机数函数
	function randomFun(min,max){
		return Math.floor(Math.random()*(max-min+1)+min);
	}
	let len = 50;
	let uplen = 100;
	let clen = 50;
	let sx = -len,sy = wind_h-(uplen+len+clen),cx = sx+(len/2),cyu = sy-(len/2),cyd = sy+(len/2),ex = sx+len,ey = sy,nums = Math.ceil(wind_w/len)+1,offset = 0,offsetStep = 1,progress = 0,progressStep = 1;
	//水中
	let mvx = 0,mvStep = 1;
	let fxoffset = 0,fxoffsetStep = 100;
	let dir = true;
	async function mainDraw(){
		ctx.fillStyle = "aqua";
		ctx.save();
		//清空屏幕
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.beginPath();
		ctx.moveTo(sx+offset,sy+progress);
		// ctx.quadraticCurveTo(cx,cy,ex,ey); 
		for(let i =0;i<nums;i++){
			if(i%2==0){
				console.log("up"+i);
				ctx.quadraticCurveTo(cx+(len*i)+offset,cyu+progress,ex+(len*i)+offset,ey+progress);
			}else{
				console.log("down"+i);
				ctx.quadraticCurveTo(cx+(len*i)+offset,cyd+progress,ex+(len*i)+offset,ey+progress);
			}
		}
		console.log(offset);
		ctx.lineTo(len*nums,sy+len+uplen+clen);
		ctx.lineTo(sx,sy+len+uplen+clen);
		ctx.closePath();
		ctx.fill();
		//水中start
		/* ctx.fillStyle = "red";
		ctx.beginPath();
		ctx.arc(mvx,sy+len+progress,5,0,2*Math.PI);
		ctx.closePath();
		ctx.fill(); */
		ctx.drawImage(fish,fxoffset,0,100,100,mvx,sy+len+progress,100,100);
		//水中end
		ctx.restore();
		offset += offsetStep;
		if (offset > len || offset < 0) {
			offsetStep *= -1;
		}
		progress += progressStep;
		if (progress > uplen || progress < 0) {
			progressStep *= -1;
		}
		mvx += mvStep;
		if(mvx > wind_w+10 || mvx < -10){
			mvStep *=-1;
			if(dir){
				dir = false;
				fish.src = "./images/fishl.png";
			}else{
				dir = true;
				fish.src = "./images/fishr.png";
			}
		}
		fxoffset += fxoffsetStep;
		await sleep(40);
		//alert(fxoffset);
		if(fxoffset >= 500 || fxoffset <=0){
			fxoffsetStep *=-1;
		}
		console.log(progress+"h");
		requestAnimationFrame(mainDraw);
	}
	mainDraw();
});
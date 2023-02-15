
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
	async function drawWaveLeft(){
		for(let i = 1;i<=20;i++){
			console.log(i);
			canvas.width = canvas.width;
			wave.draw(0,200,0+(i*10),100,200,200,"red");
			await sleep(100);
		}
	}
	async function drawWaveRight(){
		for(let i = 1;i<=20;i++){
			console.log(i);
			canvas.width = canvas.width;
			wave.draw(0,200,200-(i*10),100,200,200,"red");
			await sleep(100);
		}
	}
	async function drawWaveUp(){
		for(let i = 1;i<=20;i++){
			console.log(i);
			canvas.width = canvas.width;
			wave.draw(0,200,100,300-(i*10),200,200,"red");
			await sleep(100);
		}
	}
	async function drawWaveDown(){
		for(let i = 1;i<=20;i++){
			console.log(i);
			canvas.width = canvas.width;
			wave.draw(0,200,100,100+(i*10),200,200,"red");
			await sleep(100);
		}
	}
	let i = 0;
	let isleft = true;
	let step = 2;
	let sx = -200,sy = 200,ex = 0,ey = 200,cx = -100,cy = 100;
	let n = wind_w+200;
	async function main(){
		canvas.width = canvas.width;
		if(isleft){
			wave.draw(sx+i,sy,cx+i-(i%10+1),cy,ex+i,ey,"aqua");
			console.log((i%10+1));

		}else{
			wave.draw(sx-i,sy,cx-i+50,cy,ex-i,ey,"aqua");
		}
		if(i>=n){
			if(isleft){
				sx = sx+i;
				cx = cx+i;
				ex = ex+i;
				isleft = false;
			}else{
				sx = -200;
				cx = -100;
				ex = 0;
				isleft = true;
			}
			i=0;
		}
		i +=1;
		requestAnimationFrame(main);
	} 
	main();
});


/* $(function(){
	let wind_w = $(window).innerWidth();
	let wind_h = $(window).innerHeight();
	let waveWidth = wind_w+300,
	    offset = 0,
	    waveHeight = 8,
	    waveCount = 15,
	    progress = 0,
	    progressStep = 1,
	    d2 = Math.ceil((waveWidth / waveCount)),
	    d = Math.ceil(d2 / 2),
	    hd = Math.ceil(d / 2),
		startX = -300,
		startY = Math.ceil(wind_h/8)*6,
	    c = document.getElementById("myCanvas"),
	    ctx = c.getContext("2d");
		c.width = wind_w;
		c.height = wind_h;
		console.log("d2:"+d2);
		console.log("d:"+d);
		console.log("hd:"+hd);
		console.log("浏览器可视宽高为:"+wind_w+","+wind_h);
		window.addEventListener('resize', () => {
		 wind_w = c.width = window.innerWidth;
		 wind_h = c.height = window.innerHeight;
		});
		ctx.fillStyle = "aqua";
	
	function tick() {
	    offset -= 1;
	    progress += progressStep;
	    if (progress > 100 || progress < 0) {
			progressStep *= -1;
		}
	    if (-1 * offset === d2) {
			offset = 0;
		}
	    ctx.clearRect(0, 0, c.width, c.height);
	    ctx.beginPath();
	    let offsetY = startY - progress;
	    ctx.moveTo(startX - offset, offsetY);
	
	    for (let i = 0; i < waveCount; i++) {
	        let dx = i * d2;
	        let offsetX = dx + startX - offset;
	        ctx.quadraticCurveTo(offsetX + hd, offsetY + waveHeight, offsetX + d, offsetY);
	        ctx.quadraticCurveTo(offsetX + hd + d, offsetY - waveHeight, offsetX + d2, offsetY);
	    }
	    ctx.lineTo(startX + waveWidth, wind_h);
	    ctx.lineTo(startX, wind_h);
	    ctx.fill();
	
	    requestAnimationFrame(tick);
	}
	
	tick();

}); */
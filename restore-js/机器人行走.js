$(function(){
	//获取窗口大小
	let window_width = $(window).innerWidth();
	let window_height = $(window).innerHeight();
	const canvas = document.getElementById("canvas-bg");
	//设置canvas铺满屏幕
	canvas.setAttribute('width',window_width);
	canvas.setAttribute('height',window_height);
	//获取context
	const ctx = canvas.getContext('2d');
	const human = new Image();
	let direction = true;//true为向左false为向右
	let human_x = 0;
	let human_y = 0;
	let human_width = 0;
	let human_height = 0;
	let human_step = 0;
	let step_duration = 100;
	let step = 10;
	let step_num = (window_width+200)/step;
	let step_total = step_num*step_duration;
	console.log("共走"+step_num+"步");
	human.onload = function(){
		human_width = human.width;
		human_height = human.height;
		if(direction){
			async function walkStep(){
				for(let i = 0;i<step_num;i++){
					await walk(-100+(i*10),100,i);
				}
			}
			walkStep();
		}else{
			async function walkStep(){
				for(let i = 0;i<step_num;i++){
					await walk((window_width+100)-(i*10),100,i);
				}
			}
			walkStep();
		}
	}
	async function walkToLeft(){
		console.log('left');
		human.src = 'images/personleft.png';
		direction = true;
		await sleep(step_total);
	}
	async function walkToRight(){
		console.log('right');
		human.src = 'images/personright.png';
		direction = false;
		await sleep(step_total+1000);
	}
	async function walk(x,y,step){
		canvas.width = canvas.width;
		ctx.drawImage(human,(human_width/5)*(step%5),0,(human_width/5),human_height,x,y,(human_width/5),human_height);
		await sleep(step_duration);
	}
	function sleep(duration){
		return new Promise(function(resolve,reject){
			setTimeout(resolve,duration);
		});
	}
	async function main(){
		while(true){
			await walkToLeft();
			await walkToRight();
		}
	}
	main();
});
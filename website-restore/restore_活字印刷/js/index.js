$(function(){
	let box_3d = $(".box-3d");
	let box = $(".box");
	let box_3d_news = [];
	for(let i=0;i<5;i++){
		for(let j=0;j<5;j++){
			console.log("第"+(i+1)+"行,"+(j+1)+"列");
			let box_3d_new = box_3d.clone();
			box.append(box_3d_new);
			box_3d_new.css({
				"display":"block",
				"top":(50*i)+"px",
				"left":(50*j)+"px",
			});
			box_3d_news.push(box_3d_new);
		}
	}
	function randomNums(min,max){
		return Math.floor(Math.random()*(max-min+1)+min);
	}
	function sleep(duration){
		return new Promise(function(resolve){
			setTimeout(resolve,duration);
		});
	}
	async function changeAnim(){
		let rn = randomNums(0,(box_3d_news.length-1));
		console.log("第"+rn+"颗");
		let childs = box_3d_news[rn].children("div");
		for(let i=0;i<childs.length;i++){
			$(box_3d_news[rn].children("div")[i]).css({
				"animation": "flight 3s linear 0s infinite",
			});
		}
		box_3d_news[rn].addClass("animaton3d");
		await sleep(5000);
		box_3d_news[rn].removeClass("animaton3d");
		for(let i=0;i<childs.length;i++){
			$(box_3d_news[rn].children("div")[i]).css({
				"animation": "",
			});
		}
	}
	async function main(){
		while(true){
			await changeAnim();
		}
	}
	main();
	
	/* 
	
	box_3d_news[5].css({
		"background-color":"red",
	});
	box_3d_news[5].addClass("animaton3d");
	
	for(let n=1;n<3;n++){
		console.log("第"+(n)+"层");
		let box_new = box.clone();
		$("body").append(box_new);
		box_new.css({
			"transform":"rotateX(45deg) rotateY(30deg) translateZ("+(50*n+10*n)+"px)",
		});
	} 
	
	*/
});
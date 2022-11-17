$(function(){
	function sleep(duration){
		return new Promise(function(resolve){
			setTimeout(resolve,duration);
		});
	}
	async function changeColor(color,duration){
		$('#box-preserve-3d div').css({
			"border": "1px solid "+color,
			"background-image": "radial-gradient("+color+", yellow, aqua)"
		});
		await sleep(duration);
	}
	async function main(){
		while(true){
			await changeColor("green",3000);
			await changeColor("blue",1000);
			await changeColor("red",2000);
		}
	}
	main();
	function overZfx(){
		$('#box-preserve-3d').css({'animation':'xuanzhuan 10s ease 1s 0 reverse backwards'});
		$('#loginbox').css({'display':'block'});
	}
	function outZfx(){
		$('#box-preserve-3d').css({'animation':'xuanzhuan 10s ease 1s infinite reverse none',});
		$('#loginbox').css({'display':'none'});
	}
	$('#box-preserve-3d').on('mouseover',function(){
		overZfx();
	});
	$('#box-preserve-3d').on('mouseout',function(){
		outZfx();
	});
});
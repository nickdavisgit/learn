$(function(){
	function suijishu(min,max){
		return Math.floor(Math.random()*(max-min+1)+min);
	}
	function sleep(duration){
		return new Promise(function(resolve){
			setTimeout(resolve,duration);
		});
	}
	
	let window_w = $(window).width();
	let window_h = $(window).height();
	
	let box_login_width = $('#box-login').width();
	let box_login_height = $('#box-login').height();
	
	$('#box-login').css({
		'top':((window_h/2)-(box_login_height/2))+'px',
		'left':((window_w/2)-(box_login_width/2))+'px'
	});
	$('#box-bullte').css({
		'width':(window_w)+'px',
		'height':(window_h)+'px',
	});
	let bullte_height = Math.floor(window_h/20);
	let bullte_width = bullte_height+10;
	let row_n = Math.floor(window_h/bullte_height);
	async function danmu(mtop,duration){
		await sleep(duration*1000);
		let bullte = $('<div></div>');
		$('#box-bullte').append(bullte);
		bullte.css({
			'height':(bullte_height-5)+'px',
			'width':(bullte_width)+'px',
			'position':'absolute',
			'margin-top':(mtop)+'px',
			'margin-left':(-bullte_width)+'px',
			'border-radius':Math.floor(bullte_height/4)+'px',
			'background-image': 'url("images/cloud.png")',
			'background-size': (bullte_width)+'px '+(bullte_height)+'px'
		});
		bullte.animate({
			'margin-left': (window_w)+'px',
		},20000,function(){
			bullte.remove();
			danmu(mtop,suijishu(0,20));
		});
	}
	
	for (let i =0;i<row_n;i++) {
		danmu(bullte_height*i,suijishu(0,20));
	}
	
	
	
	
	
});
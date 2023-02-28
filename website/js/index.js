function ifload(iframe){
	var bheight = $('.layui-body').css('height');
	console.log(parseInt(bheight)+'bheight');
	var pheight = $(iframe).parent().parent().parent().css('height');
	console.log(parseInt(pheight)+'pheight');
	$(iframe).parent().css({
		'height':(parseInt(pheight)-60)+'px',
	});
}
function ifload(iframe){
	var bheight = $('.layui-body').css('height');
	var pheight = $(iframe).parent().parent().parent().css('height');
	$(iframe).parent().css({
		'height':(parseInt(pheight)-60)+'px',
	});
}
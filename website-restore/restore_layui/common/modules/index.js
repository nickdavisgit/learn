layui.define(function(exports){
	var element = layui.element,
		layer = layui.layer,
		util = layui.util,
		$ = layui.$;
		//头部事件
		util.event('lay-header-event', {
			//左侧菜单事件
			menuLeft: function() {
				if ($('.layui-side').css('left') == '0px') {
					$('.layui-side').css({
						'left': '-200px',
					});
				} else {
					$('.layui-side').css({
						'left': '0px',
					});
				}
				if ($('.layui-body').css('left') == '200px') {
					$('.layui-body').css({
						'left': '0px',
					});
				} else {
					$('.layui-body').css({
						'left': '200px',
					});
				}
		
				if ($('.layui-footer').css('left') == '200px') {
					$('.layui-footer').css({
						'left': '0px',
					});
				} else {
					$('.layui-footer').css({
						'left': '200px',
					});
				}
		
			},
			menuRight: function() {
				layer.open({
					type: 1,
					content: '<div style="padding: 15px;">处理右侧面板的操作</div>',
					area: ['260px', '100%'],
					offset: 'rt' //右上角
						,
					anim: 5,
					shadeClose: true
				});
			},
			lgout:function(){
				layer.msg('退出');
			}
		});
		//头部事件结束
		//左侧导航事件
		element.on('nav(navSide)',function(ele){
			if($(ele).attr('url') != undefined){
				if($('li[lay-id="'+$(ele).attr('url')+'"]').length && $('li[lay-id="'+$(ele).attr('url')+'"]').length>0){
					element.tabChange('iframeTab', $(ele).attr('url')); //切换到 lay-id="yyy" 的这一项
				}else{
					element.tabAdd('iframeTab', {
					  title: $(ele).html()
					  ,content: '<iframe onload="ifload(this);" src="./pages/'+$(ele).attr('url')+'.html" width="100%" height="100%"></iframe>' //支持传入html
					  ,id: $(ele).attr('url')
					});
					element.tabChange('iframeTab', $(ele).attr('url')); //切换到 lay-id="yyy" 的这一项
				}
			}
			
		});
		//左侧导航事件结束
	exports('index', {msg:'This is page index.html`s modules'}); //注意，这里是模块输出的核心，模块名必须和 use 时的模块名一致
}); 
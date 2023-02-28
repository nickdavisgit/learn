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
			}
		});
		//头部事件结束
		//递归实现无限极导航
		var  navC = [
			'ul[lay-filter="navSide"]',
			'<li class="layui-nav-item"></li>',
			'<dl class="layui-nav-child"></dl>',
			'<dd></dd>'
		]
		function dTree(data,r,c,d){
			$.each(data,function(i,v){
				if(v['children'].length==0){
					console.log(d+'不用继续递归'+v['title']);
					$(c).append('<a href="javascript:;">'+v['title']+'</a>').appendTo(r);
				}else if(v['children'].length > 0){
					console.log(d+'继续递归'+v['title']);
					var ndl = $(navC[2]);
					$(c).append('<a href="javascript:;">'+v['title']+'</a>').append(ndl).appendTo(r);
					dTree(v['children'],ndl,navC[3],d+1);
					
				}
			});
			element.render('nav', 'navSide');
		}
		function navTree(data,deep){
			console.log(deep+'级');
			$.each(data,function(i,v){
				if(v['children'].length==0){
					console.log(deep+'不用继续递归'+v['title']);
					$(navC[1]).append('<a href="javascript:;">'+v['title']+'</a>').appendTo($(navC[0]));
				}else if(v['children'].length > 0){
					console.log(deep+'继续递归'+v['title']);
					var ndl = $(navC[2])
					$(navC[1]).append('<a href="javascript:;">'+v['title']+'</a>').append(ndl).appendTo($(navC[0]));
					dTree(v['children'],ndl,navC[3],deep+1);
					
				}
			});
			element.render('nav', 'navSide');
		}
		navTree([
			{id:1,title:'设置',children:[],pid:0},
			{id:2,title:'部门管理',children:[
				{id:21,title:'人员信息管理',children:[
					{id:211,title:'test',children:[
						{id:2111,title:'test2',children:[]}
					]},
					{id:212,title:'test3',children:[]}
				],pid:2},
				{id:22,title:'权限管理',children:[],pid:2},
				{id:23,title:'部门管理',children:[],pid:2},
			],pid:0},
			{id:1,title:'设d置',children:[],pid:0},
		],0);
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
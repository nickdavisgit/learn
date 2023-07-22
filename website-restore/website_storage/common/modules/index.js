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
		//递归实现无限极导航
		var  navC = [
			'ul[lay-filter="navSide"]',
			'<li class="layui-nav-item"></li>',
			'<dl class="layui-nav-child"></dl>',
			'<dd></dd>'
		];
		function navTree(data,r,c,deep){
			$.each(data,function(i,v){
				if(v['children'].length==0){
					$(c).append('<a href="javascript:;" url="'+v['url']+'"><i class="layui-icon '+v['icon']+'"></i>'+v['title']+'</a>').appendTo($(r));
				}else if(v['children'].length > 0){
					var ndl = $(navC[2]);
					$(c).append('<a href="javascript:;"><i class="layui-icon '+v['icon']+'"></i>'+v['title']+'</a>').append(ndl).appendTo($(r));
					navTree(v['children'],ndl,navC[3],deep+1);
					
				}
			});
			element.render('nav', 'navSide');
		}
		navTree([
			{id:1,title:'首页',url:'home',icon:'layui-icon-home',children:[],pid:0},
			{id:2,title:'部门管理',url:'',icon:'layui-icon-group',children:[
				{id:21,title:'部门组建',url:'deptgroup',icon:'layui-icon-group',children:[],pid:2},
				{id:22,title:'用户管理',url:'userinfo',icon:'layui-icon-group',children:[],pid:2},
			],pid:0},
			{id:3,title:'学生管理',url:'',icon:'layui-icon-group',children:[
				{id:31,title:'班级管理',url:'class',icon:'layui-icon-group',children:[],pid:3},
				{id:32,title:'学生管理',url:'studentinfo',icon:'layui-icon-group',children:[],pid:3},
				{id:33,title:'成绩查询',url:'searchmark',icon:'layui-icon-group',children:[],pid:3},
			],pid:0},
			{id:4,title:'权限设置',url:'',icon:'layui-icon-auz',children:[
				{id:41,title:'权限管理',url:'auth',icon:'layui-icon-group',children:[],pid:4},
				{id:42,title:'导航管理',url:'rules',icon:'layui-icon-group',children:[],pid:4},
			],pid:0},
			{id:5,title:'学校通知',url:'schoolnotice',icon:'layui-icon-group',children:[],pid:0},
			
		],navC[0],navC[1],0);
		//递归实现无限极导航结束
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
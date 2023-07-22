$(function(){
	/* layui.config({
		base: '../common/modules/' //你存放新模块的目录，注意，不是 layui 的模块目录
	}).use('rules', function() {
		console.log(layui.rules);
	}); //加载入口 */
	var element = layui.element,
		layer = layui.layer,
		util = layui.util,
		tree = layui.tree,
		table = layui.table,
		form = layui.form,
		$ = layui.$;
		//树形组件
		tree.render({
			elem:'#rulesTree',
			edit: ['add', 'update', 'del'],
			data:[
				{id:1,title:'首页',children:[]},
				{id:2,spread:true,title:'部门管理',children:[
					{id:21,title:'部门管理',children:[]},
					{id:22,title:'用户管理',children:[]},
					{id:23,title:'权限管理',children:[]},
				]},
			],
			id:'rsTree',
			operate: function(obj){
				var type = obj.type; //得到操作类型：add、edit、del
				var data = obj.data; //得到当前节点的数据
				var elem = obj.elem; //得到当前节点元素
				if(type === 'add'){
					console.log('add:'+data.id);
					return 5;
				}else if(type === 'update'){
					console.log('edit:'+data.id);
				}else if(type === 'del'){
					console.log('del:'+data.id);
				}
			},
		});
		//树形组件结束
		//数据表格
		table.render({
		    elem: '#rulesTable'
		    ,height: 'full-20'
		    ,url: ''//数据接口
		    ,data:[
				{id:1,name:'Index/index',title:'首页',status:1},
				{id:2,name:'Index/user',title:'用户管理',status:1},
				{id:2,name:'Index/student',title:'学生信息',status:1},
			]
			,page: true //开启分页
		    ,toolbar: '#toolbarTop'
			,cols: [[ //表头
				{checkbox: true,field: 'id', title: 'ID', width:30, sort: true, fixed: 'left'}
				,{field: 'name', title: '规则'}
				,{field: 'title', title: '导航名称'}
				,{field: 'status', title: '状态',templet:function(d){
					if(d.status == 1){
						return "启用";
					}else if(d.status == 0){
						return "禁用";
					}
				}}
				,{title:'操作',fixed: 'right', align:'center', toolbar: '#barCols'} //这里的toolbar值是模板元素的选择器
		    ]]
			,id:'rTable'
			,limits:[5,10,20]
			
		});
		//表头工具栏触发事件
		table.on('toolbar(rulesT)', function(obj){
		  var checkStatus = table.checkStatus(obj.config.id);//获取选中行的数据
		  console.log(checkStatus);
		  switch(obj.event){
			  case 'add':
			  layer.msg('添加');
			  layer.open({
				  type:1,
				  title:'新增部门',
				  content:$('#rules'),
			  })
			  break;
		    case 'update':
		      layer.msg('编辑');
		    break;
		    case 'delete':
		      layer.msg('删除');
		    break;
			case 'search':
				layer.msg('搜索');
			break;
		  };
		});
		//行工具条事件
		table.on('tool(rulesT)', function(obj){
			var data = obj.data; //获得当前行数据
			var layEvent = obj.event; //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
			if(layEvent === 'on'){ //启用
				layer.msg('行启用');
			}else if(layEvent === 'edit'){ //编辑
				layer.msg('行编辑');
			}else if(layEvent === 'off'){ //禁用
			    layer.msg("行禁用")
			}
		});
		//数据表格结束
});

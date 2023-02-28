layui.define(function(exports){
	var element = layui.element,
		layer = layui.layer,
		util = layui.util,
		tree = layui.tree,
		table = layui.table,
		form = layui.form,
		$ = layui.$;
		//树形组件
		tree.render({
			elem:'#authTree',
			edit: ['add', 'update', 'del'],
			data:[
				{id:0,spread:true,title:'xx学校',children:[
					{id:1,title:'数学组',spread:true,children:[{title:'高中数学组'}]},
					{id:2,title:'物理组',spread:true,children:[{title:'高中物理组'}]},
					{id:3,title:'语文组',spread:true,children:[{title:'高中语文组'}]},
					{id:4,title:'英语组',spread:true,children:[{title:'高中英语组'}]},
				]},
			],
			id:'atTree',
			showCheckbox:true,
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
		    elem: '#authTable'
		    ,height: 'full-20'
		    ,url: ''//数据接口
		    ,data:[
				{id:1,title:'超级管理员',status:1},
				{id:2,title:'普通用户',status:0},
				{id:3,title:'系统管理员',status:1},
			]
			,page: true //开启分页
		    ,toolbar: '#toolbarTop'
			,cols: [[ //表头
				{checkbox: true,field: 'id', title: 'ID', width:30, sort: true, fixed: 'left'}
				,{field: 'title', title: '权限组',align:'center'}
				,{field:'status',title:'状态',align:'center',templet:function(d){
					if(d.status == 1){
						return "启用";
					}else if(d.status == 0){
						return "禁用";
					}
				}}
				,{title:'操作',fixed: 'right', align:'center', toolbar: '#barCols'} //这里的toolbar值是模板元素的选择器
		    ]]
			,id:'aTable'
			,limits:[5,10,20]
			
		});
		//表头工具栏触发事件
		table.on('toolbar(authT)', function(obj){
		  var checkStatus = table.checkStatus(obj.config.id);//获取选中行的数据
		  console.log(checkStatus);
		  switch(obj.event){
			  case 'add':
			  layer.msg('添加');
			  layer.open({
				  type:1,
				  title:'新增权限组',
				  content:$('#auth'),
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
		table.on('tool(authT)', function(obj){
			var data = obj.data; //获得当前行数据
			var layEvent = obj.event; //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
			if(layEvent === 'on'){ //启用
				layer.msg('行启用');
			}else if(layEvent === 'auth'){ //授权
				layer.msg('行授权');
				layer.open({
					title:'授权操作',
					type:1,
					area:'400px',
					content:$('#authTree')
				})
			}else if(layEvent === 'off'){ //禁用
			    layer.msg('行禁用');
			}
		});
		//数据表格结束

	exports('auth', {msg:'This is page auth.html`s modules'}); //注意，这里是模块输出的核心，模块名必须和 use 时的模块名一致
}); 
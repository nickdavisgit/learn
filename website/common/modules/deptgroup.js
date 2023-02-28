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
			elem:'#deptTree',
			edit: ['add', 'update', 'del'],
			data:[
				{id:0,spread:true,title:'xx学校',children:[
					{id:1,title:'校长办',children:[]},
					{id:2,title:'教师部',children:[
						{id:21,title:'高中物理组'},
						{id:22,title:'高中数学组'},
						{id:23,title:'高中语文组'},
						{id:24,title:'高中英语组'},
					]},
					{id:3,title:'教务部',children:[]},
				]},
			],
			id:'dtTree',
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
		    elem: '#deptTable'
		    ,height: 'full-20'
		    ,url: ''//数据接口
		    ,data:[
				{id:1,pname:'数学组'},
				{id:2,pname:'语文组'},
				{id:3,pname:'英语组'},
				{id:4,pname:'化学组'},
				{id:5,pname:'地理组'},
				{id:6,pname:'物理组'},
				{id:7,pname:'历史组'},
			]
			,page: true //开启分页
		    ,toolbar: '#toolbarTop'
			,cols: [[ //表头
				{checkbox: true,field: 'id', title: 'ID', width:30, sort: true, fixed: 'left'}
				,{field: 'pname', title: '部门名称',align:'center'}
				,{title:'操作',fixed: 'right', align:'center', toolbar: '#barCols'} //这里的toolbar值是模板元素的选择器
		    ]]
			,id:'dTable'
			,limits:[5,10,20]
			
		});
		//表头工具栏触发事件
		table.on('toolbar(deptT)', function(obj){
		  var checkStatus = table.checkStatus(obj.config.id);//获取选中行的数据
		  console.log(checkStatus);
		  switch(obj.event){
			  case 'add':
			  layer.msg('添加');
			  layer.open({
				  type:1,
				  title:'新增部门',
				  content:$('#dept'),
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
		table.on('tool(deptT)', function(obj){
			var data = obj.data; //获得当前行数据
			var layEvent = obj.event; //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
			if(layEvent === 'detail'){ //查看
				layer.msg('行查看');
			}else if(layEvent === 'edit'){ //编辑
				layer.msg('行编辑');
			}else if(layEvent === 'del'){ //删除
			    layer.confirm('真的删除行么', function(index){
			      obj.del(); //删除对应行（tr）的DOM结构，并更新缓存
			      layer.close(index);
			      //向服务端发送删除指令
			    });
			}
		});
		//数据表格结束

	exports('deptgroup', {msg:'This is page deptgroup.html`s modules'}); //注意，这里是模块输出的核心，模块名必须和 use 时的模块名一致
}); 
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
					{id:1,title:'数学组',children:[{title:'高中数学组'}]},
					{id:2,title:'物理组',children:[{title:'高中物理组'}]},
					{id:3,title:'语文组',children:[{title:'高中语文组'}]},
					{id:4,title:'英语组',children:[{title:'高中英语组'}]},
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
		    elem: '#userTable'
		    ,height: 'full-20'
		    ,url: ''//数据接口
		    ,data:[
				{id:1,uid:'10001',uname:'曹操',usex:'男',uage:18,uphone:'15677413217',uemail:'15677413217@163.com'},
				{id:2,uid:'10002',uname:'曹操',usex:'男',uage:18,uphone:'15677413217',uemail:'15677413217@163.com'},
				{id:3,uid:'10003',uname:'曹操',usex:'男',uage:18,uphone:'15677413217',uemail:'15677413217@163.com'},
				{id:4,uid:'10004',uname:'曹操',usex:'男',uage:18,uphone:'15677413217',uemail:'15677413217@163.com'},
				{id:5,uid:'10005',uname:'曹操',usex:'男',uage:18,uphone:'15677413217',uemail:'15677413217@163.com'},
				{id:6,uid:'10006',uname:'曹操',usex:'男',uage:18,uphone:'15677413217',uemail:'15677413217@163.com'},
			]
			,page: true //开启分页
		    ,toolbar: '#toolbarTop'
			,cols: [[ //表头
				{checkbox: true,field: 'id', title: 'ID', width:30, sort: true, fixed: 'left'}
				,{field: 'uid', title: '账号', width:80}
				,{field: 'uname', title: '用户名', width:80}
				,{field: 'usex', title: '性别', width:80, sort: true}
				,{field: 'uage', title: '年龄', width:60} 
				,{field: 'uphone', title: '电话', width: 150}
				,{field: 'uemail', title: '邮箱', width: 250, sort: true},
				,{title:'操作',fixed: 'right', width:150, align:'center', toolbar: '#barCols'} //这里的toolbar值是模板元素的选择器
		    ]]
			,id:'uTable'
			,limits:[5,10,20]
			
		});
		//表头工具栏触发事件
		table.on('toolbar(userT)', function(obj){
		  var checkStatus = table.checkStatus(obj.config.id);//获取选中行的数据
		  console.log(checkStatus);
		  switch(obj.event){
			  case 'add':
			  layer.msg('添加');
			  layer.open({
				  type:1,
				  title:'人员信息录入',
				  content:$('#userInfo'),
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
		table.on('tool(userT)', function(obj){
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

	exports('userinfo', {msg:'This is page userinfo.html`s modules'}); //注意，这里是模块输出的核心，模块名必须和 use 时的模块名一致
}); 
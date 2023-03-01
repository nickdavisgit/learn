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
			elem:'#classTree',
			edit: ['add', 'update', 'del'],
			data:[
				{id:1,title:'高一年级',spread:true,children:[
					{id:11,title:'高一(1班)'},
					{id:12,title:'高一(2班)'},
					{id:13,title:'高一(3班)'},
				]},
				{id:2,title:'高二年级',spread:true,children:[
					{id:21,title:'高二(1)班'},
					{id:22,title:'高二(2)班'},
					{id:23,title:'高二(3)班'},
				]},
				{id:3,title:'高三年级',spread:true,children:[
					{id:31,title:'高三(1)班'},
					{id:32,title:'高三(2)班'},
					{id:33,title:'高三(3)班'},
				]},
			],
			id:'csTree',
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
		    elem: '#studentTable'
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
				,{field: 'uid', title: '学号', width:80}
				,{field: 'uname', title: '姓名', width:80}
				,{field: 'usex', title: '性别', width:80, sort: true}
				,{field: 'uage', title: '年龄', width:60} 
				,{field: 'uphone', title: '电话', width: 150}
				,{field: 'uemail', title: '邮箱', width: 250, sort: true},
				,{title:'操作',fixed: 'right', width:150, align:'center', toolbar: '#barCols'} //这里的toolbar值是模板元素的选择器
		    ]]
			,id:'sTable'
			,limits:[5,10,20]
			
		});
		//表头工具栏触发事件
		table.on('toolbar(studentT)', function(obj){
		  var checkStatus = table.checkStatus(obj.config.id);//获取选中行的数据
		  console.log(checkStatus);
		  switch(obj.event){
			  case 'add':
			  layer.msg('添加');
			  layer.open({
				  type:1,
				  title:'学生信息录入',
				  content:$('#studentInfo'),
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
		table.on('tool(studentT)', function(obj){
			var data = obj.data; //获得当前行数据
			var layEvent = obj.event; //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
			if(layEvent === 'detail'){ //查看学生信息
				layer.msg('行查看学生信息');
			}else if(layEvent === 'edit'){ //查看成绩
				layer.msg('行查看成绩');
			}else if(layEvent === 'del'){ //考勤
			    layer.msg("行考勤")
			}
		});
		//数据表格结束

	exports('studentinfo', {msg:'This is page studentinfo.html`s modules'}); //注意，这里是模块输出的核心，模块名必须和 use 时的模块名一致
}); 
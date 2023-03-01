layui.define(function(exports) {
	var element = layui.element,
		layer = layui.layer,
		util = layui.util,
		tree = layui.tree,
		table = layui.table,
		form = layui.form,
		layedit = layui.layedit,
		$ = layui.$;

	// 图片接口放到建立编辑器前面，否则无效
	layedit.set({
		uploadImage: {
			url: '/index.php/admin/base/layuifwb', //接口url
			type: 'post' //默认post
		}
	});
	// 设置编辑器
	layedit.build('content', {
		height: 500 //设置编辑器高度
	});

	var index = layedit.build('content'); //建立编辑器
	form.verify({ // 这里就是把富文本数据同步到<textarea>中
		content: function(value) {
			return layedit.sync(index);
		}
	});
	form.on('submit(formSub)', function(data) {
		console.log(data.elem) //被执行事件的元素DOM对象，一般为button对象
		console.log(data.form) //被执行提交的form对象，一般在存在form标签时才会返回
		console.log(data.field) //当前容器的全部表单字段，名值对形式：{name: value}
		return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
	});
	exports('schoolnotice', {
		msg: 'This is page schoolnotice.html`s modules'
	}); //注意，这里是模块输出的核心，模块名必须和 use 时的模块名一致
});

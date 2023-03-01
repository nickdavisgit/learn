layui.define(function(exports){
	var element = layui.element,
		layer = layui.layer,
		util = layui.util,
		tree = layui.tree,
		table = layui.table,
		form = layui.form,
		$ = layui.$;
		
		form.on('submit(formLogin)', function(data){
		  console.log(data.field) //当前容器的全部表单字段，名值对形式：{name: value}
		  layer.msg('登录中...');
		  window.location.href='../index.html';
		  return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
		});

	exports('login', {msg:'This is page login.html`s modules'}); //注意，这里是模块输出的核心，模块名必须和 use 时的模块名一致
}); 
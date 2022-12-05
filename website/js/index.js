$(function(){
	var iframe = document.getElementById("iframe_center");
	iframe.onload = function(){
		console.log('on load');
		var iframe_window = iframe.contentWindow;//获取iframe的window对象
		var iframe_doc = iframe_window.document;//获取iframe的document
		var iframe_scrollHeight = iframe_doc.documentElement.scrollHeight || iframe_doc.body.scrollHeight;//获取iframe滚动条的高度
		console.log(iframe_scrollHeight);
		console.log(iframe_doc.body.offsetHeight);
		var tab_pane = iframe.parentNode;
		tab_pane.style.height = (iframe_scrollHeight+100)+"px";
	};
});
function navClick(e,nid,url){
	console.log($(e).html());
	console.log(nid);
	$("a[href='#center']").html($(e).html());
	$("#iframe_center").prop("src",url);
}
function logOut(){
	alert("退出登录");
}
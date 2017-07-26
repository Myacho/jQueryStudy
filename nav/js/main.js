//JS实现
$(function (){
	//鼠标经过事件，包含两个函数事件1.鼠标移入；2.鼠标移出
	$(".right li").hover(function(){
		$(".bg").stop().animate({height:74+$(this).children(".nav-two").height()},300);
		$(this).children(".nav-two").stop(false,true).slideDown(300);
	},function(){
		$(".bg").animate({height:74},300);
		$(this).stop().children(".nav-two").stop(false,true).slideUp(300);
	});
});
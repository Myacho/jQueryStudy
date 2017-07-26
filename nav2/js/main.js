$(function(){
	$(".decorate li a span").mouseover(function(){
		$(this).last().addClass("active").siblings().removeClass("active");
	})
})
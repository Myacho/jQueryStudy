$(function(){
	//初始化
	$(".pic li").first().show();
	$(".digit li").first().addClass("active");
	//手动控制图片的淡入与淡出
//	$(".digit li").hover(function(){
//		$(this).addClass("active").siblings().removeClass("active");
//		var index = $(this).index();
//		$(".pic li").eq(index).fadeIn().siblings().fadeOut();
//	},function(){});
	$(".digit li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var index = $(this).index();
		i = index;
		$(".pic li").eq(index).fadeIn().siblings().fadeOut();
	});
	
	//通过实践间隔函数控制图片的显示
	var i = 0
	var t = setInterval(carsoul,1500);
	function carsoul(){
		i ++;
		if (i == 8) {
			i = 0;
		}
		$(".digit li").eq(i).addClass("active").siblings().removeClass("active");
		$(".pic li").eq(i).fadeIn().siblings().fadeOut();
	}
	
	//鼠标移入BOX元素的时候，停止正在运行的动画，移出时回复
	$(".box").hover(function(){
		clearInterval(t);
	},function(){
		t = setInterval(carsoul,1500);
	});
})
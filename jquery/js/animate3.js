$(function(){
	/*
	$(".button").click(function(){
		$("#box").animate({
			left:"800px"
		},3000);
	});
	$(".stop").click(function(){
		$("#box").stop();
	});
	
	$(".button").click(function(){
		$("#box").animate({left:"300px"},1000)
				 .animate({bottom:"300px"},1000)	
				 .animate({width:"300px"},1000)
				 .animate({height:"300px"},1000)
	});
	//如果有列队动画，直接用stop会停止第一个动画，然后继续执行后面的动画
	$(".stop").click(function(){
		$("#box").stop();
	});
	//stop第一个参数如果为true，则是停止并且清楚后面的列队动画，动画会完全停止，stop的默认参数为false
	$(".stop").click(function(){
		$("#box").stop(true);
	});
	//stop第三个参数如果为true，停止后会跳转到末尾的位置上，默认值为false
	$(".stop").click(function(){
		$("#box").stop(true,true);
	});
	
	//时间延迟
	$(".button").click(function(){
		$("#box").delay(2000)
				 .animate({left:"300px"})
				 .animate({bottom:"300px"}).delay(2000)
				 .animate({width:"300px"})
				 .animate({height:"300px"})
	});
	
	//过滤器，判断当前运动的动画是哪个元素
	$("#box").slideToggle("slow",function(){
		$(this).slideToggle("slow",arguments.callee);//保持一直执行
	});
	$(".ani").click(function(){
		//查找到当前动画的元素，修改背景色，并停止该动画
		$(":animated").stop().css("background","blue");
	});
	
	//全局属性  $.fx off interval
	//$.fx.off关闭所有的动画  $.fx.interval每秒运行的帧数，默认为13ms，数字越小越流畅，但是可能影响性能
	
	//$.fx.interval = 13;
	$.fx.off = true;//关闭了动画
	$(".button").click(function(){
		$("#box").toggle(1000);
	});

	*/
	$(".button").click(function(){
		$("#box").animate({
			left:"800px"
		},3000,"swing");//中间快两边慢
		$("#pox").animate({
			left:"800px"
		},3000,"linear");//匀速
	});
	
	
});
	
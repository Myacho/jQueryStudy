$(function(){
	    //第一个默认选中
		$(".nav li").first().addClass("decorate");
		//获取所有轮播页面，让第一个先显示
		$(".page").first().show();
	    $(".nav li").click(function(){	    	
		    //点击当前元素时给当前元素添加一个类，其他兄弟元素移除该类
			$(this).addClass("decorate").siblings().removeClass("decorate");
			//获取当前元素的索引值
			var index = $(this).index();
			//测试
//		alert(index);
       	 //获取所有轮播页面，筛选index，当前页面淡入，兄弟页面淡出
       	 $(".page").eq(index).fadeIn().siblings().fadeOut();		
		})
})
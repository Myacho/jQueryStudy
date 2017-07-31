$(function(){
	$(".button").click(function(){
		
		/* 
		//自定义动画每次运动开始都必须在初始位置或初始状态，只能点击执行一次
		
		//多重同步动画
		$("#box").animate({
			width:"300px",
			height:"200px",
			opacity:0.5,
			fontSize:"50px"
		});
		
		$("#box").animate({
			width:"300px",  //写法也可以是"width":"300px"
			height:"200px",
			opacity:0.5,
			fontSize:"50px"
		},2000,function(){
			alert("动画执行完毕");
		});
		
		//位移动画,先在css添加定位
		$("#box").animate({
			left:"300px",//移动到300px的位置
			top:"100px"			
		},"slow");
		
		//累加累减
		$("#box").animate({
			left:"+=100px"	
		},"slow");
		
		//回调函数加列队动画  嵌套多了会出错
		$("#box").animate({
			width:"300px"	
		},function(){
			$("#box").animate({
				height:"200px"
			},function(){
				$("#box").animate({
					opacity:0.5
				},function(){
					$("#box").animate({
						fontSize:"50px"
					});
				});
			});
		});	
		
		//在同一个元素的基础上，使用连缀或顺序排列调用可以实现列队动画
		$("#box").animate({width:"300px"})
				 .animate({height:"200px"})
				 .animate({opacity:0.5})
				 .animate({fontSize:"50px"});
				 
		$("#box").animate({width:"300px"});
		$("#box").animate({height:"200px"});
		$("#box").animate({opacity:0.5});
		$("#box").animate({fontSize:"50px"});
		
		//box的第一个和pox的第一个是同时执行的
		$("#box").animate({width:"300px"});
		$("#pox").animate({height:"200px"});
		$("#box").animate({opacity:0.5});
		$("#pox").animate({fontSize:"50px"});
		
		$("#box").animate({
			width:"300px"	
		},function(){
			$("#pox").animate({
				height:"200px"
			},function(){
				$("#box").animate({
					opacity:0.5
				},function(){
					$("#pox").animate({
						fontSize:"50px"
					});
				});
			});
		});
		
		//CSS不是动画方法，会默认排列到和第一个动画方法同步
		$("#box").slideUp("slow").slideDown("slow").css("background","orange");
		
		$("#box").slideUp("slow").slideDown("slow",function(){
			$(this).css("background","orange");
		});
		
		//队列动画繁多时，采用queue,每个动画相互独立不干扰
		$("#box")
					.slideUp("slow")
					.slideDown("slow")
					.queue(function(){
						$(this).css("background","orange");
					});
					
		//queue后面要在增加一个动画时，要用next参数
		$("#box")
					.slideUp("slow")
					.slideDown("slow")
					.queue(function(next){
						$(this).css("background","orange");
						next();//不传next参数时，$(this).dequeue()也行
					}).hide("slow");
					
		//顺序调用也行
		$("#box").slideUp("slow");
		$("#box").slideDown("slow");
		$("#box").queue(function(){
			$(this).css("background","orange");
			$(this).dequeue();//不传next参数时，$(this).dequeue()也行
		});
		$("#box").hide("slow");
		
		//queue方法可以得到当前动画队列的长度，fx是默认参数
		//当前及后面未执行的动画还有几个		
		$("#box")
					.slideUp("slow")
					.slideDown("slow",function(){alert(count());})
					.queue(function(){
						$(this).css("background","orange");
						$(this).dequeue();
					}).hide("slow");
		function count(){
			return $("#box").queue("fx").length;
		}
		
		*/
		
		
		//clearqueue清理列队
		$("#box")
					.slideUp("slow")
					.slideDown("slow",function(){$(this).clearQueue();})
					.queue(function(){
						$(this).css("background","orange");
						$(this).dequeue();
					}).hide("slow");

	});	
});
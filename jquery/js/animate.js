$(function(){
	
	//显示，隐藏，可以传递两个参数：速度，回调函数
	//如果是块级元素，show是设置display:block;内联元素是display:inline
	/*$("#box").hide();
	$(".show").click(function(){
		$("#box").show();
	});
	$(".hide").click(function(){
		$("#box").hide();
	});
	
	//速度：slow(600),normal(400),fast(200),也可以自行设置,默认400
	$("#box").hide();
	$(".show").click(function(){
		$("#box").show("fast");
	});
	$(".hide").click(function(){
		$("#box").hide("slow");
	});
	
	//回调函数：实现列队动画
	$("#box").hide();
	$(".show").click(function(){
		$("#box").show("slow",function(){
			alert("显示完毕")
		});
	});
	$(".hide").click(function(){
		$("#box").hide("slow");
	});
	
	//列队动画
	$(".show").click(function() {
		$(".test").eq(0).show("fast", function() {
			$(".test").eq(1).show("fast", function() {
				$(".test").eq(2).show("fast", function() {
					$(".test").eq(3).show("fast");
				});
			});
		});
	});
	
	//列队动画,递归自调用
	$(".show").click(function() {
		$(".test").first().show("fast", function testShow() {
			$(this).next().show("fast",testShow);
		});
	});
	$(".hide").click(function() {
		$(".test").last().hide("fast", function testHide() {
			$(this).prev().hide("fast",testHide);
		});
	});
	
	//一个按钮实现切换
	$(".toggle").click(function(){
		$("#box").toggle("slow");
	});
	
	//滑动，卷动效果和显示隐藏具有相同的参数
	$(".up").click(function(){
		$("#box").slideUp("slow");
	});
	$(".down").click(function(){
		$("#box").slideDown("slow");
	});
	$(".toggle").click(function(){
		$("#box").slideToggle("slow");
	});	
	*/
	$(".out").click(function(){
		$("#box").fadeOut("slow");
	});
	$(".in").click(function(){
		$("#box").fadeIn("slow");
	});
	$(".toggle").click(function(){
		$("#box").fadeToggle("slow");
	});
	$(".toggleTo").click(function(){
		$("#box").fadeTo("slow",0.33);//透明度为0-1之间，且切换回去时仍回到透明度设置的状态
	});
});
$(function() {
	$(".btn").click(function() {
		if ($(this).attr("data-like") == "y") {
			$(this).addClass("on");
			var num = Number($(this).find("b").html()) + 1;
			$(this).find("b").html(num);
			$(this).attr("data-like","");
		}
		else{
			$(this).removeClass("on");
			var num = Number($(this).find("b").html()) - 1;
			$(this).find("b").html(num);
			$(this).attr("data-like","y");
		}
	})
})
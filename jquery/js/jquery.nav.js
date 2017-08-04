;
$(function() {
	//全局操作
//	$.extend({
//		'nav': function() {
//			$(".nav").css({
//				'list-style': 'none',
//				'margin': 0,
//				'padding': 0,
//				'display': 'none'
//			});
//			$(".nav").parent().hover(function() {
//				$(this).find(".nav").slideDown("normal");
//			}, function() {
//				$(this).find(".nav").stop().slideUp("normal");
//			});
//		}
//	});
	//局部
	$.fn.extend({
		//在插件里的this，经过了一些封装处理，this就是表示jQuery对象，不需要再用$()包装
		'nav': function(color) {
			//这里是插件的方法
			//alert(this);//object
		this.find(".nav").css({
				'list-style': 'none',
				'margin': 0,
				'padding': 0,
				'display': 'none',
				'color':color
			});
			this.find(".nav").parent().hover(function() {
				//这里是普通的匿名函数
				//alert(this);//HTMLliElement
				$(this).find(".nav").slideDown("normal");
			}, function() {
				$(this).find(".nav").stop().slideUp("normal");
			});
			return this;//返回一个对象，可以实现连缀
		}
	});
});
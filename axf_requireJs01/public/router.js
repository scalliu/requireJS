//引用模块
define(["underscore", "backbone"], function(_, backbone) {
	 
	//路由器集合
	var w = backbone.Router.extend({

			//路由线路
			routes: {
				"homeA": "homeAFn",
				"marketA": "marketAFn",
				"orderA": "orderAFn",
				"cartA": "cartAFn",
				"myselfA": "myselfAFn",
				"*defActiona":"defActiona"
			},

			//active 监听
			
			//首页
			"homeAFn": function(param) {
				//把路径提出来，是为了防止将来代码压缩会产生的某些问题
				//此时参照目录是谁>>>>>???怎么区分
				//var url_home = "../home/js/home.js";
				var url_home = "./home/js/home.js";
				require(["text!../home/home.html", url_home], function(tpl, homeJs) {
					console.log(2)
					$(".index_containWrap").html(tpl);
					homeJs.request();
				})
				//			
			},
			
			//闪购超市
			"marketAFn": function() {
				var url_market = "./market/js/market.js";
				console.log(2)
				require(["text!../market/market.html", url_market], function(tpl, marketJs) {

					$(".index_containWrap").html(tpl);
					marketJs.request();
				})

			},
			
			//新鲜预定
			"orderAFn": function() {
				var url_market = "./order/js/order.js";
				console.log(2)
				require(["text!../order/order.html", url_market], function(tpl, orderJs) {

					$(".index_containWrap").html(tpl);
					orderJs.request();
				})
			},
			
			//购物车
			"cartAFn": function() {
				var url_market = "./cart/js/cart.js";
				console.log(2)
				require(["text!../cart/cart.html", url_market], function(tpl, cartJs) {

					$(".index_containWrap").html(tpl);
					//				cartJs.request();
				})
			},
			
			//我的
			"myselfAFn": function() {
				var url_market = "./myself/js/myself.js";
				console.log(2)
				require(["text!../myself/myself.html", url_market], function(tpl, myselfJs) {

					$(".index_containWrap").html(tpl);
					//				cartJs.request();
				})
			},
			
			//用户访问url不存在的时候触发
			defActiona: function() {
				
				//用户访问的url不存在的时候触发
				require(['text!./404.html'], function(tpl) {
					$(".index_containWrap").html(tpl);
				})
			},
			
			//初始化首页:当用户第一进入页面的时候触发,也就是没有触发hash的时候
			//默认自带方法不用在routes中定义
			initialize: function() {
				window.location.hash = "homeA";
			}
		  //////路由线路END

	}); ////路由器集合END

//实例化
var router1 = new w();

//启动路由
backbone.history.start();
}) //define结束
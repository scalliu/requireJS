 
//requireJS paths
require.config({
	paths: {
		"flexible": "./lib/flexible",
		"jquery": "./lib/jquery-1.8.3",
		"html5-min": "./lib/html5.min",
		"underscore": "./lib/underscore.min",
		"backbone": "./lib/backbone.min",
		"swiper": "./lib/swiper-3.4.1.jquery.min",
		"text": "./lib/text",
		"$css": "./lib/css",
		"FastClick":"./lib/fastclick", 
		"router": "./router",
	}
})

//此处引用后全局分页页面都可以使用依赖注入文件
require([ "flexible","jquery", "router", "FastClick","./js/index" ], function(flexible,$,router,FastClick,indexJs) {
	//解决jq 300s延迟
	FastClick.attach(document.body);
	//固定尾部点击事件
	 indexJs.toBottomAni(".ajx_headerWrap li");
	 console.log(indexJs)
	console.log("main.js ------页面require");
})


//当require.js在文档最后引入的时候,$(function(){})引入没无意义了 


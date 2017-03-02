//1.js的分层(功能) : jquery(tools获取元素数组)  组件(ui改变样式)  应用(app调用tool和ui 实现功能), mvc(backboneJs)
//2.js的规划(管理) : 避免全局变量和方法(命名空间，闭包，面向对象) , 模块化(seaJs,requireJs)
// 把home.css,其他引入的js文件当作public下面router.js平级的子程序
//路径相对home.js
//ajaxload会把html 页面当作他子目录下面的程序

//写在router.js下面的 url_home = "../home/js/home.js" 参照物又是inde.html??
define(["swiper", "$css!../../../home/css/home.css", "$css!../../lib/swiper-3.4.1.min.css"],
	function() {
		//	define(['jquery'], function($) {
		//注意没有封装到obj对象里视为立即执行,所以找不到节点
		var homeObj = {};
		homeObj.request = function() {
			//轮播图ajax
			$.ajax({
				type: "GET", //这里的get 可以改为post
				url: "http://www.vrserver.applinzi.com/aixianfeng/apihome.php",
				dataType: 'json',
				data: "",
				success: function(data) {
				 
					var dataResult = data.data;
					var ulHtml = "";
					var liInner;
					for(var i in dataResult.slide) {
						liInner = dataResult.slide[i].activity.img;
						 
						ulHtml += '<li class="swiper-slide">'
						ulHtml += '<a href="###"><img src=' + liInner + 'alt="" /></a>'
						ulHtml += '</li>'
					}

					$(".home_top_bannerWrap ul").html(ulHtml)
					//数据返回后调用轮播图
					homeObj.toSwiper();
				},
				error: function() {
					console.log("请求失败")
				},
				///timeout: 2000 //2000毫秒 
			});

			//主导航栏ajax
			$.ajax({
				type: "GET", //这里的get 可以改为post
				url: "http://www.vrserver.applinzi.com/aixianfeng/apihome.php",
				dataType: 'json',
				data: "",
				success: function(data) {

					var dataResult = data.data,
						ulHtml_BannerWrap = "",
						liInner_banner = "",
						ul_home_totalNav = "",
						iItems_imgs = "";

					//轮播图数据
					for(var i in dataResult.slide) {
						liInner_banner = dataResult.slide[i].activity.img;
						ulHtml_BannerWrap += '<li class="swiper-slide">'
						ulHtml_BannerWrap += '<a href="###"><img src=' + liInner_banner + 'alt="" /></a>'
						ulHtml_BannerWrap += '</li>'
					}
					//主导航栏数据

					for(var i in dataResult.menu) {
						iItems_imgs = dataResult.menu[i].activity.img;
						iItems_text = dataResult.menu[i].activity.name;
						ul_home_totalNav += '<li class="items">'
						ul_home_totalNav += '<a href="javascript:;"><img src=' + iItems_imgs + ' alt="" /><span>' + iItems_text + '</span></a>'
						ul_home_totalNav += '</li>'
					}

					$("section.home_totalNavWrap nav.home_totalNav").html(ul_home_totalNav);
					//数据返回后调用轮播图
					homeObj.toSwiper();
				},
				error: function() {
					console.log("请求失败")
				},
				//timeout: 2000 //2000毫秒 
			})
		}

		homeObj.toSwiper = function() {
			var mySwiper = new Swiper('.swiper-container', {
				autoplay: 400, //可选选项，自动滑动
				loop: true, //无缝循环
				pagination: '.swiper-pagination', //分页
				paginationClickable: true, //分页控制功能
				paginationBulletRender: function(swiper, index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				}, //这个参数允许完全自定义分页器的指示点
				autoplayDisableOnInteraction: false, //用户触摸后不停止轮播
				observer: true //重新初始化
			});
		}

		//页面加载后调用

		return homeObj;

	}) //define结束
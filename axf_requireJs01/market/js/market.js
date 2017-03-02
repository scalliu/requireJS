//1.js的分层(功能) : jquery(tools获取元素数组)  组件(ui改变样式)  应用(app调用tool和ui 实现功能), mvc(backboneJs)
//2.js的规划(管理) : 避免全局变量和方法(命名空间，闭包，面向对象) , 模块化(seaJs,requireJs)
// 把home.css,其他引入的js文件当作public下面router.js平级的子程序
//路径相对home.js
//ajaxload会把html 页面当作他子目录下面的程序

//写在router.js下面的css
define(["$css!../../../market/css/market.css"],
	function() {
		//	define(['jquery'], function($) {
		//注意没有封装到obj对象里视为立即执行,所以找不到节点
		var marketObj = {};
		marketObj.request = function() {
			//闪购超市--------主导航
			$.ajax({
				type: "GET", //这里的get 可以改为post
				url: "market/js/marketcategory.json",
				dataType: 'json',
				data: "",
				success: function(data) {
					//分类导航

					var categories = data.data.categories;
					var products = data.data.products;

					var tempCategoriesVal = "";
					for(var i in categories) {
						if(i == 0) {
							tempCategoriesVal += '<li class="categoryLeftItems " data-id=' + categories[i].id + ' data-pcid=' + categories[i].pcid + '>' + categories[i].name + '</li>';
						} else {
							tempCategoriesVal += '<li class="categoryLeftItems" data-id=' + categories[i].id + ' data-pcid=' + categories[i].pcid + '>' + categories[i].name + '</li>';
						}
					}

					$("nav.categoryLeftWrap>article.categoryWrap-left").html(tempCategoriesVal);
					$("nav.categoryLeftWrap>article.categoryWrap-left").append(tempCategoriesVal);

					var oTap = $(".categoryLeftItems");

					oTap.on("click", function(event) {
						oTap.removeClass("active");
						var eventDataId = $(event.target).addClass("active").attr("data-id");
						var ulHtml = "";
						for(var key in products) { //for var key开始
							// 	$.each(products, function(key, value) {////$.each的{} each效率低
							if(key == eventDataId) {

								for(var tempObj of products[eventDataId]) {
									ulHtml += '	<a href = "javascript:;" >';
									ulHtml += '<figure class="content_main_items clearFloat">';
									ulHtml += '<img src=' + tempObj.img + ' alt="" class="imgFly" />';
									ulHtml += '<ul class="content_main_item">';
									ulHtml += '<li class="content_main_items">' + tempObj.name + '</li>';
									ulHtml += '<li class="main_items_info_chosen">';
									//去除空标签
									if($.trim(tempObj.pm_desc) == "") {
										ulHtml += '<span>精选</span>';
									} else {
										ulHtml += '<span>精选</span><span class="pm_desc">' + tempObj.pm_desc + '</span>';
									}
									ulHtml += '</li>';
									ulHtml += '<li class="main_items_intr">' + tempObj.specifics + ' </li>';
									ulHtml += '<li class="main_items_price">';
									ulHtml += '<span>' + tempObj.price + '</span>';
									ulHtml += '	<span class="pre_price">' + tempObj.market_price + '</span>';
									ulHtml += '</li>';
									ulHtml += '<li class="main_items_count" ng-controller="gouwuche">';
									ulHtml += '<span class="del_inco" ng-click=" "></span>';
									ulHtml += '<span class="shopping_num">1</span>';
									ulHtml += '<span class="ali_inco " ng-click=" "></span>';
									ulHtml += '	</li>';
									ulHtml += '</ul>';
									ulHtml += '</figure>';
									ulHtml += '</a>';

								}

								$("section.categoryBan").html(ulHtml);
							}
							// })////$.each的{}结束
						} ////////for var key 结束
					})

					oTap.eq(0).trigger("click");
				},
				error: function() {
					console.log("请求失败")
				}
			});

		}

		//静态页面加载 

		//页面加载后调用
		return marketObj;

	}) //define结束
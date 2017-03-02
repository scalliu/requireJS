define(["$css!../../../order/css/order.css"],
	function() {

		var orderObj = {};
		orderObj.request = function() {
			//新鲜预定--------主导航
			$.ajax({
				type: "GET", //这里的get 可以改为post
				url: "http://www.vrserver.applinzi.com/aixianfeng/apiyuding.php",
				dataType: 'json',
				data: "",
				success: function(data) {
					var dataResult = data.product;
					var htmlContain = "";
			
					for(var tempObj of dataResult) {					 
						htmlContain += '<figure class="items">';
						htmlContain += '<img src='+tempObj.img+' alt="" />'
						htmlContain += '<figcaption class="imgInfo ">'
						htmlContain += '<p>'+tempObj.name+'</p>'
						htmlContain += '<p class="info_price">'+tempObj.price+'</p>'
						htmlContain += '<p class="imgCart"><img src="./order/img/gouwuche.png" alt="" /></p>'
						htmlContain += '</figcaption>';
						htmlContain += '</figure>';
					}
					$(".mainContent_items").html(htmlContain);
				},
				error: function() {
					console.log("请求失败")
				}
			});

		} 
		//页面加载后调用
		return orderObj;

	}) //define结束
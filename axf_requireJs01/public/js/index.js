console.log("1伪222222")
define([],
	function() {
		var indexObj = {
			toBottomAni: function(obj) {
				console.log(obj)
				var oElem = $(obj);
				console.log(oElem.eq(0))
				
				oElem.each(function() {
					$(this).on("click", function() {
						 oElem.removeClass("active")
						 $(this).addClass("active");						
					})
				})
				//第一个li自动执行click
				//oElem.eq(0).click();
			}
		};

		return indexObj;

	}) //define结束
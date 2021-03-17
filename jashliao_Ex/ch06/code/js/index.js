$(function () {

	$.fn.tooltip.defaults.position = 'top';

	$('#box').tooltip({
		content : '<strong>这里是内容提示框</strong>',
		//position : 'top',
		//trackMouse : true,
		//deltaX : 100,
		//deltaY : 100,
		//showEvent : 'click',
		//hideEvent : 'dblclick',
		//showDelay : 1500,
		//hideDelay : 1500,
		onShow : function (e) {
			//alert('显示的时候触发！');
			//console.log($('#box').tooltip('tip'));
			//console.log($('#box').tooltip('arrow'));
			$('.tooltip-bottom').css('left', 500);
		},
		onHide : function (e) {
			//alert('隐藏的时候触发！');
			$('#box').tooltip('reposition');
		},
		
		//---
		//click(function ()對應的事件函數
		onUpdate : function (content) {
			alert('内容改变了为：' + content);
		},
		onPosition : function (left, top) {
			console.log('left:' + left + ',top:' + top);
		},
		onDestroy : function (e) {
			alert('工具栏被销毁了！');
		},
		//---click(function ()對應的事件函數
	});
	
	
	
	
	$('#box').click(function () {
		$(this).tooltip('update', '改变了！');
		$(this).tooltip('destroy');//點擊後停用提示框
	});
	
	
	//console.log($('#box').tooltip('options'));
	
	
	//$('#box').tooltip('show');
	//$('#box').tooltip('hide');
	
	
	
	
	
	
	
	
	
	
	
});

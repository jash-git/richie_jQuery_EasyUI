$(function () {
	$.fn.draggable.defaults.cursor = 'text';


	$('#box').draggable({
		//revert : true,
		//cursor : 'text',
		//handle : '#pox',
		//disabled : true,
		//edge : 180,
		//axis : 'v',
		//proxy : 'clone',
		//deltaX : 50,
		//deltaY : 50,
		//proxy : function (source) {
		//	var p = $('<div style="width:400px;height:200px;border:1px dashed #ccc">');
		//	p.html($(source).html()).appendTo('body');
		//	return p;
		//}
		
		//onBeforeDrag : function (e) {
		//	alert('拖动前触发！');
		//},
		//onBeforeDrag : function (e) {
		//	return false;
		//},
		//onStartDrag : function (e) {
		//	//alert('拖动开始触发！');
		//	console.log($('#box').draggable('proxy'));
		//},
		//onDrag : function (e) {
		//	alert('拖动过程触发！');
		//},
		//onStopDrag : function (e) {
		//	alert('拖动结束后触发！');
		//},
		
		
		
	});
	
	
	//$('#box').draggable('disable');
	
	//$('#box').draggable('enable');
	
	
	//console.log($('#box').draggable('options'));
	
	
});

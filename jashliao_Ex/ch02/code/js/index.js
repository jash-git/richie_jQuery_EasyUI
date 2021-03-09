$(function () {
	/*
	easyloader.load('dialog', function () {
		$('#box').dialog();
	});
	*/
	
	//$.parser.parse();
	$.parser.parse('#box');
	
});

$.parser.auto = false;
$.parser.onComplete = function () {
	alert('UI解析完成！');
};
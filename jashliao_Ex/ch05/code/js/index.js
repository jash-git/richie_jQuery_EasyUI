$(function () {

	$.fn.resizable.defaults.disabled = true;

	$('#rr').resizable({
		//disabled : true,
		//handles : 'e,s,se',
		//minWidth : 200,
		//minHeight : 200,
		//maxWidth : 600,
		//maxHeight: 400,
		//edge : 50,
		onStartResize : function (e) {
			console.log('开始调整的时候触发！');
		},
		onResize : function (e) {
			console.log('调整期间的时候触发！');
			//return false;
		},
		onStopResize : function (e) {
			console.log('停止调整的时候触发！');
		},
	});
	
	//console.log($('#rr').resizable('options'));

	//$('#rr').resizable('disable');
	$('#rr').resizable('enable');
});

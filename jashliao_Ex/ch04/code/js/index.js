$(function () {

	$.fn.droppable.defaults.disabled = true;

	$('#dd').droppable({
		accept : '#box',
		disabled : false,
		onDragEnter : function (e, source) {
			//console.log(source);
			$(this).css('background', 'blue');
			//alert('enter');
		},
		onDragOver : function (e, source) {
			//console.log(source);
			$(this).css('background', 'orange');
			//alert('over');
		},
		onDragLeave : function (e, source) {
			//console.log(source);
			$(this).css('background', 'green');
			//alert('over');
		},
		onDrop : function (e, source) {
			//console.log(source);
			$(this).css('background', 'maroon');
			//alert('over');
		},
		//onDragEnter只触发一次，而Over会在不停的拖动中不停触发
		//onDrop是放入到放置区，松开鼠标左键，丢下的操作
	});
	
	//console.log($('#dd').droppable('options'));
	
	//$('#dd').droppable('disable');
	//$('#dd').droppable('enable');


	$('#box').draggable({

	});
	
});

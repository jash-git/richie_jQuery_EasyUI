$(function () {

	$('#ss').searchbox({
		width : 300,
		height : 22,
		menu : '#box',
		searcher : function (name, value) {
			alert(name + '-' + value);
		},
		prompt : '请输入关键字',
		value : '固定的值',
		//disabled : true,
	});
	
	var m = $('#ss').searchbox('menu');
	m.menu('setIcon', {
		target : m.menu('findItem', '体育频道').target,
		iconCls : 'icon-save',
	});
	
	//console.log($('#ss').searchbox('textbox'));
	//console.log($('#ss').searchbox('getValue'));
	//$('#ss').searchbox('setValue', '123');
	//console.log($('#ss').searchbox('getName'));
	//$('#ss').searchbox('selectName', 'sports');
	//$('#ss').searchbox('destroy');
	//$('#ss').searchbox('resize', 500);
	//$('#ss').searchbox('disable');
	//$('#ss').searchbox('enable');
	//$('#ss').searchbox('clear');
	$(document).dblclick(function () {
		$('#ss').searchbox('reset');
	});
	
});



	










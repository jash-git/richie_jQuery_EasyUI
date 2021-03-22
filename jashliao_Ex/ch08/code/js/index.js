$(function () {

	//$.fn.progressbar.defaults.value = 30;

	$('#box').progressbar({
		width : 400,
		height : 30,
		value : 30,
		text : '{value}%',
		onChange : function (newValue, oldValue) {
			console.log('新:' + newValue + ',旧:' + oldValue);
		},
	});
	

	//settimeout() jquery從載入後延遲指定的時間去執行一個表示式或者是函式;僅執行一次 ;和window.clearTimeout一起使用.
	setTimeout(function () {
		$('#box').progressbar('setValue', 70);
	}, 1000);
	
	//setInterval() jquery可按照指定的週期（以毫秒計）來呼叫函式或計算表示式。
	setInterval(function () {
		if($('#box').progressbar('getValue')<95)
			$('#box').progressbar('setValue', $('#box').progressbar('getValue') + 5);
	}, 500);

	
	
	
	//console.log($('#box').progressbar('options'));
	//$('#box').progressbar('resize', 600);
	
	
	
	
});

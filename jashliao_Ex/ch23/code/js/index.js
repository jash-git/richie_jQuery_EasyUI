$(function () {

	$.extend($.fn.validatebox.defaults.rules, {
		minLength : {
			validator : function (value, param) {
				return value.length >= param[0];
			},
			message : '请输入不小于{0}的字符',
		},
	});

	$('#email').validatebox({
		required : true,
		validType : 'minLength[5,10]',
		//validType : 'url',
		//validType : 'length[2,10]',
		//validType : 'remote["content.php", "abc"]',
		//validType : ['email', 'length[5,10]'],
		//delay : 1000,
		//missingMessage : '请输入内容',
		//invalidMessage : '您输入的电子邮件格式不合法！',
		tipPosition : 'right',
		//deltaX : 100,
		//novalidate : true,
	});
	
	//console.log($('#email').validatebox('options'));
	//$('#email').validatebox('destroy');
	
	//$(document).click(function () {
		//console.log($('#email').validatebox('validate'));
		//console.log($('#email').validatebox('isValid'));
	//});
	
	//$('#email').validatebox('disableValidation');
	//$('#email').validatebox('enableValidation');
	
});



	










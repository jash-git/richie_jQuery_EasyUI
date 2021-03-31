$(function () {

	$('#box').tabs({
		//width : 300,
		//height : 100,
		//plain : true,
		//fit : true,
		//border : false,
		//tabWidth : 300,
		//tabHeight : 50,
		//scrollIncrement : 50,
		//scrollDuration : 1000,
		//tools : [{
		//	iconCls : 'icon-add',
		//	handler : function () {
		//		alert('add');
		//	},
		//},{}],
		//tools : '#tt',
		//toolPosition : 'left',
		//tabPosition : 'left',
		//headerWidth : 300,
		//selected : 1,
		//showHeader : false,
		/*
		onSelect : function (title, index) {
			alert(title + '|' + index);
		}
		
		onUnselect : function (title, index) {
			alert(title + '|' + index);
		}
		
		onBeforeClose : function (title, index) {
			alert(title + '|' + index);
		}
		
		onClose : function (title, index) {
			alert(title + '|' + index);
		}
		
		onContextMenu : function (e,title, index) {
			alert(e.type + '|' + title + '|' + index);
		}
		
		
		//tabWidth : 300,
		onAdd : function (title, index) {
			alert(title + '|' + index);
		}
		
		onLoad : function (panel) {
			alert(panel);
		}
		*/
		onUpdate : function (title, index) {
			alert(title + '|' + index);
		}
	});
	
	
	//console.log($('#box').tabs('tabs'));
	
	//$(document).click(function () {
	//	$('#box').tabs().css('display', 'block');
	//	$('#box').tabs('resize');
	//});
	
/*
	$('#box').tabs('add', {
		id : 'bbb',
		title : '新选项卡',
		content : '新面板',
		href : 'content.html',
		iconCls : 'icon-add',
		width : 1,
		height : 1,
		collapsible : true,
		closable : true,
		selected : false,
	});
*/
	
	//$('#box').tabs('close', 1);
	//console.log($('#box').tabs('getTab', 1));
	//console.log($('#box').tabs('getTabIndex', $('#tab2')));
	//console.log($('#box').tabs('getSelected'));
	//$('#box').tabs('select', 1);
	//$('#box').tabs('unselect', 0);
	//$('#box').tabs('hideHeader');
	//$('#box').tabs('showHeader');
	//console.log($('#box').tabs('exists', 1));
	
	$(document).click(function () {
		$('#box').tabs('update', {
			tab : $('#tab2'),
			options : {
				title : '修改标题',
			},
		});
	});
	
	
	
	//$('#box').tabs('disableTab', 1);
	//$('#box').tabs('enableTab', 1);
	
	//$('#box').tabs('scrollBy', 100);
});



	










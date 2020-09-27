$(function () {
  $('[data-toggle="popover"]').popover()
})

$(document).ready(function(){
	$('a').click(function(){
		switch($(this).attr('action-type')){
			case 'like':
				$.box.like($(this));
				break;
			case 'collect':
				$.box.collect($(this));
				break;
		}
	});
	$('#aBreath .close').click(function(){
		if($(this).attr('action-type')=='dislike'){
			$(this).parents('#aBreath').hide();
		}
	});
});

$.box = {
	like:function(ths){
		var textdom = ths.children('span');
		var icondom = ths.children('i');
		var num = parseInt(textdom.text());
		textdom.text(num+1);
		icondom.removeClass('icondianzan');
		icondom.addClass('icondianzan1');
	},
	collect:function(ths){
		var icondom = ths.children('i');
		icondom.removeClass('iconshoucang');
		icondom.addClass('iconshoucang1');
	}
};
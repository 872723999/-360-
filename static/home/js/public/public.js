// document.onselectstart = function(){
//     event.returnValue = false;
// }

// topJS
// 导航鼠标上移效果
$('.topNavBox .nav>div').on('mouseenter', function () {
	// $(this).children('.box').css({'display': 'block'});
	$(this).children('.box').stop().slideDown();
})
$('.topNavBox .nav>div').on('mouseleave', function () {
	// $(this).children('.box').css({'display': 'none'});
	$(this).children('.box').stop().slideUp();
})

// 搜索框显示隐藏样式
$('.topNavBox .ss h3').on('mouseenter', function () {
	$('.phoneR span').animate({'width': '0'}, 400, function () {
		$('.ss .input').fadeIn(400);
		$('.ss .input input').focus();
	});
	$(this).fadeOut(400);
})
$('.topNavBox .ss .input input').on('blur', function () {
	if( $(this).val() != '' ){
		return;
	}
	$('.ss .input').fadeOut(400, function () {
		$('.topNavBox .ss h3').fadeIn(400);
		$('.phoneR span').animate({'width': '162.5px'}, 400)
	});
})

// topNav滚动
var t = document.documentElement.scrollTop || document.body.scrollTop;
var scroll = true;
if(t>=100){
	$('.topNav').css({'position': 'fixed', 'top': '-99px', 'background-color': 'rgba(255,255,255,0.98)'});
	$('.topNav').animate({'top': '0'});
}
window.onscroll = function () {
	var top = document.documentElement.scrollTop || document.body.scrollTop;
	if( !scroll ){
		return;
	}
	if( top >= 100 ){
		if( $('.topNav').css('position') == 'relative' ){
			scroll = false;
			$('.topNav').css({'position': 'fixed', 'top': '-99px', 'background-color': 'rgba(255,255,255,0.98)'});
			$('.topNav').animate({'top': '0'}, function () {
				scroll = true;
			});
		}
	}else if(top == 0) {
		$('.topNav').css({'position': 'relative'});
	}
}

// 底部JS
// 底部导航
$('.botNav .nav').on('mouseenter', function () {
	console.log(1);
	$(this).siblings('.nav').css({
		'background-color': '',
		'border-radius': '0',
	})
	$(this).siblings('.nav').children('.hidden').css({'display': 'none'});
	$(this).siblings('.nav').children('p').html('+');
	$(this).siblings('.nav').children('p').css({
		'margin-right': '11px'
	})
	
	$(this).css({
		'background-color': '#141414',
		'border-radius': '5px',
	});
	$(this).children('p').html('-');
	$(this).children('p').css({
		'margin-right': '14px'
	})
	$(this).children('.hidden').css({'display': 'block'});
})
$('.botNav .nav').on('mouseleave', function () {
	var that = $(this);
	$('.botNav').on('mouseleave', function () {
		that.css({
			'background-color': '',
			'border-radius': '0',
		});
		that.children('p').html('+');
		that.children('p').css({
			'margin-right': '11px'
		})
		that.children('.hidden').css({'display': 'none'});
	})
})

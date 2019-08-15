// document.onselectstart = function(){
//     event.returnValue = false;
// }

var navActive = window.location.pathname;
var aHref = $('.topNav .nav>div.fl>a');
var aArr = [];
for (var i = 0; i < aHref.length; i++) {
	aHref.eq(i).removeClass('active');
	aArr.push(aHref.eq(i).attr('href'));
}
var Active = aArr.indexOf(navActive);
if (Active == '-1') {
	aHref.removeClass('active');
} else {
	aHref.eq(Active).addClass('active');
}
// topJS
// 导航鼠标上移效果
$('.topNavBox .nav>div').on('mouseenter', function () {
	// $(this).children('.box').css({'display': 'block'});
	$(this).children('.box').stop().slideDown();
	$(this).children('a').addClass('active');
	$('.topNavBox .nav>div').not(this).children('a').removeClass('active');
})
$('.topNavBox .nav>div').on('mouseleave', function () {
	// $(this).children('.box').css({'display': 'none'});
	$(this).children('.box').stop().slideUp();
	$('.topNavBox .nav>div').children('a').removeClass('active');
	if (Active == '-1') {
		return false;
	}
	aHref.eq(Active).addClass('active');
})

// 搜索框显示隐藏样式
$('.topNavBox .ss').hover(function () {
	$('.phoneR span').stop().animate({ 'width': '0' }, 400, function () {
		$('.ss .input').stop().fadeIn(400);
		$('.ss .input input').focus();
	});
	$(this).children('h3').stop().fadeOut(400);
}, function () {
	if ($(this).children('.input').children('form').children('input').val() !== '') {
		return;
	}
	$(this).children('.input').stop().fadeOut(400, function () {
		$('.topNavBox .ss h3').stop().fadeIn(400);
		$('.phoneR span').stop().animate({ 'width': '162.5px' }, 400)
	});
})

// topNav滚动
var t = document.documentElement.scrollTop;
var scroll = true;
if (t >= 138) {
	$('.abcBannav').css({ 'display': 'block' });
	$('.topNav').css({ 'position': 'fixed', 'top': '-99px', 'background-color': 'rgba(255,255,255,0.98)' });
	$('.topNav').stop().animate({ 'top': '0' }, 500);
}
window.onscroll = function () {
	var top = document.documentElement.scrollTop;
	if (!scroll) {
		return;
	}
	if (top >= 138) {
		if ($('.topNav').css('position') == 'relative') {
			scroll = false;
			$('.abcBannav').css({ 'display': 'block' });
			$('.topNav').css({ 'position': 'fixed', 'top': '-99px', 'background-color': 'rgba(255,255,255,0.98)' });
			$('.topNav').animate({ 'top': '0' }, 500, function () {
				scroll = true;
			});
		}
	} else if (top <= 38) {
		$('.abcBannav').css({ 'display': 'none' });
		$('.topNav').css({ 'position': 'relative' });
	}
}

// 底部JS
// 底部导航
$('.botNav .nav').on('mouseenter', function () {
	$(this).siblings('.nav').css({
		'background-color': '',
		'border-radius': '0',
	})
	$(this).siblings('.nav').children('.hidden').css({ 'display': 'none' });
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
	$(this).children('.hidden').css({ 'display': 'block' });
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
		that.children('.hidden').css({ 'display': 'none' });
	})
})

// 检测ie8
// dom必须传递 jquery对象
function ie8(dom) {
	var DEFAULT_VERSION = 8.0;
	var ua = navigator.userAgent.toLowerCase();
	var isIE = ua.indexOf("msie") > -1;
	var safariVersion;
	if (isIE) {
		safariVersion = ua.match(/msie ([\d.]+)/)[1];
	}
	if (safariVersion <= DEFAULT_VERSION) {
		alert('检测到您当前浏览器无法流畅查看页面，为了您有更完美的用户体验，请更换或升级浏览器访问！');
		if (dom) {
			dom.css({ 'display': 'block' });
		}
	};
}


var LeftTcTime = setTimeout(function () {
	$('.leftTc').stop().fadeOut();
	$('.hid').stop().fadeIn();
	clearTimeout(LeftTcTime);
}, 2000)
$('.leftTc').on('click', function () {
	$(this).stop().fadeOut();
	$('.hid').stop().fadeIn();
})
$('.hid>img').on('click', function () {
	$('.hid').stop().fadeOut();
	$('.leftTc').stop().fadeIn();
})
var LeftVal = '';
$('.hid input').focus(function () {
	if ($(this).attr('placeholder')) {
		LeftVal = $(this).attr('placeholder');
	}
	$(this).removeAttr('placeholder');
	$('.hid .bbqwer').stop().fadeIn();
})
$('.hid input').blur(function () {
	if (LeftVal) {
		$(this).attr('placeholder', LeftVal);
	}
	$('.hid .bbqwer').stop().fadeOut();
})
$('.hid .bbqwer>b').on('click', function () {
	$('.hid .bbqwer').stop().fadeOut();
})
var isUp2 = true;
$('.hid button').on('click', function () {
	if (!isUp2) return false;
	var Phone = $('.hid .phone').val();
	var url = window.location.href;
	if (Phone == '') {
		alert('手机号不能为空！');
		return;
	}
	// 判断手机号是否合法
	if (!isPhoneNo(Phone)) {
		alert('请您输入正确的号码');
		return;
	}
	isUp2 = false;
	$.ajax({
		'url': '/form/addform',
		'dataType': 'json',
		'type': 'post',
		'data': {
			phone: Phone,
			urlsite: url,
			type: '免费电话',
			page_title: $('title').eq(0).html(),
		},
		success: function (res) {
			alert(res.datas);
			$('.hid .phone').val('');
			isUp2 = true;
		}
	})
})
$('.phoneR').on('click', function () {
	$('.hid2').stop().fadeIn();
})
$('.ph').on('click', function () {
	$('.hid2').stop().fadeIn();
})
$('.hid2>img').on('click', function () {
	$('.hid2').stop().fadeOut();
})
var LeftVal = '';
$('.hid2 input').focus(function () {
	if ($(this).attr('placeholder')) {
		LeftVal = $(this).attr('placeholder');
	}
	$(this).removeAttr('placeholder');
	$('.hid2 .bbqwer').stop().fadeIn();
})
$('.hid2 input').blur(function () {
	if (LeftVal) {
		$(this).attr('placeholder', LeftVal);
	}
	$('.hid2 .bbqwer').stop().fadeOut();
})
$('.hid2 .bbqwer>b').on('click', function () {
	$('.hid2 .bbqwer').stop().fadeOut();
})
var isUp3 = true;
$('.hid2 button').on('click', function () {
	if (!isUp3) return false;
	var Phone = $('.hid2 .phone').val();
	var url = window.location.href;
	if (Phone == '') {
		alert('手机号不能为空！');
		return;
	}
	// 判断手机号是否合法
	if (!isPhoneNo(Phone)) {
		alert('请您输入正确的号码');
		return;
	}
	isUp3 = false;
	$.ajax({
		'url': '/form/addform',
		'dataType': 'json',
		'type': 'post',
		'data': {
			phone: Phone,
			urlsite: url,
			type: '免费电话',
			page_title: $('title').eq(0).html(),
		},
		success: function (res) {
			alert(res.datas);
			$('.hid2 .phone').val('');
			isUp3 = true;
		}
	})
})

var goTop2 = document.documentElement.scrollTop;
if (goTop2 <= 100) {
	$('.goTop').css({
		'display': 'none'
	})
}
$(window).scroll(function () {
	var goTop = document.documentElement.scrollTop;
	if (goTop <= 100) {
		$('.goTop').stop().fadeOut(500);
	} else {
		$('.goTop').stop().fadeIn(500);
	}
})
$('.goTop .gotopBox').click(function () {
	$('body,html').stop(true).animate({
		scrollTop: 0
	}, 1500);
});
$('.goTop>div').mouseover(function () {
	$(this).children('div').stop().fadeIn()
});
$('.goTop>div').mouseout(function (e) {
	var o = e.relatedTarget || e.toElement;
	if (!o) return;
	$(this).children('div').stop().fadeOut();
})
$('.goTop .wx').hover(function () {
	$('.goTop>img').stop().fadeIn();
}, function () {
	$('.goTop>img').stop().fadeOut();
});
var cinv;
$('.goTop input').focus(function () {
	if ($(this).attr('placeholder')) {
		cinv = $(this).attr('placeholder')
	};
	$(this).removeAttr('placeholder');
})
$('.goTop input').blur(function () {
	if (cinv) {
		$(this).attr('placeholder', cinv)
	};
})

// 验证手机号
function isPhoneNo(phone) {
	var pattern = /^1[34578]\d{9}$/;
	return pattern.test(phone);
}
var isUp = true;
$('.goTop div.shenqing div button').on('click', function () {
	if (!isUp) return false;
	var Name = $('.goTop .name').val();
	var Phone = $('.goTop .phone').val();
	var Sclass = $('.goTop select').val();
	var url = window.location.href;
	var path_source = document.referrer;
	if (Phone == '') {
		alert('手机号码不能为空！');
		return;
	}
	// 判断手机号是否合法
	if (!isPhoneNo(Phone)) {
		alert('请您输入正确的号码');
		return;
	}
	isUp = false;
	$.ajax({
		'url': '/form/addform',
		'dataType': 'json',
		'type': 'post',
		'data': {
			name: Name,
			phone: Phone,
			sclass: Sclass, // 中学 0  本科 1 研究生 2  -----> 初中-高中年级 7-12
			urlsite: url,
			path_source: path_source,
			page_title: $('title').eq(0).html(),
		},
		success: function (res) {
			alert(res.datas);
			$('.form .name').val('');
			$('.form .phone').val('');
			$('.form select').val('');
			isUp = true;
		}
	})
})




// 点击标签，跳转到搜索页面
$(".label").click(function () {
	// https://www.beliwin.com/home/search/index.html?keywords=%E7%BE%8E%E5%9B%BD&page=1
	var keywords = $(this).html();
	var url = "{:url('search/index')}?keywords=" + keywords + "&page=1";
	window.open(url);
});




$(".city>div>div.fr>div").hover(function () {
	$(this).children(".ewm").stop().fadeIn();
}, function () {
	$(this).children(".ewm").stop().fadeOut();
})

var qrcode = new QRCode(document.getElementById("qrcode"), {
	width: 115,
	height: 115
});

function makeCode() {
	var elText = document.getElementById("text");
	qrcode.makeCode(elText.value);
}
makeCode();


$('.topNavBox .ss .input button').click(function () {
	var keywords = $("#keywords").val();
	if (keywords == '') {
		alert('请输入搜索内容~');
		return false;
	}
})

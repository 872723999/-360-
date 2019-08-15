
// swiper
var mySwiper = new Swiper('.swiper-container',{
	paginationClickable: true,
	loop: true,
	autoplay: 5 * 1000,
	speed: 500,
	autoplayDisableOnInteraction: false ,
});
$('.btnleft').click(function() {
	mySwiper.swipePrev();
});
$('.btnright').click(function() {
	mySwiper.swipeNext();
});
var mySwiper2 = new Swiper('.swiper-container2',{
	pagination: '.pagination',
	paginationClickable: true,
	loop: true,
	autoplay: 5 * 1000,
	speed: 500,
	autoplayDisableOnInteraction: false 
});
var mySwiper3 = new Swiper('.swiper-container3',{
	pagination: '.pagination1',
	paginationClickable: true,
	loop: true,
	autoplay: 5 * 1000,
	speed: 500,
	autoplayDisableOnInteraction: false 
});

// 录取故事
$('.swiper-container2').on('mouseenter', function () {
	mySwiper2.stopAutoplay();
})
$('.swiper-container2').on('mouseleave', function () {
	mySwiper2.startAutoplay();
})

// 服务项目鼠标上移效果
$('.fuwu_xiangmu .count>a:nth-child(1) div.fl').css({'margin-left': '0'});
// $('.fuwu_xiangmu .count>div.fl').on('mouseenter', function () {
// 	$(this).children('.hidden').fadeIn(400);
// })
// $('.fuwu_xiangmu .count>div.fl').on('mouseleave', function () {
// 	$(this).children('.hidden').fadeOut(400);
// })
			
// 选项卡选项
$('.daoshi_team .count>div>a').eq(0).attr('class', 'active fl');
$('.daoshi_team .count .b .bBox').eq(0).css({'display': 'block'});
$('.daoshi_team .count>div>a').on('mouseenter', function () {
	var index = $('.daoshi_team .count>div>a').index($(this));
	$(this).attr('class', 'fl active').siblings('a').attr('class', 'fl');
	$('.daoshi_team .count .b .bBox').eq(index).css({'display': 'block'}).siblings('.bBox').css({'display': 'none'});
})
// 
$('.rightb>div.fl').on('mouseenter', function () {
	$(this).children('.hidden').stop().fadeIn();
	$(this).children('.hiddenTitle').stop().fadeOut();
})
$('.rightb>div.fl').on('mouseleave', function () {
	$(this).children('.hidden').stop().fadeOut();
	$(this).children('.hiddenTitle').stop().fadeIn();
})

// 增长数字的动画
var options = {
  useEasing: true, 
  useGrouping: true, 
  separator: '', 
  decimal: '.', 
};
var num1 = new CountUp("span1", 0, 3000, 0, 2.5, options);
var num2 = new CountUp("span2", 0, 70, 0, 2.5, options);
var num3 = new CountUp("span3", 0, 90, 0, 2.5, options);
var num4 = new CountUp("span4", 0, 12, 0, 2.5, options);

$(window).scroll(function () {
	if( $(window).scrollTop() + 700 >= $('.luqu_huigu').offset().top && $(window).scrollTop() < $('.lqgs').offset().top ){
		num1.start();
		num2.start();
		num3.start();
		num4.start();
	}else if ( $(window).scrollTop() < $('.luqu_huigu').offset().top || $(window).scrollTop() >= $('.lqgs').offset().top ) {
		num1.reset();
		num2.reset();
		num3.reset();
		num4.reset();
	}
})
$('.luqu_huigu .huigu>div>div>div.fl:last-child').css({
	"margin-right": '0'
})

// 背景提升
$('.bjts .count>div.fr div.fl:nth-child(odd)').css({'margin-left': '0'});

$('.bjts .count>div.fl').on('mouseenter', function () {
	$(this).children('.zg').stop().fadeOut().siblings('.hidden').stop().fadeIn();
})
$('.bjts .count>div.fl').on('mouseleave', function () {
	$(this).children('.zg').stop().fadeIn().siblings('.hidden').stop().fadeOut();
})

$('.bjts .count>div.fr div.fl').on('mouseenter', function () {
	$(this).children('.zg').stop().fadeOut().siblings('.hidden').stop().fadeIn();
})
$('.bjts .count>div.fr div.fl').on('mouseleave', function () {
	$(this).children('.zg').stop().fadeIn().siblings('.hidden').stop().fadeOut();
})

// 留学资讯
$('.newslist .box .liuxue_zixun .count .box:nth-child(3)').css({
	'margin-right': '0'
})


$(".navButton").click(function () {
	$(".navigation").stop().animate({"left": "0"}, 400);
	$(".navigationHidden").stop().fadeIn(400);
})
$(".navigationHidden").click(function () {
	$(this).stop().fadeOut(400);
	$(".navigation").stop().animate({"left": "-4.906666rem"}, 400)
})
$(".navigation .liHidden").eq(0).css({"display": "block"});
var num = 0;
$(".navigation ul li").bind("click", function () {
	if(window.event){//IE下阻止冒泡
		event.cancelBubble  = true;
	}else{
		event.stopPropagation();
	}
	console.log(1);
	var index = $(".navigation ul li").index($(this));
	if ( index == $(".navigation ul li").length - 1 ) {
		return false;
	}
	if ( num == index ) {
		$(this).children(".liHidden").stop().slideUp(function () {
			$(".navigation ul li").children(".liT").children("i").html("+");
		});
		num = null;
		return false;
	}
	num = index;
	var that = $(this);
	$(".navigation .liHidden").stop().slideUp(function () {
		$(".navigation ul li").children(".liT").children("i").html("+");
	});
	$(".navigation .liHidden").eq(index).stop().slideDown(function () {
		that.children(".liT").children("i").html("-");
	});
})
$(".navigation ul li a").bind("click", function () {
	if(window.event){//IE下阻止冒泡
		event.cancelBubble  = true;
	}else{
		event.stopPropagation();
	}
})
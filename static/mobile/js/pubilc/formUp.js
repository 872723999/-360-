
// // 验证手机号
function isPhoneNo(phone) {
	var pattern = /^1[34578]\d{9}$/;
	return pattern.test(phone);
}

function focusBlur(inputDom) {
	var textpl='';
	var windowHeight = window.innerHeight
	inputDom.focus(function () {
		textpl = $(this).attr('placeholder');
		$(this).removeAttr('placeholder');
	})
	inputDom.blur(function () {
		$(this).attr('placeholder', textpl);
		var windowFocusHeight = window.innerHeight
		if (windowHeight == windowFocusHeight) {
		  return
		}
		console.log(windowHeight + '--' + windowFocusHeight);
		console.log('修复');
		var currentPosition;
		var speed = 1; //页面滚动距离
		currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
		currentPosition -= speed;
		window.scrollTo(0, currentPosition); //页面向上滚动
		currentPosition += speed; //speed变量
		window.scrollTo(0, currentPosition); //页面向下滚动
	})
}

window.isPhoneNo = isPhoneNo;
window.focusBlur = focusBlur;








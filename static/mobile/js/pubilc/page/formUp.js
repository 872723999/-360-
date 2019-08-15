function formUp(formData, father) {
	// // 验证手机号
	function isPhoneNo(phone) {
		var pattern = /^1[34578]\d{9}$/;
		return pattern.test(phone);
	}
	if (formData.phone == '') {
		Dialog.init('手机号码不能为空', 2000);
		return false;
	}
	if (!isPhoneNo(Number(formData.phone))) {
		Dialog.init('手机号码不正确', 2000);
		return false;
	}
	var href = window.location.href;
	var path_source = document.referrer;
	$.ajax({
		type: "post",
		url: '/form/addform',
		data: formData,
		dateType: 'json',
		success: function(res) {
			var res = JSON.parse(res);
			if (res.code == 1) {
				Dialog.init('提交成功，请耐心等待电话', 2000);
				if ( father.children('input') ) {
					var input = father.children('input')
					for (var i=0; i<input.length; i++) {
						input.eq(i).val('');
					}
				}
				if ( father.children('textarea') ) {
					var textarea = father.children('textarea')
					for (var i=0; i<textarea.length; i++) {
						textarea.eq(i).val('');
					}
				}
				if ( father.children('select') ) {
					var select = father.children('select')
					for (var i=0; i<select.length; i++) {
						select.eq(i).val('');
					}
				}
			}else {
				Dialog.init('提交失败，请稍后再试', 2000);
			}
		}
	});
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

window.formUp = formUp;
window.focusBlur = focusBlur;








$('.formOneBox').click(function () {
    $(this).stop().fadeOut();
    $('.formOne').stop().fadeIn();
})
$('.formOne em').click(function () {
    $('.formOne').stop().fadeOut();
    $('.formOneBox').stop().fadeIn();
})
var val = '';
$('.formOne input').focus(function () {
    if ($(this).attr('placeholder')) {
        val = $(this).attr('placeholder');
        $(this).removeAttr('placeholder');
    }
})
$('.formOne input').blur(function () {
    if (val) {
        $(this).attr('placeholder', val);
    }
})
// 验证手机号
function isPhoneNo(phone) {
    var pattern = /^1[34578]\d{9}$/;
    return pattern.test(phone);
}
var isUp = true;
$('.formOne span').click(function () {
    if (!isUp) return false;
    var phone = $('.formOne input').val();
    if (phone == '') {
        alert('电话号码不能为空！');
        return false;
    }
    // 判断手机号是否合法
    if (!isPhoneNo(phone)) {
        alert('请您输入正确的号码');
        return false;
    }
    isUp = false;
    var url = window.location.href;
    var path_source = document.referrer;
    $.ajax({
        'url': '/form/addform',
        'dataType': 'json',
        'type': 'post',
        'data': {
            phone: phone,
            urlsite: url,
            path_source: path_source,
            page_title: "左上、" + $('title').eq(0).html(),
        },
        success: function (res) {
            alert(res.datas);
            $('.formOne input').val('');
            isUp = true;
        }
    })
})
var LeftTcTime2 = setTimeout(function () {
    $('.formDd').stop().fadeOut();
    $('.formDbox').stop().fadeIn();
    clearTimeout(LeftTcTime2);
}, 2000)
$('.formDd').click(function () {
    $(this).stop().fadeOut();
    $('.formDbox').stop().fadeIn();
    clearTimeout(LeftTcTime2);
})
$('.formDbox .x').click(function () {
    $('.formDbox').stop().fadeOut();
    $('.formDd').stop().fadeIn();
})
// 验证手机号
function isPhoneNo(phone) {
    var pattern = /^1[34578]\d{9}$/;
    return pattern.test(phone);
}
var LeftVal = '';
$('.formDbox input').focus(function () {
    if ($(this).attr('placeholder')) {
        LeftVal = $(this).attr('placeholder');
    }
    $(this).removeAttr('placeholder');
})
$('.formDbox input').blur(function () {
    if (LeftVal) {
        $(this).attr('placeholder', LeftVal);
    }
})
var isUp = true;
$('.formDbox button').on('click', function () {
    if (!isUp) return false;
    var Phone = $('.formDbox .fphone').val();
    var Name = $('.formDbox .fname').val();
    var sclass = $('.formDbox .sclass').val();
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
    isUp = false;
    $.ajax({
        'url': '/form/addform',
        'dataType': 'json',
        'type': 'post',
        'data': {
            name: Name,
            phone: Phone,
            sclass: sclass,
            urlsite: url,
            page_title: $('title').eq(0).html(),
        },
        success: function (res) {
            alert(res.datas);
            $('.formDbox .fname').val('');
            $('.formDbox .fphone').val('');
            $('.formDbox select').val('');
            isUp = true;
        }
    })
})
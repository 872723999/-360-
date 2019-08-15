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
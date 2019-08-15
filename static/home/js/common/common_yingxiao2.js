var val2 = '';
$('.formTwo .phone2').focus(function () {
    if ($(this).attr('placeholder')) {
        val2 = $(this).attr('placeholder');
        $(this).removeAttr('placeholder');
    }
})
$('.formTwo .phone2').blur(function () {
    if (val2) {
        $(this).attr('placeholder', val2);
    }
})
$('.formTwoBox').click(function () {
    $(this).stop().fadeOut();
    $('.formTwo').stop().fadeIn();
})
$('.formTwo>em').click(function () {
    $('.formTwo').stop().fadeOut();
    $('.formTwoBox').stop().fadeIn();
})
var isUp = true;
$('.formTwo>span').click(function () {
    if (!isUp) return false;
    var name = $('.formTwo .name input').val();
    var phone = $('.formTwo .phone2').val();
    var jieduan = $('.formTwo .jieduan').val();
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
            name: name,
            phone: phone,
            sclass: jieduan,
            urlsite: url,
            path_source: path_source,
            page_title: "左下、" + $('title').eq(0).html(),
        },
        success: function (res) {
            alert(res.datas);
            $('.formTwo .name input').val('');
            $('.formTwo .phone2').val('');
            $('.formTwo .jieduan').val('');
            isUp = true;
        }
    })
})

$('.rightFormBox').click(function () {
    $(this).stop().fadeOut();
    $('.rightForm').stop().fadeIn();
    $('#spanX').stop().fadeIn();
})
$('#spanX').click(function () {
    $(this).stop().fadeOut();
    $('.rightForm').stop().fadeOut();
    $('.rightFormBox').stop().fadeIn();
})
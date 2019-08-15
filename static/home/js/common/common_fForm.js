// // 验证手机号
function isPhoneNo(phone) {
    var pattern = /^1[34578]\d{9}$/;
    return pattern.test(phone);
}

$(".bottomform button").click(function () {
    var phone = $(".bottomform>div>div input").val();
    if (phone == "") {
        alert('号码不能为空');
        return false;
    }
    if (!isPhoneNo(Number(phone))) {
        alert('号码不正确');
        return false;
    }
    $.ajax({
        type: "post",
        url: "/form/addform",
        data: {
            name: name,
            phone: phone,
            urlsite: window.location.href,
            path_source: document.referrer,
        },
        dataType: "json",
        success: function (res) {
            alert(res.datas);
            $(".bottomform>div>div input").val("");
        }
    });
})

var $top = true;
$(window).scroll(function () { 
    var top = document.documentElement.scrollTop;
    if ( top > 100 && $top ) {
        $top = false;
        $(".bottomform").stop().fadeIn(function () {
            $top = true;
        });
    }
});
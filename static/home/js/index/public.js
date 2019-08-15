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

// 百度统计代码
var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?01e274a68687048b409421c6d427bdd1";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

window._pt_lt = new Date().getTime();
window._pt_sp_2 = [];
_pt_sp_2.push('setAccount,259adec7');
var _protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
(function () {
    var atag = document.createElement('script');
    atag.type = 'text/javascript';
    atag.async = true;
    atag.src = _protocol + 'js.ptengine.cn/259adec7.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(atag, s);
})();

// 铂金推荐统计
if (location.href.indexOf('www.beliwin.com/information') > 0) {
    //匹配所有href以information开头的a标签
    $("a[href^='/information']").click(function () {
        ptEventName = $(this)[0].href.match(/\d+/g)[0]; //事件名
        //发送事件包
        _pt_sp_2.push('setCustomEvent', {
            eventName: ptEventName,
            isActiveElement: 1
        });
    })
}

// function go() {
// 	var height = 540;
// 	var width = 688;
// 	var top=Math.round((window.screen.height-height)/2);
// 	var left=Math.round((window.screen.width-width)/2);
//     window.open("http://uclient.yunque360.com/frame.html?company_id=ca455t16093i&id=dft35023157&lng=cn&r=&rf1=http%3A//m.beliwin&rf2=.com/&p=http%3A//m.beliwin.com/page/collegeseniormoney.html&cid=1535016066310391295601&sid=c9b247e1cad84b46a6831b00506930d1","newwindow", "height=" + height + ", width=" + width + ", top=" + top + ", left= " + left + ", toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
// }
function go() {
    var height = 540;
    var width = 688;
    var top = Math.round((window.screen.height - height) / 2);
    var left = Math.round((window.screen.width - width) / 2);
    window.open("https://tb.53kf.com/code/client/d794c640cf28f4f6196ded951e3d164f/1", "newwindow", "height=" + height +
        ", width=" + width + ", top=" + top + ", left= " + left +
        ", toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
}

// (function(scope, globalName, ApiAddress) { window[globalName] = window[globalName] || function(company_id) { (window[globalName].company_id = window[globalName].company_id || company_id); }; var ele = document.createElement("script"); ele.src = ApiAddress + "?v=" + new Date().getUTCDate(); document.getElementsByTagName("body")[0].appendChild(ele); })(window, "_YUNQUE", "//dist.yunque360.com/bundle.js"); _YUNQUE("ca455t16093i");

(function () { var _53code = document.createElement("script"); _53code.src = "https://tb.53kf.com/code/code/d794c640cf28f4f6196ded951e3d164f/1"; var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(_53code, s); })();

(function () {
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();

function uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}

var getuuid = localStorage.getItem("uuid");
var cip = returnCitySN["cip"];

if (!getuuid) {
    var map = new BMap.Map("container");
    var nowCity = new BMap.LocalCity();
    nowCity.get(bdGetPosition);
    function bdGetPosition(result) {
        var cityName = result.name; //当前的城市名
        var currentUuid = uuid();
        localStorage.setItem("uuid", currentUuid);
        $.ajax({
            type: "post",
            url: "https://web.beliwin.com/api/index/prohibit_user",
            data: {
                uuid: currentUuid,
                address: cityName,
                ip: cip
            },
            dataType: "json",
            success: function (response) {
                console.log(response);
            }
        });
    }
} else {
    $.ajax({
        type: "get",
        url: "https://web.beliwin.com/api/index/get_prohibit_user",
        dataType: "json",
        success: function (response) {
            $.each(response.datas, function (indexInArray, valueOfElement) {
                if (valueOfElement.uuid == getuuid) {
                    window.location.href = "https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E8%A1%80%E8%85%A5&step_word=&hs=0&pn=81&spn=0&di=47080&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=2358000980%2C526723213&os=625406598%2C657768987&simid=3485606225%2C243207580&adpicid=0&lpn=0&ln=461&fr=&fmq=1565675124053_R&fm=result&ic=&s=undefined&hd=&latest=&copyright=&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fs9.rr.itc.cn%2Fr%2FwapChange%2F20171_6_18%2Fa3rj3934795606947405.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3F4_z%26e3Bf5i7_z%26e3Bv54AzdH3FgAzdH3F900ll8lcnAzdH3F&gsm=1e&rpstart=0&rpnum=0&islist=&querylist=&force=undefined";
                }
            });
        }
    });
}

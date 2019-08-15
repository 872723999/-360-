var mySwiper = new Swiper('#swiper1', {
    loop: true,
    navigation: {
        nextEl: '#next1',
        prevEl: '#prev1',
    },
})

// 
module_tab.tab(".dingjianMx .t span", ".dingjianMx .box .b");
$(".dingjianMx .box .bbox:nth-child(5n)").css({
    "margin-right": "0"
})
var mySwiper4 = new Swiper('#swiper5', {
    direction: 'vertical',
    slidesPerView: 10,
    spaceBetween: 15,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: '#next5',
        prevEl: '#prev5',
    },
    //滑到最后一个隐藏前进按钮
    on: {
        slideChangeTransitionEnd: function () {
            if (this.isEnd) {
                $(this.navigation.$nextEl.children()).stop().fadeOut();
            } else {
                $(this.navigation.$nextEl.children()).stop().fadeIn();
            }
            if (this.isBeginning) {
                $(this.navigation.$prevEl.children()).stop().fadeOut();
            } else {
                $(this.navigation.$prevEl.children()).stop().fadeIn();
            }
        },
    },
})

module_tab.tab("#swiper5 .swiper-slide", ".bfrb");

$(".bfrb").on("click", $(".fy"), function (e) {
    // e.preventDefault();
    var e = e || window.event;
    var $index = $(".fy").index($(e.target));
    var $that = e.target;
    if ($($that).attr("class") == "fy") {
        if ($($that).attr("data-lang") == "en") {
            setTimeout(function () {
                $($that).html("英文");
                $(".bfrb .box").eq($index).children().children(".zh").css({
                    "display": "block"
                })
                $(".bfrb .box").eq($index).children().children(".en").css({
                    "display": "none"
                })
                $($that).attr("data-lang", "zh");
            }, 400)
        } else {
            setTimeout(function () {
                $($that).html("中文");
                $(".bfrb .box").eq($index).children().children(".en").css({
                    "display": "block"
                })
                $(".bfrb .box").eq($index).children().children(".zh").css({
                    "display": "none"
                })
                $($that).attr("data-lang", "en")
            }, 400)
        }
    }
    console.log(1);
});

$('.img_one img').viewer();

// 
module_tab.tab(".manguan .t>div", ".manguan .box .b");

// 
module_tab.tab(".shenqingshixun .t span", ".shenqingshixun .b .box");
var mySwiper2 = new Swiper('#swiper2', {
    slidesPerView: 3,
    navigation: {
        nextEl: '#next2',
        prevEl: '#prev2',
    },
})
var mySwiper3 = new Swiper('#swiper3', {
    slidesPerView: 3,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: '#next3',
        prevEl: '#prev3',
    },
})
var mySwiper4 = new Swiper('#swiper4', {
    slidesPerView: 3,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: '#next4',
        prevEl: '#prev4',
    },
})

// 
module_tab.tab(".shenqinggushi .t span", ".shenqinggushi .b .content");
$(".shenqinggushi .b .content a:nth-child(3n) .box").css({
    "margin-right": "0"
})

// 选项卡选项
$('.daoshi_team .count>div>a').eq(2).attr('class', 'active fl');
$('.daoshi_team .count .b .bBox').eq(2).css({ 'display': 'block' });
$('.daoshi_team .count>div>a').on('mouseenter', function () {
    var index = $('.daoshi_team .count>div>a').index($(this));
    $(this).attr('class', 'fl active').siblings('a').attr('class', 'fl');
    $('.daoshi_team .count .b .bBox').eq(index).css({ 'display': 'block' }).siblings('.bBox').css({ 'display': 'none' });
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
var num1 = new CountUp("span1", 0, 70, 0, 2.5, options);
var num2 = new CountUp("span2", 0, 400, 0, 2.5, options);
var num3 = new CountUp("span3", 0, 2000, 0, 2.5, options);
var num4 = new CountUp("span4", 0, 8000, 0, 2.5, options);
var num5 = new CountUp("span5", 0, 12, 0, 2.5, options);
num1.start();
num2.start();
num3.start();
num4.start();
num5.start();

var num6 = new CountUp("span6", 0, 6, 0, 2.5, options);
var num7 = new CountUp("span7", 0, 1000, 0, 2.5, options);
var num8 = new CountUp("span8", 0, 400, 0, 2.5, options);
var num9 = new CountUp("span9", 0, 40, 0, 2.5, options);
var num10 = new CountUp("span9", 0, 1, 0, 2.5, options);
$(window).scroll(function () {
    if ($(window).scrollTop() + 700 >= $('.luqu_huigu').offset().top && $(window).scrollTop() < $('.fuwuliucheng').offset().top) {
        num6.start();
        num7.start();
        num8.start();
        num9.start();
    } else if ($(window).scrollTop() < $('.luqu_huigu').offset().top || $(window).scrollTop() >= $('.fuwuliucheng').offset().top) {
        num6.reset();
        num7.reset();
        num8.reset();
        num9.reset();
    }
})

$("img").lazyload({
    skip_invisible: false,
    failure_limit: "10",
    threshold: 100,
    effect: "fadeIn"
})

$('.meiti .img:last-child').css({ 'margin-right': '0' });
// 
$('.meiti .img').hover(function () {
    $(this).children('img').stop().fadeOut();
}, function () {
    $(this).children('img').stop().fadeIn();
})

var mySwiper3 = new Swiper('.swiper-container3', {
    pagination: {
        el: '.pagination1',
        clickable: true,
    },
});

// 留学资讯
$('.newslist .box .liuxue_zixun .count .box:nth-child(3)').css({
    'margin-right': '0'
})

// 彬彬后期监管服务css兼容性考虑
$('.swiper-container2 .swiper-slide:nth-child(odd) .content .sj').css({
    'position': 'absolute',
    'left': '50%',
    'bottom': '-10px',
    'margin-left': '-10px',
    'border-top': '10px solid #D9D8D6',
    'border-left': '10px solid transparent',
    'border-right': '10px solid transparent',
    'transition': 'all .3s'
})
$('.swiper-container2 .swiper-slide:nth-child(odd) .content .sj2').css({
    'position': 'absolute',
    'left': '50%',
    'bottom': '-8px',
    'margin-left': '-10px',
    'border-top': '10px solid #ffffff',
    'border-left': '10px solid transparent',
    'border-right': '10px solid transparent',
    'transition': 'all .3s',
})
$('.swiper-container2 .swiper-slide:nth-child(2n) .content .sj').css({
    'position': 'absolute',
    'left': '50%',
    'top': '-10px',
    'margin-left': '-10px',
    'border-bottom': '10px solid #D9D8D6',
    'border-left': '10px solid transparent',
    'border-right': '10px solid transparent',
    'transition': 'all .3s'
})
$('.swiper-container2 .swiper-slide:nth-child(2n) .content .sj2').css({
    'position': 'absolute',
    'left': '50%',
    'top': '-8px',
    'margin-left': '-10px',
    'border-bottom': '10px solid #ffffff',
    'border-left': '10px solid transparent',
    'border-right': '10px solid transparent',
    'transition': 'all .3s',
})
$('.swiper-container2  .swiper-slide:nth-child(odd) .dot').css({
    'bottom': '-42px'
})
$('.swiper-container2 .swiper-slide:nth-child(2n) .dot').css({
    'top': '-42px'
})
$('.swiper-container2  .swiper-slide:nth-child(2n)').css({
    'padding-top': '176px'
})

// 彬彬后期监管服务js swiper配置
var mySwiper2 = new Swiper('.swiper-container2', {
    slidesPerView: 6.7,
    slidesOffsetAfter: 200,
    autoplayStopOnLast: true,
});

// mySwiper2.stopAutoplay();
// 
$('.leftBtn').click(function () {
    mySwiper2.slidePrev();
});
$('.rightBtn').click(function () {
    mySwiper2.slideNext();
});

// 彬彬后期监管服务鼠标上移效果
$('.swiper-container2 .swiper-slide .content').on('mouseenter', function () {
    var index = $('.swiper-container2 .swiper-slide .content').index($(this));
    if (index % 2 == 0) {
        $(this).children('.sj').css({
            'border-top': '10px solid #FF715D'
        })
        $(this).children('.sj2').css({
            'border-top': '10px solid #FF715D'
        })
    } else {
        $(this).children('.sj').css({
            'border-bottom': '10px solid #FF715D'
        })
        $(this).children('.sj2').css({
            'border-bottom': '10px solid #FF715D'
        })
    }
})
$('.swiper-container2 .swiper-slide .content').on('mouseleave', function () {
    var index = $('.swiper-container2 .swiper-slide .content').index($(this));
    if (index % 2 == 0) {
        $(this).children('.sj').css({
            'border-top': '10px solid #D9D8D6'
        })
        $(this).children('.sj2').css({
            'border-top': '10px solid #ffffff'
        })
    } else {
        $(this).children('.sj').css({
            'border-bottom': '10px solid #D9D8D6'
        })
        $(this).children('.sj2').css({
            'border-bottom': '10px solid #ffffff'
        })
    }
})

// 视频
$(window).load("/index/video_list_ajax", function (response, status, request) {
    this; // dom element
    var data = JSON.parse(response).datas;
    var str = "";
    $.each(data, function (indexInArray, valueOfElement) {
        str += '<div class="box fl">' +
            '<div class="img"' +
            'data-videoSrc="' + valueOfElement.video_src + '">' +
            '<img data-original="' + valueOfElement.img + '" alt="">' +
            '<em><img src="/static/home/img/page/LowAge/baofang@2x.png" class="bf" alt=""></em>' +
            '</div>' +
            '<h4>' + valueOfElement.school_name + '</h4>' +
            '</div>';
    });
    $(".yzgz .content").html(str);
    // 彬彬为您用心甄选美国优质好高中
    var $click_box = $(".yzgz .content .box .img");
    var $video = $(".video_c");
    var $remove_video = $(".video_c img");
    $($click_box).click(function (e) {
        e.preventDefault();
        var $this_src = $(this).attr("data-videoSrc");
        $video.children("video").attr("src", $this_src);
        $video.stop().fadeIn();
    });
    $($remove_video).click(function (e) {
        e.preventDefault();
        $video.children("video").removeAttr("src");
        $video.stop().fadeOut();
    });
    $("img").lazyload({
        skip_invisible: false,
        failure_limit: "10",
        threshold: 100,
        effect: "fadeIn"
    })
});

// // 验证手机号
function isPhoneNo(phone) {
    var pattern = /^1[34578]\d{9}$/;
    return pattern.test(phone);
}
$(".form button").click(function () {
    var name = $(".name").val();
    var phone = $(".phone").val();
    var sclass = $(".form select").val();
    if (phone == "") {
        alert("手机号码不能为空");
        return false;
    }
    if (!isPhoneNo(Number(phone))) {
        alert("手机号码不正确，请注意手机格式！");
        return false;
    }
})



module_tab.tab(".zonghe .tableTab span", ".zonghe .tableBox .box");
module_tab.tab(".wenli .tableTab span", ".wenli .tableBox .box");

module_tab.tab(".jisu .tableTab span", ".jisu .tableBox .box");
module_tab.tab(".zoudu .tableTab span", ".zoudu .tableBox .box");


var FunData = function (e) {
    var proportion = 25; //按照比例切割
    var num = 0;
    var _data = [];
    for (var i = 0; i < e.length; i++) {
        if (i % proportion == 0 && i != 0) {
            _data.push(e.slice(num, i));
            num = i;
        }
        if ((i + 1) == e.length) {
            _data.push(e.slice(num, (i + 1)));
        }
    }
    return _data;
}

$http.post("https://www.beliwin.com/Apiface/liuxue", {
    name: "dx",
    type: 4
}, function (res) {
    var data = FunData(res.datas);
    $.each(data, function (indexInArray, valueOfElement) {
        var str = "";
        $.each(valueOfElement, function (index, element) {
            var chengji = element.app_infos;
            if (!chengji || chengji == "-") {
                chengji = "--";
            }
            str += `<tr>
            <td>`+ element.us_rank + `</td>
            <td>`+ element.name_zh + `</td>
            <td><span onclick="go()">查看热门专业</span></td>
            <td>`+ chengji + `</td>
            <td><span onclick="go()">查看详情&gt;&gt;</span></td>
            <td><span onclick="go()">马上申请&gt;&gt;</span></td>
            <td><a onclick="go()">立即咨询</a></td>
            </tr>`
        });
        $(".zonghe .tableBox .box:nth-child(" + (Number(indexInArray) + 1) + ") .table2").html(str);
    });
})

$http.post("https://www.beliwin.com/Apiface/liuxue", {
    name: "dx",
    type: 5
}, function (res) {
    var data = FunData(res.datas);
    $.each(data, function (indexInArray, valueOfElement) {
        var str = "";
        $.each(valueOfElement, function (index, element) {
            var chengji = element.app_infos;
            if (!chengji || chengji == "-") {
                chengji = "--";
            }
            str += `<tr>
            <td>`+ element.us_rank + `</td>
            <td>`+ element.name_zh + `</td>
            <td><span onclick="go()">查看热门专业</span></td>
            <td>`+ chengji + `</td>
            <td><span onclick="go()">查看详情&gt;&gt;</span></td>
            <td><span onclick="go()">马上申请&gt;&gt;</span></td>
            <td><a onclick="go()">立即咨询</a></td>
            </tr>`
        });
        $(".wenli .tableBox .box:nth-child(" + (Number(indexInArray) + 1) + ") .table2").html(str);
    });
})

// $http.post("https://www.beliwin.com/Apiface/liuxue", {
//     name: "gz",
//     type: 1
// }, function (res) {
//     var data = FunData(res.datas);
//     console.log(data);
//     $.each(data, function (indexInArray, valueOfElement) {
//         var str = "";
//         $.each(valueOfElement, function (index, element) { 
//             var chengji = element.sat;
//             if ( !chengji || chengji == "-" || chengji == "0" ) {
//                 chengji = "--";
//             }
//             str += `<tr>
//             <td>`+(Number(index)+1)+`</td>
//             <td>`+element.name_zh+`</td>
//             <td><span onclick="go()">点击查看</span></td>
//             <td>`+chengji+`</td>
//             <td><span onclick="go()">查看详情&gt;&gt;</span></td>
//             <td><span onclick="go()">马上申请&gt;&gt;</span></td>
//             <td><a onclick="go()">立即咨询</a></td>
//             </tr>`
//         });
//         $(".jisu .tableBox .box:nth-child("+ (Number(indexInArray) + 1) +") .table2").html(str);
//     });
// })

// $http.post("https://www.beliwin.com/Apiface/liuxue", {
//     name: "gz",
//     type: 2
// }, function (res) {
//     var data = FunData(res.datas);
//     $.each(data, function (indexInArray, valueOfElement) {
//         var str = "";
//         $.each(valueOfElement, function (index, element) { 
//             var chengji = element.sat;
//             if ( !chengji || chengji == "-" || chengji == "0" ) {
//                 chengji = "--";
//             }
//             str += `<tr>
//             <td>`+(Number(index)+1)+`</td>
//             <td>`+element.name_zh+`</td>
//             <td><span onclick="go()">点击查看</span></td>
//             <td>`+chengji+`</td>
//             <td><span onclick="go()">查看详情&gt;&gt;</span></td>
//             <td><span onclick="go()">马上申请&gt;&gt;</span></td>
//             <td><a onclick="go()">立即咨询</a></td>
//             </tr>`
//         });
//         $(".zoudu .tableBox .box:nth-child("+ (Number(indexInArray) + 1) +") .table2").html(str);
//     });
// })

// 选项卡选项
$('.daoshi_team .count>div.t a').eq(0).attr('class', 'active fl');
$('.daoshi_team .count .b .bBox').eq(0).css({ 'display': 'block' });
$('.daoshi_team .count>div.t a').on('click', function () {
    var index = $('.daoshi_team .count>div.t a').index($(this));
    $(this).attr('class', 'fl active').siblings('a').attr('class', 'fl');
    $('.daoshi_team .count .b .bBox').eq(index).css({ 'display': 'block' }).siblings('.bBox').css({ 'display': 'none' });
})
$('.rightb>div.fl').on('mouseenter', function () {
    $(this).children('.hidden').stop().fadeIn();
    $(this).children('.hiddenTitle').stop().fadeOut();
})
$('.rightb>div.fl').on('mouseleave', function () {
    $(this).children('.hidden').stop().fadeOut();
    $(this).children('.hiddenTitle').stop().fadeIn();
})

$(window).scroll(function () {
    if ($(window).scrollTop() + 700 >= $('#mydiv').offset().top) {
        $('#mydiv .box .dq>div').css({ 'background-position-x': 'right' });
    }

    if ($(window).scrollTop() + 700 < $('#mydiv').offset().top) {
        $('#mydiv .box .dq>div').css({ 'background-position-x': 'left' });
    }
})

// 增长数字的动画
var options = {
    useEasing: true,
    useGrouping: true,
    separator: '',
    decimal: '.',
};
var num1 = new CountUp("num1", 0, 100, 0, 2.5, options);
var num2 = new CountUp("num2", 0, 100, 0, 2.5, options);
var num3 = new CountUp("num3", 0, 53, 0, 2.5, options);
var num4 = new CountUp("num4", 0, 9.7, 1, 2.5, options);

num1.start();
num2.start();
num3.start();
num4.start();
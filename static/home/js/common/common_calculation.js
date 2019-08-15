var isFadein = false;
$("#selectbox").click(function (e) {
    if (!isFadein) {
        $("#select>div.b").css("display", "block");
        $(this).children("em").addClass("active");
    } else {
        $("#select>div.b").css("display", "none");
        $(this).children("em").removeClass("active");
    }
    isFadein = !isFadein;
});

var selectJson = [
    {
        type: "中学",
        cost: [
            {
                "xuefei": "8500",
                "shenghuofei": "2000",
                "zhusufei": "15000",
                "zafei": "4000",
            },
            {
                "xuefei": "12000",
                "shenghuofei": "3500",
                "zhusufei": "16000",
                "zafei": "4000"
            },
            {
                "xuefei": "15000",
                "shenghuofei": "5000",
                "zhusufei": "20000",
                "zafei": "4000"
            },
            {
                "xuefei": "18000",
                "shenghuofei": "10000",
                "zhusufei": "22000",
                "zafei": "4000"
            },
            {
                "xuefei": "50000",
                "shenghuofei": "30000",
                "zhusufei": "25000",
                "zafei": "4000"
            }
        ]
    },
    {
        type: "本科",
        cost: [
            {
                "xuefei": "10000",
                "shenghuofei": "7000",
                "zhusufei": "8000",
                "zafei": "4000"
            },
            {
                "xuefei": "12000",
                "shenghuofei": "10000",
                "zhusufei": "10000",
                "zafei": "4000"
            },
            {
                "xuefei": "25000",
                "shenghuofei": "15000",
                "zhusufei": "12000",
                "zafei": "4000"
            },
            {
                "xuefei": "35000",
                "shenghuofei": "20000",
                "zhusufei": "15000",
                "zafei": "4000"
            },
            {
                "xuefei": "60000",
                "shenghuofei": "20000",
                "zhusufei": "15000",
                "zafei": "4000"
            }
        ]
    },
    {
        type: "研究生",
        cost: [
            {
                "xuefei": "8000",
                "shenghuofei": "5500",
                "zhusufei": "8000",
                "zafei": "4000"
            },
            {
                "xuefei": "12000",
                "shenghuofei": "7000",
                "zhusufei": "8000",
                "zafei": "4000"
            },
            {
                "xuefei": "20000",
                "shenghuofei": "13000",
                "zhusufei": "12000",
                "zafei": "4000"
            },
            {
                "xuefei": "35000",
                "shenghuofei": "15000",
                "zhusufei": "15000",
                "zafei": "4000"
            },
            {
                "xuefei": "45000",
                "shenghuofei": "20000",
                "zhusufei": "15000",
                "zafei": "4000"
            }
        ]
    }
]

//生成从minNum到maxNum的随机数
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}

setInterval(function () {
    var num1 = randomNum(0, 2);
    var num2 = randomNum(0, 4);
    var xuefei = selectJson[num1].cost[num2].xuefei;
    var shenghuofei = selectJson[num1].cost[num2].shenghuofei;
    var zhusufei = selectJson[num1].cost[num2].zhusufei;
    var zafei = selectJson[num1].cost[num2].zafei;
    var gongji = Number(xuefei) + Number(shenghuofei) + Number(zhusufei) + Number(zafei);
    $(".calculation_box>div.fl>div ul span b.xuefei").html(xuefei)
    $(".calculation_box>div.fl>div ul span b.shenghuofei").html(shenghuofei)
    $(".calculation_box>div.fl>div ul span b.zhusufei").html(zhusufei)
    $(".calculation_box>div.fl>div ul span b.zafei").html(Number(zafei) + (num2 * 1000))
    $(".calculation_box>div.fl>div ul span b.gongji").html(gongji)
}, 300)

var dataValue = "";
$("#select .box").click(function () {
    dataValue = $(this).attr("data-value");
    $("#selectbox i").html($(this).html());
    $("#select>div.b").css("display", "none");
    $("#selectbox").children("em").removeClass("active");
    isFadein = false;
})

$(".calculation button.jisuan").click(function () {
    var checkout = $(".calculation_box>div.fr .radio input:checked").val();
    if (dataValue == "" || checkout == undefined) {
        alert("请完善以上两个选项");
        return false;
    }
    $.ajax({
        type: "GET",
        url: "https://web.beliwin.com/api/index/check_money",
        dataType: "dataType",
        success: function (response) {
            console.log(1);
            console.log(response);
        }
    });
    var data = selectJson[checkout].cost[dataValue];
    $(".calculation_box.box2 .xuefei b em").html("$" + data.xuefei);
    $(".calculation_box.box2 .shenghuofei b em").html("$" + data.shenghuofei);
    $(".calculation_box.box2 .zhusufei b em").html("$" + data.zhusufei);
    $(".calculation_box.box2 .zafei b em").html("$" + data.zafei);
    var gongji = Number(data.xuefei) + Number(data.shenghuofei) + Number(data.zhusufei) + Number(data.zafei);
    $(".calculation_box.box2 .gongji b em").html("$" + gongji);
    $(".calculation_box").stop().animate({ "left": "-200%" }, 800);
    $(".calculation_box.box2").stop().animate({ "left": "50%" }, 800);
})

$(".calculation_box .cha").click(function () {
    $(".calculation").css({ "display": "none" });
    dataValue = "";
    $(".calculation_box>div.fr .radio input").removeAttr("checked");
    $("#selectbox i").html("点击选择经济条件情况");
    $(".calculation_box").stop().animate({ "left": "50%" }, 800, function () {
        $(".anniu123").css("display", "block");
        $(".formForm").css("display", "none");
    });
    $(".calculation_box.box2").stop().animate({ "left": "200%" }, 800);
})

$(".goTop .zixun").click(function () {
    $(".calculation").css("display", "block");
})

$(".SearchOrJisuan .jisuan").click(function () {
    $(".calculation").css("display", "block");
})

$(".formIn").click(function () {
    $(".anniu123").css("display", "none");
    $(".formForm").css("display", "block");
})

$('.calculation_box.box2>div.fl .formForm .button').on('click', function () {
    var Name = $('.calculation_box.box2>div.fl .formForm .input input.name').val();
    var Phone = $('.calculation_box.box2>div.fl .formForm .input input.phone').val();
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
    $.ajax({
        'url': '/form/addform',
        'dataType': 'json',
        'type': 'post',
        'data': {
            name: Name,
            phone: Phone,
            urlsite: url,
            path_source: path_source
        },
        success: function (res) {
            alert(res.datas);
            $('.calculation_box.box2>div.fl .formForm .input input.name').val('');
            $('.calculation_box.box2>div.fl .formForm .input input.phone').val('');
        }
    })
})
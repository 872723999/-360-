/**
 * 封装tab切换插件
 *  author: GuoJingChao
 *  date:   2019-7-11 09:26:32
 *  usage:  自用   
 **/ 

/**
 * 此tab插件 基于jquery 操作，使用前需引入jquery.js 文件
 * 
 * 使用参数说明:
 *      tab_bar:  选项卡 选项的dom元素 --> jquery 对象
 *      tab_box:  选项卡 选项内容的dom元素 --> jquery 对象
 *      isFadein: 是否淡出淡入效果 --> 布尔值 true 或 false
 *      callbak:  回调函数
 * 
 * 额外函数使用参数:
 *      index:    当前点击选项获取的下标 
 * 
 **/ 

var module_tab = (function () {
    // tab切换的效果
    function tab_switching(tab_bar, tab_box, index, isFadeIn, callback) {
        $(tab_bar).removeClass("active");
        $(tab_bar).eq(index).addClass("active");
        if (isFadeIn) {
            $(tab_box).stop().fadeOut();
            $(tab_box).eq(index).stop().fadeIn(function () {
                var $height = $(tab_box).eq(index).height();
                $(tab_box).parent().height($height);
            });
        } else {
            $(tab_box).css({
                "display": "none"
            });
            $(tab_box).eq(index).css({
                "display": "block"
            });
        }
        if (callback != undefined) {
            callback();
        }
    }
    // tab主方法
    function tab(tab_bar, tab_box, isFadeIn, callback) {
        if (tab_bar && tab_box) {
            $(tab_bar).eq(0).addClass("active");
            $(tab_box).eq(0).css({
                "display": "block"
            });
            if (isFadeIn) {
                var $height = $(tab_box).eq(0).height();
                $(tab_box).parent().height($height);
                $(tab_box).css({
                    "position": "absolute",
                    "left": "0",
                    "top": "0"
                })
                $(tab_bar).click(function (e) {
                    e.preventDefault();
                    var $index = $(tab_bar).index($(this));
                    tab_switching(tab_bar, tab_box, $index, true, callback);
                });
            } else {
                $(tab_bar).click(function (e) {
                    e.preventDefault();
                    var $index = $(tab_bar).index($(this));
                    tab_switching(tab_bar, tab_box, $index, false, callback);
                });
            }
        } else {
            console.log("参数传递错误");
        }
    }
    return {
        tab: tab,
    }
})()
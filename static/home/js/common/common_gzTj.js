$("#ttt .content").eq(0).css({ "display": "block" });
$("#ttt .tTitle span").on("mouseover", function () {
    var index = $("#ttt .tTitle span").index($(this));
    $(this).addClass("active").siblings("span").removeClass("active");
    $("#ttt .content").eq(index).css({ "display": "block" }).siblings(".content").css({ "display": "none" });
})
$("#ttt .content ul:last-child").css({ 'margin-right': '0' });
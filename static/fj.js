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
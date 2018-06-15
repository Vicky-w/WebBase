const webUrl = "http://localhost:8080/base";

function getCookie(name) {
    /* 获取浏览器所有cookie将其拆分成数组 */
    var arr = document.cookie.split('; ');
    //
    for (var i = 0; i < arr.length; i++) {
        /* 将cookie名称和值拆分进行判断 */

        var arr2 = arr[i].split('=');
        if (arr2[0] == name) {
            return arr2[1];
        }
    }
    return 0;
}

function removeCookie(name1) {
    /* -1 天后过期即删除 */
    setCookie(name1, 0, -1);
}

var setCookie = function (name1, value, iDay) {
    //iDay 表示过期时间
    //cookie中 = 号表示添加，不是赋值
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + iDay);
    // oDate.setDate(oDate.getDate() + 3);
    document.cookie = name1 + '=' + value + ';expires=' + oDate;
}

function GetRequest() {
    let strs
    let url = location.search;
    let theRequest = new Object();
    if (url.indexOf("?") != -1) {
        let str = url.substr(1);
        strs = str.split("&");
        for (let i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

var pub = {
    webUrl: webUrl,
    setCookie: setCookie,
    removeCookie: removeCookie,
    getCookie: getCookie,
}
module.exports = pub;
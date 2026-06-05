// 随机生成guid
function guid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
// 节流
function throttle(fn, delay) {
    // 记录上一次函数触发的时间
    var lastTime = 0;
    return function () {
        // 记录当前函数触发的时间
        var nowTime = Date.now();
        if (nowTime - lastTime > delay) {
            // 修正this指向问题
            if (this) fn.call(this);
            // 同步时间
            lastTime = nowTime;
        }
    }
}

module.exports = {
    guid,
    throttle
};

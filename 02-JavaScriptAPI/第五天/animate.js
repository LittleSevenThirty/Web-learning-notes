function animate(obj, target, callback) {

    //console.log(callback);  // callback=function(){};

    // 会出现一个span出现多个定时器效果所以每次需要删除前一个定时器
    clearInterval(obj.timer);

    obj.timer = window.setInterval(function () {
        // 步长值写到定时器的里面
        let step = Math.floor((target - obj.offsetLeft) / 10);
        step = step >= 0 ? step + 1 : step - 1;
        if (obj.offsetLeft == target) {
            // 停止动画 本质是停止定时器
            clearInterval(obj.timer);
            // 回调函数写在定时器结束的里面
            if (callback) {
                callback();
            }
        }
        else {
            obj.style.left = obj.offsetLeft + step + "px";
        }
    }, 15);
}
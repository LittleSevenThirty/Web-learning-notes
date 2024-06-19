function Sleep(interval) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("一二三四五");
            resolve();
        }, interval);
    });
}

// 用法
async function one2FiveInAsync() {
    for (let i = 1; i <= 5; ++i) {
        console.log("开始等待");
        await Sleep(1000);
        console.log("等待结束");
    }
}

one2FiveInAsync();
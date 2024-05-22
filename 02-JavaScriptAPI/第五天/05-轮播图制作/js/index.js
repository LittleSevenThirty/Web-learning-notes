
window.addEventListener("load", function () {
    // this.alert(1);

    // 1.获取元素
    let arrow_l = document.querySelector(".arrow-l");
    let arrow_r = document.querySelector(".arrow-r");
    let focus = document.querySelector(".focus");
    let focusWidth = focus.offsetWidth;

    //  添加事件

    // 2. 鼠标经过focus 就显示隐藏左右的按钮
    focus.addEventListener("mouseenter", function () {
        arrow_l.style.display = "block";
        arrow_r.style.display = "block";
    });
    focus.addEventListener("mouseleave", function () {
        arrow_l.style.display = "none";
        arrow_r.style.display = "none";
    });

    // 3. 动态生成小圆圈 有几张图片，就生成几个小圆圈
    let ul = focus.querySelector("ul");
    let ol = document.querySelector(".circle");
    // console.log(ol);
    // console.log(ul.children.length);    // 获取到ul下的li的个数
    for (var i = 0; i < ul.children.length; ++i) {
        // 创建一个li
        let li = document.createElement("li");
        // 记录当前小圆圈的索引号 通过自定义属性来做
        li.setAttribute("data-index", i);
        // 把li插入到ol里面
        ol.appendChild(li);

        //  4. 小圆圈的排他思想，可以直接生成同时直接绑定事件
        li.addEventListener("click", function () {
            // 干掉所有人 把所有的小li清除current类名
            for (var j = 0; j < ol.children.length; ++j) {
                ol.children[j].className = "";
            }
            //留下我自己 当前的小li 设置current 类名
            this.className = "current";

            // 5. 点击小圆圈，移动图片，当然是移动的ul
            // ul 移动的距离 小圆圈的索引号 乘以 图片的宽度 注意是负值
            // 当我们点击了某个小li 就拿到当前小li 的索引号
            let index = this.getAttribute("data-index");

            // console.log(focusWidth);
            // console.log(index);
            animate(ul, -index * focusWidth);
        })
    }


    // 代码优化：取消耦合
    function circleChange(circle) {
        // 先清除其余小圆圈的current类名
        for (var i = 0; i < ol.children.length; ++i) {
            ol.children[i].className = "";
        }

        // 留下当前小圆圈的current类名
        ol.children[circle].className = "current";
    }


    // 初始状态将ol里面的第一个小li设置类名为current
    ol.children[0].className = "current";
    // 6. 克隆第一个图片放到ul最后面
    let first = ul.children[0].cloneNode(true);
    // 克隆最后一张图片放到ul的最前面

    ul.append(first);

    // 7. 点击右侧按钮，图片滚动一张
    let num = 0;
    let circle = 0;
    let mutex = true;
    arrow_r.addEventListener("click", function () {
        if (mutex == true) {
            // 此时有空余资源
            mutex = false;

            // num = (num + 1) % ul.children.length;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++
            animate(ul, -num * focusWidth, function () {
                mutex = true;
            });

            // 8. 点击右侧按钮，小圆圈跟随一起变化，声明一个变量控制小圆圈的播放
            circle = (circle + 1) % ol.children.length;
            circleChange(circle);

            mutex++;
        }
    });
    // 8. 实现左侧按钮，图片滚动一张
    arrow_l.addEventListener("click", function () {
        if (mutex == true) {
            mutex = false; // p操作
            if (num == 0) {
                var temp = ul.children.length - 1;
                var index = -temp * focusWidth;
                ul.style.left = index + "px";
                num = temp;
            }

            circle = (ol.children.length + circle - 1) % ol.children.length;
            circleChange(circle);
            num--
            animate(ul, -num * focusWidth, function () {
                mutex = true;
            });
        }
    });

    // 9. 实现自动播放功能
    var timer = this.setInterval(function () {
        // 可以直接替代右侧按钮函数
        arrow_r.click();    // 手动调用点击事件
    }, 2000);

    focus.addEventListener("mouseenter", function () {
        clearInterval(timer);
        timer = null;
    });
    focus.addEventListener("mouseleave", function () {
        // console.log("你好");
        timer = setInterval(function () {
            // 可以直接替代右侧按钮函数
            arrow_r.click();    // 手动调用点击事件
        }, 2000);
    })
})








// window.addEventListener('load', function () {
//     // 1. 获取元素
//     var arrow_l = document.querySelector('.arrow-l');
//     var arrow_r = document.querySelector('.arrow-r');
//     var focus = document.querySelector('.focus');
//     var focusWidth = focus.offsetWidth;
//     // 2. 鼠标经过focus 就显示隐藏左右按钮
//     focus.addEventListener('mouseenter', function () {
//         arrow_l.style.display = 'block';
//         arrow_r.style.display = 'block';
//         clearInterval(timer);
//         timer = null; // 清除定时器变量
//     });
//     focus.addEventListener('mouseleave', function () {
//         arrow_l.style.display = 'none';
//         arrow_r.style.display = 'none';
//         timer = setInterval(function () {
//             //手动调用点击事件
//             arrow_r.click();
//         }, 2000);
//     });
//     // 3. 动态生成小圆圈  有几张图片，我就生成几个小圆圈
//     var ul = focus.querySelector('ul');
//     var ol = focus.querySelector('.circle');
//     // console.log(ul.children.length);
//     for (var i = 0; i < ul.children.length; i++) {
//         // 创建一个小li 
//         var li = document.createElement('li');
//         // 记录当前小圆圈的索引号 通过自定义属性来做 
//         li.setAttribute('index', i);
//         // 把小li插入到ol 里面
//         ol.appendChild(li);
//         // 4. 小圆圈的排他思想 我们可以直接在生成小圆圈的同时直接绑定点击事件
//         li.addEventListener('click', function () {
//             // 干掉所有人 把所有的小li 清除 current 类名
//             for (var i = 0; i < ol.children.length; i++) {
//                 ol.children[i].className = '';
//             }
//             // 留下我自己  当前的小li 设置current 类名
//             this.className = 'current';
//             // 5. 点击小圆圈，移动图片 当然移动的是 ul 
//             // ul 的移动距离 小圆圈的索引号 乘以 图片的宽度 注意是负值
//             // 当我们点击了某个小li 就拿到当前小li 的索引号
//             var index = this.getAttribute('index');
//             // 当我们点击了某个小li 就要把这个li 的索引号给 num  
//             num = index;
//             // 当我们点击了某个小li 就要把这个li 的索引号给 circle  
//             circle = index;
//             // num = circle = index;
//             console.log(focusWidth);
//             console.log(index);

//             animate(ul, -index * focusWidth);
//         })
//     }
//     // 把ol里面的第一个小li设置类名为 current
//     ol.children[0].className = 'current';
//     // 6. 克隆第一张图片(li)放到ul 最后面
//     var first = ul.children[0].cloneNode(true);
//     ul.appendChild(first);
//     // 7. 点击右侧按钮， 图片滚动一张
//     var num = 0;
//     // circle 控制小圆圈的播放
//     var circle = 0;
//     // mutex 节流阀
//     var mutex = true;
//     arrow_r.addEventListener('click', function () {
//         if (mutex) {
//             mutex = false; // 关闭节流阀
//             // 如果走到了最后复制的一张图片，此时 我们的ul 要快速复原 left 改为 0
//             if (num == ul.children.length - 1) {
//                 ul.style.left = 0;
//                 num = 0;
//             }
//             num++;
//             animate(ul, -num * focusWidth, function () {
//                 mutex = true; // 打开节流阀
//             });
//             // 8. 点击右侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
//             circle++;
//             // 如果circle == 4 说明走到最后我们克隆的这张图片了 我们就复原
//             if (circle == ol.children.length) {
//                 circle = 0;
//             }
//             // 调用函数
//             circleChange();
//         }
//     });

//     // 9. 左侧按钮做法
//     arrow_l.addEventListener('click', function () {
//         if (mutex) {
//             mutex = false;
//             if (num == 0) {
//                 num = ul.children.length - 1;
//                 ul.style.left = -num * focusWidth + 'px';

//             }
//             num--;
//             animate(ul, -num * focusWidth, function () {
//                 mutex = true;
//             });
//             // 点击左侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
//             circle--;
//             // 如果circle < 0  说明第一张图片，则小圆圈要改为第4个小圆圈（3）
//             // if (circle < 0) {
//             //     circle = ol.children.length - 1;
//             // }
//             circle = circle < 0 ? ol.children.length - 1 : circle;
//             // 调用函数
//             circleChange();
//         }
//     });

//     function circleChange() {
//         // 先清除其余小圆圈的current类名
//         for (var i = 0; i < ol.children.length; i++) {
//             ol.children[i].className = '';
//         }
//         // 留下当前的小圆圈的current类名
//         ol.children[circle].className = 'current';
//     }
//     // 10. 自动播放轮播图
//     var timer = setInterval(function () {
//         //手动调用点击事件
//         arrow_r.click();
//     }, 2000);

// })
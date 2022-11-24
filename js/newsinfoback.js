// 新闻详情页 返回顶部js
window.addEventListener('load', function () {
    // 返回顶部实现
    var goback = this.document.querySelector('.goback');
    var gobackarea = goback.querySelector('.goback_area');
    // 给页面添加滚动事件
    document.addEventListener('scroll', function () {
        // 当页面滚动到 hotNews盒子顶部时 显示返回顶部按钮

        if (window.pageYOffset >= 600) {
            goback.style.display = 'block';
        }
        // 离开时(回到 hotNews盒子顶部以上的区域) 隐藏返回顶部按钮
        else {
            goback.style.display = 'none';
        }
    })
    //鼠标经过内部样式变化 离开还原
    goback.addEventListener("mouseover", function () {
        gobackarea.innerHTML = '返回顶部';
        // goback.style.padding = '8px 10px'
    })
    goback.addEventListener("mouseout", function () {
        gobackarea.innerHTML = '<img src="images/backtotop.png" alt="">';
        // goback.style.padding = '10px 10px'

    })
    // goback实现返回页面顶部功能
    goback.addEventListener('click', function () {
        // 返回顶部
        // window.scroll(0, 0);
        // 返回顶部带动画
        animateTop(window, 0);
    });
    // obj:目标对象 target:目标位置(移动距离) callback:回调函数
    function animateTop(obj, target, callback) {
        // 当按钮点击开启动画时 元素的移动速度会随点击次数的增多变得越来越快(因为开启了太多定时器)
        // 解决方案 添加 clearInterval(obj.timer) 清除定时器 保留当前定时器(确保当前只存在一个定时器)
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            // 缓动动画核心算法： (目标值 - 现在的位置 ) / 10 做为每次移动的距离步长
            // 当移动距离达到 target 停止动画(停止计时器)
            // 步长值 (目标值 - 现在的位置 ) / 10 
            // 步长值需要取整(正值时向上取整 负值向下取整)
            var step = (target - window.pageYOffset) / 10;
            // if (step > 0) {
            //     step = Math.ceil(step);
            // }
            // else {
            //     step = Math.floor(step);
            // }
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (window.pageYOffset == target) {
                clearInterval(obj.timer);
                // 回调函数接在定时器函数
                if (callback) {
                    callback();
                }
            }
            // 每隔30ms left移动1px
            // obj.style.left = (obj.offsetLeft + 1) + 'px';
            // obj.style.left = (obj.offsetLeft + step) + 'px';
            window.scroll(0, window.pageYOffset + step);
        }, 15)
    }
})
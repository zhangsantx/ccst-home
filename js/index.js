window.addEventListener('load', function () {

    // // 自适应屏幕轮播图
    // // 初始化 header focus 轮播图图片的宽度和高度
    // // 获取当前宽度
    // var headerWidth = document.body.clientWidth;
    // // 获取当前高度
    // var headerHeight = window.innerHeight;
    // var header = this.document.querySelector('.header');
    // var focus = header.querySelector('.focus');
    // var images = focus.querySelectorAll('img');
    // header.style.width = headerWidth + 'px';
    // header.style.height = headerHeight + 'px';
    // focus.style.width = headerWidth + 'px';
    // focus.style.height = headerHeight + 'px';
    // for (var i = 0; i < images.length; i++) {
    //     images[i].style.width = headerWidth + 'px';
    //     images[i].style.height = headerHeight + 'px';
    // }
    // // 动态监测浏览器窗口大小 实时更新 header focus 轮播图图片的宽度和高度
    // window.addEventListener('resize', function () {
    //     headerWidth = document.body.clientWidth;
    //     headerHeight = window.innerHeight;
    //     header.style.width = headerWidth + 'px';
    //     header.style.height = headerHeight + 'px';
    //     focus.style.width = headerWidth + 'px';
    //     focus.style.height = headerHeight + 'px';
    //     for (var i = 0; i < images.length; i++) {
    //         images[i].style.width = headerWidth + 'px';
    //         images[i].style.height = headerHeight + 'px';
    //     }
    //     // 刷新浏览器页面
    //     window.location.reload()
    // })

    // 下拉菜单
    // 获取li
    var mainNav = this.document.querySelector('.main_nav');
    var navBottom = mainNav.querySelector('.nav_bottom');
    var ul = navBottom.querySelector('ul')
    var lis = ul.children;

    // var navList = navBottom.querySelector('.nav_list');
    for (var i = 0; i < lis.length; i++) {
        // 鼠标经过显示nav_list的子元素ul
        lis[i].onmouseover = function () {
            if (this.children.length > 1) {
                this.children[1].style.display = 'block';
            }
        }
        // 鼠标离开隐藏nav_list的子元素ul
        lis[i].onmouseout = function () {
            if (this.children.length > 1) {
                this.children[1].style.display = 'none';
            }
        }
    }

    // 导航栏样式切换
    var mainNav = document.querySelector('.main_nav');
    var hotNews = document.querySelector('.hot_news')
    // 获取hotNews盒子距离顶部的距离
    var mainNavTop = mainNav.offsetTop;
    // 给页面添加滚动事件
    document.addEventListener('scroll', function () {
        // 当页面滚动到hotNews盒子顶部时(hotNewsTop) mainNav样式切换
        // if (window.pageYOffset >= mainNavTop + 50) {
        if (window.pageYOffset >= mainNavTop + 50) {
            mainNav.className = 'main_nav main_nav_change';
            mainNav.style.transition = 'all 0.3s';
        }
        // 当离开时(回到 hotNews盒子顶部以上的区域) 还原
        else {
            mainNav.className = 'main_nav';
            mainNav.style.transition = 'all 0.3s';
        }
    })

    // 返回顶部实现

    var goback = this.document.querySelector('.goback');
    var gobackarea = goback.querySelector('.goback_area');
    var hotNews = this.document.querySelector('.hot_news')
    // hotNews盒子距离顶部的距离
    var hotNewsTop = hotNews.offsetTop;
    // 给页面添加滚动事件
    document.addEventListener('scroll', function () {
        // 当页面滚动到 hotNews盒子顶部时 显示返回顶部按钮
        if (window.pageYOffset >= hotNewsTop) {
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


    // // 轮播图
    // // 动态生成小圆圈 (li的个数)
    // var focus = this.document.querySelector('.focus');
    // var ul = focus.querySelector('ul');
    // var ol = focus.querySelector('.promo-nav');
    // var focusWidth = focus.offsetWidth;//获取图片宽度(图片宽度和focus宽度保持一致)
    // // 获得图片的张数(ul中li的个数)ul.children.length
    // // 根据图片的张数(li的个数) 创建相应的小圆圈  同时添加点击事件
    // for (var i = 0; i < ul.children.length; i++) {
    //     // 创建li
    //     var li = this.document.createElement('li');
    //     // 记录当前li的索引号
    //     li.setAttribute('data-index', i)
    //     // 将li插入到ol中
    //     ol.appendChild(li);
    //     li.innerHTML = i + 1;
    //     // 小圆圈添加点击事件
    //     // 小圆圈排他思想(点击当前小圆圈变色(selected) 其他不变色)
    //     li.addEventListener('click', function () {
    //         // 清除其他
    //         for (var i = 0; i < ol.children.length; i++) {
    //             ol.children[i].className = '';
    //         }
    //         // 保留当前点击
    //         this.className = 'selected';

    //         // 点击小圆圈移动图片(移动ul)
    //         // 滚动图片的核心算法： 点击某个小圆圈 ， 就让图片滚动 小圆圈的索引号乘以图片的宽度做为ul移动距离
    //         // 注意:移动距离时负值

    //         var index = this.getAttribute('data-index');//获取小圆圈的索引号
    //         // 当我们点击了某个小圆圈 就需要把小圆圈的索引号给unm 和 cirsle (num 控制按钮点击团片的变化)
    //         // 作用：避免点击小圆圈切换图片后再点击按钮切换图片顺序接不上
    //         num = index;
    //         circle = index;
    //         animate(ul, -(index * focusWidth));
    //     })
    // }
    // // 将ol里面的ol设置为(selected)选中的 selected为已书写的样式
    // ol.children[0].className = 'selected';
    // // 克隆第一张图片到ul的最后 复制第一张图片实现用作无缝滚动
    // var first = ul.children[0].cloneNode(true);
    // ul.appendChild(first);


    // // 给右侧按钮注册点击事件 点击一次 向后滑动一张
    // var num = 0;
    // var circle = 0;//控制小圆圈的变化
    // var next = focus.querySelector('.next');
    // // 添加节流阀放置轮播播放过快
    // var flag = true;
    // next.addEventListener('click', function () {
    //     if (flag) {
    //         flag = false;//动画执行前关闭节流阀
    //         // 如果走到了最后一张复制的一张图片 此时ul要快速复原left=0(实现无缝滚动)
    //         if (num == (ul.children.length - 1)) {
    //             ul.style.left = 0;
    //             num = 0;
    //         }
    //         num++;
    //         animate(ul, -(num * focusWidth), function () {
    //             flag = true;//动画结束后开启节流阀
    //         });
    //         // 小圆圈跟随右侧按钮变化
    //         circle++;
    //         // 如果circle=ul.children.length - 1说明走到了克隆的第一张图片的位置 circle此时复原
    //         if (circle == ol.children.length) {
    //             circle = 0;
    //         }
    //         circleChange();
    //     }
    // })
    // // 给左侧按钮注册点击事件 点击一次 向后滑动一张
    // var num = 0;
    // var circle = 0;//控制小圆圈的变化
    // var prev = focus.querySelector('.prev');
    // // 添加节流阀放置轮播播放过快
    // var flag = true;
    // prev.addEventListener('click', function () {
    //     if (flag) {
    //         flag = false;//动画执行前关闭节流阀
    //         // 如果走到了最后一张复制的一张图片 此时ul要快速复原left=0(实现无缝滚动)
    //         if (num == 0) {
    //             num = ul.children.length - 1;
    //             ul.style.left = -num * focusWidth + 'px';
    //         }
    //         num--;
    //         animate(ul, -(num * focusWidth), function () {
    //             flag = true;//动画结束后开启节流阀
    //         });
    //         // 小圆圈跟随右侧按钮变化
    //         circle--;
    //         // 如果circle=ul.children.length - 1说明走到了克隆的第一张图片的位置 circle此时复原
    //         if (circle < 0) {
    //             circle = ol.children.length - 1;
    //         }
    //         circleChange();
    //     }
    // })
    // function circleChange() {
    //     // 小圆圈排他思想(当前小圆圈变色(selected) 其他不变色)
    //     // 清除其他
    //     for (var i = 0; i < ol.children.length; i++) {
    //         ol.children[i].className = '';
    //     }
    //     // 保留当前点击
    //     ol.children[circle].className = 'selected';
    // }
    // // 自动播放功能 自动播放类似于自动点击下一页按钮
    // var timer = this.setInterval(function () {
    //     // 手动调用点击事件(手动调用下一页点击功能)
    //     next.click();
    // }, 5000);
    // // // 鼠标经过停止定时器 离开开启定时器
    // // focus.addEventListener('mouseover', function () {
    // //     clearInterval(timer);
    // //     timer = null;
    // // })
    // // focus.addEventListener('mouseout', function () {
    // //     timer = setInterval(function () {
    // //         // 手动调用点击事件(手动调用下一页点击功能)
    // //         next.click();
    // //     }, 4000)
    // // })

    // footer二维码呼出
    var footer = this.document.querySelector('.footer');
    var modLinks = footer.querySelector('.mod_links');
    var modlis = modLinks.querySelectorAll('li');
    var erweima = modLinks.querySelector('.erweima');
    for (var i = 0; i < modlis.length; i++) {
        // 鼠标经过显示二维码
        modlis[i].addEventListener('mouseover', function () {
            this.children[1].style.display = 'block';
            animateTop1(this.children[1], -145);

        })
        // 鼠标离开隐藏二维码
        modlis[i].addEventListener('mouseout', function () {
            this.children[1].style.display = 'none';
            animateTop1(this.children[1], -1300);
        })
    }
    // obj:目标对象 target:目标位置(移动距离) callback:回调函数
    function animateTop1(obj, target, callback) {
        // 当按钮点击开启动画时 元素的移动速度会随点击次数的增多变得越来越快(因为开启了太多定时器)
        // 解决方案 添加 clearInterval(obj.timer) 清除定时器 保留当前定时器(确保当前只存在一个定时器)
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            // 缓动动画核心算法： (目标值 - 现在的位置 ) / 10 做为每次移动的距离步长
            // 当移动距离达到 target 停止动画(停止计时器)
            // 步长值 (目标值 - 现在的位置 ) / 10 
            // 步长值需要取整(正值时向上取整 负值向下取整)
            var step = (target - obj.offsetTop) / 10;
            // if (step > 0) {
            //     step = Math.ceil(step);
            // }
            // else {
            //     step = Math.floor(step);
            // }
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (obj.offsetTop == target) {
                clearInterval(obj.timer);
                // 回调函数接在定时器函数
                // if (callback) {
                //     callback();
                // }
                callback && callback();
            }
            // 每隔30ms left移动1px
            // obj.style.left = (obj.offsetLeft + 1) + 'px';
            obj.style.top = (obj.offsetTop + step) + 'px';
        }, 20)
    }
})
// newscommon 新闻耶js
// 公共js
window.addEventListener('load', function () {
  // 实现header宽度自适应
  // 初始化设置header的宽度
  // 获取当前宽度
  var headerWidth = document.body.clientWidth
  var header = this.document.querySelector('.header')
  var headerBg = header.querySelector('.header_bg')
  var bg = headerBg.querySelector('img')
  header.style.width = headerWidth + 'px'
  headerBg.style.width = headerWidth + 'px'
  bg.style.width = headerWidth + 'px'
  // 动态监测浏览器窗口大小 实时更新 header宽度
  window.addEventListener('resize', function () {
    headerWidth = document.body.clientWidth
    header.style.width = headerWidth + 'px'
    headerBg.style.width = headerWidth + 'px'
    bg.style.width = headerWidth + 'px'
    // 刷新浏览器页面
    window.location.reload()
  })

  // 导航栏
  // 下拉菜单
  // 获取li
  var mainNav = this.document.querySelector('.main_nav')
  var navBottom = mainNav.querySelector('.nav_bottom')
  var ul = navBottom.querySelector('ul')
  var lis = ul.children

  // var navList = navBottom.querySelector('.nav_list');
  for (var i = 0; i < lis.length; i++) {
    // 鼠标经过显示nav_list的子元素ul
    lis[i].onmouseover = function () {
      if (this.children.length > 1) {
        this.children[1].style.display = 'block'
      }
    }
    // 鼠标离开隐藏nav_list的子元素ul
    lis[i].onmouseout = function () {
      if (this.children.length > 1) {
        this.children[1].style.display = 'none'
      }
    }
  }

  // 导航栏样式切换
  var mainNav = document.querySelector('.main_nav')
  // 获取hotNews盒子距离顶部的距离
  var mainNavTop = mainNav.offsetTop
  // 给页面添加滚动事件
  document.addEventListener('scroll', function () {
    // 当页面滚动到hotNews盒子顶部时(hotNewsTop) mainNav样式切换
    if (window.pageYOffset >= mainNavTop + 50) {
      mainNav.className = 'main_nav main_nav_change'
      //   mainNav.style.background = '#00366f'
      mainNav.style.transition = 'all 0.3s'

      //   mainNav.style.background = '-webkit-linear-gradient(top, #222, transparent)'
      //   mainNav.style.borderTop = '6px solid #00366f'
      //   mainNav.style.transition = 'all 0.3s'
    }
    // 当离开时(回到 hotNews盒子顶部以上的区域) 还原
    else {
      mainNav.className = 'main_nav'
      //   mainNav.style.background = '-webkit-linear-gradient(top, #222, transparent)'
      //   mainNav.style.borderTop = '6px solid #00366f'
      mainNav.style.transition = 'all 0.3s'
    }
  })

  // footer二维码呼出
  var footer = this.document.querySelector('.footer')
  var modLinks = footer.querySelector('.mod_links')
  var modlis = modLinks.querySelectorAll('li')
  var erweima = modLinks.querySelector('.erweima')
  for (var i = 0; i < modlis.length; i++) {
    // 鼠标经过显示二维码
    modlis[i].addEventListener('mouseover', function () {
      this.children[1].style.display = 'block'
      animateTop1(this.children[1], -145)
    })
    // 鼠标离开隐藏二维码
    modlis[i].addEventListener('mouseout', function () {
      this.children[1].style.display = 'none'
      animateTop1(this.children[1], -1300)
    })
  }
  // obj:目标对象 target:目标位置(移动距离) callback:回调函数
  function animateTop1(obj, target, callback) {
    // 当按钮点击开启动画时 元素的移动速度会随点击次数的增多变得越来越快(因为开启了太多定时器)
    // 解决方案 添加 clearInterval(obj.timer) 清除定时器 保留当前定时器(确保当前只存在一个定时器)
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {
      // 缓动动画核心算法： (目标值 - 现在的位置 ) / 10 做为每次移动的距离步长
      // 当移动距离达到 target 停止动画(停止计时器)
      // 步长值 (目标值 - 现在的位置 ) / 10
      // 步长值需要取整(正值时向上取整 负值向下取整)
      var step = (target - obj.offsetTop) / 10
      // if (step > 0) {
      //     step = Math.ceil(step);
      // }
      // else {
      //     step = Math.floor(step);
      // }
      step = step > 0 ? Math.ceil(step) : Math.floor(step)
      if (obj.offsetTop == target) {
        clearInterval(obj.timer)
        // 回调函数接在定时器函数
        // if (callback) {
        //     callback();
        // }
        callback && callback()
      }
      // 每隔30ms left移动1px
      // obj.style.left = (obj.offsetLeft + 1) + 'px';
      obj.style.top = obj.offsetTop + step + 'px'
    }, 20)
  }
})

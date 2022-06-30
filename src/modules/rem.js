document.documentElement.style.fontSize = 
    document.documentElement.clientWidth / 10.8 + 'px' 
    // 3.75 标准对照 iPhone大小 375px

// 横竖屏切换
window.onresize = function () {
    document.documentElement.style.fontSize = 
        document.documentElement.clientWidth / 10.8 + 'px' 
}
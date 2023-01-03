//节流
// scroll 事件，每隔一秒计算一次位置信息等
// 浏览器播放事件，每个一秒计算一次进度信息等
// input 框实时搜索并发送请求展示下拉列表，没隔一秒发送一次请求 (也可做防抖)

function throttle(func, wait) {
    let timer
    return (...args) => {
        if (!timer) {
            timer = setTimeout(() => {
                func(...args)
                timer = null 
             }, wait)
        }
        
    }
}

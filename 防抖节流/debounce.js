// debounce: call the function once in certain time
//应用场景
// 登录、发短信等按钮避免用户点击太快，以致于发送了多次请求，需要防抖
// 调整浏览器窗口大小时，resize 次数过于频繁，造成计算过多，此时需要一次到位，就用到了防抖
// 文本编辑器实时保存，当无任何更改操作一秒后进行保存
// 搜索引擎

function debounce(func, time) {
    let timer
    return (...args) => {
        if (timer) {
            clearTimeout(timer)
        }else {
            timer = setTimeout(() => {
                func(...args)
            }, time)
        }
    }
}
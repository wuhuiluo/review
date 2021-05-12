// 防抖
const debounce = function (fn, delay = 1000) {
    let timer = null
    return function (...args) {
        let that = this
        timer && clearTimeout(timer)
        timer = setTimeout(function () {
            fn.apply(that, args)
        }, delay)
    }
}

function throttle(fn, wait) {
    let time = 0
    return function (...args) {
        let now = Date.now()
        if (now - time > wait) {
            fn.apply(this, args)
            time = now
        }
    }
}

function throttle1(fn, wait) {
    let flag = true
    return function (...args) {
        if (!flag) {
            return
        }
        flag = false
        setTimeout(() => {
            fn.apply(this, args)
            flag = true
        }, wait)
    }
}
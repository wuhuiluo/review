// 防抖
// const debounce = function (fn, delay = 1000) {
//     let timer = null
//     return function (...args) {
//         let that = this
//         timer && clearTimeout(timer)
//         timer = setTimeout(function () {
//             fn.apply(that, args)
//         }, delay)
//     }
// }
// function debounce(fn, wait) {
//     // 创建一个标记用来存放定时器的返回值
//     let timer = null
//     return function (...args) {
//         // 每次当用户输入的时候，把前一个定时器删除
//         timer && clearTimeout(timer)
//         // 创建一个新的setTimeOut
//         // 保证点击按钮后的间隔内如果用户还点击了的话则不会执行fn函数
//         timer = setTimeout(() => {
//             fn.apply(this, args)
//         }, wait)
//     }
// }

// function throttle(fn, wait) {
//     let time = 0
//     return function (...args) {
//         let now = Date.now()
//         if (now - time > wait) {
//             fn.apply(this, args)
//             time = now
//         }
//     }
// }

// function throttle1(fn, wait) {
//     let flag = true
//     return function (...args) {
//         if (!flag) {
//             return
//         }
//         flag = false
//         setTimeout(() => {
//             fn.apply(this, args)
//             flag = true
//         }, wait)
//     }
// }
// function throttle(fn, wait) {
//     // 通过闭包保存一个标记
//     let flag = true
//     return function (...args) {
//         if (!flag) {
//             return
//         }
//         // flag设置为false，防止执行之前再被执行
//         flag = false
//         setTimeout(() => {
//             fn.apply(this, args)
//             flag = true
//         }, wait)
//     }
// }
// function throttle(fn, wait) {
//     // 4、通过闭包保存一个标记
//     let flag = true;
//     return function () {
//         // 5、在函数开头判断标志是否为 true，不为 true 则中断函数
//         if (!flag) {
//             return;
//         }
//         // 6、将 canRun 设置为 false，防止执行之前再被执行
//         flag = false;
//         // 7、定时器
//         setTimeout(() => {
//             fn.apply(this, arguments);
//             // 8、执行完事件（比如调用完接口）之后，重新将这个标志设置为 true
//             flag = true;
//         }, wait);
//     };
// }


// function throttle(fn, wait) {
//     let time = 0
//     return function (...args) {
//         let now = Date.now()
//         if (now - time > wait) {
//             fn.apply(this, args)
//             time = now
//         }
//     }
// }
// function throttle(fn, delay = 500) {
//     let last = 0
//     return function (...args) {
//         let now = new Date().getTime()
//         if (now - last > delay) {
//             last = now
//             fn.apply(this, args)
//         }
//     }
// }

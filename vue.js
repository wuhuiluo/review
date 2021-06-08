// 什么是setter、什么是getter 对象有两种属性一种是数据属性一种是存储器属性
// 存储器属性是一组获取和设置值的函数
// get方法对应的是getter负责获取值，它不带任何参数，set对应的方法为setter，负责设置值，在它的函数体重，一切return都是无效的

// 什么是Object.defineProperty()
// Object.defineProperty()定义新属性和修改原有的属性
let obj = {}
Object.defineProperty(obj, 'name', {
    get: function () {
        console.log('我被获取了');
        return val
    },
    set: function (newVal) {
        console.log('我被设置了');
    }
})
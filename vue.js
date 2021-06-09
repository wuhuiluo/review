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
obj.name = 'whl'
// 在给obj设置name属性的时候，触发了set方法
let val = obj.name
// 在得到obj的name属性，会触发set方法
// Vue双向数据绑定原理v-model

// 在input上面监听数据 :value='value' @input = "handleInput"

// handleInput(e) {
//         this.$emit('input', e.target.value)
//     }

//     <
//     component: value = "value"
// @input = "value = arguments[0]" / >
// v-model Vue的语法糖等价于绑定了 @input: value

// model: {
//     props: value,
//     evet: InputChange
// }

// 监听器:
// 解析器:
// 订阅者:
// 订阅器:

// Proxy代替Object.defineProperty

// Proxy的优点可以直接监听对象而不是监听对象的属性
// Proxy可以直接监听数组,Proxy返回的是一个新对象，可以直接操作这个新对象
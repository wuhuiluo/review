// const arr = [4, 11, 5, 79, 454, 67, 31]
// 冒泡排序
// function BubbleSort(arr) {
//     let temp;
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
//     return arr
// }

// console.log(BubbleSort(arr));

// function SelectSort(arr) {
//     let minIndex, temp;
//     for (let i = 0; i < arr.length; i++) {
//         minIndex = i
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j
//             }
//         }
//         temp = arr[i]
//         arr[i] = arr[minIndex]
//         arr[minIndex] = temp
//     }
//     return arr
// }

// console.log(SelectSort(arr));
// function insertSort(arr) {
//     let cur, prev
//     for (let i = 1; i < arr.length; i++) {
//         cur = arr[i]
//         prev = i - 1
//         while (prev >= 0 && arr[prev] > cur) {
//             arr[prev + 1] = arr[prev]
//             prev--
//         }
//         arr[prev + 1] = cur
//     }
//     return arr
// }

// console.log(insertSort(arr));

// function quickSort(arr) {
//     if (arr.length <= 1) return arr
//     let middleIndex = Math.floor(arr.length / 2)
//     let middleValue = arr.splice(middleIndex, 1)[0]
//     let arrLeft = []
//     let arrRight = []
//     for (let i = 0; i < arr.length; i++) {
//         let item = arr[i]
//         middleValue > item ? arrLeft.push(item) : arrRight.push(item)
//     }
//     return quickSort(arrLeft).concat(middleValue, quickSort(arrRight))
// }

// console.log(quickSort(arr));

// const promise1 = new Promise((resolve, reject) => {
//     console.log('promise1');
// })

// console.log('1', promise1);

// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve('success')
//     console.log(2);
// })

// promise.then(() => {
//     console.log(3);
// })
// console.log(4);

// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     console.log(2);
// })

// promise.then(() => {
//     console.log(3);
// })

// console.log(4);

// const promise1 = new Promise((resolve, reject) => {
//     console.log('promise1');
//     resolve('resolve1')
// })

// const promise2 = promise1.then(res => {
//     console.log(res);
// })

// console.log('1', promise1);
// console.log('2', promise2);

// const fn = () => (new Promise((resolve, reject) => {
//     console.log(1);
//     console.log('success');
// }))

// console.log('start');
// fn().then(res => {
//     console.log(res);
// })

// console.log('start')
// setTimeout(() => {
//     console.log('time');
// })

// Promise.resolve().then(() => {
//     console.log('resolve');
// })

// console.log('end');

// const promise = new Promise((resolve, reject) => {
//     console.log(1); // 1
//     setTimeout(() => { // 放到下一个宏任务的延迟队列中
//         console.log('timeStart'); // 4
//         resolve('success')
//         console.log('timeEnd'); // 5
//     }, 0)
//     console.log(2); // 2
// })

// promise.then((res) => { // pending -> resolve
//     console.log(res); // 6
// })
// console.log(4); // 3

// setTimeout(() => {
//     console.log('timer1');
//     Promise.resolve().then(() => {
//         console.log('1');
//     })
// }, 0)
// setTimeout(() => {
//     console.log('timer2')
// }, 0)
// console.log('start')


// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('success')
//     }, 1000)
// })
// const promise2 = promise1.then(() => {
//     throw new Error('error!!!')
// })
// console.log('promise1', promise1)
// console.log('promise2', promise2)
// setTimeout(() => {
//     console.log('promise1', promise1)
//     console.log('promise2', promise2)
// }, 2000)


// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("success");
//         console.log("timer1"); // 3
//     }, 1000);
//     console.log("promise1里的内容"); // 1
// });
// const promise2 = promise1.then(() => {
//     throw new Error("error!!!");
// });
// console.log("promise1", promise1); // pending
// console.log("promise2", promise2); // pending
// setTimeout(() => {
//     console.log("timer2"); // 4 
//     console.log("promise1", promise1); // 5 resolved
//     console.log("promise2", promise2); // 6 reject
// }, 2000);

// const promise = new Promise((resolve, reject) => {
//     resolve("success1");
//     reject("error");
//     resolve("success2");
// });
// promise
//     .then(res => {
//         console.log("then: ", res);
//     }).catch(err => {
//         console.log("catch: ", err);
//     })
// Promise.resolve('1')
//     .then(res => {
//         console.log(res)
//     })
//     .finally(() => {
//         console.log('finally')
//     })
// Promise.resolve('2')
//     .finally(() => {
//         console.log('finally2')
//         return '我是finally2返回的值'
//     })
//     .then(res => {
//             console.log('finally2后面的then函数', res)
//         })
// function runAsync(x) {
//     const p = new Promise(r => setTimeout(() =>
//         r(x, console.log(x)), 1000))
//     return p
// }
// Promise.all([runAsync(1), runAsync(2), runAsync(3)])
//     .then(res => console.log(res))
// function runAsync(x) {
//     const p = new Promise(r => setTimeout(() => r(x, console.log(x)), 1000))
//     return p
// }

// function runReject(x) {
//     const p = new Promise((res, rej) => setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x))
//     return p
// }
// Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
//     .then(res => console.log(res))
//     .catch(err => console.log(err))


// function runAsync(x) {
//     const p = new Promise(r => setTimeout(() => r(x, console.log(x)), 1000))
//     return p
// }

// function runReject(x) {
//     const p = new Promise((res, rej) => setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x))
//     return p
// }
// Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
//   .then(res => console.log(res), 
//   err => console.log(err))


// async function async1() {
//     console.log("async1 start"); // 1
//     await async2();
//     console.log("async1 end"); // 微1 4
// }
// async function async2() {
//     console.log("async2"); // 2
// }
// async1();
// console.log('start') // 3
// async function async1() {
//     console.log("async1 start"); // 1
//     await async2(); // 微任务
//     console.log("async1 end"); // 4
//     setTimeout(() => {
//         console.log('timer1') // 宏任务3  //   7
//     }, 0)
// }
// async function async2() {
//     setTimeout(() => {
//         console.log('timer2') // 宏1 //  5
//     }, 0)
//     console.log("async2"); // 2
// }
// async1();
// setTimeout(() => {
//     console.log('timer3') // 宏2 // 
// }, 0)
// console.log("start") // 3

// async function fn() {
//     return 123
// }

// fn().then(res => console.log(res))
// async function async1() {
//     console.log('async1 start'); // 2
//     await new Promise(resolve => {
//         console.log('promise1') // 3
//     })
//     console.log('async1 success');
//     return 'async1 end'
// }
// console.log('srcipt start') // 1
// async1().then(res => console.log(res))
// console.log('srcipt end') // 4

// async function async1() {
//     console.log('async1 start'); // 2
//     await new Promise(resolve => {
//         console.log('promise1') // 3
//     })
//     console.log('async1 success');
//     return 'async1 end'
// }
// console.log('srcipt start') // 1
// async1().then(res => console.log(res))
// console.log('srcipt end') // 4

// async function async1() {
//     console.log('async1 start'); // 2
//     await new Promise(resolve => {
//         console.log('promise1') // 3
//         resolve('promise1 resolve')
//     }).then(res => console.log(res)) //5 微任务1
//     console.log('async1 success'); // 6
//     // return 'async1 end'
//     return Promise.resolve('async1 end')
// }
// console.log('srcipt start') // 1
// async1().then(res => console.log(res)) // 微任务2
// console.log('srcipt end') // 4


// async function async1() {
//     console.log('async1 start'); // 2
//     await new Promise(resolve => {
//         console.log('promise1') // 3
//         resolve('promise resolve') // 微任务1
//     })
//     console.log('async1 success'); // 5
//     return 'async1 end'
// }
// console.log('srcipt start') // 1
// async1().then(res => {
//     console.log(res) // 6
// })
// new Promise(resolve => {
//     console.log('promise2') // 4
//     setTimeout(() => {
//         console.log('timer') // 7宏2
//     })
// })

// async function async1() {
//     console.log("async1 start"); // 2
//     await async2();
//     console.log("async1 end"); // 微任务1 //6
// }

// async function async2() {
//     console.log("async2"); // 3
// }

// console.log("script start"); // 1

// setTimeout(function () {
//     console.log("setTimeout"); // 宏任务2 8
// }, 0);

// async1();

// new Promise(function (resolve) {
//     console.log("promise1"); // 4
//     resolve();
// }).then(function () {
//     console.log("promise2"); // 微任务2 7
// });
// console.log('script end') // 5

// async function testSometing() {
//     console.log("执行testSometing"); // 2
//     return "testSometing";
// }

// async function testAsync() {
//     console.log("执行testAsync"); // 6
//     return Promise.resolve("hello async");
// }

// async function test() {
//     console.log("test start..."); // 1
//     const v1 = await testSometing();
//     console.log(v1); // 5. testSometing
//     const v2 = await testAsync();
//     console.log(v2);
//     console.log(v1, v2);
// }

// test();

// var promise = new Promise(resolve => {
//     console.log("promise start..."); // 3
//     resolve("promise");
// });
// promise.then(val => console.log(val));

// console.log("test end..."); // 4

// async function async1() {
//     await async2(); // 微任务1
//     console.log('async1');
//     return 'async1 success'
// }
// async function async2() {
//     return new Promise((resolve, reject) => {
//         console.log('async2') // 1
//         reject('error')
//     })
// }
// async1().then(res => console.log(res))

// async function async1() {
//     try {
//         await Promise.reject('error!!!')
//     } catch (e) {
//         console.log(e)
//     }
//     console.log('async1');
//     return Promise.resolve('async1 success')
// }
// async1().then(res => console.log(res)) 
// console.log('script start')

// const first = () => (new Promise((resolve, reject) => {
//     console.log(3); // 1
//     let p = new Promise((resolve, reject) => {
//         console.log(7); // 2
//         setTimeout(() => { // 宏任务2
//             console.log(5); // 6
//             resolve(6);
//             console.log(p) // 7 Promise{<resolved>: 1}
//         }, 0)
//         resolve(1);
//     });
//     resolve(2);
//     p.then((arg) => { // 微任务1
//         console.log(arg); // 4
//     });
// }));
// first().then((arg) => {
//     console.log(arg); // 5 微任务2 
// });
// console.log(4); // 3


// const async1 = async () => {
//     console.log('async1'); // 2
//     setTimeout(() => {
//         console.log('timer1') // 宏任务2 6
//     }, 2000)
//     await new Promise(resolve => {
//         console.log('promise1') // 3
//     })
//     console.log('async1 end') 
//     return 'async1 success'
// }
// console.log('script start'); // 1
// async1().then(res => console.log(res));
// console.log('script end'); // 4
// Promise.resolve(1)
//     .then(2)
//     .then(Promise.resolve(3))
//     .catch(4)
//     .then(res => console.log(res)) // 5
// setTimeout(() => {
//     console.log('timer2') // 7
// }, 1000)

// const p1 = new Promise((resolve) => {
//     setTimeout(() => { // 宏任务2
//         resolve('resolve3');
//         console.log('timer1')
//     }, 0)
//     resolve('resovle1');
//     resolve('resolve2');
// }).then(res => {
//     console.log(res) // 1: resolved
//     setTimeout(() => {
//         console.log(p1)
//     }, 1000)
// }).finally(res => {
//     console.log('finally', res)
// })
// const promise1 = new Promise((resolve, reject) => {
//         setTimeout(() => { // 宏任务2
//             resolve("success"); // resolved
//             console.log("timer1"); // 
//         }, 1000);

//         console.log("promise1里的内容"); // 1
//     }

// );
// const promise2 = promise1.then(() => { // 微任务1
//     throw new Error("error!!!");
// });
// console.log("promise1", promise1); //2: pending undefined
// console.log("promise2", promise2); //3: pending undefined

// setTimeout(() => { // 宏任务3
//         console.log("timer2"); // 
//         console.log("promise1", promise1); // resolved
//         console.log("promise2", promise2); // pending
//     },
//     2000);

// setTimeout(_ => console.log(4)) //4 宏任务2

// new Promise(resolve => {
//     resolve() // resolved
//     console.log(1) // 1
// }).then(_ => { // 微任务1
//     console.log(3) // 3
//     Promise.resolve().then(_ => { // 微任务2
//         console.log('6')
//     }).then(_ => {
//         Promise.resolve().then(_ => {
//             console.log('5')
//         })
//     })
// })

// console.log(2) // 2

// all方法

// function all(promises) {
//     if (promises.length === 0) return Promise.resolve([])
//     return new Promise((resolve, reject) => {
//         let result = []
//         let num = 0
//         const check = () => {
//             if (num === promises.length) {
//                 resolve(result)
//             }
//         }
//         promises.forEach((item, index) => {
//             Promise.resolve(item).then(res => {
//                 result[index] = res
//                 num++
//                 check()
//             }, err => {
//                 reject(err)
//             })
//         })
//     })
// }

// function tempalate(promises) {
//     if (promises.length === 0) {
//         // 根据不同情况做处理
//     }
//     let result = [],
//         num = 0
//     return new Promise((resolve, reject) => {
//         const check = () => {
//             if (num === promises.length) {
//                 // 根据不同情况调用resolve和reject
//             }
//         }
//         promises.forEach(item => {
//             Promise.resolve(item).then(res => {
//                 //  根据不同情况处理 result、num 和调用 resolve、reject、check 方法
//             }, err => {
//                 //  根据不同情况处理 result、num 和调用 resolve、reject、check 方法
//             })
//         })
//     })
// }

// // 1.all方法
// function all(promises) {
//     if (promises.length === 0) return Promise.resolve([])
//     return new Promise((resolve, reject) => {
//         let result = []
//         let num = 0
//         const check = () => {
//             if (num === promises.length) {
//                 resolve(result)
//             }
//         }
//         promises.forEach(item => {
//             Promise.resolve((item, index)).then(res => {
//                 result[index] = res
//                 num++
//                 check()
//             }, err => {
//                 reject(err)
//             })
//         })
//     })
// }

// //2.allSettled
// function allSettled(promises) {
//     if (promises.length === 0) return Promise.resolve([])
//     return new Promise((resolve, reject) => {
//         let result = []
//         let num = 0
//         const check = () => {
//             if (num === promises.length) {
//                 resolve(result)
//             }
//         }
//         promises.forEach((item, index) => {
//             Promise.resolve(item).then(res => {
//                 result[index] = {
//                     status: 'fulfilled',
//                     value: res
//                 }
//                 num++
//                 check()
//             }, err => {
//                 result[index] = {
//                     status: 'rejected',
//                     reason: err
//                 }
//                 num++
//                 check()
//             })
//         })
//     })
// }

// //3.any
// function any(promises) {
//     if (promises.length === 0) {
//         reject(new AggregateError('No Promise in Promise.any was resolved'))
//     }
//     return new Promise((resolve, reject) => {
//         let result = []
//         let num = 0
//         const check = () => {
//             reject(reject(new AggregateError('No Promise in Promise.any was resolved')))
//         }
//         promises.forEach((item, index) => {
//             Promise.resolve(item).then(res => {
//                 resolve(res)
//             }, err => {
//                 result[index] = err
//                 num++
//                 check()
//             })
//         })
//     })
// }

//4.race
// function race(promises) {
//     if (promises.length === 0) return Promise.resolve()
//     return new Promise((resolve, reject) => {
//         promises.forEach((item) => {
//             Promise.resolve(item).then(res => {
//                 resolve(res)
//             }, err => {
//                 reject(err)
//             })
//         })
//     })
// }

// function Person() {}

// let person1 = new Person()
// let person2 = new Person()
// console.log(person1.__proto__ === person2.__proto__);

// Object.getPrototypeOf()
// Object.setPrototypeOf()
// // hasOwnProperty  // 判断对象实例上是否有某个属性(不包含原型对象)
// function Person() {}
// Person.prototype = {
//     name: 'jack'
// };
// var jack = new Person();
// Person.prototype = {
//     name: 'otherJack'
// };
// var otherJack = new Person();
// console.log(jack.name);
// console.log(otherJack.name);

// function Test() {}
// Object.prototype.printName = function () {
//     console.log('Object');
// }
// Function.prototype.printName = function () {
//     console.log('Function');
// }
// Test.printName();
// var obj = new Test();
// obj.printName();
// async function async1() {
//     console.log('async1 start'); //  2
//     await async2(); // 微1
//     console.log('async1 end'); // 6
// }
// async function async2() {
//     console.log('async2'); // 3 
// }
// console.log('script start'); //  1
// setTimeout(function () {
//     console.log('setTimeout'); //8 宏2
// }, 0)
// async1();
// new Promise(function (resolve) {
//     console.log('promise1'); // 4  
//     resolve();
// }).then(function () {
//     console.log('promise2'); // 7微2
// });
// console.log('script end'); // 5

// Object Array Function
// let obj = {
//     name: 'obj',
//     name2: this.name,
//     say1: function () {
//         console.log(this.name)
//     },
//     say2: function () {
//         setTimeout(function () {
//             console.log(this.name)
//         }, 0)
//     },
//     say3: function () {
//         setTimeout(() => {
//             console.log(this.name)
//         }, 0)
//     }
// }
// obj.name2 //""
// obj.say1() //obj
// obj.say2() //undefined
// obj.say3() //

// var a = function () {
//     this.b = 3;
// }
// var c = new a();
// a.prototype.b = 9;
// var b = 7;
// console.log(b);
// a();
// console.log(b);
// console.log(c.b);
// console.log('start') // 1
// setTimeout(() => { // 宏2
//     console.log('timer1') // 4
//     Promise.resolve().then(function () { // 微任务2
//         console.log('promise1') // 
//     })
// }, 0)
// setTimeout(() => { // 宏3
//     console.log('timer2') //
//     Promise.resolve().then(function () {
//         console.log('promise2') //
//     })
// }, 0)
// Promise.resolve().then(function () {
//     console.log('promise3') // 3 微任务1
// })
// console.log('end') // 2
// 定义构造函数
// function C() {}

// function D() {}

// var o = new C();


// o instanceof C; // true，因为 Object.getPrototypeOf(o) === C.prototype


// o instanceof D; // false，因为 D.prototype 不在 o 的原型链上

// o instanceof Object; // true，因为 Object.prototype.isPrototypeOf(o) 返回 true
// C.prototype instanceof Object // true，同上

// C.prototype = {};
// var o2 = new C();

// console.log(o2.__proto__ === C.prototype); // true

// o instanceof C; // false，C.prototype 指向了一个空对象,这个空对象不在 o 的原型链上.

// D.prototype = new C(); // 继承
// var o3 = new D();
// o3 instanceof D; // true
// o3 instanceof C; // true 因为 C.prototype 现在在 o3 的原型链上


// function C() {}
// var o2 = new C()
// C.prototype = {}
// var o1 = new C()
// console.log(o1.__proto__);
// console.log(o2.__proto__);

// function MyInstaceof(L, R) {
//     var O = R.prototype // 取R的显示原型
//     L = L.__proto__
//     while (true) {
//         if (L === null) return false
//         if (L === O) return true
//         L = L.__proto__
//     }
// }

// console.log(MyInstaceof(Object, Object));
// console.log(MyInstaceof(Function, Function));

// function MyNew() {
//     let obj = new Object()
//     Constructor = [].shift.call(arguments)
//     const F = function () {}
//     F.prototype = Constructor.prototype
//     obj = new F()
//     let res = Constructor.apply(obj, arguments)
//     return typeof res === 'object' ? res : obj
// }

// function Person(name, age) {
//     this.name = name
//     this.age = age
//     this.sex = 'male'
// }


// Person.prototype.sayName = function () {
//     console.log(`Hello , my name is ${this.name}`);
// }

// let boy = MyNew(Person, 'whl', 23)
// console.log(boy.name);
// console.log(boy.age);
// console.log(boy.sex);
// boy.sayName()

// function Father() {
//     this.test = [1, 2, 3, 4];
// }

// function Son(a, b) {
//     this.a = a;
//     this.b = b;
// }
// Son.prototype = new Father();
// Son.prototype.constructor = Son
// let instanceOne = new Son();
// let instanceTwo = new Son();
// instanceOne.test.push(5);
// console.log(instanceTwo.test); // [1, 2, 3, 4, 5]

// 1.原型链式法
// 2.构造函数法
// function staff() {
//     // this.test = [1, 2, 3];
// }
// staff.prototype.companyName = function () {
//     return this.test;
// }

// function Father() {
//     this.test = [1, 2, 3]
// }
// Father.prototype.getTest = function () {
//     console.log(this.test);
// }

// function Son(a, b) {
//     Father.call(this)
//     this.a = a
//     this.b = b
// }
// // 不使用对象字面量方式创建原型方法，会重写原型链
// Son.prototype.showTest = function () {
//     console.log(this.a + this.b);
// }
// let Son1 = new Son(1, 2)
// let Son2 = new Son(2, 3)
// Son1.test.push(4)
// console.log(Son1.test); // [1,2,3,4]
// console.log(Son2.test); // [1,2,3]
// // console.log(Son1.getTest()); // 报错
// // // 通过 hasOwnProperty() 方法来确定自身属性与其原型属性
// console.log(Son1.hasOwnProperty('test')); // true
// // 通过 isPrototypeOf() 方法来确定原型和实例的关系
// console.log(Father.prototype.isPrototypeOf(Son1)); // false
// 3.组合式
// 4.原型式继承
// function object(obj) {
//     function F() {}
//     F.prototype = obj
//     return new F()
// }
// 5.寄生式继承
// function obj(obj) {
//     function F() {}
//     F.prototype = obj
//     return new F()
// }
// var book = {
//     name: 'whl'
// }

// function createObj(origin) {
//     const clone = new obj(origin)
//     clone.getName = function () {
//         console.log(this.name);
//     }
//     return clone
// }

// const book1 = createObj(book)
// book1.getName();
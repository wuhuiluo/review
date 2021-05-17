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

// 1.水平居中使用margin

// 1.原型链继承： 优点：父类的方法可以复用 缺点： 更改一个子类的引用属性，其他子类会受到影响,无法给父构造函数传参
// 本质就是将父类的实例作为子类的原型
// 2.构造函数继承 优点: 可以传递参数，不能继承父类对象原型的属性和方法
// 缺点无法函数复用，每个对象都有父对象实例

// function inheriP(Son, Father) {
//     let p = Object.create(Father.prototype)
//     p.constructor = Son
//     Son.prototype = p
// }

// 全局执行上下文，函数执行上下文
// function multiply(number1, number2) {
//     if (number2 !== undefined) {
//         return number1 * number2;
//     }
//     return function doMultiply(number2) {
//         console.log(number1, number2);
//         return number1 * number2;
//     };
// }

// multiply(4, 5);
// const double = multiply(2);
// console.log(double(5));
// function showBiBao() {
//     for (var i = 0; i < 5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, 1000);
//     }
//     console.log(i)
// }

// showBiBao()

// function showListNumber() {
//     for (var i = 0; i < 5; i++) {
//         let ret = function (i) {
//             setTimeout(function timerr() {
//                 console.log(i)
//             }, 1000)
//         }
//         ret(i)
//     }
//     console.log(i)
// }
// showListNumber()
// var Yideng = (function () {
//     var foo = 0

//     function Yideng() {
//         Yideng.prototype.bar = function bar() {
//             return foo
//         }
//     }
//     return Yideng
// })()
// var value = 1;

// function foo() {
//     console.log(value);
// }

// function bar() {
//     var value = 2;
//     foo();
// }

// bar();
// // 词法作用域定义时的全局所用与
// // 结果是 ??? 
// 模拟私有属性
// function getGeneratorFunc() {
//     var _name = 'John';
//     var _age = 22;

//     return function () {
//         return {
//             getName: function () {
//                 return _name;
//             },
//             getAge: function () {
//                 return _age;
//             }
//         };
//     };
// }

// var obj = getGeneratorFunc()();
// console.log(obj.getName()); // John
// console.log(obj.getAge()); // 22
// 闭包：有权访问另一个函数作用域中的变量的函数
// 立即执行函数
// var a = 2;
// (function  () {
//     console.log(a);
// })()
// for (var i = 1; i < 5; i++) {
//     (function (j) {
//         setTimeout(() => {
//             console.log(j);
//         }, 0)
//     })(i)
// }
// console.log(i);
// for (var i = 1; i < 5; i++) {
//     setTimeout((j) => {
//         console.log(j);
//     }, 0, i)
// }
// for (let i = 1; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     })
// }
// (function () {
//     var a = 10
//     var b = 20

//     function add(num1, num2) {
//         var num1 = num1
//         var num2 = num2
//         return num1 + num2
//     }
//     window.add = add
// })()

// console.log(add(10, 20));

// let shallowClone = function (source) {
//     let target = {}
//     for (let key in source) {
//         if (source.hasOwnProperty(key)) {
//             target[key] = source[key]
//         }
//     }
//     return target
// }

// let demo = {
//     b: {
//         c: {

//         }
//     }
// }

// let demo2 = shallowClone(demo)
// let demo3 = demo;
// console.log(demo3 === demo) // true
// console.log(demo2.b.c === demo.b.c) // true
// console.log(demo2.b === demo.b) // true
// console.log(demo2 === demo) // false

// let demo = {
//     name: 'dayday',
//     book: {
//         title: 'Do you really Know JS',
//         price: "45"
//     }
// }

// let clone_demo = {
//     ...demo
// }
// console.log(clone_demo);
// demo.name = 'new name'
// demo.book.price = '100'
// console.log(clone_demo.name, clone_demo.book.price);

// let a = [0, "1", [2, 3]];
// let b = a.slice(1)
// console.log(b);
// a[1] = '99'
// console.log(a);

// let demo = {
//     name: 'dayday',
//     book: {
//         title: 'Do you really Know JS',
//         price: "45"
//     }
// }

// let clone_demo = JSON.parse(JSON.stringify(demo))
// console.log(clone_demo);
// demo.name = 'new name'
// demo.book.price = '100'
// console.log(clone_demo.name, clone_demo.book.price);


// 1.会忽略undeifned、Symbol
// 2.不能序列化函数
// 3.不能解决循环引用对象
// 4.不能处理 new Date()
// 5.不能处理正则


// let demo = {
//     name: 'dayday',
//     h1: undefined,
//     h2: Symbol('dayday'),
//     h3: function () {},
// }
// let clone_demo = JSON.parse(JSON.stringify(demo))
// console.dir(clone_demo)
// // { name : 'dayday' }

// let shallowClone = source => {
//     let target = {}
//     for (let key in source) {
//         if (Object.prototype.hasOwnProperty.call(source, key)) {
//             target[key] = typeof source[key] === 'object' ? shallowClone(source[key]) : source[key]
//         }
//     }
//     return target
// }
// let demo = {
//     name: 'dayday',
//     book: {
//         title: 'Do you really Know JS',
//         price: "45"
//     }
// }
// let clone_demo = shallowClone(demo);
// console.log(clone_demo);
// demo.name = 'new name'
// demo.book.price = '100'
// console.log(clone_demo.name, clone_demo.book.price)

// let isObject = obj => typeof obj === 'object' && obj !== null

// let shallowClone = (source, hash = new WeakMap()) => {
//     if (!isObject(source)) return source // 非对象返回自身
//     if (hash.has(source)) return hash.get(source) // 新增检测，查哈希表
//     let target = Array.isArray(source) ? [] : {}
//     hash.set(source, target) // 设置哈希表值
//     for (let key in source) {
//         if (Object.prototype.hasOwnProperty.call(source, key)) {
//             target[key] = isObject(source[key]) ? shallowClone(source[key], hash) : source[key]
//         }
//     }
//     return target
// }

// let obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: 3
//     }
// }

// obj.a = obj.b
// obj.b.c = obj.a

// let clone_obj = shallowClone(obj)

// console.log(clone_obj);作者：牛背上的我
// console.log(str, num);
// var str = "sfd";
// var num = "123"

// function fn2() {
//     console.log(str, num);
//     str = "dfdg";
//     var num = "345";
//     num = "098";
//     str = "candy";
//     console.log(str, num);
// }
// fn2();
// console.log(str, num);

// function debounce(fn, wait) {
//     let timer
//     return function () {
//         let context = this
//         let args = arguments
//         clearTimeout(timer)
//         timer = setTimeout(function () {
//             fn.apply(context, args)
//         }, wait)
//     }
// }

// function debounce(fn, wait, immediate) {
//     let timer, result
//     let debounced = function () {
//         let context = this
//         let args = arguments
//         if (tiemr) clearTimeout(timer)
//         if (immediate) {
//             // 如果已经执行过，不在执行
//             let callNow = !timer
//             timer = setTimeout(function () {
//                 timer = null
//             }, wait)
//             if (callNow) result = fn.call(context, args)
//         } else {
//             timer = setTimeout(function () {
//                 fn.apply(context, args)
//             }, wait)
//         }
//         return result
//     }
//     debounced.cancel = function () {
//         clearTimeout(timer)
//         timer = null
//     }
//     return debounced
// }

// function throttle(fn, wait) {
//     let previous = 0
//     return function () {
//         let context = this
//         let args = arguments
//         let now = +new Date()
//         if (now - previous > 0) {
//             fn.apply(context, args)
//             previous = now
//         }
//     }
// }

// function throttle(fn, wait) {
//     let flag = true
//     return function () {
//         let context = this
//         let args = arguments
//         if (!flag) return
//         flag = false
//         setTimeout(function () {
//             fn.apply(context, args)
//             flag = true
//         }, wait)
//     }
// }

// Function.prototype.myCall = function (thisArg, ...args) {
//     const fn = Symbol('fn') // 声明一个独有的Symbol属性, 防止fn覆盖已有属性 
//     thisArg = thisArg || window // 若没有传入this, 默认绑定window对象
//     thisArg[fn] = this // this指向调用call的对象,即我们要改变this指向的函数
//     const result = thisArg[fn](...args) // 执行当前函数
//     delete thisArg[fn] // 删除我们声明的fn属性
//     return result // 返回函数执行结果
// }

// //变更函数调用者示例
// function foo() {
//     console.log(this.name)
// }

// // 测试
// const obj = {
//     name: '写代码像蔡徐抻'
// }
// // obj.foo = foo // 变更foo的调用者
// // console.log(obj);
// // obj.foo() // '写代码像蔡徐抻'

// foo.myCall(obj)

// Function.prototype.myApply = function (thisArg, args) {
//     const fn = Symbol('fn')
//     thisArg = thisArg || window
//     thisArg[fn] = this
//     const result = thisArg[fn](...args)
//     delete thisArg[fn]
//     return result
// }

// function foo() {
//     console.log(this.name);
//     console.log(arguments);
// }

// const obj = {
//     name: 'whl'
// }

// foo.myApply(obj, [])

// Function.prototype.myBind = function (objThis, ...params) {
//     const thisFn = this // 存储源函数
//     let fTobind = function (...secondParmas) {
//         const isNew = this instanceof fTobind
//         const context = isNew ? this : Object(objThis)
//         return thisFn.call(context, ...params, ...secondParmas)
//     }
//     if (thisFn.prototype) {
//         fTobind.prototype = Object.create(thisFn.prototype)
//     }
//     return fTobind
// }

// //测试
// const obj = {
//     name: '写代码像蔡徐抻'
// }

// function foo() {
//     console.log(this.name)
//     console.log(arguments)
// }

// foo.myBind(obj, 'a', 'b', 'c')() //输出写代码像蔡徐抻 ['a', 'b', 'c']

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);

// const arr = [1, [2, [3, [4, [5]]]]];

// function flat(arr) {
//     return arr.reduce((prev, cur) => {
//         return prev.concat(Array.isArray(cur) ? flat(cur) : cur)
//     }, [])
// }
// console.log(flat(arr));
// function fn(arr) {
//     let a = []
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             a = a.concat(fn(arr[i]))
//         } else {
//             a.push(arr[i])
//         }
//     }
//     return a
// }

// console.log(fn(arr));

// function flatten(arr) {
//     while (arr.some(item => Array.isArray(item))) {
//         arr = [].concat(...arr)
//     }
//     return arr
// }

// console.log(flatten(arr));
// function flatten(arr) {
//     return arr.toString().split(',').map(item => {
//         return +item
//     })
// }

// console.log(flatten(arr));
// let arr1 = arr.flat(Infinity)
// console.log(arr1);

// function sum(n) {
//     if (n === 1) {
//         return 1
//     } else {
//         return n + sum(n - 1)
//     }
// }

// console.log(sum(100));
// 改变this指向的几种方法

// 1.使用ES6中的箭头函数
// 2.在函数内部使用_this = this
// 3.使用apply、call、bind
// 4.new实例化一个对象
// function foo() {
//     return () => {
//         return () => {
//             console.log(this);
//             console.log(this.a);
//         };
//     };
// }
// var a = 2;
// console.log(foo()()()); // 2
// var name = 'global name'
// var obj = {
//     name: 'obj name',
//     fn1: function () {
//         console.log(this.name);
//     },
//     fn2: function () {
//         var _this = this
//         console.log(_this);
//         setTimeout(function () {
//             _this.fn1()
//         }, 1000)
//     }
// }

// obj.fn2()

// 改变函数fn的this指向

// Function.prototype.MyApply = function (context, args) {
//     if (context === null || context === undefined) {
//         context = window
//     } else {
//         context = Object(context)
//     }
//     let fn = Symbol()
//     context[fn] = this
//     let result = context[fn](...args)
//     delete context[fn]
//     return result
// }
// Function.prototype.MyCall = function (context, ...args) {
//     if (context === null || null === undefined) {
//         context = window
//     } else {
//         context = Object(context)
//     }
//     let fn = Symbol()
//     context[fn] = this
//     let result = context[fn](...args)
//     delete context[fn]
// //     return result
// // }
// Function.prototype.MyBind = function (objThis, ...params) {
//     const thisFn = this
//     let fToBind = function (...secondParams) {
//         const isNew = this instanceof fToBind
//         const context = isNew ? this : Object(objThis)
//         return thisFn.call(context, ...params, ...secondParams)
//     }
//     if (thisFn.prototype) {
//         fToBind.prototype = Object.create(thisFn.prototype)
//     }
//     return fToBind
// }

// let dog = {
//     name: 'dog',
//     getDetail: function (count) {
//         return `${this.name} has ${count} legs`
//     }
// }

// let bird = {
//     name: 'bird'
// }
// let frog = {
//     name: 'frog'
// }
// console.log(dog.getDetail.MyBind(bird, 5)());
// 浅拷贝
// let obj1 = {
//     name: 'whl',
//     arr: [12, 4],
// };
// let obj3 = shallowClone(obj1)
// obj3.name = "qwe";
// obj3.arr[1] = 1

// function shallowClone(source) {
//     let target = {}
//     for (let i in source) {
//         if (source.hasOwnProperty(i)) {
//             target[i] = source[i]
//         }
//     }
//     return target
// }
// console.log('obj1', obj1) // obj1 { name: 'whl', arr: [ 1, [ 5, 6, 7 ], 4 ] }
// console.log('obj3', obj3) // obj3 { name: 'qwe', arr: [ 1, [ 5, 6, 7 ], 4 ] }
// Object.assign()//浅拷贝
// 展开运算符
// let isObject = obj => typeof obj === 'object' && obj !== null

// let DeepClone = (source, hash = new WeakMap()) => {
//     if (!isObject(source)) return source
//     if (hash.has(source)) return hash.get(source)
//     let target = Array.isArray(source) ? [] : {}
//     hash.set(source, target)
//     for (let key in source) {
//         if (Object.prototype.hasOwnProperty.call(source, key)) {
//             target[key] = isObject(source[key]) ? DeepClone(source[key], hash) : source[key]
//         }
//     }
//     return target
// }
// let obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: 3
//     }
// }
// obj.a = obj.b;
// obj.b.c = obj.a;
// let clone_obj = DeepClone(obj)
// console.log(clone_obj)

// function someFunction() {
//     let a = 0
//     return function () {
//         return a++
//     }
// }

// let f1 = someFunction()
// let f2 = someFunction()
// console.log(f1);
// console.log(f2);
// console.log(f1()); // 1
// console.log(f2()); // 2


// let f = someFunction()
// console.log(f());
// console.log(f());

// function ClassA() {
//     this.x = 'hello'
// }

// ClassA.prototype.x = 'world'

// var a = new ClassA()
// a.x = 'whal'
// console.log(a.x); // 'whal
// delete a.x
// console.log(a.x); // 'hello'
// delete a.x
// console.log(a.x); // world
// a.x = undefined
// console.log(a.x); // 'undefiend'

// const promise = new Promise((resolve, reject) => {
//     console.log(1); // 1
//     resolve(); // 已经resolve
//     setTimeout(() => { // 宏2
//         console.log(2);
//     })
//     reject('error');
// })
// promise.then(() => {
//     console.log(3); // 微1
// }).then(() => {
//     console.log(5)
// }).catch(e => console.log(e))
// console.log(4);

// Generator


// class Promise {
//     constructor() {
//         this.status = 'PENDING'
//         this.value = undefined;
//         this.reason = undefined;
//     }
// }

// 基本数据类型: Number String Boolean Null Undefined Symbol bigint
// 引用数据类型: Object Array Function
// 基本数据类型存储在栈中，引用数据类型地址存栈中，实际内容存储在堆中
// pending fulfilled rejected 状态一旦改变就不会再次改变

// function promiseFirst(executor) {
//     let that = this
//     this.status = 'pending'
//     this.value = null
// }
// function promiseFirst(executor) {
//     let that = this
//     this.status = 'pending'
//     this.value = null
//     this.reason = null
//     this.onSuccessCallback = []
//     this.onRejectCallback = []

//     function resolve(value) {
//         if (that.status === 'pending') {
//             that.status = 'success'
//             that.value = value
//             that.onSuccessCallback.forEach(item => {
//                 item(value)
//             })
//         }
//     }

//     function reject(value) {
//         if (that.status === 'pending') {
//             that.status = 'success'
//             that.reason = value
//             that.onRejectCallback.forEach(item => {
//                 item(value)
//             })
//         }
//     }
//     executor(resolve, reject)
// }


// promiseFirst.prototype.then = function (onFulfilled, onRejected) {
//     onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : data => data
//     onRejected = typeof onRejected === 'funciton' ? onRejected : error => {
//         throw error
//     }
//     if (this.status === 'success') {
//         onFulfilled(this.value)
//     } else if (this.status === 'reject') {
//         onRejected(this.reason)
//     } else if (this.status === 'pending') {
//         this.onSuccessCallback.push(onFulfilled)
//         this.onRejectCallback.push(onRejected)
//     }
// }

// new promiseFirst((resolve, _) => {
//     setTimeout(() => {
//         resolve('whl')
//     }, 0)
// }).then(res => console.log(res))
// new Promise((resolve, _) => {
//     resolve('hello JS')
// }).then().then().then(data => console.log(data))

// 1.普通值
// 2.抛出异常
// 3.是一个promsie

// Promise是一种异步的解决方案，将写法复杂的传统回到函数和事件监听的异步操作勇同步代码表示出来

// cookie 浏览器和server端通讯 document.cookie 可以做本地存储 存储大小4KB

// 1.Promise.all方法

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

// 2.Promise.allSettled
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
//                     value: err
//                 }
//                 num++
//                 check()
//             })
//         })
//     })
// }

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

// race

// function race(promises) {
//     if (promises.length === 0) return Promise.resolve()
//     return new Promise((resolve, reject) => {
//         promises.forEach((item, index) => {
//             Promise.resolve(item).then(res => {
//                 resolve
//             })
//         }, err => {
//             reject(err)
//         })
//     })
// }

// 暂时性死区 let const 意思是不能在声明前就使用这些变量，否则会报错
// 地址是存储在栈中的，数据存储在堆中
// 浅拷贝：前后对象的基本数据类型不受影响，但是对象的引用类型会互相影响
// 检测数组
// Array.isArray
// Array.of(1, 2, 3)
// let colors = ['red', 'yellow', 'blue'];
// console.log(colors.toString()) // red,blue,green
// console.log(colors.toLocaleString()) // red,blue,green
// ['a', 'b', 'c'].fill(7)
// // [7, 7, 7]
// new Array(3).fill(7)
// // [7, 7, 7]
// var obj = {
//     "name": "tom",
//     "sex": "male"
// }

// Object.defineProperty(obj, "age", {
//     value: "18",
//     enumerable: false
// })
// //增加不可枚举的属性age

// Object.prototype.protoPer1 = function () {
//     console.log("name is tom");
// }
// //通过原型链增加属性，为一个函数

// Object.prototype.protoPer2 = 2 //通过原型链增加属性，为一个整型值2

// for (var a in obj) {
//     console.log(a)
//     console.log(obj[a])
// }
// //	示例中的属性age为不可可枚举，所以没有输出


// function print(fn) {
//     const a = 200
//     fn()
// }

// const a = 100

// function fn() {
//     console.log(a);
// }

// print(fn)

// function create() {
//     const a = 100
//     return function () {
//         console.log(a);
//     }
// }

// const fn = create()
// const a = 200
// fn()


// function fn1() {
//     console.log(this);
// }
// fn1()

// fn1.call({
//     x: 100
// }) //  立即执行函数

// const fn2 = fn1.bind({
//     x: 200
// })
// fn2() // bind返回一个函数后需要()执行函数

// const zhangsan = {
//     name: '张三',
//     sayHi() {
//         console.log(this);
//     },
//     wait() {
//         setTimeout(() => {
//             console.log(this);
//         })
//     }
// }

// zhangsan.sayHi()
// zhangsan.wait()

// class People {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     sayHi() {
//         console.log(this);
//     }
// }

// const zhangsan = new People('张三')
// zhangsan.sayHi()

// let i
// for (i = 0; i <= 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     },0)
// }
// let a = 100

// function test() {
//     alert(a)
//     a = 10
//     alert(a)
// }
// test()
// console.log(a);

// 闭包：能够读取其他函数内部变量的函数

// 200 请求处理成功
// 204 请求处理成功，但无资源返回
// 206 对范围请求的成功处理
// 301 永久性重定向
// 302 临时性重定向
// 303 临时重定向，并明确表示客户端要用GET方法请求资源

// async function async1() {
//     console.log('async1 start') // 2
//     await async2() // 异步等待
//     console.log('async1 end') // 微1 6
// }

// async function async2() {
//     console.log('async2') // 3
// }


// console.log('script start') // 1

// setTimeout(function () {
//     console.log('setTimeout') //8
// }, 0)

// async1()

// new Promise(function (resolve) {
//     console.log('promise1') // 4
//     resolve()
// }).then(function () {
//     console.log('promise2') // 微任务2 7
// })

// console.log('script end') // 5

// 1.让人更容易读懂增加代码的可读性
// 2.让搜索引擎更容易读懂
// 3.正确的标签做正确的事情
// 4.页面内容结构化

// 行内元素 span img button input i label a

// 手写clearfix
// clearfix: after {
//     conten: ' '
//     display: table
//     clear: both
// }

// for...in  循环出来的是index索引字符串类型的数字 适合遍历对象，不适合遍历数组
// for...of 循环出来的是value

// let object = [3, 5, 7]

// object.foo = 'hello'

// for (let i in object) {
//     console.log(i);
// }


// function test(a, b) {
//     console.log(a);
//     c = 0;
//     var c;
//     a = 5;
//     b = 6;
//     console.log(b);

//     function b() {}

//     function d() {}
//     console.log(b)
// }
// test(1)

// AO: {

// }   

// GO: 先找变量声明后找函数声明


// console.log(a)

// function a(a) {
//     var a = 10;
//     var a = function () {

//     }
// }
// var a = 1;

// a: undefined -> function a() {} ->


// var b = 3;
// console.log(a);

// function a(a) {
//     console.log(a); // function a() {}
//     var a = 2;
//     console.log(a); // 2

//     function a() {
//         var b = 5;
//         console.log(b);
//     }
// }
// a(1);

// AO: {
//     a: udefined - > 1 - > function a() {}
//     b: undefined - > 5
// }


// GO: {
//     a: undefined - > function a() {}
//     b: undefined - > 3
// }

// a = 1;

// function test() {
//     console.log(a); // undefined
//     a = 2;
//     console.log(a); // 2
//     var a = 3;
//     console.log(a); // 3
// }
// test();
// var a;

// AO: {
//     a: undefined - > 3
// }

// GO: {
//     a: undefined - > 1
//     test: undefined - > function test() {}
// }

// function test() {
//     console.log(b);
//     if (a) {
//         var b = 2;
//     }
//     c = 3;
//     console.log(c);
// }
// var a;
// test();
// a = 1;
// console.log(a);

// let a = 'abc'
// a.split(a)
// console.log(a === 'abc');


// a = 1;

// function test(e) {
//     function e() {}
//     arguments[0] = 2;
//     console.log(e); function e {}
//     if (a) {
//         var b = 3;
//     }
//     var c;
//     a = 4;
//     var a;
//     console.log(b); // 
//     f = 5;
//     console.log(c); // uefined
//     console.log(a); // 4
// }
// var a;
// test(1);
// console.log(a); // 1
// console.log(f); // 



// 1.new

// -创建一个空对象
// -创建的对象的__proto__指向构造函数的原型对象
// -执行这个函数，并将创建的对象作为this的上下文
// -如果该构造函数没有返回对象则返回this

// function myNew(fn, ...args) {
//     const obj = Object.create(null)
//     obj.__proto__ = fn.prototype
//     const result = fn.apply(obj, args)
//     const isObject = typeof result === 'obejct' && result !== null
//     const isFunction = typeof result === 'function'
//     if (isObject || isFunction) return result
//     return obj
// }
// function myNew(fn, ...args) {
//     const obj = Object.create(null)
//     obj.__proto__ = fn.prototype
//     const result = fn.apply(obj, args)
//     const isObject = typeof result === 'object' && result !== null
//     const isFunction = typeof result === 'function'
//     if (isObject || isFunction) return result
//     return obj
// }


// function P() {
//     const args = Array.prototype.slice.call(arguments, 0)
//     console.log(args)
// }
// var p = myNew(P, 1, 2, 3)
// var p2 = new p(1, 2, 3)

// typeof可以识别 undefined boolean number string symbol function

// Object.prototype.toString

// function typeOf(obj) {
//     return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
// }

// console.log(typeOf([]));
// console.log(typeOf({}));
// console.log(typeOf(new Date));
// 1.原型链继承

// function Animal() {
//     this.colors = ['black', 'white']
// }

// Animal.prototype.getColor = function () {
//     return this.colors
// }

// function Dog() {}
// Dog.prototype = new Animal()

// let dog1 = new Dog()

// dog1.colors.push('brwon')
// let dog2 = new Dog()
// console.log(dog2.colors);

// 问题: 原型中包含的引用类型属性将被所有的实例共享
// 问题: 子类在实例化的时候不能给父类构造函数传参

// 组合继承
// function Animal(name) {
//     this.name = name
//     this.colors = ['black', 'white']
// }

// Animal.prototype.getName = function () {
//     return this.name
// }

// function Dog(name, age) {
//     Animal.call(this, name)
//     this.age = age
// }
// Dog.prototype = new Animal()
// Dog.prototype.constructor = Dog

// let dog = new Dog('内息', 2)
// dog.colors.push('brown')
// let dog1 = new Dog('whl', 1)
// console.log(dog1);

// 原型式继承

// function object(obj) {
//     function F() {}
//     F.prototype = obj
//     return new F()
// }

// function inheritPrototype(Son, Father) {
//     const prototype = object.create(Father.prototype)
//     prototype.construcotr = Son
//     Son.prototype = prototype
// }

// class实现继承

// class Animal {
//     constructor(name) {
//         this.name = name
//     }
//     getName() {
//         return this.name
//     }
// }

// class Dog extends Animal {
//     constructor(name, age) {
//         super(name)
//         this.age = age
//     }
// }

// 数组去重
// const arr = [1, 2, 3, 4, 1]
// // indexOf: 找到第一个返回其下标的值，找不到就返回-1
// // function unique(arr) {
// //     var res = arr.filter((item, index, array) => {
// //         return array.indexOf(item) === index
// //     })
// //     return res
// // }

// // console.log(unique(arr));

// const unique = arr => [...new Set(arr)]

// console.log(unique(arr));

// 数组扁平化

const arr = [1, [2, [3]]]

// function flatten(arr) {
//     var result = []
//     for (var i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             result = result.concat(flatten(arr[i]))
//         } else {
//             result.push(arr[i])
//         }
//     }
//     return result
// }

// console.log(flatten(arr));
// function flatten(arr) {
//     while (arr.some(item => Array.isArray(item))) {
//         arr = [].concat(...arr)
//     }
//     return arr
// }

// console.log(flatten(arr));

// let a = 20
// let tomAge = a

// let obj = {}
// let tomObj = obj
// obj.name = "tom"
// console.log(tomObj.name);

// 什么是作用域
// -当前上下文可以访问到的变量的集合

// 什么是作用域链查找由内到外进行查找

// -各种上下文代码在访问变量和函数时的顺序

// var name = "神奇的程序员";

// function changeName() {
//     let insideName = "大白";

//     function swapName() {
//         let tempName = insideName;
//         insideName = name;
//         name = tempName;

//         // 可以访问tempName、insideName、name
//     }
//     // 可以访问insideName、name
//     swapName();
// }
// // 可以访问name
// changeName();
// console.log(name);

// 全局上下文
// 函数上下文

// 未声明直接初始化

// function foo() {
//     console.log(this.a);
// }

// var obj = {
//     a: 1,
//     foo: foo
// }
// var bar = obj.foo
// console.log(bar);

// 参数传递造成的隐式绑定丢失
// function foo() {
//     console.log(this.a)
// }
// var obj = {
//     a: 1,
//     foo: foo // 即使换成 () => foo() 也没用
// }

// function doFoo(fn) {
//     fn();
// }
// var a = 2;
// doFoo(obj.foo)
// 1.判断数组对象的类型 instanceof constructor Object.prototype.toString.call
// let arr1 = [1, 2, 3]
// let obj = {
//     name: '大大',
//     age: 1,
//     1: 'name'
// }

// console.log(arr1 instanceof Array);
// console.log(obj instanceof Array);
// console.log(obj instanceof Object);

// console.log(arr1.constructor === Array);
// console.log(obj.constructor === Array);
// console.log(obj.constructor === Object);

// console.log(Object.prototype.toString.call(arr1) === '[object Array]');
// console.log(Object.prototype.toString.call(obj) === '[object Array]');
// console.log(Object.prototype.toString.call(obj) === '[object Object]');

// vue-router中的mode的值 hash、history

// 改变this指向的方法
// this在执行环境决定，有call、apply、bind，在new对象的时候也会修改this的值

// Vue中的hash模式和history模式的区别

// 原型修改、重写
// function Person(name) {
//     this.name = name
// }

// Person.prototype.getName = function () {

// }

// var p = new Person('whl')

// console.log(p.__proto__ === Person.prototype);
// console.log(p.__proto__ === p.constructor.prototype);

// hasOwnProperty

// function iterate(obj) {
//     var res = []
//     for (var key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             res.push(`${key}:${obj[key]}`)
//         }
//     }
// }

// function Person(name) {
//     this.name = name
// }

// var p2 = new Person('whl')
// console.log(p2.__proto__ === Person.prototype);
// console.log(p2.__proto__.__proto__ === Object.prototype);
// console.log(p2.__proto__.__proto__.__proto__ === null)
// // console.log(p2.__proto__.__proto__.__proto__.__proto__) // 报错
// // console.log(p2.__proto__.__proto__.__proto__.__proto__.__proto__) // 报错
// console.log(p2.constructor === Person)
// console.log(p2.prototype) // undefined p2是实例，没有prototype属性
// console.log(Person.constructor === Function)
// console.log(Person.prototype) // 打印出Person.prototype这个对象里面的所有方法和属性
// console.log(Person.prototype.constructor === Person)
// console.log(Person.prototype.__proto__ === Object.prototype)
// console.log(Person.__proto__) // Function.prototype
// console.log(Function.prototype.__proto__ === Object.prototype)
// console.log(Function.__proto__ === Function.prototype)
// console.log(Object.__proto__ === Function.prototype)
// console.log(Object.prototype.__proto__ === null)

// function Dog() {
//     this.name = 'puppy'
// }

// Dog.prototype.back = () => {
//     console.log('woofwoof');
// }
// const dog = new Dog()
// console.log(Dog.prototype.construcotr === Dog && dog.constructor === Dog && dog instanceof Dog);

// // instanceof 检测的是类型是否在实例的原型链上

// function Dog() {
//     this.name = 'puppy'
// }
// Dog.prototype.bark = () => {
//     console.log('woof!woof!')
// }

// function BigDog() {}
// BigDog.prototype = new Dog()
// Object.defineProperty(BigDog.prototype, "constructor", {
//     value: BigDog,
//     enumerable: false
// })
// const bigDog = new BigDog()
// console.log(bigDog.constructor === BigDog) // true

// 如何阻止事件冒泡

// event.stopPropgation()
// event.cancelBubble = true

// 事件委托

// focus、blur没有事件委托

// 微任务: promise的回调、node中的process.nextTick、对DOM变化监听的MutationObserver
// 宏任务: script脚本执行，setTimeout，setInterval、setImmediate、I/O操作、UI渲染等

// const保证的是内存地址不能改变
// 箭头函数的this继承自己作用域上一层的this，箭头函数的this在它定义的时候就已经确定了,之后都不会改变

// var id = 'GLOBAL';
// var obj = {
//     id: 'OBJ',
//     a: function () {
//         console.log(this.id);
//     },
//     b: () => {
//         console.log(this.id);
//     }
// };
// obj.a(); // 'OBJ'
// obj.b(); // 'GLOBAL'
// const b = new obj.a()

// 箭头函数不能作为构造函数使用
// 箭头函数不能用作Generator函数
// 箭头函数不能使用yeild关键字

// const obj = {
//     getArrow() {
//         return () => {
//             console.log(this);
//             console.log(this === obj);
//         }
//     }
// }

// obj.getArrow()()

// 对象扩展运算符
// let bar = {
//     a: 1,
//     b: 2
// }

// let baz = {
//     ...bar
// }
// console.log(baz);
// let bar = {
//     a: 1,
//     b: 2
// }
// let baz = { 扩展运算符对对象实例的拷贝属于一种浅拷贝
//     ...bar,
//     ...{
//         a: 2,
//         b: 4
//     }
// }
// console.log(baz);
// console.log(...[1, [2, 3, 4], 5]);

// function add(x, y) {
//     return x + y
// }

// let numbers = [1, 2]
// let a = add(...numbers)
// console.log(a);
// const arr1 = [1, 2]
// const arr2 = [...arr1]
// console.log(arr2);
// let arr1 = ['two', 'three']
// let arr2 = ['one', ...arr1, 'four', 'five']
// console.log(arr2);
// console.log([...'hello']);
// Array.prototype.slice.call(arguments)

// 类数组转化为数组的方式有这几种

// 1.Array.prototype.slice.call(ArrayLike)
// Array.prototype.splice.call(ArrayLike,0)
// Array.from(arrayLike)

// Javascript中有哪些数据类型他们的区别

// 1.undefined、null、boolean、number、string、Symbol、BigInt
// console.log([] instanceof Array); 
// console.log(function () {}
//     instanceof Function);
// console.log({}
//     instanceof Object);

// instanceof只能正确判断引用类型数据,不能判断基本类型数据
// function fn() {}
// fn.prototype = new Array()
// fn.prototype.constructor = fn
// var f = new fn()
// console.log(f.constructor === fn);
// console.log(f.constructor === Array);
// var a = Object.prototype.toString;

// console.log(a.call(2) === '[object Number]');
// console.log(a.call(true));
// console.log(a.call('str'));
// console.log(a.call([]));
// console.log(a.call(function () {}));
// console.log(a.call({}));
// console.log(a.call(undefined));
// console.log(a.call(null));
// console.log(Object.prototype.toString.call([]).slice(8, -1) === 'Array');
// console.log([].__proto__ === Array.prototype);
// console.log(Array.isArray([]));
// console.log([] instanceof Array);
// console.log(null == undefined);
// instanceof操作符的原理: 用于判断构造函数的prototype属性是否出现在该对象原型链中的任何位置
// function MyInstanceof(left, right) {
//     let proto = Object.getPrototypeOf(left), // 获取对象的原型
//         prototype = right.prototype // 获取构造函数的proototype对象
//     while (true) {
//         if (!proto) return false
//         if (proto === prototype) return true
//         proto = Object.getPrototypeOf(proto)
//     }
// }

// console.log(MyInstanceof([], Array));
// console.log(MyInstanceof({}, Object));

// // 标记清楚，引用计数垃圾回收的两种方式

// class B {}
// B.prototype.a = 1;
// B.prototype.add = function() {
//    this.a++;
// };
// const b1 = new B();
// console.log(b1.a); // 1

// const b2 = new B();
// b2.add()
// console.log(b2.a);

// const obj = {
//     a: 1,
// };
// obj.add = () => {
//     console.log(this.a);
// };
// obj.add();

// 1.模拟new的过程

// function Animals(name, color) {
//     this.name = name
//     this.color = color
// }
// Animals.prototype.action = function () {
//     console.log(this.name, 'walk');
// }


// 1.创建一个新的对象
// 2.连接到原型(新对象的原型指向要继承的构造函数的原型)，obj可以访问构造函数原型的属性
// 3.绑定this实现继承，obj可以访问构造函数是的属性
// 4.如果构造函数返回的是对象则返回他，如果不是则返回obj

// function create(constructor, ...args) {
//     const obj = new Object()
//     obj.__proto__ = constructor.prototype
//     // console.log(args);
//     const res = constructor.apply(obj, args) // ...args将args转换为数组
//     return res instanceof Object ? res : obj
// }
// const dog = create(Animals, 'dog', 'red')
// console.log(dog);

// Object.create

// function create(constructor, ...args) {
//     const obj = Object.create(constructor.prototype)
//     const res = constructor.apply(obj, args)
//     return res instanceof Object ? res : obj
// }
// const dog = create(Animals, 'dog', 'red')
// console.log(dog);

// 函数的柯里化

// function curry() {
//     const argList = [...arguments]
//     console.log(argList);
//     const fn = function () {
//         argList.push(...arguments)
//         return fn
//     }
//     fn.toString = function () {
//         return argList.reduce((a, b) => a + b)
//     }
//     return fn
// }

// console.log(curry(1, 2)(3)(4, 5, 6));

// function sum(a, b, c) {
//     return a + b + c
// }

// function curry(fn) {
//     const argsList = [...arguments].splice(1)
//     // console.log(argsList);
//     return function () {
//         const newArgsList = argsList.concat([...arguments])
//         if (newArgsList.length < fn.length) {
//             return curry.apply(this, [fn, ...newArgsList])
//         } else {
//             return fn.apply(this, newArgsList)
//         }
//     }
// }
// const sumAll = curry(sum)
// console.log(sumAll(1)(2)(3));
// console.log(sumAll(1)(2, 3));

// 重绘

// 当元素样式发生改变，但不影响布局时，浏览器将使用重绘进行元素更新，由于此时只需要UI层面的绘制，因此损耗较小

// 回流

// 当元素尺寸、结构、或者触发某些属性的时候，浏览器会重新渲染页面，这叫回流，浏览器需要重新计算，重新进行页面布局，所以损耗较大

// 1.页面初次渲染
// 2.浏览器窗口大小发生改变
// 3.元素尺寸、位置、内容发生改变
// 4.元素字体大小发生改变
// 5.添加或删除可见的DOM元素
// 6.触发CSS伪类，如:hover
// 7.查询某些属性或者调用某些方法
// client offset scroll getComputedStyle getBoundingClinetRect ScrollTo()

// 浏览器存储
// cookie: 用户信息、登陆状态,自行设置过期事件，体积上线为4k
// localStorage: 无限期存储，体积上线为4-5M
// sessionStorage: 浏览器窗口关闭则删除，体积上线为4-5M

// 网络请求方式post和get
// get：会被浏览器缓存，请求长度受限，会被历史保存记录，浏览器回退时候是无害的，一般不带请求体，发送一个TCP数据包
// post：更安全，更多编码类型，可以发送大数据，浏览器回退的时候会再次提交请求，一般带有请求体，发送两个TCP数据包

// Function.prototype.myCall = function (context, ...args) {
//     if (context === null || context === undefined) {
//         context = window
//     } else {
//         context = Object(context)
//     }
//     // const args = [...arguments].slice(1) //将类数组转换为数组
//     const key = Symbol('特殊属性Symbol')
//     context[key] = this
//     let result = context[key](...args)
//     delete context[key]
//     return result
// }

// function log() {
//     console.log(this);
//     console.log(this.name);
//     console.log(arguments);
// }
// let obj = {
//     name: 'whl'
// }
// // 必须是函数来调用
// log.myCall(obj, 1, 2, 3)


// Function.prototype.myApply = function (context, args) {
//     if (context === null || context === undefined) {
//         context = window
//     } else {
//         context = Object(context)
//     }
//     const key = Symbol('特殊属性Symbol')
//     context[key] = this
//     let result = context[key](...args)
//     delete context[key]
//     return result
// }

// function log() {
//     console.log(this);
//     console.log(this.name);
//     console.log(arguments);
// }
// let obj = {
//     name: 'whl'
// }
// // 必须是函数来调用
// log.myApply(obj, [1, 2, 3])

// Function.prototype.myBind = function (objThis, ...params) {
//     const thisFn = this
//     // 对返回的函数 secondParams 二次传参
//     let fToBind = function (...secondParams) {
//         const isNew = this instanceof fToBind
//         const context = isNew ? this : Object(objThis)
//         return thisFn.call(context, ...params, ...secondParams)
//     }
//     if (thisFn.prototype) {
//         fToBind.prototype = Object.create(this.Fn.prototype)
//     }
//     return fTobind
// }
// 1.拷贝原函数
// 2.返回拷贝的函数
// 3.调用拷贝的函数

// 事件委托、事件冒泡

// 减少内存的效果，节约效率

// for in for of
// 遍历课遍历对象的所有属性 一般用于遍历对象，值是他的键值
// const arr2 = [5, 4, 3, 2, 1]
// // arr2.name = 'whl'

// for (let i of arr2) {
//     console.log(i);
// }
// arr2.name = 'name'
// for (let i in arr2) {
//     console.log(i);
// }
// const test = [
//     [1, 2, 2],
//     [3, 4, 5, 5],
//     [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
// ]
// for of不能遍历对象，对象没有迭代器对象,可以遍历数组/数组对象/字符串/map/set
// function flat(arr) {
//     let list = []
//     arr.forEach(item => {
//         if (Array.isArray(item)) {
//             // console.log(item);
//             // console.log(...flat(item));
//             list.push(...flat(item))
//         } else {
//             list.push(item)
//         }
//     })
//     return list
// }

// const res1 = [...new Set(flat(test))].sort((a, b) => a - b)
// console.log(res1);
// const res2 = [...new Set(test.flat(Infinity))].sort((a, b) => a - b)
// console.log(res2);


// 1.模拟new过程

// 1.创建一个新对象
// 2.链接到原型(新对象的原型指向要继承的构造函数的原型)，obj可以访问构造函数原型的属性
// 3.绑定this实现继承，obj可以访问构造函数的属性
// 4.如果构造函数返回的是对象则返回他，如果不是则返回obj

// function myNew(constructor, ...args) {
//     const obj = new Object()
//     obj.__proto__ = constructor.prototype
//     console.log(args);
//     const res = constructor.apply(obj, args)
//     return res instanceof Object ? res : obj
// }
// function New(constructor, ...args) {
//     const obj = Object.create(constructor.prototype)
//     const res = constructor.apply(obj, args)
//     return res instanceof Object ? res : obj
// }

// function Animal(name, color) {
//     this.name = name
//     this.color = color
// }

// Animal.prototype.action1 = function () {
//     console.log(this.color);
// }


// const dog1 = New(Animal, 'dog', 'red')
// console.log(dog1);
// dog1.action1()

// function debounce(fn, wait) {
//     // 创建一个标记用来存放定时器的返回值
//     let timer = null
//     return function (...args) {
//         // 每次当用户输入的时候，把前一个定时器删除
//         timer && cleartTimeout(timer)
//         // 创建一个新的setTimeOut
//         // 保证点击按钮后的间隔内如果用户还点击了的话则不会执行fn函数
//         timer = setTimeout(() => {
//             fn.apply(this, args)
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
// 函数柯里化
// function curry(fn) {
//     const argsList = [...arguments].splice(1)
//     return function () {
//         const newArgsList = argsList.concat([...arguments])
//         if (newArgsList.length < fn.length) {
//             return curry.apply(this, [fn, ...newArgsList])
//         } else {
//             return fn.apply(this, newArgsList)
//         }
//     }
// }

// function sum(a, b, c) {
//     return a + b + c
// }
// let sumAll = curry(sum)
// console.log(sumAll(1, 2, 3));
// console.log(sumAll(1)(2)(3));
// console.log(sumAll(1)(2, 3));

// cookie 4K
// sessionStorange 4-5M
// localStorage 4-5M

// GET和POST

// CSRF和XSS

// 区别
// CSRF需要登陆之后操作，XSS不需要
// CSRF是请求页面API来实现非法操作，XSS是向当前页面植入JS脚本来修改页面内容

// 跨站点伪造请求
// 跨站脚本攻击

// event loop执行顺序:
// 1.一开始整个脚本作为一个宏任务执行
// 2.执行过程中同步代码直接执行，宏任务进入宏任务队列，微任务进入微任务队列
// 3.当前宏任务执行完出队,检查微任务列表，有则一次执行，直到全部执行完
// 4.执行浏览器UI线程的渲染工作
// 5.检查是否又Web Worker任务，有则执行
// 6.执行完本轮的宏任务，回到2，一次循环，直到宏任务和微任务队列都为空

// 微任务包括: Promise.then(),Promise.catch() process.nextTick
// 宏任务: script、setTimeout、setInterval、setImmediate I/O操作，UI渲染\

// const promise1 = new Promise((resolve, reject) => {
//     console.log('promise1'); // 1
// })
// console.log('1', promise1); // '1' Promise{<pending>}

// const promise = new Promise((resolve, reject) => {
//     console.log(1); // 1
//     resolve('success') // 将promise状态为了resolved并且将值保存下来
//     console.log(2); // 2
// })

// promise.then(() => {
//     console.log(3); // 4
// })
// console.log(4); // 3

// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     console.log(2);
// })
// // promise中并没有resolve或者reject因此promise.then并不会执行，他只有状态改变了之后才会执行
// promise.then(() => {
//     console.log(3);
// })
// console.log(4);

// const promise1 = new Promise((resolve, reject) => {
//     console.log('promise1'); //1
//     resolve('resolve1')
// })

// const promise2 = promise1.then(res => {
//     console.log(res); // 4
// })

// console.log('1', promise1); // 2 fulfilled resolve1
// console.log('2', promise2); // 3 pending

// promise结合setTimeout
// console.log('start'); // 1
// setTimeout(() => {
//     console.log('time'); // 4
// })
// Promise.resolve().then(() => {
//     console.log('resolve'); // 3
// })
// console.log('end'); // 2

// const promise = new Promise((resolve, reject) => {
//     console.log(1); // 1
//     setTimeout(() => {
//         console.log('timeStart'); // 4
//         resolve('success') // fulfilled success
//         console.log('timeEnd'); // 5
//     }, 0)
//     console.log(2); // 2
// })
// promise.then(res => {
//     console.log(res); // 6
// })
// console.log(4); // 3

// setTimeout(() => {
//     console.log('timer1');
//     setTimeout(() => {
//         console.log('timer3')
//     }, 0)
// }, 0)
// setTimeout(() => {
//     console.log('timer2')
// }, 0)
// console.log('start') // 1
// setTimeout(() => {
//     console.log('timer1');
//     Promise.resolve().then(() => {
//         console.log('promise')
//     })
// }, 0)
// setTimeout(() => {
//     console.log('timer2')
// }, 0)
// console.log('start') // 1
// Promise.resolve().then(() => { // 微任务1
//     console.log('promise1');
//     const timer2 = setTimeout(() => {
//         console.log('timer2')
//     }, 0)
// });
// const timer1 = setTimeout(() => { // 宏任务1
//     console.log('timer1')
//     Promise.resolve().then(() => {
//         console.log('promise2')
//     })
// }, 0)
// console.log('start'); // 1

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('success')
//     }, 1000)
// })
// const promise2 = promise1.then(() => {
//     throw new Error('error!!!')
// })
// console.log('promise1', promise1) // Promise pending
// console.log('promise2', promise2) // Promise pending
// setTimeout(() => {
//     console.log('promise1', promise1)
//     console.log('promise2', promise2)
// }, 2000)

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => { // 宏任务
//         resolve("success");
//         console.log("timer1"); // 3
//     }, 1000);
//     console.log("promise1里的内容"); // 1
// });
// const promise2 = promise1.then(() => {
//     throw new Error("error!!!");
// });
// console.log("promise1", promise1); // Promise pending
// console.log("promise2", promise2); // Promise pending
// setTimeout(() => {
//     console.log("timer2"); // 4
//     console.log("promise1", promise1); // resolved
//     console.log("promise2", promise2); // rejected
// }, 2000);

// const promise = new Promise((resolve, reject) => {
//     resolve("success1"); // 1
//     reject("error");
//     resolve("success2");
// });
// promise
//     .then(res => {
//         console.log("then: ", res);
//     }).catch(err => {
//         console.log("catch: ", err);
//     })

// const promise = new Promise((resolve, reject) => {
//     reject("error");
//     resolve("success2");
// });
// promise
//     .then(res => {
//         console.log("then1: ", res);
//     }).then(res => {
//         console.log("then2: ", res);
//     }).catch(err => {
//         console.log("catch: ", err);
//     }).then(res => {
//         console.log("then3: ", res); // then3: undefined
//     })

// resolve(2)
// Promise.reject(1)
//     .then(res => {
//         console.log(res);
//         return 2;
//     })
//     .catch(err => {
//         console.log(err);
//         return 3
//     })
//     .then(res => {
//         console.log(res);
//     });

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('timer')
//         resolve('success')
//     }, 1000)
// })
// const start = Date.now();
// promise.then(res => {
//     console.log(res, Date.now() - start)
// })
// promise.then(res => {
//     console.log(res, Date.now() - start)
// })
// Promise.resolve().then(() => {
//     return new Error('error!!!')
// }).then(res => {
//     console.log("then: ", res)
// }).catch(err => {
//     console.log("catch: ", err)
// })

// return Promise.reject(new Error('error!'))
// throw new Error('error!')

// const promise = Promise.resolve().then(() => {
//     return promise;
// })
// promise.catch(console.err)

// Promise.resolve()
//     .then(function success1(res) {
//         throw new Error('error!!!')
//     }, function fail1(err) {
//         console.log('fail1', err)
//     }).catch(function fail2(err) {
//         console.log('fail2', err)
//     })

// async function async1() {
//     console.log("async1 start"); // 1
//     await async2(); // await后面的语句相当于放到 new Promise后面
//     console.log("async1 end"); // 4 下一行及以后的代码相当于放在Promise.then中
// }
// async function async2() {
//     console.log("async2"); // 2
// }
// async1();
// console.log('start') // 3

// async function async1() {
//     console.log("async1 start"); // 1
//     await async2();
//     console.log("async1 end"); // 4
// }
// async function async2() {
//     setTimeout(() => { // 宏
//         console.log('timer') // 5
//     }, 0)
//     console.log("async2"); // 2
// }
// async1();
// console.log("start") // 3
// async function async1() {
//         console.log("async1 start"); // 1
//         await async2();
//         console.log("async1 end"); // 4
//         setTimeout(() => {
//                 console.log('timer1') // 7
//             },
//         }
//         async function async2() {
//             setTimeout(() => {
//                 console.log('timer2') // 宏 先 5
//             }, 0)
//             console.log("async2"); // 2
//         }
//         async1();
//         setTimeout(() => { // 宏任务 后 6
//             console.log('timer3')
//         }, 0)
//         console.log("start") // 3

// async function fn() {
//     // return await 1234
//     // Promise.resolve(123)
//     // 等同于
//     return 123
// }
// fn().then(res => console.log(res))

// async function async1() {
//     console.log('async1 start'); // 1
//     await new Promise(resolve => {
//         console.log('promise1') // 2
//     })
//     console.log('async1 success'); // 3
//     return 'async1 end'
// }
// console.log('srcipt start')
// async1().then(res => console.log(res))
// console.log('srcipt end')

// async function async1() {
//     console.log('async1 start'); // 2
//     await new Promise(resolve => {
//         console.log('promise1') // 3
//         resolve('promise1 resolve') 
//     }).then(res => console.log(res))
//     console.log('async1 success');
//     return 'async1 end'
// }
// console.log('srcipt start') // 1
// async1().then(res => console.log(res))
// console.log('srcipt end')

// async function async1() {
//     console.log('async1 start'); // 2
//     await new Promise(resolve => {
//         console.log('promise1') // 3
//         resolve('promise resolve')
//     })
//     console.log('async1 success'); // 5
//     return 'async1 end'
// }
// console.log('srcipt start') // 1
// async1().then(res => {
//     console.log(res) // asycn1 end
// })
// new Promise(resolve => {
//     console.log('promise2') // 4
//     setTimeout(() => {
//         console.log('timer')
//     })
// })

// async function async1() {
//     console.log("async1 start"); // 2
//     await async2();
//     console.log("async1 end"); // 微任务 6
// }

// async function async2() {
//     console.log("async2"); // 3
// }

// console.log("script start"); // 1

// setTimeout(function () { //  宏任务
//     console.log("setTimeout"); // 8
// }, 0);

// async1();

// new Promise(function (resolve) {
//     console.log("promise1"); // 4
//     resolve();
// }).then(function () {
//     console.log("promise2"); // 7
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
//     const v1 = await testSometing(); // 微任务
//     console.log(v1); // 5 testSometing
//     const v2 = await testAsync();
//     console.log(v2);
//     console.log(v1, v2);
// }

// test();

// var promise = new Promise(resolve => {
//     console.log("promise start..."); //  3
//     resolve("promise");
// });
// promise.then(val => console.log(val)); // 6微任务

// console.log("test end..."); // 4

// async function async1() {
//     await async2();
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
//     try { // 微任务
//         await Promise.reject('error!!!')
//     } catch (e) {
//         console.log(e)
//     }
//     console.log('async1');
//     return Promise.resolve('async1 success')
// }
// async1().then(res => console.log(res))
// console.log('script start') // 1


// const first = () => (new Promise((resolve, reject) => {
//     console.log(3); // 1
//     let p = new Promise((resolve, reject) => {
//         console.log(7); // 2
//         setTimeout(() => { // 宏2
//             console.log(5); //  6
//             resolve(6);
//             console.log(p) // 7: Promise resolved 1
//         }, 0)
//         resolve(1); // 改变p的 Promise状态为resolved 值为1
//     });
//     resolve(2); // 改变fisrt的 Promise状态为resolved 值为2
//     p.then((arg) => { // 微任务1
//         console.log(arg); //4: 1
//     });
// }));
// first().then((arg) => {
//     console.log(arg); // 5: 2  微任务2
// });
// console.log(4); // 3


// const async1 = async () => {
//     console.log('async1'); // 2
//     setTimeout(() => { // 宏2
//         console.log('timer1') // 7
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
//     .then(res => console.log(res)) // 5: 1微任务1
// setTimeout(() => {
//     console.log('timer2') //6 宏任务2
// }, 1000)

// const p1 = new Promise((resolve) => {
//     setTimeout(() => { // 宏任务
//         resolve('resolve3');
//         console.log('timer1') // 3
//     }, 0)
//     resolve('resovle1'); // p1 设置为 resolved 值为resolve1
//     resolve('resolve2');
// }).then(res => { // 微任务
//     console.log(res) //1: resolved1
//     setTimeout(() => { // 宏任务
//         console.log(p1) // Promise resolve1 resolved1
//     }, 1000)
// }).finally(res => {
//     console.log('finally', res) // 2: 'finally' undeinfed
// })

// Promise.all

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

// function allSettle(promises) {
//     if (promises.length === 0) return Promise.resolve([])
//     return new Promise((resolve, reject) => {
//         let result = [],
//             num = 0
//         const check = () => {
//             if (num === result.length) {
//                 resolve(result)
//             }
//         }
//         promises.forEach((item, index)).then(res => {
//             result[index] = {
//                 status: 'fulfilled',
//                 value: res
//             }
//             num++
//             check()
//         }, err => {
//             result[index] = {
//                 status: 'rejected',
//                 reason: err
//             }
//             num++
//             check()
//         })
//     })
// }

// function any(promises) {
//     if (promises.length === 0) {
//         reject(new AggregateError('No Promise in Promise.any was resolved'))
//     }
//     return new Promise((resolve, reject) => {
//         let result = [],
//             num = 0
//         const check = () => {
//             if (num === promises.length) {
//                 reject(reject(new AggregateError('No Promise in Promise.any was resolved')))
//             }
//         }
//         promises.forEach((item, index)).then(res => {
//             resolve(res)
//         }, err => {
//             result[index] = err
//             num++
//             check()
//         })
//     })
// }

// function race(promises) {
//     if (promises.length === 0) return Promise.resolve()
//     return new Promise((resolve, reject) => {
//         promises.forEach(item).then(res => {
//             resolve(res)
//         }, err => {
//             reject(err)
//         })
//     })
// }

// var length = 10

// function fn() {
//     console.log(this);
//     return this.length + 1
// }

// var obj = {
//     length: 5,
//     test1: function () {
//         return fn()
//     }
// }
// obj.test2 = fn
// console.log(obj.test1()); // 6
// console.log(fn() === obj.test2()); // false
// console.log(fn());
// console.log(obj.test2());

// 1.是否连接2.是否可靠3.连接对象个数4.传输方式5.首部开销6.使用场景

// 客户端发送能力和服务器接受能力


//     -- -
//     theme: cyanosis
//     -- -

//     #HTTP协议与计算机网络

// ## 1. TCP和UDP


//     |
//     - | UDP | TCP |
//     |
//     : -: |: -: |: -: |
//     |
//     是否可连接 | 无连接 | 面向连接 |
//     |
//     是否可靠 | 不可靠传输， 不使用流量控制和拥塞控制 | 可靠传输 |
//     |
//     链接对象个数 | 一对一， 一对多， 多对一， 多对多 | 一对一 |
//     |
//     传输方式 | 面向报文 | 面向字节流 |
//     |
//     首部开销 | 首部开销小， 8 字节 | 首部最小20字节， 最大60字节 |
//     |
//     使用场景 | 实时应用（ IP电话， 视频会议， 直播等） | 适用于可靠传输的应用， 比如文件传输


// ## 2. TCP三次握手， 两次行不行， 四次行不行， 四次挥手

//     **
//     三次握手 **

//     ``
// `
// 第一次: client -> SYN = 1, seq = x 
// 第二次: server -> ACK = x + 1,SYN = 1,seq = y
// 第三次: clinet -> ACK = y + 1
// `
// ``

// 两次握手行不行？ 答案当然是否定的

//     ``
// `
// 三次握手是通信双方为了确信自己和接收方的发送能力和接受能力都是正常的

// 第一次： 服务器：客户端发送能力✔，服务器接受能力✔
// 第二次： 客户端：客户端发送能力✔，接受能力✔，服务器发送能力✔，接受能力✔
// 第三次： 服务器：客户端接受能力✔，服务器发送能力✔
// `
// ``


// ##
// 3. HTTP请求方法有哪些， PUT和POST的区别
//     `get、post、delete、head、put`

//     **
//     幂等性 **

//     通俗来讲就是不管进行多少次重复的操作， 都是实现相同的结果

// `GET,DELETE,PUT是幂等操作，post不是，原因是前三个重复多次同一个操作，结果是一样的，而POST重复多次，资源就会提交多份`

// 选用PUT还是POST取决于最终要实现的操作， 比如发送两个同样的请求， 要求产生两个结果， 那应该用POST， 要求产生一个结果那就用PUT

// ## 4. GET和POST的区别

//     |
//     - | GET | POST |
//     |
//     : -: |: -: |: -: |
//     |
//     后退 / 刷新 | 无害 | 数据会被重新提交 |
//     |
//     书签 | 可收藏为书签 | 不可收藏为书签 |
//     |
//     缓存 | 能被缓存 | 不能缓存 |
//     |
//     编码类型 | application / x - www - form - urlencoded | application / x - www - form - urlencoded或multipart / form - data， 二进制数据使用多重编码 |
//     |
//     历史 | 参数保留在浏览器历史中 | 参数不会保存在浏览器历史中 |
//     |
//     安全性 | 安全性较差， 参数拼接在url中 | 相对GET更安全 |
//     |
//     可见性 | 数据在URL中， 所有人可见 | 数据在form data中 |

//     **
//     由于GET请求的数据能够被缓存， 所以有时不能返回正确的数据 **

//     解决： `服务器端设置缓存失效时间，在请求中添加时间戳的方式`


// ## 5. HTTP状态码, 301, 302

//     -
//     1 XX: 服务器收到请求， 需要请求者继续执行操作 -
//     2 XX: 相应成功， 操作被成功接受并处理 -
//     200: ok -
//     203: Non - Authoritative, 非授权信息， 请求成功， 但返回的meta信息不在原始的服务器， 而是一个副本

//     -
//     3 XX: 重定向， 需要进一步操作以完成请求 -
//     301: 永久重定向 -
//     302: 临时重定向 -
//     304: not modified, 缓存有效的状态码， 缓存失效时返回200

//     -
//     4 XX： 客户端错误， 请求语法错误或无法完成请求 -
//     400： Bad Request， 客户端请求的语法错误 -
//     401： Unauthorized， 要求用户身份认证 -
//     403： Forbidden， 服务器拒绝执行请求 -
//     404： Not Found

//     -
//     5 XX: 服务器错误 -
//     500: 服务器内部错误 -
//     501： 服务器不支持请求的功能， 无法完成请求 -
//     502： Bad GateWay， 网关或代理服务器执行请求时， 从远程服务器接收到了一个无效的相应

// ## 6. Web攻击以及防御(XSS, CSRF)

// `XSS(跨站脚本攻击)`


// XSS: 诱使用户点击一个嵌入恶意脚本的链接(很多攻击者利用论坛、 微博等发布恶意url) 将恶意脚本提交到数据库中， 用户浏览网页时， 恶意脚本从数据库中被加载到页面中执行

// 防范XSS攻击

//     -
//     对危险字符进行转义 `<> / $ ...` -
//     对输入和输出进行转义 -
//     设置cookie属性http - only

// `CSRF(跨站请求伪造)`

// CSRF： 伪造用户信息发送请求， 在用户不知情的情况下以用户的名义进行非法操作， 原理是利用浏览器的cookie和服务器的session盗取用户身份


// 防范CSRF

//     -
//     验证referer字段， 该字段记录该http请求的来源地址 优点： 简单易行， 缺点： 过度依赖浏览器， 不能保证浏览器自身没有安全漏洞 -
//     设置Samesite cookie， 表明该cookie是个同站cookie， 不允许第三方加载cookie信息 优点： 简单易行 缺点： 影响用户体验 -
//     在表单中添加令牌， 验证码识别请求者的身份 -
//     服务器端设置csrftoken

// ## 7. 浏览器存储(cookie, localStorage, sessionStorage)

//     |
//     特性 | cookie | localStorage | sessionStorage |
//     |
//     : -: |: -: |: -: |: -: |
//     |
//     数据声明周期 | 由服务器生成， 可设置生效时间， 如果在浏览器端生成cookie， 默认是浏览器关闭后失效 | 永久有效， 除非手动清楚 | 仅在当前对话下有效， |
//     |
//     大小 | 4 K左右 | 5 MB | 5 MB |
//     与服务器通信 | 每次都会携带在http头重， cookie过多会带来性能问题 | 不参与服务器通信 | 不参与服务器通信

//     **
//     cookie的容量是同一站点的限制， 不同的浏览器对同一域下的cookie数量限制不同， 同一域名下的cookie总容量不可超过4K **

//     ##8. 浏览器缓存策略(强制缓存和协商缓存)

//     **
//     强制缓存 **

//     浏览器请求数据的时候， 服务端在response header里面对该文件进行了缓存配置， 浏览器在拿到数据之后， 在过期时间内不会再去重复请求

// ``
// `
// 强制缓存只有在首次请求才会跟服务器通信，读取缓存资源时不会发出任何请求，状态吗为200，http1.1的版本的实现优先级高于http1.0版本
// `
// ``

// Key: 如何知道当前时间是否超过了过期时间 http1 .0: 通过Expires响应头实现， 表示过期时间 http1 .1: 通过Cache - Control响应头实现， 常用字段是max - age, 表示缓存资源将在xxx秒后过期


// var p = Promise.resolve('ok')
//     .finally(res => {
//         return res
//     }).then(res => {
//         console.log('陈工', res);
//     }, err => {
//         console.log('shibai', err);
//     })

// var p = Promise.resolve('ok')
//     .finally(() => {
//         return Promise.reject('err')
//     }).then(res => {
//         console.log('cg', res);
//     }, err => {
//         console.log('shibai', err);
//     })

// 1.Promise的理解

// 由于JS语言特性，所有程序都是单线程执行的,JS中的浏览器事件、请求事件都是异步执行的，通过回调函数处理异步的结果，为了解决异步回调，Promise是异步编程的一种解决方案

// 手写Promise.all

// function all(promises) {
//     if (promises.length === 0) return Promise.resolve([])
//     return new Promise((resolve, reject) => {
//         let result = [],
//             num = 0
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


// allSettled
// function allSettled(promises) {
//     if (promises.length === 0) return Promise.resolve([])
//     return new Promise((resolve, reject) => {
//         let result = [],
//             num = 0
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

// function any(promises) {
//     if (promises.length === 0) {
//         reject(new AggregateError('No Promise in Promise.any was resolved'))
//     }
//     return new Promise((resolve, reject) => {
//         let result = [],
//             num = 0
//         const check = () => {
//             if (num === promises.length) {
//                 reject(new AggregateError('No Promise in Promise.any was resolved'))
//             }
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

// function race(promises) {
//     if (promises.length === 0) return Promise.resolve()
//     return new Promise((resolve, reject) => {
//             promises.forEach(item => {
//                     Promise.resolve(item).then(res => {
//                             resolve(res)
//                         }, err => {
//                             reject(err)
//                         }
//                     })
//             })
//     })
// }

// async function async1() {
//     console.log('async1 start'); //  2
//     await async2();
//     console.log('async1 end'); // 微任务1 6
// }
// async function async2() {
//     console.log('async2'); // 3
// }
// console.log('script start'); // 1
// setTimeout(function () { // 宏任务
//     console.log('setTimeout'); // 8
// }, 0)
// async1();
// new Promise(function (resolve) {
//     console.log('promise1'); // 4 
//     resolve();
// }).then(function () { // 微任务
//     console.log('promise2'); // 7
// });
// console.log('script end'); // 5


// 作用域和作用域链

// 作用域：变量和函数可访问的范围，即作用域控制变量和函数的可见性和声明周期

// 词法作用域
// 动态作用域
// 静态作用域

// var value = 1

// function foo() {
//     console.log(value); // 首先查找当前作用域中是否又value，如果没有，则会向外一层查找
// }

// function bar() {
//     var value = 2
//     foo()
// }

// bar()

// var globalValue = `global value`;

// function checkGlobal() {
//     var localValue = `local value`;
//     console.log(localValue); // "local value"
//     console.log(globalValue); // "global value"
// }

// console.log(globalValue); // "global value"
// console.log(checkGlobal); // "global value"
// console.log(localValue); // "Uncaught ReferenceError: localValue is not defined"

// for (let i = 0; i < 2; i++) {
//     let i = 'hello'
//     console.log(i);
// }
// var a = 1

// function check() {
//     return function () {
//         console.log(a);
//         console.log(b);
//     }
// }

// var func = check()
// func()

// 当函数可以记住并访问所在的词法作用域的时，就产生了闭包,即使是在当前词法作用域外执行函数

// (function () {
//     var a = 1

//     function test() {
//         console.log(a);
//     }

//     window.module = {
//         a,
//         test
//     }
// })()

// function outer() {
//     var num = 0
//     return function add() {
//         num++
//         console.log(num);
//     }
// }

// var func1 = outer()
// func1()
// func1()

// var func2 = outer()
// func2()
// func2()

// for (var i = 0; i < Array.length; i++) {
//     (function (k) {
//         buttons[k].onclick = function () {
//             console.log(k + 1);
//         }
//     })(i)
// }

// let x = 5;

// function fn(x) {
//     console.log(x);
//     return function (y) {
//         console.log(y + (++x)); // 13
//     }
// }
// let f = fn(6);
// f(7);
// console.log(x); // 5

// function func1() {
//     alert(num);
// }

// function func2() {
//     var num = 456;

//     function func3() {
//         func1();
//     }
//     func3();
// }

// func2()

// var name = 'Peter';

// function greet() {
//     var greeting = 'Hello'; {
//         let lang = 'English';
//         console.log(`${lang}: ${greeting} ${name}`);
//     }
// }
// greet();

// var a = 10
// var obj = {
//     a: 20,
//     say: () => {
//         console.log(this);
//         console.log(this.a)
//     }
// }
// obj.say()

// var a = 10
// var obj = {
//     a: 20,
//     say: function () {
//         console.log(this.a)
//     }
// }
// obj.say.call(this) // 此处显示绑定this为全局window对象

// 获取数组中的最大值和最小值
// var numbers = [5, 458, 120, -215];
// var maxInNumbers = Math.max.apply(Math, numbers) //458
// var minInNumbers = Math.min.call(Math, 5, 458, 120, -215); //458
// console.log(maxInNumbers, minInNumbers);

// 数组相加
// var array1 = [12, "foo", {
//     name: "Joe"
// }, -2458];
// var array2 = ["Doe", 555, 100];

// Array.prototype.push.apply(array1, array2)
// console.log(array1);

// var a = 10
// var obj = {
//     a: 20,
//     say: () => {
//         console.log(this.a)
//     }
// }

// obj.say()
// for (let i = 0; i < 5; i++) {
//     (function (j) {
//         setTimeout(() => {
//             console.log(j);
//         }, j * 1000)
//     })(i)
// }
// var a = 12
// var b = a
// b = 1

// function sum(x, y) {
//     var total = x + y
//     return total
// }
// sum(1, 2)

// console.log(a, b) // undefined, undeifned
// var a = 12,
//     b = '林一一'

// function foo() {
//     // 2
//     console.log(a, b) // 12 ''
//     // 3
//     var a = b = 13
//     console.log(a, b)
// }
// foo()
// console.log(a, b)

// 函数声明提升的优先级高于变量声明的提升
// var a = 1

// function a() {
//     console.log(a);
// }

// console.log(a);

// var a = {
//     name: 'xuxi'
// };

// function b(a) {
//     a.age = 12;
//     a = {
//         num: 1
//     };
//     return a
// }
// var a1 = b(a);
// console.log(a, a1)

var a = 1
const fn = () => {
    console.log(this.a)
}
fn()


var r = new Promise(function (resolve, reject) {
    console.log("a"); // 1
    resolve()
});
setTimeout(() => console.log("d"), 0) // 宏任务 4
r.then(() => console.log("c")); // 微任务 3
console.log("b") // 2


// Object.prototype.a = 'Object';
// Function.prototype.a = 'Function';

// function Person() {};
// var child = new Person();
// console.log(child.a);
// console.log(Person.a);

// Object.prototype.a = 'Object';
// Function.prototype.a = 'Function';
// function Person() {};
// var child = new Person();
// console.log(child.a); 
// console.log(Person.a);

// onsole.log(a, b)
// var a = 12,
//     b = '林一一'

// function foo() {
//     console.log(a, b) // 
//     //  var a =b =13
//     console.log(a, b)
// }
// foo()
// // 4
// console.log(a, b)

// a = 0

// function foo() {
//     var a = 12;
//     b = '林一一'
//     console.log('b' in window) // true
//     console.log(a, b) // 12 'linyiyi'
// }

// foo()
// console.log(b) // 'linyiyi'
// console.log(a) // 0

// function foo() {
//     console.log(a) // 报错 后续代码不在执行
//     a = 12;
//     b = '林一一'
//     console.log('b' in window)
//     console.log(a, b) 
// }
// foo()

// fn();
// console.log(v1); // u
// console.log(v2);
// console.log(v3);

// function fn() {
//     var v1 = v2 = v3 = 2019;
//     console.log(v1);
//     console.log(v2);
//     console.log(v3);
// }

// var a = 2;

// function a() {
//     console.log(3);
// }
// console.log(typeof a); // number
// var fn;
// function fn() {}
// console.log(fn);
// fn = 2019;
// console.log(fn);
// 2019
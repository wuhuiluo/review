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

// var a = 1
// const fn = () => {
//     console.log(this.a)
// }
// fn()


// var r = new Promise(function (resolve, reject) {
//     console.log("a"); // 1
//     resolve()
// });
// setTimeout(() => console.log("d"), 0) // 宏任务 4
// r.then(() => console.log("c")); // 微任务 3
// console.log("b") // 2


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
// var a = 10

// function foo() {
//     console.log(a)
// }

// function sum() {
//     var a = 20
//     foo()
// }

// sum()

// var n = 10

// function fn1() {
//     var n = 20

//     function f() {
//         n++;
//         console.log(n)
//     }
//     f()
//     return f
// }

// var x = fn1() 
// console.log(x);
// x()
// x() 
// console.log(n) // 10

// 闭包经典使用场景 
// 1.return回一个函数
// var n = 10

// function fn() {
//     var n = 20

//     function f() {
//         n++;
//         console.log(n)
//     }
//     return f
// }

// var x = fn()
// x() // 21
// 2.函数作为参数
// var a = 'linyiyi'

// function foo() {
//     var a = 'foo'

//     function fo() {
//         console.log(a);
//     }
//     return fo
// }

// function f(p) {
//     var a = 'f'
//     p()
// }
// f(foo())

// var n = 'whl';
// (function p() {
//     console.log(n);
// })()

// for (var i = 0; i < 10; i++) {
//     (function (j) {
//         setTimeout(() => {
//             console.log(j);
//         }, 1000)
//     })(i)
// }

// var data = [];

// for (var i = 0; i < 3; i++) {
//     data[i] = function () {
//         console.log(i);
//     };
// }

// data[0]();
// data[1]();
// data[2]()

// async function async1() {
//     console.log('async1 start');
//     await async2();
//     setTimeout(function () {
//         console.log('setTimeout1') 
//     }, 0)
// }
// async function async2() {
//     setTimeout(function () {
//         console.log('setTimeout2')
//     }, 0)
// }
// console.log('script start');
// setTimeout(function () {
//     console.log('setTimeout3');
// }, 0)
// async1();
// new Promise(function (resolve) {
//     console.log('promise1');
//     resolve();
// }).then(function () {
//     console.log('promise2');
// });
// console.log('script end');

// let name = 'hello world!'; // let语句不会挂载在window上
// let obj = {
//     name: '哈哈哈~',
//     name2: this.name,
//     // name2: ''
//     getName1: function () {
//         console.log('getName1 = ', this.name); // 哈哈哈~
//     },
//     getName2: function () {
//         console.log('getName2 = ', this.name2); // ""
//     },
//     getName3: () => {
//         console.log('getName3 = ', this.name2); // hello world!
//     },
//     getName4() {
//         setTimeout(function () {
//             console.log('getName4 = ', this.name); // hello world!
//         });
//     },
//     getName5() {
//         setTimeout(() => {
//             console.log('getName5 = ', this.name2);
//         });
//     },
// }

// console.log(obj.name); // 哈哈哈~
// console.log(obj.name2); // 哈哈哈~
// obj.getName1();
// obj.getName2();
// obj.getName3();
// obj.getName4();
// obj.getName5();


// var obj = {
//     user: "哈哈哈",
//     subObj: {
//         user: "啦啦啦",
//         fn: function () {
//             console.log(this.user);
//         }
//     }
// }
// var fn1 = obj.subObj.fn;
// fn1();

// var user = "11";
// const fn = () => {
//     let user = "22"
//     console.log(this.user); // 11
// }
// let obj = {
//     user: "33",
//     fn: () => {
//         console.log(this.user); // 11
//     }
// }
// let subObj = {
//     user: "44",
//     son: {
//         user: "55",
//         fn: () => {
//             console.log(this.user);
//         }
//     }
// }
// fn();
// obj.fn();
// subObj.son.fn();
// let fn1 = obj.fn;
// let fn2 = subObj.son.fn;
// fn1();
// fn2();
// 全部11

// function fn() {
//     this.name = 'name'
// }

// const a = new fn()
// a.__proto__ === fn.prototype // true
// console.log(a.__proto__.constructor === fn);

// CSS选择器

// 选择器优先级是: !important > 内联 > id选择器 > 类选择器 > 标签选择器 > 通用选择器

// !important > 内联 > id > 类 > 标签 > 通用选择器
// 伪类: 表示元素的一种特殊状态

// :active：被激活的元素添加样式
// :focus: 拥有键盘输入焦点的元素添加样式
// :hover: 当鼠标悬浮在元素上方时，向元素添加样式
// :link: 为访问的链接添加
// :vistied: 已被访问的链接添加
// :first-child: 向第一个元素的子元素添加
// :lang: 向指定lang属性的元素添加
// ::selection 匹配被用户选中或处于高亮状态的部分

// 伪元素: 表示元素中的一些特殊位置
// 如: first-letter :first-line :before :after

// 在最后一个子元素新添加最后一个冗余元素，然后将其设置clear:both

// 伪元素清楚
// // .clearfix:after {
//     content: '';
//     display: block;
//     clear: both;
// // }

// position 粘性定位
// sticky

// display: none与visibility: hidden的区别

// display: none 那么该元素以及它的所有后代元素都会隐藏，隐藏后的元素无法点击，占据的空间会消失

// async function async1() {
//     console.log('async1 start'); // 2
//     await async2();
//     console.log('async1 end'); //  7微任务2
// }
// async function async2() {
//     console.log('async2 start'); // 3
//     return new Promise((resolve, reject) => {
//         resolve();
//         console.log('async2 promise'); // 4
//     })
// }
// console.log('script start'); // 1
// setTimeout(function () { // 宏任务1
//     console.log('setTimeout'); //10
// }, 0);
// async1();
// new Promise(function (resolve) {
//     console.log('promise1'); // 5
//     resolve();
// }).then(function () { // 微任务
//     console.log('promise2'); // 8
// }).then(function () {
//     console.log('promise3'); //9
// });
// console.log('script end') // 6
// window.name = 'ByteDance';

// function A() {
//     this.name = 123;
// }
// A.prototype.getA = function () {
//     console.log(this);
//     return this.name + 1;
// }
// let a = new A();
// let funcA = a.getA;
// funcA();
// console.log(funcA());

// Object.defineProperty() // 劫持各个数据属性的setter / getter \
// Object.defineProperty() // 会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回这个对象
// 数据描述符，存取描述符
// configurable
// enumerable
// let val = 'tom'
// let person = {}
// Object.defineProperty(person, 'name', {
//     get() {
//         console.log('name属性被读取了');
//         return val
//     },
//     set(newVal) {
//         console.log('name属性被修改了。，。');
//         val = newVal
//     }
// })
// console.log(person.name);

// 遍历对象的每个属性
// let person = {
//     name: 'tom',
//     age: 15
// }

// function observable(obj) {
//     if (!obj || typeof obj !== 'object') {
//         return
//     }
//     let keys = Object.keys(obj)
//     console.log(keys);
// }

// observable(person)


// var bar = {
//     myName: "https://www.meituan.com/",
//     printName: function () {
//         console.log(myName)
//     }
// }

// function foo() {
//     let myName = "MEITUAN"
//     return bar.printName
// }
// let myName = "美团"

// let _printName = foo()
// console.log(_printName);
// _printName()
// bar.printName()

// function foo() {
//     setTimeout(function () {
//         console.log('id:', this.id);
//     });
// }
// var id = 21;
// foo.call({
//     id: 42
// })

// var a = {
//     a: 1
// }
// var b = (val) => {
//     console.log(val);
//     val['b'] = 2
// }
// b(a)
// console.log(a)

// var color = "green";
// var test = {
//     color: "blue",
//     getColor: function () {
//         var color = "red";
//         console.log(this.color);
//     },
// };
// var getColor = test.getColor;
// getColor(); 
// test.getColor(); 

// var a = 1
// const fn = () => {
//     console.log(this.a)
// }
// fn()

// var r = new Promise(function (resolve, reject) {
//     console.log("a"); // 1
//     resolve()
// });
// setTimeout(() => console.log("d"), 0) // 4
// r.then(() => console.log("c")); // 3 
// console.log("b") // 2

// Object.prototype.a = 'Object';
// Function.prototype.a = 'Function';

// function Person() {};
// var child = new Person();
// console.log(child.a);
// console.log(Person.a);

// Vue底层重写的数组方法

// push() pop() shift() unshift() splice() sort() reverse()

// 1  构造函数  内部变量指向匿名函数
// function Fun() {
//     getName = function () {
//         console.log(1);
//     };
//     // console.log(this);
//     return this;
// }
// // 2 定义全局变量 getName  
// var getName = 1;
// // 3 定义一个getName 函数 函数声明提升
// function getName() {
//     console.log(5);
// }
// // 4 给构造函数定义一个属性  getName 
// Fun.getName = function () {
//     console.log(2);
// };
// // 5 在构造函数的原型上定义 一个getName方法
// Fun.prototype.getName = function () {
//     console.log(3);
// };
// // 6  getName变量指向一个匿名函数 
// // getName = function () {
// //     console.log(4);
// // };
// getName(); // 4
// Fun.getName() // 2
// Fun().getName(); // 4
// getName(); // 4
// new Fun.getName(); // 
// new Fun().getName();
// new new Fun().getName();

// var getName = 'whl';
// var getName = function () {
//     console.log(5);
// }
// console.log(getName); // [Function: getName]
// getName() // 5
// var getName = 1

// function getName() {
//     console.log(2);
// }

// console.log(getName);
// getName()

// 如何创建BFC

// float的值不是none
// position的值不是static和relative
// display的值是inline-block、table-cell、flex
// overflow的值不是visible

// W3C标准盒模型和IE和模型的区别
// box-sizing: content-box W3C盒子模型
// box-sizing: border-box 是IE盒模型
// W3C width指的是content部分的宽度
// IE width指的是content+padding+

// console.log(1) // 1

// setTimeout(function() {
//   console.log(2) // 6
// })

// new Promise(function (resolve) {
//   console.log(3) // 2
//   resolve()
//  }).then(function () {
//   console.log(4) // 4
// }).then(function() {
//   console.log(5) //5
// })

// console.log(6) // 3


// async function async1() {
//   console.log('async1 start'); // 2
//   await async2(); // await后面的是微任务 6
//   console.log('async1 end');
// }
// async function async2() {
//   console.log('async2'); // 3
// }
// console.log('script start'); // 1
// setTimeout(function () { // 宏1 8
//   console.log('setTimeout');
// }, 0)
// async1();
// new Promise(function (resolve) {
//   console.log('promise1'); // 4
//   resolve();
// }).then(function () { // 微任务 7
//   console.log('promise2');
// });
// console.log('script end'); // 5

// console.log('start'); // 1
// setTimeout(() => { // 宏任务
//   console.log('children2'); // 3
//   Promise.resolve().then(() => {
//     console.log('children3'); // 4
//   })
// }, 0);

// new Promise(function (resolve, reject) {
//   console.log('children4'); // 2 
//   setTimeout(function () { // 宏2
//     console.log('children5'); // 5
//     resolve('children6')
//   }, 0)
// }).then((res) => { // 微任务
//   console.log('children7'); // 6
//   setTimeout(() => { // 宏3
//     console.log(res); // 
//   }, 0)
// })

// const p = function () {
//   return new Promise((resolve, reject) => {
//     const p1 = new Promise((resolve, reject) => {
//       setTimeout(() => { // 宏任务
//         resolve(1)
//       }, 0)
//       resolve(2)
//     })
//     p1.then((res) => {
//       console.log(res); // 3: 1
//     })
//     console.log(3); // 1
//     resolve(4);
//   })
// }


// p().then((res) => {
//   console.log(res); // 4: 4
// })
// console.log('end'); // 2

// 位置 1
// setTimeout(function () { // 宏任务1
//   console.log('timeout1');
// }, 1000);

// // 位置 2
// console.log('start'); // 1

// // 位置 3
// Promise.resolve().then(function () {
//   // 位置 5
//   console.log('promise1'); // 3
//   // 位置 6
//   Promise.resolve().then(function () { // 微任务
//     console.log('promise2'); // 
//   });
//   // 位置 7
//   setTimeout(function () { // 宏任务3
//     // 位置 8
//     Promise.resolve().then(function () {
//       console.log('promise3');
//     });
//     // 位置 9
//     console.log('timeout2')
//   }, 0);
// });

// // 位置 4
// console.log('done'); // 

// module.exports = {
//     // 默认false，也就是不开启
//     watch: true,
//     // 只有开启监听模式时， watchOptions才有意义
//     watchOptions: {
//         // 默认为空，不监听的文件或者文件夹，支持正则匹配
//         ignored: /node_modules/,
//         aggregateTimeout: 300,
//         // 判断文件是否发生变化是通过不停询问系统指定文件有没有变化实现的，默认每秒问1000次
//         poll: 1000
//     }
// }
// (function (window) {
//     var name = 'whl'
//     var sex = 'male'

//     function tell() { // 这样就不能修改其中的数据了
//         console.log('I m', this.name);
//     }
//     window.Module = {
//         tell
//     }
// })(window)

// window.Module.tell()
// define('mymodule', ["dep1", "dep2"], function (d1, d2) {

// })

// require(['module', '../file'], function (module, file) {

// })
// const math = require('./math')

// exports.getSum = function (a, b) {
//     return a + b
// }

// setTimeout(() => { // 宏任务
//     console.log(1); // 5: 1
// }, 0);
// async function main1() {
//     new Promise((resolve, reject) => {
//         console.log(2); // 1
//         resolve();
//     }).then(() => { // 微1
//         console.log(3); // 3: 3
//     })
//     await main2(); // 微2
//     console.log(7); // 4: 7
// }
// async function main2() {
//     console.log(8); // 2
// }
// requestAnimationFrame(() => {
//     console.log(9); // 宏任务2 6: 9
// });
// main1();
// setTimeout(() => { // 宏3任务
//     console.log(10); 7: 10
// }, 0);

// function Person(name) {
//     this.name = name
// }

// Person.prototype.getName = function () {}

// var p = new Person('whl')

// console.log(p.__proto__ === Person.prototype);
// console.log(p.__proto__ === p.constructor.prototype);
// p.__proto__.constructor.prototype.__proto__
// Person.prototype.constructor.prototype.__proto__

// 如何获取对象的原型 Object.getPrototypeOf()
// 获取非原型链上的属性hasOwnProperty()

// 原型链

// console.log(Function.prototype.__proto__ === Object.prototype);
// console.log(Function.__proto__.__proto__ === Object.prototype);
// console.log(Object.prototype.__proto__ === null);

// blur 失去焦点 focus 获取焦点
// mousedown mouseup click 
// function MyInstanceof(L, R) {
//     if (typeof L !== 'object' || L === null) return false
//     let proto = Object.getPrototypeOf(L)
//     while (true) {
//         if (proto === null) return false
//         if (proto === R.prototype) return true
//         proto = Object.getPrototypeOf(proto)
//     }
// }
// console.log(MyInstanceof("111", String)); //false
// console.log(MyInstanceof(new String("111"), String)); //true

// F.prototype === f.__proto__ === 原型对象(原型)
// f.constructor === F.prototype.constructor === F === f.__proto__.constructor

// 在调用new的过程中会发生四件事

// 1.新生成一个对象
// 2.链接到原型
// 3.绑定this
// 4.返回新对象

// 自己实现一个new
// 1.创建要给空对象
// 2.获取构造函数
// 3.设置空对象的原型
// 4.绑定this并执行构造函数
// 5.确保返回值为对象

// function newLast() {
//     let obj = {}
//     let Con = [].shift.call(arguments)
//     obj.__proto__ = Con.prototype
//     let result = Con.apply(obj, arguments)
//     return result instanceof Object ? result : obj
// }

// function instanceofLast(left,right) {
//     let prototype = right.prototype
//     let left = left.__proto__
//     while(true) {
//         if(left === null || left === undefined) return false
//         if(prototype === left) return true
//         left = left.__proto__
//     }
// }

// IE盒模型border-box，W3C盒模型content-box
// content padding border margin

// function foo() {
//     console.log(this.a);
// }
// var a = 1
// foo()

// const obj = {
//     a: 2,
//     foo: foo
// }
// obj.foo()
// const c = new foo()

// let a = {}
// let fn = function() {
//     console.log(this);
// }

// fn.bind().bind(a)()
// function func() {
//     console.log(this);
//     console.log(this.__proto__ === func.prototype);
// }

// Func = func.bind(1)
// console.log(Func);

// function func() {
//     console.log(this)
// }

// boundFunc = func.bind(1)
// boundFunc.apply(2) // 1，口诀 3 优先

// function func(num) {
//     this.count++
// }

// func.count = 0

// func(1)

// Function.prototype.myCall = function (context) {
//     console.log(this);
//     // 1: 把函数挂到目标对象上（这里的 this 就是我们要改造的的那个函数）
//     context.func = this
//     // 2: 执行函数
//     context.func()
//     // 3: 删除 1 中挂到目标对象上的函数，把目标对象”完璧归赵”
//     delete context.func
// }

// var me = {
//     name: 'icon'
// }

// function showName() {
//     console.log(this.name)
// }

// showName.myCall(me) // icon
// function readArr(...args) {
//     console.log(args);
// }

// readArr(1, 2, 4, 5)

// Function.prototype.myApply = function (context, args) {
//     // 1: 判断当前传参是否是数组
//     if (args && !(args instanceof Array)) {
//         throw new TypeError('呀呀呀，参数必须是数组哦')
//     }
//     // 2: 上面说的 如果是null默认指向window
//     context = context || window
//     // 3: 把函数挂到目标对象上（这里的 this 就是我们要改造的的那个函数）
//     context.func = this
//     // 4: 执行函数并且存储上面说的 返回值
//     console.log([...args]);
//     const result = context.func(args ? [...args] : '')
//     // 5: 删除 1 中挂到目标对象上的函数，把目标对象”完璧归赵”
//     delete context.func;
//     // 6: 返回结果值
//     return result;
// }
// var me = {
//     name: 'icon'
// }

// Function.prototype.myCall = function (context) {
//     if (context === null || context === undefined) {
//         // 指定为 null 和 undefined 的 this 值会自动指向全局对象(浏览器中为window)
//         context = window
//     } else {
//         context = Object(context) // 值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的实例对象
//     }
//     const args = [...arguments].slice(1) // 将类数组转换为数组ES6
//     const key = Symbol('特殊属性Symbol') // 用于临时储存函数
//     context[key] = this; // 函数的this指向隐式绑定到context上
//     let result = context[key](...args); // 通过隐式绑定执行函数并传递参数
//     delete context[key]; // 删除上下文对象的属性
//     return result; // 返回函数执行结果
// };

// function showName() {
//     console.log(this.name)
// }

// var me = {
//     name: 'icon'
// }

// showName.myApply(me, [1, 2, 3, 4, 5]) // icon


// Function.prototype.myBind = function (context, ...args) {
//     // 1: 保存下当前 this（这里的 this 就是我们要改造的的那个函数）
//     const _this = this;
//     // 2: 返回一个函数
//     return function F() {
//         // 3: 因为返回了一个函数，除了直接调用还可以 new F()，所以需要判断分开走
//         // 4: new 的方式
//         if (_this instanceof F) {
//             return new _this(...args, ...arguments);
//         }
//         // 5: 直接调用，这里选择了 apply 的方式实现但是对于参数需要注意以下情况：因为 bind 可以实现类似这样的代码 f.bind(obj, 1)(2)，所以我们需要将两边的参数拼接起来，于是就有了这样的实现 args.concat(…arguments)；
//         return _this.apply(context, args.concat(...arguments));
//     }
// }

// function shallowClone(source) {
//     let target = {}
//     for (let i in source) {
//         if (source.hasOwnProperty(i)) {
//             target[i] = source[i]
//         }
//     }
//     return target
// }

// let demo = {
//     b: {
//         c: {}
//     }
// }
// let demo2 = shallowClone(demo)
// let demo3 = demo;
// console.log(demo3 === demo) // true
// console.log(demo2.b.c === demo.b.c) // true
// console.log(demo2.b === demo.b) // true
// console.log(demo2 === demo) // false


// let obj = {
//     name: 'wuhuiluo',
//     age: 18
// }
// localStorage.setItem('name', 'sanyuan')
// localStorage.setImte('info', JSON.stringify(obj))


// ## 谈谈你对XSS攻击的理解

// 什么是XSS攻击

// XSS全称是`Cross Site Scripting`,为了与`CSS`区分开来，故简称`XSS`，翻译过来就是跨站脚本

// XSS是指黑客往HTML文件或者DOM中注入恶意脚本,从而在用户浏览页面时利用注入的恶意脚本对用户实施攻击的一种手段

// 最开始的时候，这种攻击是通过跨域来实现的，所以叫跨域脚本，现在插入恶意代码的方式越来越多，所以是否跨域注入脚本已经不是唯一的注入手段了，但是这个XSS名字却一直保留至今

// 注入恶意脚本可以完成这些事情

// - 1. 窃取cookie
// - 2. 监听用户行为，比如账号密码输入后发给黑客服务器
// - 3. 在网页中生成浮窗广告
// - 4. 修改DOM伪造登陆表单


// 一般的情况下,XSS攻击有三种实现方式

// - 存储型XSS攻击
// - 反射型XSS攻击
// - 基于DOM的XSS攻击


// **存储型XSS攻击**

// 从图上看，存储型XSS攻击大致步骤如下：

// 1. 首先黑客利用站点漏洞将一段恶意的Javascriptdiamagnetic提交到网站的数据库
// 2. 然后用户向网站请求包含了恶意Javascript脚本的页面
// 3. 当用户浏览该页面的时候，恶意脚本就会将用户的Cookie信息等数据上传到服务器

// 比较常见的场景：

// 在评论区提交一份脚本代码，假设前后端没有做好转义工作，那内容上传到服务器，在页面渲染的时候就会执行，相当于执行一段未知的JS代码，这就是存储型XSS攻击


// **反射型XSS攻击**

// 反射型XSS攻击指的就是恶意脚本作为网络请求的一部分，随后网站又把恶意的javascript脚本返回给用户，当恶意Javascript脚本在用户页面中被执行时，黑客就可以利用该脚本做一些恶意操作


// 举个例子:

// ```
// http://wuhuiluo.com?query=<script>alert("你受到了XSS攻击")</script>

// ```

// 如上，服务器拿到后解析参数query，最后将内容返回给了浏览器，浏览器将这些内容作为HTML的一部分解析，发现是Javascript脚本，直接执行，这样子被XSS攻击了。


// 这也就是反射型名字的由来，将恶意脚本作为参数，通过网络请求，最后经过服务器，在反射到HTML文档中，执行解析。


// 主要注意的就是，「服务器不会存储这些恶意的脚本，这也算是和存储型XSS攻击的区别吧」。

// 基于DOM的XSS攻击


// 基于 DOM 的 XSS 攻击是不牵涉到页面 Web 服务器的。具体来讲，黑客通过各种手段将恶意脚本注入用户的页面中，，在页面传输的时候劫持输网络包

// 常见的劫持手段有:

// - WIFI路由劫持
// - 本地恶意软件

// **阻止XSS攻击的策略**

// 以上讲述的XSS攻击原理，都有一个共同点：让恶意脚本直接在浏览器执行

// 针对XSS攻击，有以下三种解决办法

// **对输入脚本进行过滤或转码**

// 对用户输入的信息过滤或者是转码

// 举个例子

// 转码后
// ```
// &lt;script&gt;alert(&#39;你受到XSS攻击了&#39;)&lt;/script&gt;
// ```

// 这样的代码在html解析过程中是无法执行的

// 当然了对`<script>`、`<img>`、`<a>`等关键字标签也是可以过来的，效果如下
// ```
// ```
// 最后什么都没有剩下

// **利用CSP**

// 该安全策略的实现基于一个叫做`Content-Security-Policy`的HTTP首部

// CSP，浏览器中的内容安全策略，核心思想大概就是服务器决定浏览器加载哪些资源，具体来说有几个功能

// - 限制加载其他域下的资源文件，这样即使黑客插入了一个 JavaScript 文件，这个 JavaScript 文件也是无法被加载的；
// - 禁止向第三方域提交数据，这样用户数据也不会外泄；
// - 提供上报机制，能帮助我们及时发现 XSS 攻击。
// - 禁止执行内联脚本和未授权的脚本；

// **利用HttpOnly**

// 由于很多XSS攻击都是用来盗用Cookie的，因此还可以通过使用HttpOnly属性来保护我们Cookie的安全，这样子的话，Javascript便无法读取Cookie的值，这样也能很好的防范XSS攻击

// 通常服务器可以将某些Cookie设置为HttpOnly标志，HttpOnly是服务器通过HTTP响应头设置的，下面是打开Google时，HTTP响应头的一段

// ```
// set-cookie: NID=189=M8l6-z41asXtm2uEwcOC5oh9djkffOMhWqQrlnCtOI; expires=Sat, 18-Apr-2020 06:52:22 GMT; path=/; domain=.google.com; HttpOnly
// ```

// **总结**

// `XSS`攻击是指浏览器中执行恶意脚本，然后拿到用户的信息进行操作，主要分为存储型，反射型，文档型，防范的措施包括

// - 对输入内容过滤或者转码，尤其是类似与`<script>`、`<img>`、`<a>`标签
// - 利用CSP
// - 利用Cookie的HttpOnly属性

// 除了以上策略之外，我们还可以通过添加验证码防止脚本冒充用户提交危险操作，对于一些不受信任的输入，还可以限制其输入长度，这样可以增大XSS攻击的难度


// ## 能不能说一说CSRF攻击

// 什么是CSRF攻击

// CSRF 英文全称是 `Cross-site request forgery`，所以又称为“跨站请求伪造”,是指黑客引诱用户打开黑客的网站，在黑客的网站中，利用用户的登陆状态发起的跨站请求，简单来讲，CSRF攻击就是黑客利用了用户的登陆状态，并通过第三方站点来做一些坏事

// 一般的情况下，点开一个诱导你的链接，黑客会在你不知情的时候做哪些事情呢

// 1. 自动发起Get请求

// 黑客网页里面可能有这样一段代码

// ```
// <img src="http://bank.example/withdraw?amount=10000&for=hacker" > 

// ```

// 在受害者访问含有这个img的页面后，浏览器会自动向`http://bank.example/withdraw?account=xiaoming&amount=10000&for=hacker`发出一次HTTP请求。

// `bank.example`就会受到包含受害者登陆信息的一次跨域请求

// 2. 自动发起Post请求

// 黑客网页中有一个表单，自动提交的表单

// ```
// <form action="http://bank.example/withdraw" method=POST>
// <input type="hidden" name="account" value="xiaoming" />
// <input type="hidden" name="amount" value="10000" />
// <input type="hidden" name="for" value="hacker" />
// </form>
// <script> document.forms[0].submit(); </script> 
// ```

// 访问该页面后，表单会自动提交，相当于模拟用户完成了一次POST操作。

// 同样也会携带相应的用户 cookie 信息，让服务器误以为是一个正常的用户在操作，让各种恶意的操作变为可能。

// 3. 引诱用户点击链接

// 这种需要诱导用户去点击链接才会触发，这类的情况比如在论坛中发布照片，照片中嵌入了恶意链接，或者是以广告的形式去诱导，比如：

// ```
// <a href="http://test.com/csrf/withdraw.php?amount=1000&for=hacker" taget="_blank">
// 重磅消息！！！
// <a/>
// ```

// 点击后，自动发送 get 请求，接下来和自动发 GET 请求部分同理。

// 以上三种情况就是CSRF攻击原理，跟XSS对比的话，CSRF攻击并不需要将恶意代码注入HTML中，而是跳转新的页面利用服务器的验证漏洞和用户之前的登陆状态来模拟用户进行操作

// **防护策略**

// 其实我们可以想到，黑客只能借助受害者的`cookie`骗取服务器的信任，但是黑客并不能凭借拿到cookie，也看不到cookie的内容，另外，对于服务器返回的结果，由于同源策略的限制，黑客也无法解析

// > 这就告诉我们，我们需要保护的对象是那些可以直接产生数据改变的服务，而对于读取数据的服务，则不需要`CSRF`的保护，而保护的关键，是在请求中放入黑客不能伪造的信息

// 用户操作限制--验证码机制

// 方法：添加验证码来识别是不是用户主要去发起这个请求，由于一定强度的验证码机器无法识别，因此危险网站不能伪造一个完整的请求

// 1. 验证来源站点

// 在服务器验证请求来源的站点，由于大量的CSRF攻击来自第三方站站点，因此服务器可以禁止来自第三方站点的请求，主要通过HTTP请求头中的两个Header

// - Origin Header
// - Referer Header

// 这两个Header在浏览器发起请求时，大多数情况会带上，并且不能由前端自己定义内容

// 服务器可以通过接下这两个Header中的域名，确定请求的来源域

// 其中，Origin只包含域名信息，而Referer包含了具体的URL路径

// 在某些情况下，这两者都是可以伪造的，通过Ajax中定义请求头即可，安全性略差

// 2. 利用Cookie的SameSite属性

// `SameSite`可以设置为三个值,`Strict`、`Lax`、`None`

// 1. 在`Strict`模式下，浏览器完全禁止第三方请求携带Cookie。比如请求`sanyuan.com`网站只能在sanyuan.com域名当中请求才能携带 Cookie，在其他网站请求都不能。
// 2. 在`Lax`模式，就宽松一点了，但是只能在 get 方法提交表单况或者 `a` 标签发送 `get` 请求的情况下可以携带 Cookie，其他情况均不能。
// 3. 在None模式下，Cookie将在所有上下文中发送，即允许跨域发送。


// 3. CSRF Token

// 前面讲到的是CSRF的另一个特征是，攻击者无法直接窃取到用户信息(Cookie,Header,网站内容等)，仅仅是冒用Cookie中的信息

// 那么我们可以使用Token，在不涉及XSS的前提下，一般黑客很难拿到Token

// Token(令牌)做为Web领域验证身份是一个不错的选择

// Token的步骤如下

// 「第一步:将CSRF Token输出到页面中」

// > 首先，用户打开页面的时候，服务器需要给这个用户生成一个Token，该Token通过加密算法对数据进行加密，一般Token都包括随机字符串和时间戳的组合，显然在提交时Token不能再放在Cookie中了（XSS可能会获取Cookie），否则又会被攻击者冒用。因此，为了安全起见Token最好还是存在服务器的Session中，之后在每次页面加载时，使用JS遍历整个DOM树，对于DOM中所有的a和form标签后加入Token。这样可以解决大部分的请求，但是对于在页面加载之后动态生成的HTML代码，这种方法就没有作用，还需要程序员在编码时手动添加Token。


// 「第二步:页面提交的请求携带这个Token」

// > 对于GET请求，Token将附在请求地址之后，这样URL 就变成 http://url?csrftoken=tokenvalue。 而对于 POST 请求来说，要在 form 的最后加上：
// <input type=”hidden” name=”csrftoken” value=”tokenvalue”/>
// 这样，就把Token以参数的形式加入请求了。


// 「第三步：服务器验证Token是否正确」

// > 当用户从客户端得到了Token，再次提交给服务器的时候，服务器需要判断Token的有效性，验证过程是先解密Token，对比加密字符串以及时间戳，如果加密字符串一致且时间未过期，那么这个Token就是有效的。


// **总结**

// CSRF即跨站请求伪造，本质是冲着浏览器分不清发起请求的是不是真正的用户本人，所以防范的关键在于请求中放入黑客不能伪造的信息，从而防止黑客伪造一个完整的请求欺骗服务器

// 防范错失：验证码机制，验证来源站点，利用Cookie的SameSite属性，CSRF Token

// var name = 'whl'

// {
//     name = 'qwe'
//     console.log(name);
// }

// {
//     let name = 'jack'
// }
// console.log(name);

// function showName() {
//     console.log(name);
// }

// showName()

// {
//     let name1 = 'jack';
// }

// // console.log(name1); //Uncaught ReferenceError: name is not defined

// function showName() {
//     console.log(name1);
// }

// showName(); //Uncaught ReferenceError: name is not defined

// function myInstanceof(L,R) {
//     let proto = Object.getPrototypeOf(L)
//     while(true) {
//         if(proto === null) return false
//         if(proto === RTCIceGatherer.p)
//     }
// }

// function Person(name, age) {
//     this.name = name
//     this.age = age
// }

// var person = new Person('whl', 10)

// console.log(Object.prototype.toString.call(person) === '[object Object]');

// hasOwnProperty()

// function new1() {
//     let obj = {}
//     let Con = [].shift.call(arguments)
//     let args = Array.prototype.slice.call(arguments, 0)
//     console.log(args);
//     obj.__proto__ = Con.prototype
//     let result = Con.apply(obj, args)
//     return result instanceof Object ? result : obj
// }

// function Person(name, age) {
//     this.name = name
//     this.age = age
// }

// var person = new1(Person, "whl", 18)

// console.log(person.name);
// console.log(person.age);


// 如何判断数组

// 1. 使用instanceof

// let arr = []
// arr instanceof Array

// Array.isArray([])
// Array.isArray(true)

// var arr = []
// arr.constructor === Array

// Object.prototype.toString.call([]) === '[object Array]'

// function isArray(obj) {
//     return Object.prototype.toString.call(obj) === '[object Array]'
// }

// var arr = [1, 2, 3]

// console.log(isArray(arr));

// // 1.原型链式继承

// function Father() {
//     this.qwe = 'abc'
//     this.info = {
//         name: 'whl',
//         age: 19
//     }
// }

// Father.prototype.getInfo = function () {
//     console.log(this.info)
// }

// function Son(a, b) {
//     this.a = a
//     this.b = b
// }

// // 让父类的实例作为子类的圆型对象
// Son.prototype = new Father()
// Son.prototype.constructor = Son
// Son.prototype.showInfo = function () {
//     return this.a + this.b
// }

// let Son1 = new Son(2, 4)
// Son1.getInfo()
// console.log(Son1.showInfo());
// // hasOwnProperty 确定是否是自身的属性
// console.log(Son1.hasOwnProperty('qwe'));
// console.log(Son1.hasOwnProperty('a'));
// console.log(Son1.hasOwnProperty('b'));

// console.log(Father.prototype.isPrototypeOf(Son1));
// console.log(Son.prototype.isPrototypeOf(Son1)); // true
// console.log(Object.prototype.isPrototypeOf(Son1));

// 2.构造函数法

// function Father() {
//     this.test = [1, 2, 3]
// }

// Father.prototype.getTest = function () {
//     console.log(this.test);
// }

// function Son(a, b) {
//     console.log(this);
//     Father.call(this)
//     this.a = a
//     this.b = b
// }

// Son.prototype.showTest = function () {
//     console.log(this.a + this.b);
// }


// let Son1 = new Son(1, 2)
// let Son2 = new Son(2, 3)
// Son1.test.push(4)
// console.log(Son1.test);
// console.log(Son2.test);
// // console.log(Son1.getTest());
// console.log(Son1.hasOwnProperty('test'))
// console.log(Father.prototype.isPrototypeOf(Son1));


// function Father(num) {
//     this.numOne = num
//     this.numList = [1, 2]
// }

// Father.prototype.getNumOne = function () {
//     return this.numOne
// }

// function Son(num1, num2) {
//     Father.call(this, num1)
//     this.num2 = num2
// }

// Son.prototype = new Father()
// Son.prototype.constructor = Son
// Son.prototype.getNumTwo = function () {
//     return this.num2
// }
// var Son1 = new Son(4, 9)
// Son1.numList.push(6)
// console.log(Son1.numList); // [1, 2, 6]
// console.log(Son1.getNumOne()); // 3
// console.log(Son1.getNumTwo());; // 5



// var Son2 = new Son(3, 5)
// Son2.numList.push(7)

// console.log(Son2.numList); // [1, 2, 7]
// console.log(Son2.getNumOne()); // 4
// console.log(Son2.getNumTwo()); // 6

// 原型式继承
// function object(obj) {
//     function F() {}
//     F.prototype = obj
//     return new F()
// }


// Object.create() 

// 寄生式继承
// var person = {
//     name: 'whl',
//     array: [1, 2, 3]
// }

// function createObj(origin) {
//     const clone = Object.create(origin)
//     clone.sayName = function () {
//         console.log(this.name);
//     }
//     return clone
// }

// const person1 = createObj(person)
// person1.sayName()

// 寄生式组合继承

// function Father(name) {
//     this.name = name
//     this.test = [1, 2, 3]
// }

// Father.prototype.getName = function () {
//     console.log(this.name);
// }

// function Son(name, age) {
//     Father.call(this, name)
//     this.age = age
// }

// function inheritPrototype(Son, Father) {
//     let prototype = Object.create(Father.prototype)
//     prototype.constructor = Son
//     Son.prototype = prototype
// }
// inheritPrototype(Son, Father)
// const Son1 = new Son('qwe', 22)
// const Son2 = new Son('aaa', 23)
// Son1.test.push(4)
// console.log(Son1.test); // [1,2,3,4]
// console.log(Son2.test); // [1,2,3]
// Son1.getName() // qwe
// Son2.getName() // aaa
// console.log(Son1.hasOwnProperty('test')); // true
// console.log(Father.prototype.isPrototypeOf(Son1)); // true


// class One {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//         this.jn = 'shuijiao'
//     }
//     getInfo() {
//         return `我叫:${this.name},今年${this.age}岁了,我喜欢${this.jn}`
//     }
// }

// class Two extends One {
//     constructor(x, y, gender) {
//         super(x, y)
//         this.gender = gender
//     }
//     getTwoInfo() {
//         return `${super.getInfo()},喜欢${this.jn},我是${this.gender}`
//     }
// }

// const two = new Two('whl', 22, 'boy')

// console.log(two.getTwoInfo());

// 101： 在HTTP升级为websocket的时候，如果服务器同意变更，就会发送101

// 200： 表示从客户端发来的请求在服务器被正确处理
// 204： 表示请求成功，但没有资源返回
// 206:  表示客户端进行了范围请求，服务器成功执行了这部分的GET请求

// 301 永久重定向，表示资源已经被分配给了新的URL
// 302 临时重定向，表示资源临时被分配给了新的URL
// 303 表示资源存在着另一个URL，应使用GET方法来获取资源
// 304 服务器告诉客户端我的缓存没有改变你不需要来取，就用你自己本地的把
// 307 与临时重定向302含义一样


// 400 请求报文存在语法错误 
// 401 发送的请求需要有通过HTTP认证的认证信息
// 403 请求资源的访问被服务器拒绝
// 404 在服务器上没有找到请求的资源
// 405 服务器禁止使用该方法

// 500  表示服务器在执行请求的时候发生了错误
// 502 服务器本身是正常的，访问的时候除了错误
// 503 表示服务器处于超负载或者正在停机维护，无法处理请求

// GET 通常用来获取资源
// HEAD 获取资源的元信息
// POST 提交数据
// PUT  修改数据
// DELETE 删除资源
// CONNECT 建立资源隧道，用于代理服务器
// OPTIONS 列出可对资源实行的请求方法
// TRACE 追踪请求相应的传输路径

// GET 获取资源
// HEAD 获取资源的源信息
// POST 提交数据
// PUT 修改数据
// DELETE 删除资源
// CONNECT 建立资源链接隧道
// OPTIONS 获取服务器支持访问资源的方法
// TRACE 追踪请求相应的传输路径

// 追踪请求相应的传输路径
// HTTP请求方法
// GET 获取资源
// HEAD 获取资源源信息
// POST 提交数据
// PUT 修改数据
// DELETE 删除资源
// CONNECT 建立资源隧道
// OPTIONS 获取服务器访问资源的方法
// TRACE 追踪请求相应的传输路径

// 101 当http

// 状态码

// 400 请求报文存在语法错误
// 401 发送的请求需要有通过HTTP认证的认证i洗脑洗
// 403 请求资源的访问被服务器拒绝
// 404 服务器没有找到该请求的资源
// 405 服务器禁止使用该方法

// 500 服务器执行请求的时候发生了错误
// 502 服务器本身是正常的，访问的时候除了错误
// 503 服务器本身处于负载胡哦这停机维护，无法处理请求


// 502 服务器本身是正常的，访问的时候除了错误
// 503 表示服务器处于超负载或者正在停机维护，无法处理请求

// 缓存相关header

// 请求相应头

// expires 资源过期的时间
// cache-control  控制缓存策略 优先使用这个
// if-modified-since
// last-modifyed
// ETag
// if none-match
// 浏览器缓存机制：约定资源过期时间

// from memory cache
// from disk cache

// HTTP请求方法

// GET 获取资源
// HEAD  获取资源的元信息
// POST 提交数据
// PUT 修改数据
// DELETE 删除资源
// CONNECT 建立资源链接隧道
// OPTIONS 列出可对资源实行的请求方法
// TRACE 追踪请求和对应的传输路径

// HTTP状态吗

// 101 在HTTP升级为WebSokcet的时候，如果服务器同意变更，就会发送1010

// 200 表示从客户端发来的请求在在服务器被正确处理
// 204 请求成功，蛋没有资源返回
// 206 表示客户端进行了范围请求，服务器成功执行了这部分的GET强求


// 301 永久重定向，表示资源已经被分配给了新的URL
// 302 临时重定向，表示资源已经临时被分配给了新的URL
// 303 表示资源存在着另一URL，应使用GET方法获取资源
// 304 服务器告诉客户端我的缓存没有改变，你用你自己本地的就跨域
// 307 临时重定向，表示资源已经临时被分配给了新的URL

// 400 请求报文存在语法错误
// 401 发送的请求需要有通过HTTP认证的认证信息
// 403 请求资源的访问被服务器拒绝
// 404 在服务器上没有找到请求的资源
// 405 服务器禁止使用该方法

// 500 服务器在执行请求时候发生了错误
// 502 服务器本身是正常的，访问的时候发生了错误
// 503 表示服务器处于负载或者停机维护，无法处理请求

// JS数组方法总览

// push(value)将value添加到数组最后，最后返回数组长度（改变原数组）

// More

// let a = [1, 2, 3, 4, 5]
// let result = a.push(1)
// console.log(result);
// console.log(a); // 原数组被改变

// a = [1, 2, 3, 4, 5]
// result = a.push('a', 'b') // 可以一次添加多个值
// console.log(result);
// console.log(a);

// unshift添加元素到数组的开头，返回数组的长度
// let a = [1, 2, 3, 4, 5]
// let result = a.unshift(1)

// result = a.unshift('a', 'b')
// console.log(result);
// console.log(a);


// pop()删除数组中的最后一个元素，返回被删除的元素(改变数组)

// let a = [5]
// let result = a.pop()
// console.log(result);
// console.log(a);

// result = a.pop() // 数组元素为空后会返回undefined
// console.log(result);
// console.log(a);

// shift()删除数组中第一个元素，返回被删除的元素(改变数组)

// let a = [5]
// let result = a.shift()
// console.log(a);
// console.log(result);

// result = a.shift() // 数组元素为空时为会返回undefined
// console.log(result);
// console.log(a);

// join(value) 将数组用value连接成字符串(不改变原数组)
// join(value) 将数组用value链接成字符串(不改变原数组)
// let a = [1, 2, 3, 4, 5]
// let result = a.join(',')
// console.log(result === '1,2,3,4,5');
// console.log(a);

// let obj = {
//     toString() {
//         console.log('调用了toString方法');
//         return 'a'
//     },
//     toValue() {
//         console.log('toValue方法');
//         return 'b'
//     }
// }
// result = a.join(obj)
// console.log(result === '1a2a3a4a5');
// console.log(a);
// // join的一个相对的方法是字符串的split方法
// console.log('1a2a3a4a5'.split('a'));

// reverse()反转数组(改变原数组)
// let a = [1, 2, 3, 4, 5]
// let result = a.reverse()
// console.log(result);
// console.log(a);

// let a = [1, [2, 3],
//     [4, 5]
// ]
// result = a.reverse()
// console.log(result);
// console.log(a);
// 这里可以看到这里的反转只是数组的第一层，属于浅反转]

// 一个简单的深反转，使用递归实现

// function DeepReverse(arr) {
//     let temp = arr.reverse()
//     temp.forEach(item => {
//         if (Object.prototype.toString.call(item) === '[object Array]') {
//             DeepReverse(item)
//         }
//     })
//     return temp
// }

// let a = [1, [2, 3],
//     [4, 5]
// ]

// result = DeepReverse(a)
// console.log(result);

// slice(start,end) 返回新数组，包含原数组索引start值到end的值，不包含end（不改变原数组）

// let a = [1, 2, 3, 4, 5]
// // let result = a.slice(2, 4)
// // console.log(result);
// // console.log(a);
// console.log(a.slice(1));
// // console.log(a.slice(-2));
// console.log(a.slice(-1));
// console.log(a.slice(-1, 1)); // 反向截取不合法返回空数组
// console.log(a.slice(1, -1));
// console.log(a.slice(-1, -2)); // 反向截取不合法返回空数组
// console.log(a.slice(-2, -1));

// splice(index,count,value) 从索引为index处删除count个元素，然后插入value(改变原数组)

// let a = [1, 2, 3, 4, 5]
// // let result = a.splice(1, 2, 0)
// // console.log(result);
// // console.log(a);
// // console.log(a.splice(-1));
// // console.log(a);
// // console.log(a.splice(0));
// // console.log(a);
// // console.log(a.splice(-1, 2));
// // console.log(a);
// console.log(a.splice(0, 2, 'a', 'b', 'c')); // [1,2]
// console.log(a);

// sort()对数组元素进行排序(改变原数组)
// let a = [11, 22, 321, 4, 5]
// let result = a.sort()
// console.log(result);
// console.log(a);

// let a = [31, 22, 27, 1, 9]
// // a.sort((a, b) => {
// //     return a - b
// // })
// // console.log(a);
// a.sort((a, b) => {
//     return b - a
// })

// console.log(a);

// toString()将数组中的元素用逗号拼接成字符串(不改变原数组)
// let a = [1, 2, 3, 4, 5]
// let result = a.toString()
// console.log(result === '1,2,3,4,5');
// console.log(a);

// indexOf从索引为0开始，检查数组中是否包含value，有则返回匹配到的第一个索引，没有返回-1(不改变原数组)

// let a = [1, 2, 3, 4, 5]
// let result = a.indexOf(2)
// console.log(result);
// console.log(a);

// let a = [1, 2, 3, 4, 5]
// let result = a.indexOf(6)
// console.log(result);
// console.log(a);

// lastIndexOf(value)从最后的索引开始，检查数组是否包含value，有则返回匹配到的第一个索引,否则返回-1

// let a = [1, 2, 3, 4, 5]
// let result = a.lastIndexOf(1)
// console.log(result);
// console.log(a);

// concat(value)将数组和/或值连接成新数组(不改变原数组)

// let a = [1, 2],
//     b = [3, 4],
//     c = 5
// let result = a.concat(b, c)
// console.log(result);
// console.log(a);

// fill(value,start,end)使用给定的value填充数组，从索引start开始end结束，不包含end(不改变数组)

// flat()将二维数组变成一维数组(不改变数组元素)
// let a = [1, 2, 3, [4, 5]]
// let result = a.flat()
// console.log(result);
// console.log(a);

// forEach 遍历数组(不改变原数组)

// let a = [1, 2, 3, 4, 5]
// let result = a.forEach((item, i) => {
//     console.log(item, i);
// })
// console.log(result);
// console.log(a);

// every(fn) 判断数组中是否所有元素满足fn函数中的条件（不改变原数组）

// let a = [1, 2, 3, 4, 5]
// let result = a.every(currentIndex => {
//     return currentIndex > 0
// })
// console.log(result);
// console.log(a);

// filter(fn)返回数组中满足fn函数中条件的集合（不改变原数组）
// let a = [1, 2, 3, 4, 5]
// let result = a.filter(currentIndex => {
//     return currentIndex > 4
// })
// console.log(result);
// console.log(a);

// find(fn)返回数组中第一个匹配fn函数中条件的值没有则返回undefined（不改变原数组）

// let a = [1, 2, 3, 4, 5]
// let result = a.find(currentIndex => {
//     return currentIndex > 6
// })
// console.log(result)
// console.log(a);

// findIndex(fn)返回数组中第一个匹配fn函数中条件的索引没有则返回undefined(不改变原数组)

// let a = [1, 2, 3, 4, 5]
// let result = a.findIndex(currentIndex => {
//     return currentIndex > 3
// })
// console.log(result);
// console.log(a);

// includes()返回一个布尔值，表示数组是否包含给定的值(不改变原数组)
// let a = [1, 2, 3, 4, 5]
// let result = a.includes(2)
// console.log(result);
// console.log(a);

// map(fn)以fn函数中返回值组成新的数组返回(不改变原数组)

// let a = [1, 2, 3, 4, 5]
// let result = a.map((v, i) => {
//     return 9
// })

// console.log(result);
// console.log(a);


// reduce()计数器(不改变原数组)

// let a = [1, 2, 3, 4, 5]
// // let result = a.reduce((prev, cur) => {
// //     return prev + cur
// // }, 5)

// // console.log(result);
// // console.log(a);

// let result = a.reduce((prev, cur) => {
//     return prev + cur
// })
// console.log(result);

// some(fn)检查数组中是否含有满足fn函数条件的值(不改变原数组)
// let a = [1, 2, 3, 4, 5]
// let result = a.some(v => {
//     return v > 2
// })
// console.log(result);
// console.log(a);


// var b = 10
// function fn() {
//     console.log(this.b)
// }
// c = {
//     b: 11,
//     fn: fn.bind(window)
// }
// c.fn()

// 增加代码可读性
// 有利于搜索引擎爬虫分析
// 在CSS加载失败的情况下也能呈现完整的页面结构
// 在CSS加载失败的情况下也能呈现完整的页面结构

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

// allSettled

// function allSettled(promises) {
//     if (Promise.length === 0) return Promise.resolve([])
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


// any
// function any(promises) {
//     if (promises.length === 0) {
//         PromiseRejectionEvent(new AggregateError('No Promise in Promise.any was resolved'))
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

// function race(promises) {
//     if (promises.length === 0) return Promise.resolve()
//     return new Promise((resolve, reject) => {
//         promises.forEach(item => {
//             Promise.resolve(item).then(res => {
//                 resolve(res)
//             }, err => {
//                 reject(err)
//             })
//         })
//     })
// }

// call、apply、bind
// Function.prototype.myCall = function (context, ...args) {
//     if (!context || context === null) {
//         context = window
//     }
//     let fn = Symbol()
//     context[fn] = this
//     return context[fn](...args)
// }
// 15：13
// async function func1() {
//     console.log('1s');
//     await func2()
//     console.log('2s');
// }

// async function func2() {
//     console.log('2');
// }

// func1()

// 引用类型的赋值是对象保存在栈中的地址的赋值

// 浅拷贝就是一层拷贝，深拷贝就是无限层次的拷贝

// let shallowClone = source => {
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
//         c: {}
//     }
// }

// let demo2 = shallowClone(demo)
// let demo3 = demo
// console.log(demo3 === demo);
// console.log(demo2.b.c === demo.b.c) // true
// console.log(demo2.b === demo.b) // true
// console.log(demo2 === demo) // false

// let demo = {
//     name: 'dayday',
//     book: {
//         title: 'Do you realy JS',
//         price: '45'
//     }
// }
// let clone_demo = JSON.parse(JSON.stringify(demo))
// console.log(clone_demo);
// demo.name = 'new name'
// demo.book.price = '100'
// console.log(clone_demo.name, clone_demo.book.price);

// 注意:
// 会忽然undefined Symbol
// 不能序列化函数
// 不能处理正则
// 不能正确处理new Date()
// 不能解决循环引用的对象

// 先写一个兼容数组并且判断null方法的函数

// let isObject = obj => typeof obj === 'object' && object !== null

// 完整实现深拷贝

// let isObject = obj => typeof obj === 'object' && obj !== null

// let DeepClone = (source, hash = new WeakMap()) => {
//     if (!isObject(source)) return source // 非对象返回自身   
//     if (hash.has(source)) return hash.get(source)
//     let target = Array.isArray(source) ? [] : {}
//     hash.set(source, target) // 设置哈希表
//     for (let key in source) {
//         if (Object.prototype.hasOwnProperty.call(source, key)) {
//             target[key] = isObject(source[key]) ? DeepClone(source[key], hash) : source[key] // 传入哈希表
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

// 深拷贝和浅拷贝是针对引用类型的，因为引用类型是放在堆内存中的，在栈内存中的地址指向对内存的数据

// let obj = {
//     a: 1,
//     b: {
//         c: 2,
//     }
// }

// let obj2 = Object.assign({}, obj)
// obj2.b.c = 100
// console.log(obj);
// console.log(obj2);

// // 类数组转换为数组的方法
// const args = [...arguments].slice(1)
// const args = Array.prototype.slice.call(arguments, 1)
// const args = Array.from(arguments).slice(1)

// this为调用的函数
// context: 参数对象
// Function.prototype.myCall = function (context) {
//     // 不传参的话默认为window
//     context = context || window
//     const key = Symbol('key')
//     context[key] = this
//     let args = Array.from(arguments).slice(1)
//     const result = context[key](...args)
//     delete context[key]
//     return result
// }

// function print(age, b, c) {
//     console.log(this.name + '' + age + b + c);
// }

// var obj = {
//     name: 'whl'
// }

// print.myCall(obj, 1, 2, 3)

// this 为调用的函数
// context 参数对象
// Function.prototype.myApply = function (context) {
//     context = context || window
//     const key = Symbol('key')
//     context[key] = this
//     let result;
//     console.log(...arguments[1]);
//     if (arguments[1]) {
//         result = context[key](...arguments[1])
//     } else {
//         result = context[key]()
//     }
//     delete context[key]
//     return result
// }

// function print(age1, age2, age3) {
//     console.log(this.name + "" + age1 + age2 + age3);
// }

// var obj = {
//     name: 'whl'
// }

// print.myApply(obj, [1, 2, 3])

// let arr1 = [2, 3, 4]
// let arr2 = [6, 7, 8]
// console.log(arr1.concat(...arr2));
// this 被调用的函数
// context 参数对象
// Function.prototype.myApply = function (context) {
//     if (typeof this !== 'function') {
//         throw new TypeError('Error')
//     }
//     context = context || window
//     const key = Symbol('key')
//     context[key] = this
//     let result
//     if (arguments[1]) {
//         result = context[key](...arguments[1])
//     } else {
//         result = context[key]
//     }
//     delete context[key]
//     return result
// }

// function print(age1, age2, age3) {
//     console.log(this.name + '分割' + age1 + age2 + age3);
// }

// var obj = {
//     name: 'whl'
// }

// print.myApply(obj, [1, 2, 3])
// this 被调用的函数
// context 参数对象
// Function.prototype.myBind = function (context) {
//     if (typeof this !== 'function') {
//         throw new ErrorType('Error')
//     }
//     // 获取传递的参数
//     const args = Array.from(arguments).slice(1)
//     console.log(args);
//     // _this指向调用的函数
//     const _this = this

//     // 返回一个函数
//     return function F() {
//         // 因为返回了一个函数 我们可以new F()
//         // 对于new的情况来说，不会被任何方式改变this
//         if (this instanceof F) {
//             return new _this(...args, ...arguments)
//         } else {
//             return _this.apply(context, args.concat(...arguments))
//         }
//     }
// }

// function print(age1, age2, age3) {
//     console.log(this.name, age1, age2, age3);
// }

// var obj = {
//     name: 'whl'
// }

// let F = print.myBind(obj, 1, 2, 3)

// let obj1 = new F()
// obj1.name = 'qwe'
// console.log(obj1);

// 什么是闭包
// 闭包是指有权访问另一个函数作用域中的变量的函数
// 创建闭包的方式，就是在一个函数内部创建另一个函数

// 捕获、目标、冒泡

// 没有冒泡时间 blur focus mouseenter mouseleave
// scroll浏览器禁止该事件冒泡

// w3c content-box
// IE border-box

// 伪类:active 伪元素::before 不存在的DOM
// ID选择器 100
// 属性选择器 类选择器 伪类 0010
// 标签选择器和微元素选择器0001

// width padding border margin

// flex: 1 flex-grow flex-shrink flex-basis 0 1 auto

// 事件捕获 事件冒泡

// addEventListener() removeEventListener() 包含三个参数
// 1.要处理的事件名字
// 2.作为事件处理程序的函数
// 3.一个布尔值true(捕获阶段调用的函数,false冒泡阶段调用的函数)

// var btn = document.getElementById('myBtn')
// var handler = function () {
//     console.log('我是handler()处理的');
// }

// var hanlder1 = function () {
//     console.log('我是handle1()处理的');
// }
// btn.addEventListener('click', handler, false)
// btn.addEventListener('click', handler1, false)

// 捕获阶段 目标阶段 冒泡阶段

// 事件冒泡 事件开始时，由具体的元素接受，然后逐级向上传播到较为不具体的节点
// 事件开始时，由具体的元素接受，然后逐级向上传播到较为不具体的节点
// 事件开始时，由具体的元素接受，然后逐级向上传播到较为不具体的节点
// 事件开始时，由具体的元素接受，然后逐级向上传播到较为不具体的节点
// 事件开始时， 由具体的元素接受， 然后逐级向上传播到较为不具体的节点

// 事件传播

// 1. 从window对象传导到目标节点称为捕获阶段
// 2. 在目标节点触发，成为目标阶段
// 3. 

// 介绍一下CSS盒子模型
// content padding border margin
// W3C盒子模型 
// IE盒子模型

// CSS选择器有哪些

// id选择器(#myid)
// 类选择器(.myclassName)
// 标签选择器(div,h1,p)
// 子代选择器(ul > li)
// 后代选择器(li a)
// 通配符选择器 (*)
// 属性选择器(a[rel ='external'])
// 伪类选择器(a:hover,li:nth-child)

// 伪元素和伪类

// ::after
// ::before
// ::first-letter
// ::first-line
// ::selection

// 伪类
// :active :hover :visited :any :any=link :checked :default :defined :disabled :empty :first :first-child :nth-child()

// 哪些属性可以继承
// visibility cursor
// color font-size font-family font-weight

// HTML语义化

// 1.增加代码可读性
// 2.利于搜索引擎和爬虫分析

// 块级元素 独占一行 div h1 h2 table form ul p 如果没有设置宽度默认为100%
// 行内元素 不独占一行 span img input button a i label
// 区别
// 块级元素总是占据一行，高度和宽度都能设置
// 内敛元素和其他元素在同一行的，并不自己占据一行，高度和宽度不能自己设置，只能容纳文本和其他内敛元素，margin只有left和rihgt起作用

// 防抖将多次执行变为只执行一次 节流将多次执行变为每隔一段时间执行
// 防抖将多次执行变为一次执行，节流将多次执行变成每隔一段时间执行


// function debounce(fn, delay) {
//     let tiemr = null
//     return function () {
//         clearTimeout(timer)
//         timer = setTimeout(() => {
//             fn.apply(this, args)
//         }, delay)
//     }
// }

// function throttle(fn, wait) {
//     let flag = true
//     return function () {
//         if (!flag) return
//         flag = false
//         setTimeout(() => {
//             fn.apply(this, arguments)
//             flag = true
//         }, wait)
//     }
// }

// function throttle(fn, wait) {
//     let timer = 0
//     return function () {
//         let now = new Date()
//         let args = arguments
//         if (now - timer > wait) {
//             fn.apply(this, args)
//             timer = now
//         }
//     }
// }
// 指定时间间隔内只执行一次
// 多次点击只执行一次

// 宏任务 I/O操作 setTimeout setInterval setImmediate requestAnimationFrame
// 微任务 process.nextTick promise.then catch finally

// primose process.nextTick


// GET: 用来获取资源
// HEAD: 用来获取资源元信息
// POST: 提交数据
// PUT: 修改数据
// DELETE: 删除资源
// CONNECT: 建立资源连接隧道，用于代理服务器
// TRACE: 追踪请求对应的传输路径
// OPTIONS: 列出可对资源实行的请求方法

// 101： 在HTTP升级为websokect的时候，如果服务器同意变更，就会发送101

// 200: 表示客户端的请求在服务器被正确处理
// 204: 表示请求成功，但是没有资源返回
// 206: 表示客户端进行了范围请求，服务器成功执行了这部分的GET请求

// 301：永久重定向，表示资源被分配给了新的URL
// 302：临时重定向，表示资源临时被分配给了新的URL
// 303：表示资源存在另一个URL，使用GET方法来获取资源
// 304：服务器告诉客户端我的缓存没有改变你不需要来取，直接用你本地的就可以
// 307：临时重定向，表示资源临时被分配给了新的URL

// 400：请求报文存在语法错误
// 401：发送的请求需要有通过HTTP认证的认证信息
// 403：请求资源的访问被服务器拒绝
// 404：在服务器上没有找到该请求的资源
// 405：服务器上禁止使用该方法

// 500：表示服务器在执行请求的时候发生了错误
// 502：服务器本身是正常的，访问的时候出了错误
// 503：表示服务器处于负载或者停机维护，无法处理请求

// Promise.resolve().then(() => { // 微任务
//     console.log('Promise1') // 1
//     setTimeout(() => { // 第二轮
//         console.log('setTimeout2') // 4
//     }, 0)
// })

// setTimeout(() => { // 宏任务 
//     console.log('setTimeout1') // 2
//     Promise.resolve().then(() => {
//         console.log('Promise2') // 3
//     })
// }, 0)
// 1 7 6 8 2 4 3 5 9 11 10 12
// console.log('1'); // 1

// setTimeout(function () { // 宏任务
//     console.log('2'); // 第五次输出2
//     process.nextTick(function () { // 微任务 第七次输出3
//         console.log('3');
//     })
//     new Promise(function (resolve) {
//         console.log('4'); //  第六次输出4
//         resolve();
//     }).then(function () { // 微任务   
//         console.log('5') // 第八次输出5
//     })
// })
// process.nextTick(function () { // 微任务1  第三次输出6
//     console.log('6');
// })
// new Promise(function (resolve) {
//     console.log('7'); // 第二次输出7
//     resolve();
// }).then(function () { // 微任务
//     console.log('8') // 第四次输出8 
// })

// setTimeout(function () { // 宏任务
//     console.log('9'); // 第九次输出9
//     process.nextTick(function () { // 微任务 第十二次输出10
//         console.log('10');
//     })
//     new Promise(function (resolve) {
//         console.log('11'); // 第十次输出11
//         resolve();
//     }).then(function () {
//         console.log('12') // 第十三次输出12
//     })
// })

// 调用栈 同步任务和异步任务
// 任务队列
// 主线程

// JS运行时任务队列会分为微任务和宏任务队列

// 宏任务
// script整体的代码 setTimeout setInterval I/O操作 UI渲染
// 微任务
// promise.then
// MutationOberser

// 1: script start
// 2: promise1
// 3: script end
// setTimeout(() => {
//     console.log('setTimeout');
// }, 0)
// new Promise((resolve, reject) => {
//     console.log('prmomise1');
//     resolve()
// }).then(() => {
//     console.log('then11');
//     new Promise((resolve, reject) => {
//         console.log('promise2');
//         resolve()
//     }).then(() => {
//         console.log('then2-1');
//     }).then(() => {
//         console.log('then2-2');
//     })
// }).then(() => {
//     console.log('then12');


// asycn隐式返回Promise

// console.log('script start') // 1

// async function async1() { // async隐式返回Promise
//     await async2() // await后面的代码会被阻塞 promise.then()
//     console.log('async1 end') // 微任务  7
// }
// async function async2() {
//     console.log('async2 end') // 2
// }
// async1()

// setTimeout(function () { // 宏任务
//     console.log('setTimeout') // 8
// }, 0)

// new Promise(resolve => {
//         console.log('Promise') // 3
//         resolve()
//     })
//     .then(function () { // 微任务
//         console.log('promise1') // 5
//     })
//     .then(function () {
//         console.log('promise2') //  6
//     })

// console.log('script end') // 4

// NODE中的微任务process.nextTick
// NODE中的宏任务setImmediate

// 防抖 多次执行变为一次执行，指定时间间隔内只执行一次

// function debounce(fn, delay) {
//     let tiemr = null
//     return function () {
//         clearTimeout(timer)
//         timer = setTimeout(() => {
//             fn.apply(this, args)
//         }, delay)
//     }
// }

// function debounce(fn, delay) {
//     let timer = null
//     return function () {
//         if (timer) clearTimeout(timer)
//         timer = setTimeout(() => {
//             fn.apply(this, args)
//         }, delay)
//     }
// }

// function throttle(fn, wait) {
//     let flag = true
//     return function () {
//         if (!flag) return
//         flag = false
//         setTimeout(() => {
//             fn.apply(this, arguments)
//             flag = true
//         }, wait)
//     }
// }

// function throttle(fn, wait) {
//     let timer = 0
//     return function () {
//         let now = new Date()
//         let args = arguments
//         if (now - timer > wait) {
//             fn.apply(this, args)
//             timer = now
//         }
//     }
// }
// function throttle(fn, wait) {
//     let flag = true
//     return function () {
//         if (!flag) return
//         flag = false
//         setTimeout(() => {
//             fn.apply(this, arguments)
//             flag = true
//         }, wait)
//     }
// }

// function throttle(fn, wait) {
//     let timer = 0
//     return function () {
//         let now = new Date()
//         let args = arguments
//         if (now - timer > wait) {
//             fn.apply(this, args)
//             timer = now
//         }
//     }
// }

// call、apply、bind
// context: 参数对象
// // this 被调用的函数
// Function.prototype.myCall = function (context) {
//     if (typeof this !== 'function') {
//         throw new ErrorType('error')
//     }
//     // 不穿参的话默认为window   
//     context = context || window
//     let key = Symbol('key')
//     context[key] = this
//     let args = Array.from(arguments).slice(1)
//     let result = context[key](...args)
//     delete context[key]
//     return result
// }
// Function.prototype.myApply = function (context) {
//     if (typeof this !== 'function') {
//         throw new ErrorType('error')
//     }
//     context = context || window
//     const key = Symbol('key')
//     context[key] = this
//     let result
//     if (arguments[1]) {
//         result = context[key](...arguments[1])
//     } else {
//         result = context[key]()
//     }
//     delete context[key]
//     return result
// }
// Function.prototype.myBind = function (context) {
//     if (typeof this !== 'function') {
//         throw new ErrorType('error')
//     }
//     const args = Array.from(argumnets).slice(1)
//     let _this = this
//     return function F() {
//         if (this instanceof F) {
//             return new _this(...args, ...arguments)
//         } else {
//             return _this.apply(context, args.concat(...arguments))
//         }
//     }
// }

// new Promise((resolve, reject) => {
//         console.log('promise1');
//         resolve()
//     })
//     .then(() => { // 微任务如果继续产生微任务，则继续执行微任务
//         console.log('then11', 2);
//         new Promise((resolve, reject) => {
//                 console.log('promise2', 3);
//                 resolve()
//             })
//             .then(() => {
//                 console.log('then21', 4);
//                 new Promise((resolve, reject) => {
//                         console.log('promise3', 5);
//                         resolve()
//                     })
//                     .then(() => {
//                         console.log('then31', 7);
//                     })
//                     .then(() => {
//                         console.log('then32', 9);
//                     })
//             })
//             .then(() => {
//                 console.log('then22', 8);
//             })
//     })
//     .then(() => {
//         console.log('then12', 6);
//     })

// 宏任务
// 1.script(整体的代码)
// 2. setTimeout
// 3.setInterval
// 4.I/O操作
// 5.UI渲染

// 微任务

// Promise.then
// MutationObserver

// 事件运行顺序
// 引擎会在任务队列中读取任务并且放入执行栈中执行任务队列中读取任务压入执行栈中执行
// Event Loop 异步任务会在拿到结果的时候将注册的回调函数放入任务队列  异步任务会在拿到结果的时候将注册的回调函数放入任务队列，当执行栈中没有任务丶时候，殷勤会在                 
// JS代码执行时，主线程从上到下一步步执行代码，同步任务会被依次放入到执行站中执行，异步任务会在拿到结果的时候将注册的回调函数放入任务队列，当执行栈中没有任务在执行的时候，引擎会在任务队列中读取任务压入执行栈中处理执行
// JS代码执行时，主线程会从上到下一步步执行代码，同步任务会被依次加入执行栈中执行，异步任务会在拿到结果的时候将注册的回调函数放入任务队列,
// 事件运行顺序

// JS代码执行时，主线程从上到下一步步执行代码，同步任务依次放入执行栈重执行，异步任务会在拿到结果的时候将注册的回调函数放入任务队列，等到执行站重没有任务执行的时候，引擎会在任务队列重读取任务放入执行栈中处理                                               


// 1. 执行同步任务，同步任务不用做特殊处理，直接执行 第一轮从script开始
// 2. 从宏任务队列中取出队头任务执行
// 3. 如果产生了宏任务，将宏任务放入宏任务队列，下次轮询的时候执行
// 4. 如果产生了微任务，将微任务放入微任务度列，
// 5. 执行完当前的宏任务之后，取出微任务队列中的所有任务依次执行
// 6. 如果微任务执行的过程中产生了新的微任务，则继续执行微任务,直到微任务队列为空
// 7. 轮询，循环以上2-6

// 执行同步任务，同步任务不用做处理，直接执行
// 从宏任务中取出队头任务执行
// 如果产生了宏任务，将红任务放入宏任务队列，下次轮询的时候执行
// 如果产生微任务，将微任务加入微任务队列



// 1.执行同步任务，同步任务不需要做特殊处理，直接执行
// 2.从宏任务队列中取出队头任务执行
// 3.如果产生了宏任务，将宏任务放入宏任务队，下次轮询的时候执行
// 4. 如果产生了微任务，将微任务放入微任务队列
// 5.执行完当前的宏任务后，取出微任务队列中的所有任务依次执行
// 6.如果微任务执行过程中产生了新的微任务，则继续执行微任务，直到微任务队列为空
// 7.轮询，循环2-6

// 同步任务/宏任务 -》 执行产生的所有微任务（包括微任务产生的微任务）
// 宏任务
// setTimeout setInterval setImmediate I/O操作
// 微任务
// process.nextTick
// promise.then
// MutationObserver

// 浏览器页面渲染机制
// TCP/IP五层

// 物理层、数据链路层、网络层、运输层（TCP和UDP协议）、应用层
// UDP报文发送以后无法得知是否安全完整到达
// TCP面向连接的可靠的基于字节流的

// 四次挥手 FIN 和 ACK

// 101： 在HTTP升级为websocket的时候，服务器同意变更，就会发送101

// 200：客户端发送的请求在服务器被正确处理
// 204：请求成功，但是没有资源返回
// 206：客户端进行了范围请求，服务器成功执行了这部分的GET请求

// 301：永久重定向，表示资源被分配给了新的URL
// 302：临时重定向，表示资源被临时分配给了新的URL
// 303：资源存在着另一个URL，应使用GET方法获取资源
// 304：服务器需要告诉客户端我的缓存没有改变，直接用你本地的就可以
// 307：临时重定向，表示资源被临时分配给了新的URL

// 400：请求报文存在语法错误
// 401：发送的请求需要有通过HTTP认证的认证信息
// 403：请求资源的访问被服务器拒绝
// 404：服务求上没有找到该请求的资源
// 405：服务器禁止使用该方法

// 500：服务器在处理请求时出了错误
// 502：服务器是正常的，访问的时候除了错误
// 503：服务器处于负载或者停机维护，无法处理请求

// GET: 获取资源
// HEAD: 获取资源的元信息
// POST: 提交数据
// PUT: 修改数据
// DELETE: 删除资源
// CONNECT: 建立资源连接隧道
// OPTIONS: 列出可对资源实行的请求发
// TRACE: 追踪请求对应的传输路径

// 关于浮动
// 浮动会使元素脱离标准流，不占据页面空间，会覆盖标准流的元素，但是不会覆盖标准流元素的文字
// 浮动会使元素脱离标准流，不占据页面空间，会覆盖标准流的元素

// 清除浮动的方法

// 1.触发BFC 父级元素overflow: auto
// 利用伪元素

// .clearfix::after {
// content: ''
// display: table;
// clear: both
// }

// 定位
// static 默认定位
// relative: 根据自身定位
// absolute：依据最近一层定位元素定位
// fixed固定定位：元素的位置相对于浏览器窗口是固定位置
// inherit：继承父元素的定位

// CSS盒子模型

// IE盒子模型boder-box width：表示content+padding+border的总和
// W3C content-box width：content的宽度

// margin重叠只有相邻元素的margin-top和margin-bottom会发生重叠margin-left和margin-right不会发生重叠

// BFC块级格式化上下文，一块独立的渲染区域，内部元素的渲染不会影响外界元素 
// BFC块级格式化上下文，是一块独立渲染的区域，盒子内部元素与盒子外部元素互不影响
// 触发BFC的渲染规则

// 1.内部盒子会在垂直方向上一个接一个防止
// 2.属于同一个BFC的两个相邻的盒子的margin会发生重叠
// 3.计算BFC高度的时候，浮动的元素也参与计算
// 4.BFC就是一个隔离独立的容器，里面的子元素不会影响到外面的元素

// float脱离文档流，高度塌陷

// overflow: hidden
// text - overflow: elippises
// white - space: nowrap

// 第二次相同资源时时间
// IF NONE MATCH IF MODIFY SINCE ETAG

// XSS 跨站脚本攻击
// CSRF 跨站请求伪造

// 如何创建BFC

// 1.根元素，HTML
// 2.float不为none
// 3.overflow不为visible
// 4.display的值为inline-block、flex
// 5.position的值为fixed或absolute

// HTTP请求方法

// GET: 获取资源
// HEAD: 获取资源的元信息
// POST: 提交数据
// PUT: 修改数据
// DELETE: 删除资源
// CONNECT: 建立资源连接隧道
// OPTIONS: 列出可对资源实行的请求方法
// TRACE: 追踪请求对应的传输路径

// 101：当HTTP升级为websocket的时候，服务器同意请求的时候，返回101

// 200：客户端发送的请求被服务器正确处理
// 204：请求陈工，但是没有资源年返回
// 206：客户端进行了范围请请求，服务器陈工执行了者部分的GET请求

// 301：永久重定向，资源被分配给了新的URL
// 302：临时重定向，资源被临时分配给了新的URL
// 303：资源存在着另一个URL，应使用GET方法获取资源
// 304：服务器告诉客户端我的缓存没有改变，你直接用你本地的就可以
// 307：临时重定向，资源被临时分配给了新的URL

// 400：请求报文存在衣服啊错误
// 401：发送的请求需要有通过HTTP认证的认证信息
// 403：请求资源的访问被服务i去拒绝
// 404：服务器上没有找到该请求的资源
// 405：服务器禁止使用该方法

// 500: 服务器在处理请求时发生了错误
// 502: 服务器是正常的，访问的时候粗话了错误
// 503: 服务器处于负载或者停机维护，无法处理请求

// XSS跨站脚本攻击

// 浏览器中执行恶意脚本，然后拿到用户的信息进行操作,主要分为三种类型反射型存储型文档型，防范错失
// 反射性： XSS代码在请求URL中攻击
// 存储行： 将攻击脚本存储到服务端， 从而传播
// dom型： 通过DOM修改页面内容


// 反射型、 存储型、 dom型
// 反射型： xss代码在请求URL中攻击
// 存储型： 将攻击脚本存入服务端， 从而传播
// DOM型： 通过dom修改页面内容
// 如何预防

// 反射型：XSS代码在请求URL中攻击
// 存储型：将攻击脚本存入服务端，从而传播
// DOM型：通过DOM修改页面内容

// 反射型：XSS代码在请求URL中攻击
// 存储型：将攻击脚本存入服务端，从而传播
// DOM型：通过DOM修改页面内容
// 输入过滤
// 如何预防
// 1.输入过滤： 过滤<script>等
// 2.输出转义 例如将<>,/等字符利用转义符号转换
// 3.使用HTTPonly：让JS脚本无法访问cookie
// 4.使用验证码：防止脚本冒充用户做一些危险操作
// CSRF跨站请求伪造
// 用户登陆一个网站之后，产生一个cookie，这时候打开了一个新的网址，该网址返回了一些恶意的请求就属于CSRF攻击,cookie并不能获取到只是使用cookie
// 用户登陆一个网站之后，残生了一个cookie，这时候打开了一个新网站，该网站返回了一些恶意的请求这就属于CSRF攻击

// 防范措施

// 利用Cookie设置SameSite属性
// strict: 禁止第三方携带cookie
// lax: get方法和a标签可以携带cookie
// none: 默认会自动携带上cookie
// 验证来源站点两个请求字段origin header referer header

// CSRF Token
// 页面提交请求的时候携带这个token进行验证不合法不给相应

// 预防
// 不要相信用户的输入，对于输入内容进行转码或者过滤
// 使用httponly让js脚本无法访问cookie
// 开启CSP阻止白名单以外的资源加载或者运行

// Vue面试题
// computed: 计算属性， 依赖其他属性值， 具有缓存， 只有它依赖的属性值改变， 才会重新计算computed的值， 简称别人变化影响我自己， 所以是一份数据受到多份数据影响
// 使用场景：一个数据受到多个数据影响

// watch: 更多的是观察的作用，数据的监听回调，每当监听的数据变化时都会执行回调进行后面的操作，immediate:true，立即调用，deep：true深度监听对象内部值的变化

// watch更多是管擦和作用，每当监听的数据变化时都会执行回调进行后续的操作，immediate：true立即执行，deep：true，深度监听对象内部的变化
// 使用场景：数据变化执行异步或者开销较大的操作时候，watch允许我们执行异步操作，限制执行该操作的频率，并在拿到结果前，设置中间装填，一个数据影响多个数据的时候

// 原型链式继承

// 将父类实例作为子类原型
// 父类的方法可以复用，更改一个子类的引用属性，其他子类也会受到影响
// function Father() {
//     this.qwe = 'abc'
//     this.info = {
//         name: 'whl',
//         age: 22
//     }
// }

// Father.prototype.getInfo = function () {
//     console.log(this.info);
// }

// function Son(a, b) {
//     this.a = a
//     this.b = b
// }

// // 继承Father
// Son.prototype = new Father()
// Son.prototype.constructor = Son

// Son.prototype.showInfo = function() {
//     return this.a + this.b
// }

// let Son1 = new Son(1, 2)
// Son1.getInfo()


// 构造函数法
// function Father(name) {
//     this.test = [1, 2, 3]
//     this.name = name
// }

// Father.prototype.getTest = function () {
//     console.log(this.test);
// }

// function Son(a, b, name) {
//     Father.call(this, name)
//     this.a = a
//     this.b = b
// }

// Son.prototype.showTest = function () {
//     console.log(this.a + this.b);
// }

// let Son1 = new Son(1, 2, 'whl')
// let Son2 = new Son(3, 4, 'qwe')
// Son1.test.push(4)
// console.log(Son1);
// console.log(Son2);

// 原型链法是对原型属性和方法的继承，通过构造函数实现对实例属性的继承


// 组合继承是原型链继承+构造函数继承
// function Father(name) {
//     this.name = name
//     this.numList = [1, 2]
// }
// Father.prototype.getName = function () {
//     return this.name
// }

// function Son(num1, num2, name) {
//     Father.call(this, name)
//     this.num1 = num1
//     this.num2 = num2
// }

// Son.prototype = new Father()
// Son.prototype.construcotr = Son
// Son.prototype.getNum1 = function () {
//     return this.num1
// }
// Son.prototype.getNum2 = function () {
//     return this.num2
// }

// // var Son1 = new Son(3, 5, 'whl')
// // Son1.numList.push(6)
// // console.log(Son1.numList);
// // console.log(Son1.getNum1());
// // console.log(Son1.getNum2());


// var Son2 = new Son(2, 4, 'whl')
// Son2.numList.push(7)
// console.log(Son2.numList);
// console.log(Son2.getNum1());
// console.log(Son2.getNum2());

// 101： 在HTTP升级为websokect的时候，服务器同意变更后，返回101

// 200: 客户端的请求被服务器正确处理
// 204: 请求成功，但是没有资源返回
// 206: 客户端进行了范围请求，服务器成功执行了这部分GET请求

// 301: 永久重定向，表示资源被分配给了新的URL
// 302: 临时重定向，表示资源被临时分配给了新的URL
// 303: 资源存在着另一个URL，需要用GET方法获取
// 304: 服务器需要告诉客户端我的缓存没有改变，你直接用你本地的就可以
// 307: 临时重定向，资源被临时分配给了新的URL

// 400：请求报文存在语法错误
// 401：发送的请求需要有通过HTTP认证的认证信息
// 403：请求的资源访问被服务器拒绝
// 404：在服务器上没有找到该请求的资源
// 405：服务器禁止使用该方法

// 500: 服务器在处理请求时候发生了错误
// 502: 服务器本身是是增长的，访问的时候发生了错误
// 503: 服务求本身处于负载或者停机维护，无法处理请求


// GET: 获取资源
// HEAD: 获取资源的源信息
// POST: 提交数据
// PUT: 修改数据
// CONNECT: 建立资源连接隧道
// TRACE: 追踪请求对应的传输路径
// DELETE: 删除资源
// OPTIONS: 列出可对资源实行的请求方法

// this: 调用的函数
// context: 参数对象
// Function.prototype.myCall = function (context) {
//     // 不传参的话默认是window
//     context = context || window
//     const key = Symbol('key')
//     context[key] = this
//     let args = Array.from(arguments).slice(1)
//     const result = context[key](...args)
//     delete context[key]
//     return result
// }

// function print(age, a, b) {
//     console.log(this.name + a + b + age);
// }
// var obj = {
//     name: 'whl'
// }

// print.myCall(obj, 1, 2, 3)

// this: 调用的函数
// context: 参数对象

// Function.prototype.myApply = function (context) {
//     context = context || window
//     const key = Symbol('key')
//     context[key] = this
//     let result
//     if (arguments[1]) {
//         result = context[key](...arguments[1])
//     } else {
//         result = context[key]()
//     }
//     delete context[key]
//     return result
// }

// function print(age1, age2, age3) {
//     console.log(this.name + age1 + age2 + age3);
// }

// var obj = {
//     name: 'whl'
// }

// print.myApply(obj, [1, 2, 3])

// Function.prototype.myBind = function (context) {
//     if (typeof this !== 'function') {
//         throw new ErrorType('Error')
//     }
//     // 获取传递的参数
//     const args = Array.from(arguments).slice(1)
//     // _this指向调用的函数
//     const _this = this
//     return function F() {
//         if (this instanceof F) {
//             return new _this(...args, ...arguments)
//         } else {
//             return _this.apply(context, args.concat(...arguments))
//         }
//     }
// }

// function print(age1, age2, age3) {
//     console.log(this.name, age1, age2, age3);
// }

// let obj = {
//     name: 'whl'
// }

// let F = print.myBind(obj, 1, 2, 3)
// let obj1 = new F()
// obj1.name = 'qwe'
// console.log(obj1);

// let obj = {}
// Object.defineProperty(obj, 'name', {
//     get: function () {
//         console.log('我被获取了');
//     },
//     set: function (newVal) {
//         console.log('我被设置了');
//     }
// })
// obj.name = 'whl'
// // 在给obj设置name属性的时候，触发了set方法
// let val = obj.name

// Vue双向数据绑定采用数据劫持结合发布/订阅模式，通过Object.defineProperty()来劫持各个属性的setter和getter，在数据变动的时候发布消息给订阅者，触发相应的监听回调

// Compile解析模板指令，将模板中的变量替换成数据
// 解析模板指令，将变量替换成数据
// 每个指令对应的节点绑定更新函数，添加监听数据的订阅者

// Dep Compiler Observer Watcher

// comiler添加订阅者 

// Dep订阅器采用发布-订阅模式负责维护依赖，
// 订阅者来自Compiler解析器，
// 数据改变的时候，
// 通过Wacher订阅者绑定更新函数，
// Watcher向Dep中添加订阅者，
// 一旦Dep接到Observer的通知，
// 他就会再去通知wacher
// ，watcher调用自身的update方法，
// 触发Compiler中绑定的函数，更新试图

// v-if：v-if：条件不成立不渲染DOM，v-show：切换DOM的显示和隐藏不频繁切换的场景
// v-show：需要频繁切换的场景

// 包括子属性对象的属性

// Vue双向数据绑定采用数据劫持结合发布订阅模式，通过Object.defineProperty劫持各个属性的setter和getter，在数据变化的时候发布消息给订阅者，触发相应的监听回调

// getter负责获取值 
// setter负责设置值

// Compiler负责解析模板指令，将模板中的变量替换成数据


// Vue双向数据绑定是通过数据劫持结合发布订阅模式，
// 通过Object.defineProperty()
// 对各个属性设置setter和getter，
// 在数据改变的时候发布消息给订阅者， 触发相应的监听回调

// Vue双向数据绑定是通过数据劫持结合订阅发布模式， 通过Object.defineProperty() 设置各个属性的setter和getter， 当数据更新的时候， 发布消息给订阅者， 触发相应的监听回调

// vue响应式原理数组是通过重写数组的方法来实现
// push pop shift unshift splice sort reverse

// 监听器属性变化触发setter，监听到数据的变化
// 解析器: 解析Vue模板指令，将模板中的变量替换成数据
// 订阅者
// 订阅器
// 明天复习 CSS基础、JS手写、vue原理、TCP、浏览器原理

// 监听器observer：对数据对象进行遍历，包括子属性对象的属性，利用Object.defineProperty()对属性都加上getter和setter，监听数据变化
// 解析器compiler：解析Vue模板指令，将变量替换成数据，每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据改变，调用更新函数进行数据更新
// 订阅者：是监听器和解析器通信的桥梁，主要是订阅监听器中属性的变化，当属性变化的时候，调用自身的update方法，触发解析器中的更新函数，更新视图
// 订阅器：订阅器采用发布订阅模式，用来收集订阅者，对监听器和订阅者进行管理

// 监听器：对数据对象进行遍历，包括子对象的属性，通过Object.definePropertY()对属性都加上setter和getter，监听数据变化
// 解析器：解析Vue模板指令，将变量中的变量替换成数据，每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据改变，调用更新函数进行数据更新
// 订阅者：是监听器和解析器的通信桥梁，主要是订阅监听器中属性的变化，当属性变化的时候，调用自身的update方法，触发解析器中的更新哈桑农户，更新试图
// 订阅器：订阅器采用发布-订阅模式，用来收集订阅者，对监听器和订阅者统一管理

// 101：在HTTP升级为websocket的时候，如果服务器同意变更，就会发送101

// 200: 客户端的请求在服务器得到正确处理
// 204: 请求成功，但是没有资源返回
// 206: 客户端进行了范围请求，服务器执行了这部分的GET请求
// 1 2 3 4 7
// 301: 永久重定向，资源被分配给了新的URL
// 302: 临时重定向，资源被临时分配给了新的URL
// 303: 资源存在着另一个URL，要用GET方法获取资源
// 304: 服务器告诉客户端我的缓存并没有改变，你直接用你本地的就可以
// 307: 临时重定向，资源被临时分配给了新的URL


// 400：请求报文存在语法错误
// 401: 发送的请求需要有通过HTTP认证的认证信息
// 403: 请求资源的访问被服务器拒绝
// 404: 服务器上没有找到该请求的资源
// 405: 服务器禁止使用该方法

// 500：服务器在处理请求时发生了错误
// 502：服务器本身没有问题，访问的时候除了错误
// 503：服务器处于负载或者停机维护，无法处理请i去

// GET：获取资源
// HEAD： 获取资源的元信息
// POST：提交数据
// PUT：修改数据
// DELETE： 删除资源
// CONNECT： 简历资源链接隧道
// OPTIONS： 列出可对资源实行的请求方法
// TRACE：追踪请求对应的传输路径

// Vue面试题: Vue双向绑定原理，diff算法，v-model、MVVM、vuex、vue-router Vue3 Vue生命周期函数


// Computed和Watch的区别和应用场景

// computed: 计算属性， 依赖其他属性值， 具有缓存， 只有它依赖的属性值改变， 才会重新计算computed的值， 简称别人变化影响我自己， 所以是一份数据受到多份数据影响
// 使用场景：一个数据受到多个数据影响

// watch: 更多的是观察的作用，数据的监听回调，每当监听的数据变化时都会执行回调进行后面的操作，immediate:true，立即调用，deep：true深度监听对象内部值的变化

// watch更多是管擦和作用，每当监听的数据变化时都会执行回调进行后续的操作，immediate：true立即执行，deep：true，深度监听对象内部的变化
// 使用场景：数据变化执行异步或者开销较大的操作时候，watch允许我们执行异步操作，限制执行该操作的频率，并在拿到结果前，设置中间装填，一个数据影响多个数据的时候



// computed: 计算属性，依赖其他属性值，具有缓存，只有他依赖的属性改变，才会重新计算computed的值，一份数据受到多份数据影响的时候使用computed

// watch：没有缓存性，更多的是管擦和的作用，每当监听的数据变化的时候都会执行回调进行后面的操作,immediate: true,立即调用，deep: true深度监听对象内部的变化 deep: true监听对象内部的变化
// 使用场景数据变化时执行异步或者开销较大的操作的时候，watch允许我们执行异步操作，限制执行该操作的频率，并在拿到结果前，设置中间状态，一个数据影响多个数据的时候使用

// 初始化阶段 beforeCreate create

// this.$el拿不到这个 this.$data能拿到这个
// mouted中两个都能拿到this.$el this.$data 挂载阶段
// beforeUpdate updated 更新阶段

// MVC和MVVM的区别

// MVC: model：模型 view 视图 c：conllter控制器

// 一句话描述: 控制器负责将把model的数据给view
// MVC：控制器负责把model的数据给view

// MVVM新增VM层 数据绑定 DOM事件监听 === 双向数据绑定
// MVVM 当model的属性变化时，不用操作DOM元素，来改变view，而是改变了属性之后对应的view会自动变化（）Vue数据驱动视图


// 为什么data是一个函数
// 避免组件中的数据互相影响，
// 如果data是一个对象的话，
// 会影响到其他组件，
// 为了保证数据独立，要通过data函数返回一个对象作为组件的状态

// 为什么data是一个函数

// 避免组件中的数据互相影响，
// 如果data是一个对象的话
// 会影响到其他组件，
// 为了保证数据的独立性，
// data函数返回一个对象
// 作为组件的状态

// {/* <input type="text" :value="username" @input="username = $event.target.value"/> */}

// 说说你对Vue生命周期的理解

// 创建 初始化数据 编译模板 挂载DOM -》 渲染 -》 更新 -》 渲染 -》 销毁 
// 初始化 挂载 更新 销毁
// 说说你对Vue生命周期的理解

// 创建、初始化数据、编译模板、挂载DOM、渲染、更新、渲染、卸载
// 初始化和创建完成
// beforeCreate: 在实例初始化之后，数据监测，事件配置之前被调用，data、methods、computed、watch上的数据不能访问
// created: 实例创建完成之后被调用，完成数据检测和事件配置，这里没有$el,如果需要和DOM交互可以使用vm.$nextTick来访问DOM
// beforeMount: 挂载开始前调用
// mounted: 挂载后调用，真正的DOM挂载完毕，数据完成双向绑定，可以访问到DOM节点
// beforeUpdate: 数据更新时调用
// updated: 数据更新后调用
// beforeDestroy: 实例销毁之前调用，这时候的实例还能使用
// destroyed: 实例销毁之后调用，所有的事件监听都会被清除

// 我对vue生命周期的理解

// 创建 初始化数据 模板编译 挂载DOM  渲染 更新 渲染 销毁

// beforeCreate: 在实例初始化之后，事件配置之前被调用，这时候data、methods、computed、watch上的方法和属性都不能被访问
// created: 实例创建完成之后调用，完成数据检测和事件配置，这里没有$el,如果想要访问DOM，可以使用vm.$nextTick来访问DOM
// beforeMount: 挂载前调用
// Mounted: 挂载后调用，真正的DOM挂载完成，数据完成双向绑定，可以访问真实的DOM
// beforeUpdate: 在数据更新时候调用
// updated: 在数据更新后调用
// beforeDestroy: 实例销毁之前调用，此时的实例还是可以使用的
// destroy: 实例销毁后调用，所有的事件监听被清除

// 异步请求哪里发起?

// 可以在钩子函数created beforeMoute mouted,这三个钩子函数中data已经被创建了
// 可以在created中发起异步请求,有下面两个优点
// 可以更快获取服务端的数据，减少加载的事件
// display: none不占据空间
// visibility：hidden 占据位置

// vue内置指令

// v-bind: 绑定属性
// v-on: 监听DOM事件
// v-Text
// v-html:防止XSS攻击
// v-model: value和input的语法糖
// v-show: 通过display来进行显示和隐藏

// 怎么理解Vue单项数据流

// 数据总是从父组件传到子组件，子组件没有权力修改父组件传过来的值,这也可以防止子组件意外改变父组件的状态

// Vue的父子组件生命周期钩子函数执行顺序

// 渲染过程
// F beforeCreate Fcreated F beforeMount S beforeCreate S created S beforeMount S moutned F mounted
// // 更新过程
// S的更新
// F.beforeUpdate S.beforeUpdate S updated F.updated
// F的更新
// F.beforeUpdate updated
// // 销毁过程

// F.beforeDestroy S.beforeDestroy S.destroyed F.destroyed

// Vue路由的实现: hash模式和history模式
// hash模式中#以及#后面的字符称之为hash，用window.location.hash读取，即使没有做到对路由的全覆盖，也不会返回404

// history模式：如果缺少对路由的处理将会返回404

// BFC
// 什么是BFC

// BFC是块级格式化上下下文，是一个拥有独立渲染区域的盒子，盒子内部的元素与盒子外部的元素不会互相影响

// BFC渲染规则

// 内部的盒子会在垂直方向上一个接一个的排列
// 属于同一个BFC的两个相邻盒子的margin会发生重叠
// 计算BFC高度的时，浮动的元素也会参与计算
// BFC就是一个隔离的独立容器，里面的元素和外面的元素不会互相影响

// BFC解决了什么问题 margin边距重叠

// 两栏布局: 使用float脱离文档流，造成高度塌陷 
// 清除浮动

// BFC如何触发

// 根元素HTML
// display为inline-block和flex
// overflow不为visible
// position为fixed和absolute
// float不为none

// 实现call、apply、bind
// context: 参数对象
// this: 被调用的函数
// Function.prototype.myCall = function (context) {
//     // 不传参默认window
//     context = context || window
//     const key = Symbol('key')
//     context[key] = this
//     let args = Array.from(arguments).slice(1) // 将类数组转换成数组
//     // let args = Array.prototype.slice.call(aruments,1)
//     // let args = [...arguments].slice(1)
//     let result = context[key](...args)
//     delete context[key]
//     return result
// }

// function print(a, b, c) {
//     console.log(this.name + '' + a + b + c);
// }

// var obj = {
//     name: 'whl'
// }

// print.myCall(obj, 1, 2, 3)

// function print(age, b, c) {
//     console.log(this.name + '' + age + b + c);
// }

// var obj = {
//     name: 'whl'
// }

// print.myCall(obj, 1, 2, 3)
// context: 参数对象
// this：被调用的函数
// Function.prototype.myApply = function (context) {
//     if (typeof this !== 'function') {
//         throw new TypeError('Error')
//     }
//     context = context || window
//     const key = Symbol('key')
//     context[key] = this
//     if (arguments[1]) {
//         result = context[key](...arguments[1])
//     } else {
//         result = context[key]()
//     }
//     delete context[key]
//     return result
// }

// function print(age, b, c) {
//     console.log(this.name + '' + age + b + c);
// }

// var obj = {
//     name: 'whl'
// }

// print.myApply(obj, [1, 2, 3])

Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    const _this = this
    const args = Array.from(arguments).slice(1)
    return function F() {
        if (_this instanceof F) {
            // new方式不会被任何方式改变this
            return new _this(...args, ...arguments)
        } else {
            return _this.apply(context, args.concat(...arguments))
        }
    }
}
function print(age1, age2, age3) {
    console.log(this.name, age1, age2, age3);
}

var obj = {
    name: 'whl'
}

let F = print.myBind(obj, 1, 2, 3)

let obj1 = new F()
obj1.name = 'qwe'
console.log(obj1);
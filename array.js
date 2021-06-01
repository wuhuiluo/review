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

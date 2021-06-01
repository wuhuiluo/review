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
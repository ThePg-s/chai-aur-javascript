// array non-preemtive datatype resizable 

const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman", "nagraj"]
//another way to declare array
const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2[0])

// array methods
myArr.push(6);
myArr.push(7);
myArr.pop();//remove last value
myArr.unshift(9);//adds element in start of array and shifts position of others
myArr.shift();//removes element from array from start

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr = myArr.join();

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

//slice, splice
console.log("A ", myArr);
const myn1 = myArr.slice(1 , 3);
console.log(myn1)
console.log("B ", myArr);
const myn2 = myArr.splice(1 , 3);//manuplates the origina array
console.log("c ", myArr);
console.log(myn2);



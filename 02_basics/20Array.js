const marvel_heros = ["thor", "IronMan", "Spiderman"];
const dc = ["superman", "batMan", "flash"]

//marvel_heros.push(dc);//wrong inserts array under array does not add
// console.log(marvel_heros)

const newHeros = marvel_heros.concat(dc); //merges two array and return new array
// console.log(newHeros);

//to do the avove operation we use other methods which are efficient such as spread ...

const allHeros = [...marvel_heros, ...dc];
// console.log(allHeros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]//this is an complex situstion in array
const realAnotherArray = another_array.flat(Infinity);//this makes the avove complex array easy
// console.log(realAnotherArray)

console.log(Array.isArray("prashant"));//checks if element is array
console.log(Array.from("prashant"));//converts into array
console.log(Array.from({name:"prashant"}));//returns empty array becaus cant convert

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))// creates array of diff elements

let time = new Date();
console.log(time.toLocaleString());
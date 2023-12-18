//singleton --> constructor se banainge to banega aur literal se banainge too nai banega
//Object.create// --. constructor meathod
//object literals

const mySym = Symbol("key1")
const jsUser = {
    name:"Prashant",
    "fullName": "prashant gupta",
    [mySym]:"hfksjdfhks",
    age:18,
    location:"jaipur",
    email:"hitesh@gamail.com",
    isLoggedIn:false,
    lastLogIn:["Monday", "Tuesday"]
}

// accesing a object 2 ways  keys are considers as string "name": in objects
//console.log(jsUser.name);
//console.log(jsUser["name"]);
//console.log(jsUser.fullName);//this will give an error
//console.log(jsUser["fullName"]);
//console.log(jsUser[mySym]);//to print symbols

//to change values inside

jsUser.name = "guptaPrashant";
//to lock values
//Object.freeze(jsUser)//now we cant change the values
//jsUser.email = "prashankgdkjag"//ye change nahi hoga bete becusse tune freexe kia hai
//console.log(jsUser)//print karne pe symbol bhi dikha raha hai deko bete

//function add karo bete 

jsUser.greeting = function(){
    console.log("hello js user");
}
jsUser.greeting2 = function(){
    console.log(`hello js user ${this.name}`);
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greeting2());





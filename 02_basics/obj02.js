//declaration of singleton object
//const tinderUser = new Object() //ye constructor banata hai bete

const tinderUser = {}

tinderUser.id  = "prashant123";
tinderUser.name  = "prashant";
tinderUser.isLoggedIn  = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName:{
        userFullName:{
            firstName:"hitesh",
            lastName:"chaudhry"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

//combining objects 
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

//const obj3 = {obj1,obj2}//wrong
//const obj3 = Object.assign({}, obj1, obj2);//wrong first {}target and rest are other objects to merge nor prwferabbly usable
//usable syntax to add objects ...spread

const obj3 = {...obj1,...obj2};

// console.log(obj3);

//jab database se value aaiga in form of array of objects

const users = [{

},
{

},
{

}]

//users[1].email//acess first value of first object in array

//to get all keys values and entries of object in form of array

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//bete agar meko check karna hai ki koi object ka element hai ya nahi
console.log(tinderUser.hasOwnProperty('isLogged'));








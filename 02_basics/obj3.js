//hamlog js ka destructuring padh rahe hain bete

const course = {
    coursename: "js",
    fee:999,
    courseInstructor:"hitesh"
}

//ham kisi vi value ko . kar ke le sakte hain
//course.coursename//lekin ye sab jagah likhenge too lamba aur cluttered lagega isi lie 1 bar likho with destructuring aur bar bar use kro 

const {courseInstructor} = course; //after = is objects name inside {} is key name
const {courseInstructor:teachername} = course;//giving courseInstructor a smaller name reference

console.log(courseInstructor);
console.log(teachername);

//in react we use this kind of destructring in passing / getting props

/*const nav = ({company}){ //inside () we have used props in form of destructuring


}*/

//JSON   data

/*
{
    "name":"prashant",
    "price":56464,
    "ghjhg":"hjh"
}

[
    {},
    {},
    {}
]


*/



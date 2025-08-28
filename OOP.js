// let Student = {
//     myName : "prasanna",
//     age : 25,
//     passion :'hai hi nhi',  // property
//     introduceMyself : function(){
//         console.log(`${this.myName} and my age is ${this.age}`)
//     }
// }



// Factory function

// function MyObj(name, age , passion){
//     return {
//     myName : name,
//     age : age,
//     passion :passion,  // property
//     introduceMyself : function(){
//         console.log(`${this.myName} and my age is ${this.age}`)
//     }
// }
// }
// let result1 = MyObj('Prasanna', 35, 'guitar')
// let result2 = MyObj('Prasanita', 25, 'Piano')
// console.log(result1.introduceMyself())
// console.log(result2.introduceMyself())

// Constructor Function

function Student(name,age,college){
   this.name = name;
   this.age = age;
   this.college = college
   return this
}
let newStudent = new Student('prasanna',25,'DAIMSR')
let newStudent2 = new Student('poonam',25,'SKP')
// console.log(newStudent)
// console.log(newStudent2)


// Class Syntax

class Employee{
    constructor(name = 'User',age,college){
        this.name = name;
        this.age = age;
        this.college = college
    }
    introduce(){
        console.log(`${this.name}, ${this.age}`)
    }
    
}

let s1 = new Employee('Himanshu',25,'guirar')
let s2 = new Employee()
console.log(s1)
s1.introduce()
// console.log(s2)
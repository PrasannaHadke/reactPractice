// Use case one

// let arr = [ 1,2,3,45,6,7]
// let newArr = [...arr,'prasanna','hadke']
// console.log(...arr)
// console.log(newArr)
// let anotherArr = [...arr]
// console.log(anotherArr)


// shallow copy
// shallow copy vs deep copy learn this


let arr= [1,2,3,45]
let copyArr = [...arr];
copyArr.push(5)
// console.log(arr)
// console.log(copyArr)

// merge two arrays

let marvelHeores = ['IronMan', 'Thor', "CaptianAmerica",'Hulk',"HawkEye","Black Widow"]
let dcHeores = ['SuperMan', 'Batman', 'Flash',"WonderWoman","Cyborg"]
let allHeores = [...dcHeores,...marvelHeores]
// console.log(allHeores)


// spread string

let myName = 'prasanna'
// console.log(...myName)
let spreadString = [...myName]
// console.log(spreadString)


// spread in function call

let users = ['prasanna','ziniya','shabnam','chew']

function consoleThressUsers(u1,u2,u3){
    console.log(u1)
    console.log(u2)
    console.log(u3)
}

// consoleThressUsers('pra','man','kan')
// console.log(...users)
// consoleThressUsers(...users)



// spread object

let obj = {
    name:'manas',
    age:21,
    city:'kamptee'
}
console.log(obj)

let objCopy = {...obj}
// console.log(objCopy) 
objCopy.name = 'goluDada'
// console.log(objCopy)
objCopy['name']= 'pratiksha'
// console.log(objCopy)

let newObj = {
    ...obj,age:35,lifePartner:'nhi hai'
}
// console.log(newObj)



// merge Object

let mergObj = {
    name1: 'Poonam',
    age2: 26
}
let mergedObj ={
    ...obj,...mergObj
}
console.log('merged',mergedObj)

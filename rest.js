// rest in function parmeters
function sum(...add){
    let answer = add.reduce((acc,cur)=>{
        return acc + cur
    },0)
    return answer
}
let add = sum(4,5,6,5,6,12,34,24,12,3,5)
// console.log(add)


// destructring in array using  rest operator

let arr = ['prasanna','hadke','pratiksha','computer','bcca','bba']

let [u1,u2,u3,...otherUser] = arr
// console.log(u1)
// console.log(u2)
// console.log(u3)
// console.log(otherUser)



// destructring with object using rest operator

let objOne= {
    name:'prasanna',age : 25, city:'kamptee',college: 'DAIMSR'
}

let {name, age,...otherKeys} = objOne
console.log(name)
console.log(age)
console.log(otherKeys)
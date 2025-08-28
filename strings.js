let name = 'prasanna'

for (let i = 0; i < name.length; i++) {
    const element = name[i];
    // console.log(element)
}

// console.log(name.replace('a','z'))
// console.log(name.replaceAll('a','z'))

const newStr =' and my age is 26'
// console.log(name.concat(newStr))


// console.log(newStr.trim())

// console.log(newStr.substring(12,-1))

// console.log(newStr.slice(8,-1))

// console.log(newStr.toUpperCase())
// console.log(newStr.toLowerCase())

const toConvert = String(1)
// console.log(typeof toConvert)

// to convert object into string

let obj = {
    name: 'prasanna'
}

let stringObj = JSON.stringify(obj)
// console.log(typeof stringObj)

let slice = 'prasanna'
// console.log(slice.slice(2))
// console.log(slice.split(''))

let fruits = ['apple','banana',"mango"]

// console.log(fruits.join(' and '))



function truncate(myName,maxLength){

    if (myName.length > maxLength) {
       return myName.slice(0,maxLength - 1) + '...'
       
    }
    else{
       return myName 
    }
}

let str = truncate('prasanna',5)
// console.log(str)


function palindrome(num){
    if(num < 0) return false
    return num === +num.toString().split('').reverse().join('')
}
// console.log(palindrome(1331))


function hammingDistance(x,y){
    if (x.length !== y.length) {
        throw new Error('Strings must be of same lenght')
    }
    let distance = 0;
    for(i = 0; i < x.length; i++){
        // console.log("x",x[i])
        // console.log("y",y[i])
        if(x[i] !== y[i]){
            distance++
        }
    }
    return distance
}
// console.log(hammingDistance('Hello','Hallw'))


function anagram(s,t){
    s = s.split("").sort().join("")
    t = t.split("").sort().join("")

    return s === t
}

// console.log(anagram('tiana','anita'))

// let myName = 'prasanna'
// let split = myName.split('')
// console.log(split)
// let sort = split.sort()
// console.log(sort)
// let join = sort.join('')
// console.log(join)


const isAnagram = (s,t)=>{
    if (s.length !== t.length) {
        return false
    }

    let obj1 = {}
    let obj2 ={}

    for (let i = 0; i < s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }

    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) {
           return false 
        }
    }
    return true
        
}

console.log(isAnagram('alina','anila'))
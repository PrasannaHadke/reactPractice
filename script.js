let value = ['prasannna' , 1,24,12,45,'hadke']

let filtered = value.filter((element)=>{
    return typeof element === 'number'
}).reduce((acc,cur)=>{
    return acc + cur
},0)
console.log(filtered)
 function check(value){
   return value.some((val)=> typeof val === 'number')
}

let answer = check(value)
// console.log(answer)


function checkPrime(num){
    if(num<=1 ) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
       if ( num % i === 0) {
            return false
       }
       else{
        return true
       }
    }
}

const answer1 = checkPrime(17)
// console.log(answer1)

let asaaa = [1,2,2,4,5,6,7,5,6]

let removedValue = asaaa.filter((val,index)=>{
    return asaaa.indexOf(val) === index
})

// console.log(removedValue)

// console.log(Number.isInteger(10.1))

function reverseString(rev){
    let reverseValue = ''
    for (let i = rev.length-1; i >= 0; i--) {
        reverseValue = reverseValue + rev[i]
        
    }
    return reverseValue;
}

const reverse = reverseString('prasanna')
console.log(reverse)
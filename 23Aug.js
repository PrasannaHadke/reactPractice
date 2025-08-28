function reverse(arr){
    let newArr = []
    for (let i = arr.length-1; i >= 0; i--) {
       newArr.push(arr[i])
    }
    return newArr
}

// console.log(reverse([1,2,3,4,5,6,7,8]));

function minMax(arr){
    let min = -Infinity;
    let max = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        else if (arr[i] < max && arr[i] > min) {
            min = arr[i]
        } 
    }
    return {max , min}
}

// console.log(minMax([12,334,5,1,56,7,8,752, 78]));

function dupl(arr){
    let removeDupli = new Set([...arr])
    return removeDupli;
}
// console.log(dupl([1,2,3,5,67,1,2,35,6,89,75,4,3]));

function twoSum(arr , trg){
    let targetValue = []
    for (let i = 0; i < arr.length; i++) {
       for (let j = i; j < arr.length; j++) {
       if (arr[i] + arr[j] === trg) {
            targetValue[0] = arr[i]
            targetValue[1] = arr[j]
       }
        
       }
       
    }
    return targetValue    
}

// console.log(twoSum([1,2,3,5,67,1,2,35,6,89,75,4,3],21));

[-2,1,-3,4,-1,2,1,-5,4] 
function kadane(arr){
    let sum = 0;
    let maxSum = arr[0]

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (sum > maxSum) {
            maxSum = sum
        }
        if(sum < 0){
            sum = 0
        }
    }
    return maxSum   
        
}

// console.log(kadane([-2,1,-3,4,-1,2,1,-5,4] ));


function revString(str){
    let newStr = ""

    for (let i = str.length - 1; i >= 0; i--) {
       newStr += str[i]
        
    }
    return newStr
}

// console.log(revString('prasanna'));


function palindrome(num){
    let originalNum = num;
    let revNum = 0;

    while (num >0) {
        let reverse = num % 10;
        revNum = revNum  * 10 + reverse;
        num = Math.floor(num / 10)
    }
    return revNum
}

// console.log(palindrome(123));

function palindromeString(str){
    return str === str.split('').reverse().join('')
}
// console.log(palindromeString('prasanna'))


// dog  god

function anagram(str , str1){
    return str.split('').sort().join('') === str.split('').sort().join('')
}

// console.log(anagram('dog','god'));


let count = (str)=>{
    obj = {}

    for (let i = 0; i < str.length; i++) {
        obj[str[i]] =( obj[str[i]] || 0 ) + 1
    }
    return obj
}
console.log(count('prasanna'));
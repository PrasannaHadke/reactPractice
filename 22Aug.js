function rev(arr){
    let revArr =[]
    for (let i =  arr.length-1; i >=0; i--) {
        
        revArr.push(arr[i])
        
    }
    return revArr
}

// console.log(rev([1,2,3,4,5,6,7,8]));


function max(arr){
    let maxNum = -Infinity
    let secondMax = -Infinity
    for (let i = 0; i < arr.length; i++) {
       if (maxNum < arr[i]) {
        secondMax = maxNum
        maxNum = arr[i]
       }else if (arr[i] > secondMax && arr[i] < maxNum) {
        secondMax = arr[i]
        
       } 
    }
    return {maxNum,secondMax}
        
}

// console.log(max([12,13,5,186,6,89,12,122,123]));


function removeDupli(arr){
    return new Set([...arr])
}

// console.log(removeDupli([11,22,3,45,67,89,11,22]));

function revString(str){
    let reverse = ""
    for (let i = str.length; i >= 0 ; i--) {
        reverse += str.charAt(i)
    }
    return reverse   
}
// console.log(revString('ziniya'));

function palindrome(num){
    let original = num
    let reverse = 0
    while (num > 0) {
       let  lastDigit = num % 10;
        reverse = reverse * 10 + lastDigit;
        num = Math.floor(num / 10)
    }
    
    return [original,reverse , original ===reverse]
}
// console.log(palindrome(123));


function anagram(str1,str2){
    return str1.split("").sort().join('') ===  str2.split("").sort().join('')
}
// console.log(anagram('dad','add'));
// console.log(anagram('decimal','claimex'));


// function largestNum(arr){
//     let sortedArr = arr.sort((a,b) => a - b)
//     return [sortedArr, sortedArr[sortedArr.length-1] , sortedArr[sortedArr.length-2]]
// }
// console.log(largestNum([22,3,5,7,9763,24,25,25,6,7]));


function frquencyCount(str){
    let obj = {}
    for (let i = 0; i < str.length ; i++) {
        
       obj[str[i]] = (obj[str[i]] || 0) + 1
    }
   return obj
}
// console.log(frquencyCount('prasanna'));


function twoSum(arr,trg){
    let sum = [];

    for (let i = 0; i < arr.length; i++) {
      
        for (let j = i; j < arr.length; j++) {
           if (arr[i] + arr[j] === trg) {
            sum[0] = arr[i]
            sum[1] = arr[j]
           }
            
        }
        
    }
    return sum
}

console.log(twoSum([1,2,3,45,6,7],47));


// input [-2,1,-3,4,-1,2,1,-5,4]
function kadane(arr){
    let sum = 0;
    let maxSum = arr[0]
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (sum > maxSum) {
             maxSum = sum
        }
        if (sum < 0) {
            sum = 0
        }
        
    }
    return maxSum;
}

console.log(kadane([-2,1,-3,4,-1,2,1,-5,4]));

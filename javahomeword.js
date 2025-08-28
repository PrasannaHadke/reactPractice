// function reverse(num){
//     let toString = num.toString()
//     let split = toString.split('')
//     let rev = split.reverse()
//     console.log(rev);
//     let join = +rev.join('')
//     console.log(join);
// }

// reverse(112)

function palindrome(num){
    let toString = num.toString()
    let revNum = ''
    console.log('String', toString);

    for (let i = toString.length -1 ; i >= 0; i--) {
        revNum += toString[i]
    }
    console.log(revNum, 'revNum'); 
    if (toString === revNum) {
        return true
    }  
    else{
        return false
    }
}

// let number = palindrome(121)
// console.log(number);


function reverse(num){
    let original = num;
    let reverse = 0;
    let digits = 0
    while (num > 0) {
        let lastDigit = num % 10;
        reverse = reverse * 10 + lastDigit;
        num = Math.floor(num / 10)
        digits++
    }
    console.log(digits);
    console.log(original);
    console.log(reverse);
    return original === reverse
}
// console.log(reverse(121));


// function noOfDigits(num){
//     let digits = 0;
//     while (num > 0) {
//         digits++

//         num = Math.floor(num / 10)
//     }
//     return digits
// }

// console.log(noOfDigits(1234));

function oddEven(num){
    let oddDigit = 0;
    let evenDigit = 0;
    let originalNum = num;
    while(num > 0){
      let lastDigit = num % 10;
      if (lastDigit % 2 === 0) {
        evenDigit++
      }
      else{
        oddDigit++
      }
       num = Math.floor(num / 10)
         

}
console.log("Odd digits:", oddDigit);
console.log("Even digits:", evenDigit);
return {oddDigit, evenDigit}
}
// console.log(oddEven(12345));


function sumOfDigit(num){
    let sumDigit = 0;

    while(num > 0){
        let lastDigit = num % 10;
        sumDigit += lastDigit;

        num = Math.floor(num / 10)
    }
    return sumDigit;
}

console.log(sumOfDigit(123456));
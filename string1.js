// Reverse a string without using .reverse()

function reverse(str){
    let newStr = "";
 for (let i = str.length-1; i >=0 ; i--) {
    newStr += str[i]
}
 return newStr   

}

// console.log(reverse('prasanna'))

// Check if string is a palindrome

function isPalindrome(str){
    return str === str.split('').reverse().join('')
}

// console.log(isPalindrome('nitir'))


// Check if two strings are anagrams

function isAnagram(s,t){
    if (s.length !== t.length) {
        return false
    }

    let obj1 ={}
    let obj2 ={}

    for (let i = 0; i < s.length; i++) {
       obj1[s[i]] = (obj1[s[i]] || 0) + 1
       obj2[t[i]] = (obj2[t[i]] || 0) + 1
    }
     
    for (const key in obj1) {
       if (obj1[key] !== obj2[key]) {
        return false
       }
    }
    return true;
}

let result = isAnagram('listen','silent')
// console.log(result)


// Character frequency count using object

const frequencyCount = (str)=>{
    let countInObject = {}

    for (let i = 0; i < str.length; i++) {
        countInObject[str[i]] = (countInObject[str[i]] || 0) + 1
    }
    return countInObject   

}

// console.log(frequencyCount('prasanna'))


// Longest substring without repeating characters

// function checkSubstring(str,substring){
//    console.log(str.includes(substring))
//    console.log(str.indexOf(substring))
//    console.log(str.slice(0,3))
// }

// console.log(checkSubstring('sunshine','sun'))

function checkSubstring(str, substring) {
   return {
     exists: str.includes(substring),
     index: str.indexOf(substring),
     sliced: str.slice(0)
   };
}

// console.log(checkSubstring("sunshine", "sun"));


// 
function checked(string,substring){
    for(i =0; i <= string.length - substring.length ;i++){
        let match = true
       for (let j = 0; j < substring.length; j++) {
        if (string[i + j] !== substring[j]) {
          match = false;
          break;
        }
    }
    if (match) {
        return true
    } 
    }
    return false
}

console.log(checked('sunshine','moon'))

// 1 create a function that return last element of array

function lastElement(arr) {
  return arr[arr.length - 1];
}

let element = lastElement([1, 2, 3, 5, 6]);
// console.log(element)

// 2 Find the combination of two array

let marvel = ["ironman", "spiderman", "thor"];
let dc = ["superman", "batman", "wonderwoman"];
let all = [...marvel, ...dc];
// console.log(all)

// 3. Generate the random number between 0 to 18

let random_number = Math.floor(Math.random() * 18 + 1);
// console.log(random_number)

// 4. Create a fucntion that takes an array containing both string and number and return a new array containing only the string values.

let check = function (arr) {
  let filterArr = arr.filter((element) => {
    return typeof element === "string";
  });
  return filterArr;
};

// console.log(check(['prasann',1,24,5,'pratiksha','hadke']))

// 5. Find the maximum number in array;

let number = [1, 2, 4, 6, 7, 89, 32];
let maxNumber = number[0];
let secondMax = -Infinity;
// console.log(Math.max(...number))

for (let i = 0; i < number.length; i++) {
  if (number[i] > maxNumber) {
    maxNumber = number[i];
  } else if (number[i] > secondMax && number[i] < maxNumber) {
    secondMax = number[i];
  }
}
// console.log(maxNumber)
// console.log(secondMax)

// 6. Write a function that return the length of a given Object (keys)

let obj = {
  name: "prasanna",
  age: "26",
  college: "DAIMSR",
};

// console.log(Object.keys(obj).length)

let count = 0;

for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    count++;
  }
}
// console.log(count)

// 7. Filter those item in array of object whose have gender male;

let names = [
  {
    name: "praiksha",
    gender: "female",
  },
  {
    name: "prasanna",
    gender: "male",
  },
  {
    name: "ziniya",
    gender: "female",
  },
];

let filter = names.filter((name) => {
  return name.gender === "female";
});

// console.log(filter)

// diff parInt and number

let parInt = parseInt(12.2);
let num = Number(15.11);
// console.log(parInt)
// console.log(num)

// 8. Given an array of strings, return a new array where all strings are in uppercase.

function upperCase(arr) {
  let upp = arr.map((element) => {
    return element.toUpperCase();
  });
  return upp;
}

let upp = upperCase(["prasanna", "hadke"]);
// console.log(upp)

// 9 Check if an object is empty (has no keys)

let dummyobj = {};
let isEmpty = Object.keys(dummyobj).length === 0;
// console.log(isEmpty)

// 10 Create an array of numbers and double each value using .map()

function double(arr) {
  let double = arr.map((element) => {
    return element * 2;
  });
  return double;
}
// console.log(double([1,2,3,4,5]))

// 11. Convert an arrray of strings into a single comma-separated string.

let stringArray = ["apple", "banana", "cherry"];
let commaSeparatedString = stringArray.join(", ");
// console.log(commaSeparatedString); // Output: "apple, banana, cherry"

// 12. Write a function to flatten a nested array into a single array.

let flated = (arr) => {
  return arr.flat(2);
};

// console.log(flated([1,2,3,4,[1,468,[23,4,6]]]))

// 13. Write a function that checks if an elements in array are numbers

function numbs(arr) {
  let valid = arr.map((element) => {
    if (typeof element === "number") {
      return true;
    } else {
      return false;
    }
  });
  return valid;
}

let checking = numbs([1, 2, 4, "pratiksha", "prasanna", 1245]);
// console.log(checking)

// 14. Build a simple isPrime number function to check if a number is prime or not.

function primeOrNot(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
// console.log(primeOrNot(2))

// 15. Create a function that removes duplicate value of a array

function removeD(arr) {
  let dup = new Set([...arr]);
  return dup;
}
// console.log(removeD([1,2,3,45,566,1,2]))

// 21. Create a function that reverse each word of given sentence

function reverse(sentence) {
  return sentence.split("").reverse().join("");
}
// console.log(reverse('Mai hu giyan mai hu sabse takatvar'))

// 22. In a array of number and string , only add those numbers which are not string

function addNum(arr) {
  let sum = arr
    .filter((element) => {
      if (typeof element === "number") {
        return element;
      }
    })
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  return sum;
}

// console.log(addNum([1,2,3,4,'prasnna',234,'6',6]))

// 23 How will you check if number is a integer

let isInt = Number.isInteger(12.33);
let isNum = Number(12.33);
// console.log(isInt)
// console.log(isNum)

// 24. Write a javascript function to reverse a number

function reversenum(num) {
  let nums = num.toString();
  let rev = "";
  for (let i = nums.length - 1; i >= 0; i--) {
    rev += nums[i];
  }
  return Number(rev);
}

// console.log(reversenum(123));

// 25 Write a javascript function that retuns a passed string in alphabeatical order

function alpah(str) {
  return str.split("").sort().join("");
}
// console.log(alpah('prasanna'));

// 26 write a javascript function that accepts a string as a parameter and converts the first letter of each word of the string in the upperCase

function toUpp(string) {
  let firstLetter = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[0]) {
      firstLetter += string[i].toUpperCase();
    } else {
      firstLetter += string[i];
    }
  }
  return firstLetter;
}
// console.log(toUpp('prasanna'));

// function toUpp(string){
//     let result = '';
//     let capitalize = true;
//     for (let i = 0; i < string.length; i++) {
//         if (capitalize && string[i] !== ' ') {
//             result += string[i].toUpperCase();
//             capitalize = false;
//         } else {
//             result += string[i];
//         }
//         if (string[i] === ' ') {
//             capitalize = true;
//         }
//     }
//     return result;
// }
// console.log(toUpp('prasanna hadke is coder')); // Output: Prasanna Hadke

// 27 Write a javascript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array

function nElement(arr, n) {
  if (n === undefined) {
    return arr[0];
  }
  let elements = [];
  for (let i = 0; i < n && i < arr.length; i++) {
    elements.push(arr[i]);
  }
  return elements;
}

// console.log(nElement([1, 2, 3, 5, "pra", "pras", "hadkde", 12, 554], 4));


// 28. Write a javascript function to get the number of occurence of each letter in specified string.

function occurence(string){
    let obj = {}
    for(let i = 0; i < string.length ; i ++){
      if (obj[string[i]]) {
        obj[string[i]] += 1
      } else {
        obj[string[i]] = 1
        
      }
    }
    return obj
}

// console.log(occurence('prasanna'));


// 29. Write a javascript program to find the most frequent item of a array

function mostFrequent(arr) {
    let obj = {};
    let maxCount = 0;
    let mostItem;

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        obj[item] = (obj[item] || 0) + 1;
        if (obj[item] > maxCount) {
            maxCount = obj[item];
            mostItem = item;
        }
    }
    return mostItem;
}

console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5])); // Output:


// 30. shuffle an array

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

console.log(shuffleArray([1, 2, 3, 4, 5]));
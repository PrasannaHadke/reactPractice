let name = [5, 4, 3, 2, 1];

let reverseOrder = [];
for (let i = name.length - 1; i >= 0; i--) {
  reverseOrder.push(name[i]);
  //    console.log(reverseOrder)
}

let numbers = [12, 14, 6, 7, 88, 8, 4, 75];

let maxNumber = numbers[0];
let secondMax = -Infinity;
for (let i = 0; i < numbers.length; i++) {
  if (maxNumber < numbers[i]) {
    secondMax = maxNumber;
    maxNumber = numbers[i];
  } else if (numbers[i] > secondMax && numbers[i] < maxNumber) {
    secondMax = numbers[i];
  }
}
console.log("SecondMax is :", secondMax);
console.log("maxnumber is :", maxNumber);

let arr = [1, 2, 4, 115, 6, 77, 4, 5, 7, 1];

let newArr = [...new Set(arr)];
// console.log(newArr)

let newMaxNum = newArr[0];
for (let i = 0; i < newArr.length; i++) {
  if (newMaxNum < newArr[i]) {
    newMaxNum = newArr[i];
  }
}
// console.log(newMaxNum)

// remove duplicate value in array

let dulicateNumber = [1, 2, 4, 115, 6, 77, 4, 5, 7, 1];

let uniqueNums = [];

for (i = 0; i < dulicateNumber.length; i++) {
  if (!uniqueNums.includes(dulicateNumber[i])) {
    uniqueNums.push(dulicateNumber[i]);
  }
}

// console.log(uniqueNums)

// Moves zero to the end without using filter

let zeros = [0, 1, 2, 3, 0, 6, 80, 45, 80, 0];

function movesZerotoEnd() {
  let noZeros = [];
  let containsZero = [];
  for (i = 0; i < zeros.length; i++) {
    if (zeros[i] !== 0) {
      noZeros.push(zeros[i]);
    } else if (zeros[i] === 0) {
      containsZero.push(zeros[i]);
    }
  }
  return [...noZeros, ...containsZero];
}

console.log(movesZerotoEnd(zeros));

// sum of two number

function twoNum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoNum([1, 2, 35, 6, 7], 9));

// kadane's algorithm

// function maxSubArray(nums){
//     let maxSum = nums[0];
//     let startIndex = 0;
//     let endIndex = 0;

//     for(i=0; i<= nums.length;i++){
//         let currentSum = 0 ;
//         for (let j = i; j < nums.length; j++) {
//            currentSum = currentSum + nums[j];
//            if (currentSum > maxSum) {
//             maxSum = currentSum;
//             startIndex = i;
//             endIndex = j
//            }

//         }
//     }
//     return {
//         sum: maxSum,
//         subArray : nums.slice(startIndex,endIndex + 1)
//     }
// }

// console.log(maxSubArray([5,4,-1,4,-2,-3,-4,13,56]))

// [-2,1,-3,4,-1,2,1,-5,4]
function maxSubArray(nums) {
  let sum = 0;
  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
        sum = 0
    }
}
return max
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

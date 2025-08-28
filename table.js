
let arr = [29, 10, 14, 37,14];

for (let i = 0; i < arr.length - 1; i++) {
  console.log(`Pass ${i + 1}: which is ${arr[i]}`);
  for (let j = 0; j < arr.length - i - 1; j++) {
    console.log(`  Comparing ${arr[j]} and ${arr[j + 1]}`);
    if (arr[j] > arr[j + 1]) {
      // Swap
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      console.log(`  Swapped: ${arr}`);
    } else {
      console.log(`  No swap needed`);
    }
  }
  console.log(`  Result after pass ${i + 1}:`, arr);
  console.log('-----------------------');
}


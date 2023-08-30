/**
 * Ques - Second Largest Number
 * Given an array Arr of size N, print second largest
 * distinct element from an array
 *
 * Input: [12, 25, 1, 10, 34, 1]    ------->>>>>    Output: 34
 * Input: [10, 5, 10]    ------->>>>>    Output: 5
 */

// METHOD_1 -
// TIME_COMPLEXITY : O(n)
// SPACE_COMPLEXITY : O(1)
function findSecondLargest1(arr) {
  if (arr.length < 2) return -1;
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {        // O(n)
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest === Number.NEGATIVE_INFINITY ? -1 : secondLargest;
}

// METHOD_2:
// TIME_COMPLEXITY : O(nlogn)
// SPACE_COMPLEXITY : O(n)
function findSecondLargest2(arr) {
  let uniqueElArr = Array.from(new Set([...arr]));  //O(n)

  if (uniqueElArr.length < 2) return -1;

  uniqueElArr.sort((a, b) => b - a);    //O(nlogn)

  return uniqueElArr[1];
}

console.log(findSecondLargest1([10, 10]));
console.log(findSecondLargest2([12, 25, 1, 10, 34, 1]));

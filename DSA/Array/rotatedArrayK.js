/**
 * Ques - Rotate Array by K
 * Given an integer array nums, rotate the array to the right by tk step
 * where k is non-negative
 *
 * Input: [1, 2, 3, 4, 5, 6, 7], k = 3    ------->>>>>    Output: [5, 6, 7, 1, 2, 3, 4]
 * Input: [-1, -100, 3, 99], k = 2        ------->>>>>    Output: [3, 99, -1, -100]
 */

// METHOD_1 -
// TIME_COMPLEXITY :    O(n)
// SPACE_COMPLEXITY :   O(1)
function reverse(arr, left, right) {
  let temp;
  while (left < right) {
    temp = arr[left];
    arr[left++] = arr[right];
    arr[right--] = temp;
  }
}
function rotateArrayK1(arr,k) {
  let size = arr.length; //O(n)

  if (k > size) k = size % k;

  reverse(arr, 0, size - 1);    // O(n)
  reverse(arr, 0, k-1);         // O(k)
  reverse(arr, k , size-1 );    // O(n-k)

  // [1, 2, 3, 4, 5, 6, 7]    =>  [7, 6, 5, 4, 3, 2, 1]   =>  [5, 6, 7, 4, 3, 2, 1]   =>  [5, 6, 7, 1, 2, 3, 4]
  return arr;
}

// METHOD_2:
// TIME_COMPLEXITY : O(n)
// SPACE_COMPLEXITY : O(1)
function rotateArrayK2(arr, k) {
  let size = arr.length; //O(n)

  if (k > size) k = size % k;

  let spliced = arr.splice(size - k, k); //O(n)
  arr.unshift(...spliced); //O(n)

  return arr;
}

console.log(rotateArrayK1([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateArrayK2([-1, -100, 3, 99], 2));

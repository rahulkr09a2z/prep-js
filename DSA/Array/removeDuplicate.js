/**
 * Ques - Remove Duplicates from Sorted array
 * Given an integer array nums sorted in non-decreasing order, remove
 * the duplicates in-place(can't create a new arr) such that each unique element appears
 * only once. The relative order of the elements should be kept
 * the same. Then return the number of unique elements in nums.
 *
 * Input: [1, 1, 2]    ------->>>>>    Output: 2, [1,2,,_]
 * Input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]    ------->>>>>    Output: 5, [0, 1, 2, 3, 4, _, ,_ ,_]
 */

// METHOD_1 -
// TIME_COMPLEXITY : O(n)
// SPACE_COMPLEXITY : O(n)
function removeDuplicateInSortedArr1(arr) {
  if (arr.length < 1) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  //   return arr.splice(0,i+1);
  return i + 1;
}

// METHOD_2:
// TIME_COMPLEXITY : O(nlogn)
// SPACE_COMPLEXITY : O(n)
function removeDuplicateInSortedArr2(arr) {
  if (arr.length < 1) return 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i + 1, 1);
      i--;
    }
  }
  return arr.length;
}

console.log(removeDuplicateInSortedArr1([1, 1, 2]));
console.log(removeDuplicateInSortedArr2([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

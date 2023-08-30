/**
 * Ques - Give an integer array nums, find the subarray with the largest sum,
 * and return its sum
 *
 * Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]   ------->>>>>    Output: [4, -1, 2, 1]
 * Input: [5, 4, -1, 7, 8]                  ------->>>>>    Output: [5, 4, -1, 7, 8]
 */

// METHOD_1:
// TIME_COMPLEXITY : O(n)
// SPACE_COMPLEXITY : O(1)
function largestSubArrSum1(arr) {
  let maxSum = Number.NEGATIVE_INFINITY;
  let sum = 0,
    count = 0,
    startIdx = -1;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > maxSum) {
      count++;
      maxSum = sum;
      if (startIdx == -1) startIdx = i;
    }
    if (sum < 0) {
      sum = 0;
      count = 0;
      startIdx = -1;
    }
  }
  let endIdx = startIdx + count;
  return {
    maxSum,
    startIdx,
    endIdx: startIdx + count,
    arr: arr.slice(startIdx, endIdx + 1),
  };
}

// METHOD_2:
// TIME_COMPLEXITY : O(n^2)
// SPACE_COMPLEXITY : O(1)
function largestSubArrSum2(arr) {
  let maxSum = Number.NEGATIVE_INFINITY;
  let currSum, startIdx, endIdx;
  for (let i = 0; i < arr.length; i++) {
    currSum = 0;
    for (let j = i; j < arr.length; j++) {
      currSum += arr[j];
      if (currSum > maxSum) {
        maxSum = currSum;
        startIdx = i;
        endIdx = j;
      }
    }
  }
  return {
    maxSum,
    startIdx,
    endIdx: startIdx + endIdx,
    arr: arr.slice(startIdx, endIdx + 1),
  };
}

console.log(largestSubArrSum1([5, 4, -1, 7, 8]));

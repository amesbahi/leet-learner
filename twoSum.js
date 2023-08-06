// LeetCode #3: https://leetcode.com/problems/two-sum/

function twoSum(nums, target) {
  // a map object to hold iterated numbers in the  nums array
  let map = {};
  // iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // store the complement of target in a const to compare against the current iteration
    const complement = target - nums[i];
    // if we have the complement already in our map object, return the indices of the complement
    // and current index in an array
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    // otherwise add the current value from the array to the map object and assign it its index
    map[nums[i]] = i;
  }
  // if there is no complement at all, return null
  return null;
}

console.log(twoSum([1, 2, 3, 4], 3));

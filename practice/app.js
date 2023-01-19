let nums = [10, 3, 18, 18, 8, 4, 2];
function getSecondLargest(nums) {
 let newNums = nums.sort(function (a, b) {
  return b-a;
 })
 const unique = [...new Set(newNums)];
 console.log(unique[1]);
}

getSecondLargest(nums)
let nums = [1, 2, 5, 3, 4];

function modifyArray(nums) {
 let newNums = nums.map(num => {
  if (num % 2 == 0) {
  return num * 2;
  } else if (num % 2 !== 0) {
 return  num * 3;
  }
 })
 console.log(newNums);
}

modifyArray(nums)
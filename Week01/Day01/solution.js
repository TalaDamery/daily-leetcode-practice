var containsNearbyDuplicate = function(nums, k) {
  const m = {};

  for (let i = 0; i < nums.length; i++) {
      const val = nums[i];
      if (m.hasOwnProperty(val) && i - m[val] <= k) {
          return true;
      }
      m[val] = i;
  }

  return false;
};
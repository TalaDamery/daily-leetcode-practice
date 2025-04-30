/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const map = new Map();
  let count = 0;
  let flag = false;

  for (let ch of s) {
      map.set(ch, (map.get(ch) || 0) + 1);
  }

  for (let freq of map.values()) {
      if (freq % 2 === 0) {
          count += freq;
      } else {
          count += freq - 1;
          flag = true;
      }
  }

  if (flag) 
      count += 1;

  return count;
};
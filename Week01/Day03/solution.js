/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    nums.sort((a, b) => a - b); 
    const res = new Set();

    for (let i = 0; i < nums.length - 2; i++) {
        let p1 = i + 1;
        let p2 = nums.length - 1;

        while (p1 < p2) {
            const sum = nums[i] + nums[p1] + nums[p2];

            if (sum === 0) {
                const r = [nums[i], nums[p1], nums[p2]];
                res.add(JSON.stringify(r)); 
                p1++;
            } else if (sum < 0) {
                p1++;
            } else {
                p2--;
            }
        }
    }

    return Array.from(res).map(r => JSON.parse(r));
}

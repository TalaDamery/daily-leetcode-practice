/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let a = new Array(26).fill(0);
    let b = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        a[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    for (let i = 0; i < t.length; i++) {
        b[t.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }

    return true;
};

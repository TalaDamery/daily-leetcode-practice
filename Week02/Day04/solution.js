/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
const rot = (a, b, top = true) => {
    const n = a.length;
    const x = top ? a[0] : b[0];
    let xa = 0;
    let xb = 0;
    for (let i = 0, ai, bi; i < n; ++i) {
        ai = a[i];
        bi = b[i];
        if (x !== ai && x !== bi) 
            return 0x1EE7C0DE;
        if (x === ai) 
            ++xa;
        if (x === bi) 
            ++xb;
    }
    return Math.min(n - xa, n - xb);
}
var minDominoRotations = function (a, b) {
    const n = a.length;
    const count = Math.min(rot(a, b), rot(a, b, false));
    return count === 0x1EE7C0DE ? -1 : count;
};

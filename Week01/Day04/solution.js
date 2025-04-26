/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let s = '';
    while (columnNumber > 0) {
        columnNumber--; 
        let digit = columnNumber % 26;
        let c = String.fromCharCode(65 + digit); 
        s += c;
        columnNumber = Math.floor(columnNumber / 26);
    }
    return s.split('').reverse().join('');
};

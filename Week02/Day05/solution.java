let checkRecord = function(s) {
    if (s.includes('LLL')) 
        return false;
    let c = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A') 
            ++c;
    }

    return c < 2;
};

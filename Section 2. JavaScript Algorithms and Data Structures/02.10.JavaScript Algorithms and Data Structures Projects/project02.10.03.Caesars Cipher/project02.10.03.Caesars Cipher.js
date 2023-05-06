function rot13(str) {
    let res = '';

    for (let i = 0; i < str.length; i++) {
        let cipher = str.charCodeAt(i);

        if (cipher >= 65 && cipher <= 77) {
            res = res.concat(String.fromCharCode(cipher + 13));
        } else if (cipher >= 78 && cipher <= 90) {
            res = res.concat(String.fromCharCode(cipher - 13));
        } else {
            res = res.concat(str.charAt(i));
        }
    }

    return res;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
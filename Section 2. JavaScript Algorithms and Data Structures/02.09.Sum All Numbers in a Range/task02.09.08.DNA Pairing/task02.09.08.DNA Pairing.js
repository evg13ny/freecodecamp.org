function pairElement(str) {
    let res = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'A') res.push([str[i], 'T']);
        if (str[i] === 'T') res.push([str[i], 'A']);
        if (str[i] === 'C') res.push([str[i], 'G']);
        if (str[i] === 'G') res.push([str[i], 'C']);
    }

    return res;
}

console.log(pairElement("GCG"));

console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));
function uniteUnique(arr) {
    let res = [];
    let args = [...arguments];

    for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < args[i].length; j++) {
            if (res.indexOf(args[i][j]) == -1) {
                res.push(args[i][j]);
            }
        }
    }

    return res;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]));
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));
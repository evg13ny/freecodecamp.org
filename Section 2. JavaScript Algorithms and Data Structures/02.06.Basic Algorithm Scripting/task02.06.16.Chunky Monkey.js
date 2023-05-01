function chunkArrayInGroups(arr, size) {
    let res = [];
    let temp = [...arr];

    for (let i = 0; i < temp.length; i += size) {
        res.push(arr.splice(0, size));
    }

    return res;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
function frankenSplice(arr1, arr2, n) {
    let res = [...arr2];

    res.splice(n, 0, ...arr1);

    return res;
}

console.log(frankenSplice([1, 2, 3, 4], [], 0));
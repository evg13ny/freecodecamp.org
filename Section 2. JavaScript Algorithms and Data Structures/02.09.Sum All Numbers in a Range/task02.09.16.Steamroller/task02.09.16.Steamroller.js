function steamrollArray(arr) {
    return Array.isArray(arr) ? [].concat(...arr.map(steamrollArray)) : arr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
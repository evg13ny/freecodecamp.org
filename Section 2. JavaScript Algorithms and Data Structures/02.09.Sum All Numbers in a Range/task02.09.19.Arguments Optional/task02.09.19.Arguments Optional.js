function addTogether() {
    let [arg1, arg2] = [...arguments];

    if (typeof arg1 != 'number') return undefined;

    if (arguments.length == 1) return (arg2) => addTogether(arg1, arg2);

    if (typeof arg2 != 'number') return undefined;

    return arg1 + arg2;

}

console.log(addTogether(2, 3));

console.log(addTogether(23, 30));
console.log(addTogether(5)(7));
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));
console.log(addTogether(2, "3"));
console.log(addTogether(2)([3]));
console.log(addTogether("2", 3));
console.log(5, undefined);
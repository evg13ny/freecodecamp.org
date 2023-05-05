function sumAll(arr) {
    let lower = Math.min(arr[0], arr[1]);
    let upper = Math.max(arr[0], arr[1]);

    let total = 0;

    for (let i = lower; i <= upper; i++) total += i;

    return total;
}

// (max * (max + 1) - (min - 1) * min)) / 2;

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));
function smallestCommons(arr) {
    let result = 0;

    function greatestCommonDivisor(a, b) {
        return !b ? a : greatestCommonDivisor(b, a % b);
    }

    function leastCommonMultiple(a, b) {
        return a * (b / greatestCommonDivisor(a, b));
    }

    if (arr[0] > arr[1]) (arr = [arr[1], arr[0]]);

    for (let x = result = arr[0]; x <= arr[1]; x++) {
        result = leastCommonMultiple(x, result);
    }

    return result;
}

console.log(smallestCommons([1, 5]));

console.log(smallestCommons([5, 1]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));
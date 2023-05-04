const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    // Only change code below this line
    return arr.slice().sort(function (a, b) {
        return a - b;
    });

    // Only change code above this line
}

console.log(nonMutatingSort(globalArray));
console.log(globalArray);

console.log(nonMutatingSort([1, 30, 4, 21, 100000]));
console.log(nonMutatingSort([140000, 104, 99]));
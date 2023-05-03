Array.prototype.myFilter = function (callback) {
    const newArray = [];
    // Only change code below this line
    for (let i = 0; i < this.length; i++) {
        let elem = this[i];
        let check = callback(elem, i, this);

        if (check) {
            newArray.push(elem);
        }
    }
    // Only change code above this line
    return newArray;
};

console.log([23, 65, 98, 5, 13].myFilter(item => item % 2));
console.log(["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi"));
console.log([1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index));
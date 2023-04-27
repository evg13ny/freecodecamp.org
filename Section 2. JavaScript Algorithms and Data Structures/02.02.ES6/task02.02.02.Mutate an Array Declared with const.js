const s = [5, 7, 2];
function editInPlace() {
    // Only change code below this line

    // Using s = [2, 5, 7] would be invalid
    let i = s.pop();
    s.unshift(i);
    return s;
    // Only change code above this line
}
editInPlace();
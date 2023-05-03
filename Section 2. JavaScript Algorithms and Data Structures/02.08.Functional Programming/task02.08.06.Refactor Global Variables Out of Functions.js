// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr, bookName) {

    return [...arr, bookName];

    // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {

    return arr.filter((item) => item != bookName);

    // Change code above this line
}

console.log(add(bookList, "A Brief History of Time"));
console.log(remove(bookList, "On The Electrodynamics of Moving Bodies"));
console.log(remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies"));
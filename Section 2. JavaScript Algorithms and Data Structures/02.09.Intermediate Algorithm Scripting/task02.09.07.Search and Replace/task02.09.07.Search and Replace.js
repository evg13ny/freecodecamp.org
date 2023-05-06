function myReplace(str, before, after) {
    let n = str.search(before);
    let regex = /[A-Z]/;

    let replace = regex.test(str.charAt(n)) ? after.charAt(0).toUpperCase() + after.slice(1) : after.toLowerCase();

    return str.slice(0, n) + replace + str.slice(n + before.length);

    // return str.replace(before, replace);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
console.log(myReplace("His name is Tom", "Tom", "john"));
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));
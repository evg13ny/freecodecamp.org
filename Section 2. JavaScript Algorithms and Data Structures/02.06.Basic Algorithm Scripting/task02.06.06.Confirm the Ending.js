function confirmEnding(str, target) {
    return target == str.slice(-1 * target.length);
}

console.log(confirmEnding("Bastian", "n"));
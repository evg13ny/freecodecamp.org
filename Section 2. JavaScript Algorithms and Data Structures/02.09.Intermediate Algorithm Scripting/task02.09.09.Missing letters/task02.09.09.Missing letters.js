function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    let first = alphabet.search(str[0]);
    let last = alphabet.search(str[str.length - 1]);

    for (let i = first; i <= last; i++) {
        if (str.indexOf(alphabet[i]) == -1) return alphabet[i];
    }

    return undefined;
}

console.log(fearNotLetter("abce"));

console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
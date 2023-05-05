function translatePigLatin(str) {
    let vowelRegex = /[aeiou]/i;
    let firstVowel = str.search(vowelRegex);

    switch (firstVowel) {
        case 0:
            str = str.concat('way');
            break;
        case -1:
            str = str.concat('ay');
            break;
        default:
            str = str.slice(firstVowel).concat(str.slice(0, firstVowel)).concat('ay');
            break;
    }

    return str;
}

console.log(translatePigLatin("consonant"));

console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"));
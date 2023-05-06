function spinalCase(str) {
    return str.split(/\W|(?=[A-Z])|_/).join('-').toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));

console.log(spinalCase('thisIsSpinalTap'));
console.log(spinalCase('The_Andy_Griffith_Show'));
console.log(spinalCase('Teletubbies say Eh-oh'));
console.log(spinalCase('AllThe-small Things'));
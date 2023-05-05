function convertHTML(str) {
    let characters = ['&', '<', '>', '"', "'"];
    let entities = ['&amp;', '&lt;', '&gt;', '&quot;', '&apos;'];

    for (let i = 0; i < characters.length; i++) {
        str = str.replaceAll(characters[i], entities[i])
    }

    return str;
}

console.log(convertHTML("Dolce & Gabbana"));

console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));
console.log(convertHTML("abc"));
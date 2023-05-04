// Only change code below this line
function urlSlug(title) {
    return title.split(/\W/).filter(word => word).join('-').toLowerCase();
}
// Only change code above this line
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));

console.log(urlSlug("Winter Is Coming"));
console.log(urlSlug(" Winter Is  Coming"));
console.log(urlSlug("Hold The Door"));
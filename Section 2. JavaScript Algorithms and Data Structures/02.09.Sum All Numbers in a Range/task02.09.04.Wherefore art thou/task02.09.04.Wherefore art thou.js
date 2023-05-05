function whatIsInAName(collection, source) {
    return collection.filter((item) => {
        return Object.entries(source).every(([key, value]) => {
            return item[key] == value;
        });
    });
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
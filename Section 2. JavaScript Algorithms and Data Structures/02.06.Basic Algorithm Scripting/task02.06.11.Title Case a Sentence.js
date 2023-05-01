function titleCase(str) {
    return str.toLowerCase().replace(/(^\w|\s\w)/g, l => l.toUpperCase());;
}

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
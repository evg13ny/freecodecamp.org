function largestOfFour(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        let biggest = arr[i][0];

        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > biggest) biggest = arr[i][j]
        }
        res.push(biggest);
    }

    return res;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
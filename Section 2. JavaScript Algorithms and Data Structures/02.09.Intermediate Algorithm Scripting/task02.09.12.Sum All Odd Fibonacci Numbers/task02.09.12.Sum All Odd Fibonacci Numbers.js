function sumFibs(num) {
    let res = 0;

    let fib = [1, 0];
    while (fib[0] + fib[1] <= num) {
        fib.unshift(fib[0] + fib[1]);
    }

    fib.forEach((n) => {
        if (n % 2 == 1) res += n;
    });

    return res;

    // return fib.filter((x) => x % 2 == 1)
    //           .reduce((a, b) => a + b);
}

console.log(sumFibs(4));

console.log(sumFibs(1));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(75024));
console.log(sumFibs(75025));
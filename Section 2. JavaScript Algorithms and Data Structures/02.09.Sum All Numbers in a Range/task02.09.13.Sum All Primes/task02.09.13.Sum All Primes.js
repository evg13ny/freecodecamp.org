function sumPrimes(num) {
    let res = 0;

    function isPrime(n) {
        if (n <= 1) return false;
        if (n % 2 == 0 && n > 2) return false;

        let s = Math.sqrt(n);
        for (let i = 3; i <= s; i += 2) {
            if (n % i == 0) return false;
        }

        return true;
    }

    for (let j = 0; j <= num; j++) {
        if (isPrime(j)) res += j;
    }

    return res;
}

console.log(sumPrimes(10));

console.log(sumPrimes(977));
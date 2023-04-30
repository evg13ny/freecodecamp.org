function palindrome(str) {
    let s = str.toLowerCase().replace(/[^a-z0-9]+/g, "");

    return s == s.split("").reverse().join("");
}

palindrome("eye");
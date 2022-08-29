function isPalindrome(str) {
    const strrev = str.toUpperCase().split("").filter(num=>num!=="-").reverse().join("");
    const strnew = str.toUpperCase().split("").filter(num=>num!=="-").join("");
    return strnew === strrev? true: false;
}

export {isPalindrome};
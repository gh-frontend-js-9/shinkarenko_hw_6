function numbers(a, b, c, d) {
    let numbersArr = [a, b, c, d]
    for (let i = 0; i < numbersArr.length; i++) {
        if (numbersArr[i] % 3 == 0 && numbersArr[i] % 7 !== 0) {
            numbersArr[i] = "foo";
        }
        else if (numbersArr[i] % 7 == 0 && numbersArr[i] % 3 !== 0) {
            numbersArr[i] = "bar";
        }
        else if (numbersArr[i] % 3 == 0 && numbersArr[i] % 7 == 0) {
            numbersArr[i] = "foobar";
        }
    }
    return numbersArr;
}
console.log(numbers(3, 14, 21, 10));
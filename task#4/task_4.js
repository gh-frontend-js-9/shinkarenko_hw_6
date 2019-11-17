function checkStrings(firstString, secondString) {
    console.log("First string: " + firstString);
    console.log("Second string: " + secondString);
    let a = 0;
    for (let i = 0; i < firstString.length; i++) {
        for (let j = 0; j < secondString.length; j++) {
            if (firstString[i] == secondString[j]) {
                a++;
            }
        }
    }//searches for the same letters
    let b = a / (firstString.length + secondString.length) * 100;//finds the percent of same letters
    console.log("Percent of same letters in the strings are: " + b);
}
checkStrings("Hello world", "I started learning javascript");


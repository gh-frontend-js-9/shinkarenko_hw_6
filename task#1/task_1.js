let numbers = [5, 3, 10, 15];
//the sum function 
function sum() {
    let a = numbers.reduce(function (sum, current) {
        return sum + current;
    })
    return a;
}
console.log("the sum of the array = " + sum());

//the min function
function min() {
    let b = Math.min.apply(null, numbers);
    return b;
}
console.log("the minimum element of the array = " + min());

//the max function
function max() {
    let c = Math.max.apply(null, numbers);
    return c;
}
console.log("the maximum element of the array = " + max());

//the replace min and max function
function replace() {
    let min = Math.min.apply(null, numbers);
    let max = Math.max.apply(null, numbers);
    let d = numbers.indexOf(Math.max.apply(null, numbers));
    let e = numbers.indexOf(Math.min.apply(null, numbers));
    numbers[d] = min
    numbers[e] = max
    return numbers
}
console.log("an array of reversed min and max elements = ", replace())

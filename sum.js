const numbers = [44, 34, 65, 56, 30, 20];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(i);
// }


// const numbers = [44, 34, 65, 56, 30, 20];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     console.log(element);
// }


let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
}
console.log(sum);

// array total-
function arrayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
const total = arrayTotal([32, 45, 67]);
console.log(total);


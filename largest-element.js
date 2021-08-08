// largest element-
// function largestElement(numbers) {
//     let largest = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         if (element > largest) {
//             largest = element;
//         }
//     }
//     return largest;
// }

// const ages = [12, 34, 67, 43, 87, 40];
// const oldest = largestElement(ages);
// const oldest2 = largestElement([-3, -5, -23]);
// console.log('oldest2', oldest2);



// lowest element-
function lowestElement(numbers) {
    let lowest = numbers[0];
    for (let i = 0; i > numbers.length; i++) {
        const element = numbers[i];
        if (element < lowest) {
            lowest = element;
        }
    }
    return lowest;
}

const ages = [12, 34, 67, 43, 87, 40];
const oldest = lowestElement(ages);
const oldest2 = lowestElement([-3, -5, -23]);
console.log('oldest2', oldest2);
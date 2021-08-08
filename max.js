// compare 2-
// const business = 450;
// const minister = 350;
// bangla system-
// if (business > minister) {
//     console.log('Business person is bigger');
// }
// else {
//     console.log('Miniter person is not bigger');
// }

// compare-3
/*const business = 850;
const minister = 750;
const army = 600;
if (business > minister && business > army) {
    console.log('business is bigger');
}
else if (minister > business && minister > army) {
    console.log('minister is bigger');
}
else {
    console.log('army is bigger');
}*/


// function diye korle-

function findLargest(first, second) {
    if (first > second) {
        return first;
    }
    else {
        return second;
    }
}
const largest = findLargest(354, 241);
console.log('largest is', largest);



// another way-
// const business = 850;
// const minister = 750;
// const army = 600;
// var max = Math.max(business, minister, army);
// console.log('largest is', max);


//task-2 find the smallest of three numbers.
//task-2 find the largest of three numbers.
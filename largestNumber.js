function largestNumber(array){
    let largestNumber = array[0];

    for(let i = 1; i < array.lenght; i++){
        if (array [i] > largestNumber)
        largestNumber = array[i];
    }
    return largestNumber;
}
let array = [14, 15, 56, 87];
console.log(largestNumber(array));
let array1 = [54, 87, 94, 12];
console.log(largestNumber(array1));
const numbers = [12, 13, 14, 15, 16, 17, 18, 19];

const numsReturn = numbers
    .map((num) => num * 10)
    .map((num) => num + 7)
    .filter((num) => num >= 150);

console.log(numsReturn);
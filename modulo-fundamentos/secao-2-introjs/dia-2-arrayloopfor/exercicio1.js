let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumNumbers = 0;
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
    sumNumbers = sumNumbers + numbers[index];
}
console.log('A soma de todos os números no array é: ' + sumNumbers);
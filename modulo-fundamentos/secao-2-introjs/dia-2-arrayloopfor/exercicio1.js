let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumNumbers = 0;
let meanNumbers = 0;

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
    sumNumbers = sumNumbers + numbers[index];
}

meanNumbers = sumNumbers / numbers.length;
console.log('A soma de todos os números no array é: ' + sumNumbers);
console.log('A média entre os números do array é: ' + meanNumbers);

if (meanNumbers > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}
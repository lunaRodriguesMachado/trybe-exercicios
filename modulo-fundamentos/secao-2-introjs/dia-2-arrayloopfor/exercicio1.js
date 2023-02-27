let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumNumbers = 0;
let meanNumbers = 0;
let highestNumber = 0;
let oddNumbers = 0;
let lowestNumber = 646854865498465;

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
    sumNumbers = sumNumbers + numbers[index];
    if (numbers[index] > highestNumber) {
        highestNumber = numbers[index]
    }
    if (numbers[index] % 2 !== 0) {
        oddNumbers = oddNumbers += 1;
    }
    if (numbers[index] < lowestNumber) {
        lowestNumber = numbers[index];
    }
}

meanNumbers = sumNumbers / numbers.length;
console.log('A soma de todos os números no array é: ' + sumNumbers);
console.log('A média entre os números do array é: ' + meanNumbers);
console.log('O maior número é: ' + highestNumber);
if (oddNumbers === 0) {
    console.log('Nenhum valor ímpar encontrado');
} else {
    console.log('Existem ao todo ' + oddNumbers + ' números ímpares no array')
}
if (meanNumbers > 20) {
    console.log('Valor da média maior que 20');
} else {
    console.log('Valor da média menor ou igual a 20');
}
console.log('O menor número é: ' + lowestNumber);

let oneToTwentyFive = [];
for (let pushNumbers = 1; pushNumbers <= 25; pushNumbers += 1) {
    oneToTwentyFive.push(pushNumbers);
}
console.log(oneToTwentyFive);

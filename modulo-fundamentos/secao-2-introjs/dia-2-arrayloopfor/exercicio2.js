let factorial = 10;
let result = 1;

for (let multiplyCounter = factorial; multiplyCounter >= 1; multiplyCounter -= 1) {
    result = result * multiplyCounter
}
console.log(result)
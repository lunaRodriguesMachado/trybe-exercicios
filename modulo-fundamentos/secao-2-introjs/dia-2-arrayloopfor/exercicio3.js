let word = 'tryber'
let wordBackwards = word.split('').reverse().join('');
console.log(wordBackwards);

let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggestWord = '';
let smallestWord = '';
for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > biggestWord.length) {
        biggestWord = array[index];
    }
}
console.log(biggestWord);
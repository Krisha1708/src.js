//Problem Statement 1 

const strings = ["apple", "banana", "apple", "orange", "banana", "pear", "apple"]
const UniqueString = strings.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
}, {});

console.log(UniqueString); // Output { apple: 3, banana: 2, orange: 1, pear: 1 }


// Problem Statement 2

const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
function sumDivisibleBy3Or5(numbers) {
    return numbers.reduce((acc, cv) => {
        if (cv % 3 === 0 || cv % 5 === 0) {
            return acc + cv;
        }
        return acc;
    }, 0);
}

const Array = sumDivisibleBy3Or5(numbers);
console.log(Array); // Output 1817


// Problem Statment 3
const words = [
  "racecar",
  "hello",
  "deified",
  "world",
  "level",
  "programming",
  "radar",
  "civic",
  "javascript",
];

function filterPalindromes(string) {
    return string.filter(str => {
        const cleanedStr = str.replace(/[^a-zA-Z0-9]/, '').toLowerCase();
        return cleanedStr === cleanedStr.split('').reverse().join('');
    });
}

const palindromes = filterPalindromes(words)
console.log(palindromes); // Output  ["racecar","deified","level","radar","civic"]


// Problem Statment 4
 const filePaths = [
      "/images/pic1.jpg",
      "/images/pic2.png",
      "/assets/img/background.jpg",
      "/assets/img/logo.png",
      "/downloads/document.pdf",
      "/downloads/image.png",
      "/downloads/image.jpg",
    ];

function filterImageFiles(filePaths) {
    return filePaths.filter(path => {
        const extension = path.split('.').pop().toLowerCase();
        return extension === 'png' || extension === 'jpg';
    });
}

const filterImage = filterImageFiles(filePaths);
console.log(filterImage); // Output ["/images/pic1.jpg","/images/pic2.png","/assets/img/background.jpg","/assets/img/logo.png","/downloads/image.png","/downloads/image.jpg"]


// Problem Statement 5
const string = [
      "Hello",
      "world",
      "this",
      "is",
      "an",
      "example",
      "array",
      "of",
      "strings",
    ];

function swapFirstAndLastLetters(string) {
    return string.map(stri => {
        if (stri.length <= 1) {
            return stri; // Return the string as is if it has 0 or 1 character
        }
        const firstLetter = stri.charAt(0);
        const lastLetter = stri.charAt(stri.length - 1);
        const middlePart = stri.slice(1, -1);
        return lastLetter + middlePart + firstLetter;
    });
}

const SwappedLetter = swapFirstAndLastLetters(string)
console.log(SwappedLetter);

// Problem Statment 6
const sentences = [
      "The quick brown fox jumps over the lazy dog.",
      "She sells seashells by the seashore.",
      "I have a dream that one day this nation will rise up.",
      "To be or not to be, that is the question.",
      "In the beginning, God created the heavens and the earth.",
    ];

function logWordCounts(sentences) {
    sentences.forEach((sentence, index) => {
        const wordCount = sentence.split(/\s+/).filter(Boolean).length; // Split by whitespace and filter out empty strings
        console.log(`Sentence ${index + 1} contains ${wordCount} words.`);
    });
}

logWordCounts(sentences);


// Problem Statment 7
const digits = [1, 2, 3, 4, 5, 7];
 
function sumOfSquaresOfOddNumbers(digits) {
    return digits
        .filter(num => num % 2 !== 0) // Step 1: Filter for odd numbers
        .map(num => num ** 2)         // Step 2: Square each odd number
        .reduce((sum, square) => sum + square, 0); // Step 3: Sum the squares
}

const SqOfOddNumbers = sumOfSquaresOfOddNumbers(digits)
console.log(SqOfOddNumbers); // Output 84

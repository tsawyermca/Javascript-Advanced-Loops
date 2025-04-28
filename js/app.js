//Advanced Loops

//Log only even numbers between 1 and 50

for(let i = 1; i <= 50; i++){
    if(i % 2 === 0) {
        console.log(i + " is even");
    }
}

//Count Vowels in a string

let sentence = "JavaScript is awesome";
let vowels = "aeiouAEIOU";
let vowelCount = 0;

for(let ii = 0; ii < sentence.length; ii++){
    if(vowels.includes(sentence[i])){
        vowelCount++;
    }
}
console.log(`Number of vowels: ${vowelCount}`);
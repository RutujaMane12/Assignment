const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    // initialize count
    let count = 0;
    const vow=[];

    // loop through string to test if each character is a vowel
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            vow.push(letter);
            count++;
        }
    }
    const uniqueCount = new Set(vow).size;
    // console.log(uniqueCount); 

    // return number of vowels
    return uniqueCount;
}

// take input
const string = "CITIUSTECH";

const result = countVowel(string);

console.log(result);
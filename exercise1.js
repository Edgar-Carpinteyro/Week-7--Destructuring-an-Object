function reverseVowelsAndReplaceL(inputString) {
    function isVowel(char) {
        return "aeiouAEIOU".includes(char);
    }

    // .split takes string, iterates over the characters, and converts each to an array element.
    const characters = inputString.split("");

    //using the filter method, we will check if the element in our character array si a vowel.
    //if so, we will store it in our vowels array.
    const vowels = characters.filter(char => isVowel(char));

    const reversedVowels = vowels.reverse();
    let vowelIndex = 0;

    for (let i = 0; i < characters.length; i++) {
        if (isVowel(characters[i])) {
            characters[i] = reversedVowels[vowelIndex];
            vowelIndex++;
        }
    }

    vowels.reverse();

    for (let i = 0; i < characters.length; i++) {
        if (characters[i] === "l" || characters[i] === "L" ) {
            characters[i] = "1";
        }
    }

    const result = characters.join("");
    return result;

}

// const inputString = "HelLo"
const inputString = "Savor the sweet flavors of Life, Overflowing with Success – just like a scoop of Vanilla!";
const output = reverseVowelsAndReplaceL(inputString);
console.log(output);

const replaceL = document.getElementById("replaceL");
replaceL.innerText = output;


function reverseVowelsAndReplaceO(output) {
    function isVowel(char) {
        return "aeiouAEIOU".includes(char);
    }

    // .split takes string, iterates over the characters, and converts each to an array element.
    const characters = output.split("");

    //using the filter method, we will check if the element in our character array si a vowel.
    //if so, we will store it in our vowels array.
    const vowels = characters.filter(char => isVowel(char));

    vowels.reverse();

    for (let i = 0; i < characters.length; i++) {
        if (characters[i] === "o" || characters[i] === "O") {
            characters[i] = "0";
        }
    }

    let vowelIndex = 0;

    for (let i = 0; i < characters.length; i++) {
        if (isVowel(characters[i])) {
            characters[i] = vowels[vowelIndex];
            vowelIndex++;
        }
    }

    const result = characters.join("");
    return result;

}
const output2 = reverseVowelsAndReplaceO(output);
console.log(output2);

const replaceO = document.getElementById("replaceO");
replaceO.innerText = output2;


function reverseVowelsAndReplaceS(putput2) {
    function isVowel(char) {
        return "aeiouAEIOU".includes(char);
    }

    // .split takes string, iterates over the characters, and converts each to an array element.
    const characters = putput2.split("");

    //using the filter method, we will check if the element in our character array si a vowel.
    //if so, we will store it in our vowels array.
    const vowels = characters.filter(char => isVowel(char));

    vowels.reverse();

    for (let i = 0; i < characters.length; i++) {
        if (characters[i] === "s" || characters[i] === "S") {
            characters[i] = "5";
        }
    }

    let vowelIndex = 0;

    for (let i = 0; i < characters.length; i++) {
        if (isVowel(characters[i])) {
            characters[i] = vowels[vowelIndex];
            vowelIndex++;
        }
    }

    const result = characters.join("");

    return result;

}

const output3 = reverseVowelsAndReplaceS(output2);
console.log(output3);

const replaceS = document.getElementById("replaceS");
replaceS.innerText = output3;











//Parameters: functions names, .split, . join(), . includes, .replace(), parameter of input (string), reverse

//Returns: Ls need to be 1's, O's need to be 0's, S's need to be 5's. Preserve position of consonants of the input string.

//Edge Cases: uppercase and lowercase vowels

//Pseudocode: First function will receive a string, we will need to iterate over the characters. We can do that by slitting the string and storing it as an array. 
// - Check each element for a vowel, in both uppercase and lowercase format.
// -Store all the vowels in a new array
// -Revers the new array so that the vowels are in a reverse order
// - Check the original array for which indices contain a vowel
// -When we come across one, give it the first value in our reversed vowels array and iterate over time
// -Then replace our specified vowels with numbers
// -Then we're left with an altered original array that we need to join into a string
// -That string is the going to be fed for the next function 

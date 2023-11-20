# Week-7-Destructuring-an-Object
## Write a 3 functions - reverseVowelsAndReplaceL(), reverseVowelsAndReplaceO(), reverseVowelsAndReplaceS(). Apply the following rules:
- Each function will receive a string, sometimes provided by other functions
- Each function should reverse the vowels
- Each function should console.log the reversed vowels
- Use .split(), .join(), .includes() and .replace()
## The input string may contain uppercase and lowercase letters, spaces, and punctuation. You should preserve the position of other characters.
1. ReverseVowelsAndReplaceL():
- Replaces all 'L's (uppercase and lowercase) with '1's (ones)
- Calls reverseVowelsAndReplaceO() while providing it reverseVowelsAndReplaceL’s reversed string
2. ReverseVowelsAndReplaceO():
- Takes reverseVowelsAndReplaceL’s reversed string and reverses it AGAIN
- Replaces all 'O's (uppercase and lowercase) with '0's (zeros)
- Calls reverseVowelsAndReplaceS() while providing it reverseVowelsAndReplaceO’s reversed string
3. ReverseVowelsAndReplaceS():
- Replaces all 'S's (uppercase and lowercase) with '5's (fives)
- Consoles and returns the final reversed string

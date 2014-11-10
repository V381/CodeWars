/**
 * Created by JS on 11/10/2014.
 */

//Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:
//
//    a -> 1
//
//e -> 2
//
//i -> 3
//
//o -> 4
//
//u -> 5
//
//For example, encode("hello") would return "h2ll4" There is no need to worry about uppercase vowels in this kata.
//
//    Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.
//
//    For example, decode("h3 th2r2") would return "hi there"
//
//For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

function encode(string){
    var i, index, index2, j, muho, nums, vowels, _i, _j, _len, _len1;
    vowels = ["a", "e", "i", "o", "u"];
    muho = string.split("");
    for (index2 = _i = 0, _len = vowels.length; _i < _len; index2 = ++_i) {
        i = vowels[index2];
        for (index = _j = 0, _len1 = muho.length; _j < _len1; index = ++_j) {
            j = muho[index];
            if (i === j) {
                muho.splice(index, 1, index2 + 1);
            }
        }
    }
    return muho.join("");
}

//turn numbers back into vowels
function decode(string){
    var hm, i, index, index2, j, muho, vowels, _i, _j, _len, _len1;
    vowels = ["a", "e", "i", "o", "u"];
    muho = string.split("");
    hm = [1, 2, 3, 4, 5];
    for (index2 = _i = 0, _len = vowels.length; _i < _len; index2 = ++_i) {
        i = vowels[index2];
        for (index = _j = 0, _len1 = muho.length; _j < _len1; index = ++_j) {
            j = muho[index];
            if (j === index2.toString()) {
                muho.splice(index, 1, vowels[index2 - 1]);
            }
        }
    }
    return muho.join("");
}
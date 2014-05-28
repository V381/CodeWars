/**
 * Created by JS on 5/28/14.
 */

function reverseWords(str) {
    return str.split(" ").map(function (item) {
        return item.split("").reverse().join("");
    }).join(" ");
}
reverseWords("This is an example!");
/**
 * Created by JS on 5/22/14.
 */


function createPhoneNumber(numbers){
    var splice2 = numbers.splice(3,3);
    var splice3 = numbers.splice(3,4);
    var test = "(" + numbers.slice(0,3) + ")";
    return test.replace(/,/g, "")
        + " "
        + splice2.join("")
        + "-"
        + splice3.join("");
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
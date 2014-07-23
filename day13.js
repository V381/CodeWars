
/*
 Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
*/

var greet = function(name) {
    switch (name) {
        case name.toUpperCase():
            return "Hello " + name.charAt(0).toUpperCase() + name.substr(1).toLowerCase() + "!";
            break;
        case name.toLowerCase():
            return "Hello " + name.charAt(0).toUpperCase() + name.substr(1).toLowerCase() + "!";
            break;
        case name:
            return "Hello " + name.charAt(0).toUpperCase() + name.substr(1).toLowerCase() + "!";
        default:
            return "Hello Name!";
    }
};

greet("maya") ;// returns "Hello Maya!"
greet("JACK"); // returns "Hello Jack!"
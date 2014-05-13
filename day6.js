/**
 * Created by JS on 5/13/14.
 */

// Object.keys Method = returns an array of a given object's own enumerable properties
// Map Method = Add value to every element of array(callback, index, array)
// Join Method = Add , between elements or any other string

function solution(pairs){
    return Object.keys(pairs).map(function(e){return e +" = " + pairs[e]}).join(",");
}
solution({a: 1, b: '2'});

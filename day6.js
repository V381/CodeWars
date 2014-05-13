/**
 * Created by JS on 5/13/14.
 */

function solution(pairs){
    return Object.keys(pairs).map(function(e){return e +" = " + pairs[e]}).join(",");
}
solution({a: 1, b: '2'});
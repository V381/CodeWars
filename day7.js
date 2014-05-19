/**
 * Created by JS on 5/19/14.
 */


Array.prototype.square = function(){
    return this.map(function(e){
        return (e * e);
    });
};

Array.prototype.cube = function(){
    return this.map(function(e){
        return (e * e * e);
    });
};

Array.prototype.sum = function(){
    return this.reduce(function(a,b){
        return a+b;
    });
};

Array.prototype.even = function(){
    var niz = [];

    this.forEach(function(a) {
        if (0 == a % 2) {
            niz.push(a);
        }
    });

    return niz;
};
Array.prototype.odd = function(){
    var niz = [];

    this.forEach(function(a) {
        if (0 != a % 2) {
            niz.push(a);
        }
    });

    return niz;
};


var niz1 = [1,3,4,5,6];
console.log(niz1.square());
console.log(niz1.cube());
console.log(niz1.sum());
console.log(niz1.even());
console.log(niz1.odd());
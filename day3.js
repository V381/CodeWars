/**
 * Created by JS on 5/8/14.
 */

(function(){
    var work = {
        fizz : "Fizz",
        buzz : "Buzz",
        fizzbuzz : "FizzBuzz",
        solution : function(){
            for (var i = 1; i <= 100; i++) {
                if ((i % 3 === 0) && (i % 5 === 0)){
                    console.log(this.fizzbuzz);
                } else if (i % 3 === 0) {
                    console.log(this.fizz);
                } else if (i % 5 === 0) {
                    console.log(this.buzz);
                } else {
                    console.log(i);
                }
            }
        }
    };
    work.solution();
})();
/**
 * Created by JS on 5/8/14.
 */
// Self Invoked Function
(function(){
    // Create Work Object 
    var work = {
        // Properties
        fizz : "Fizz",
        buzz : "Buzz",
        fizzbuzz : "FizzBuzz",
        // Method
        solution : function(){
            // Go through all numbers from 1 to 100 and if is it divisable by both 3 and 5 , console.log fizzbuzz propertie, etc.
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
    // Call method
    work.solution();
})();
//Call self invoking function

/**
 * Created by JS on 5/7/14.
 */

// Create Calculator object with average method
var Calculator = {
    average: function() {
        var sum = 0; 
        if (arguments.length === 0){ // If there 0 arguments passed return 0
            return 0;
        }
        for (var i = 0; i < arguments.length; i++){ // Calculate numbers and add them to sum value
            sum += arguments[i];
        }
        return sum / arguments.length; // Divide sum with number of arguments passed
    }
};

/*

Calculator.average(3,4,5);
4
Calculator.average(3,5,5);
4.333333333333333
Calculator.average(3,6,5);
4.666666666666667
Calculator.average(3,7,5);
5

*/

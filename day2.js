/**
 * Created by JS on 5/7/14.
 */


var Calculator = {
    average: function() {
        var sum = 0;
        if (arguments.length === 0){
            return 0;
        }
        for (var i = 0; i < arguments.length; i++){
            sum += arguments[i];
        }
        return sum / arguments.length;
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
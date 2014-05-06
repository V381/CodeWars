/**
 * Created by JS on 5/6/14.
 */

(function(){
    function numbers(){
        for (var k = 0; k <= arguments.length; k++){
            for (var i = 0; i < arguments.length; i++){
                if (typeof arguments[k] === "string") {
                    return false;
                }
                if (arguments[k] === null) {
                    return false;
                }
            }
        }
        return true;
    }



    numbers(1, 12, 3, 100); // === True
    numbers(1, "a", 3, "1", null); // === False
})();
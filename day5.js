/**
 * Created by JS on 5/11/14.
 */

function searchNames( logins ){

    if (arguments > 0){
        logins.filter(function(val){
            return val === "_";
        });
    }
    else
    {
        return [];
    }
}

searchNames(["sarko"], ["_test"]);
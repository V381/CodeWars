/**
 * Created by JS on 5/23/14.
 */


function christmasTree (height) {
    var build = new String();

    for (var i = 0; i < height; i++) {
        for (var j = 0; j < height - i - 1; j++){
            build += ' ';
        }
        for (var k = j; k < j + (i * 2 + 1); k++){
            build += '*';
        }
        for (var l = k; l < height * 2 - 1; l++){
            build += ' ';
        }
        if (i + 1 < height) {
            build += '\n';
        }
    }
    return build;
}
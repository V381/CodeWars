function likes(names) {
    var qtf = "no one likes this";
    if (names.length === 0) return qtf;
    var map = {
        1 : names[0] + " likes this",
        2 : names[0] + " and " + names[1] + "" + " like this",
        3 : names[0] + ", " + names[1] + " and " + names[2] + " like this"
    };
    for (var i in map){
        if (Number(i) === names.length){
            return map[i];
        }
        else if(3 < names.length){
            var niz = names.length - 2;
            return names[0] + ", " + names[1] + " and " + niz + " others like this";
        }
    }

}
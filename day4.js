/**
 * Created by JS on 5/9/14.
 */


    // Bubble Sort Algoritam

(function(){
    var niz = [5, 2, 8, 6, 10];
    for (var j = 0; j < niz.length - 1; j++){ // Prodji kroz sve elemente niza
        for (var i = 0; i < niz.length - 1; i++){ //
            if (niz[i] > niz[i + 1]){ // Ako su elementi niza veci od elementa pored [5 > 2];
                var temp = niz[i];   // Onda stavi niz u temp; [5,2,8...];
                niz[i] = niz[i + 1]; // Onda stavi  da su elementi iz niza jednaki elemntu pored njega [ 2, 5 ]
                niz[i + 1] = temp; // Onda stavi da su elementi pored njega jednaki elementima iz niza;
            }
        }
        console.log(niz); //  [2, 5, 6, 8, 10]
    }
})();


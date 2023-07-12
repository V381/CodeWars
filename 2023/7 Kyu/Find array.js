function findArray(arr1, arr2){
    const 
      newArr = [];
    let
      loopOnce = false,
      j = 0;
    for 
      (let 
       i = 0;
       i < arr1.length;
       i++) {
        if (!loopOnce) {
            while (j < arr2.length) {
                newArr.push(arr1[arr2[arr2.indexOf(arr2[j])]])
                j++
            }
            loopOnce = true;
        }
      }
    return newArr;
  }

findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7]);
findArray([1, 2, 3, 4, 5], [0]);
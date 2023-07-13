function arrange(s) {
    let 
        i = 0,
        j = s.length - 1;

    const
        newArr = [];

    let flip = false;

    while (i <= j) {
        if (!flip) {
            newArr.push(s[i]);
            newArr.push(s[j]);
            flip = true;
        } else {
            if (newArr.length === s.length) break;
            newArr.push(s[j]);
            if (newArr.length === s.length) break;
            newArr.push(s[i]);
            flip = false;
        }

        j--;
        i++;
    }
    console.log(newArr);
    
  }

  arrange([1,2,3,4,5,6]);
  arrange([4,3,2])
  arrange([2,4,3,4])
  arrange([9,7,-2,8,5,-3,6,5,1])
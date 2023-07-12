function digitalRoot(n) {
    const toArr = n => String(n).split("").map(Number);
    const 
      recurs = (nums) => {
        if (nums.length === 0) {
          return 0
        } 
        const [head, ...tail] = nums;
        return head + recurs(tail)
      }
      const firstRes = recurs(toArr(n));
      let res = recurs(toArr(firstRes));
      while(String(res).length !== 1) {
        if (String(res).length > 0) {
            res = recurs(toArr(res));
        } else {
            res = recurs(toArr(firstRes));
        }
      }
      return res;
  }
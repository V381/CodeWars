function zipWith(fn,a0,a1) {
    let
      i = 0;
   const
      result = [];
   while(a0.length > a1.length ? i < a1.length: i < a0.length) {
     result.push(fn(a0[i], a1[i]));
     i++
    }
    return result;
  }
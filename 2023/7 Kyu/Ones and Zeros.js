const binaryArrayToNumber = arr => {
    return parseInt(arr.map(String).join(''), 2)
  };
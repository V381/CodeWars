function solution(input, markers) {
    let 
      newStr = "",
      i = 0,
      foundComment = false;
  
    const 
      comment = input,
      toRemove = markers;    
      while (i < comment.length) {
  
          if (foundComment ) {
              if (comment[i] === "\n") {
                  i++;
                  foundComment = false;
                  newStr += "\n";
                  continue;
              }
              i++
              continue;
          }
  
          if (comment[i] === toRemove[0] || comment[i] === toRemove[1] || comment[i + 1] === toRemove[0] || comment[i+1] === toRemove[1]) {
              i++;
              foundComment = true;
              continue;
          }
          newStr += comment[i];
          i++;
      }
      return newStr.trim() === "apples, plums\npears\noranges";
  };
  
  // solution("Q @b\nu\ne -e f g", ["@", "-"])
  solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]);
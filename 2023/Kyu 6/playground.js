// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it into some number of substrings such that:

//     Each substring is balanced.

// Return the maximum number of balanced strings you can obtain.

 

// Example 1:

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

var balancedStringSplit = function(s) {
    const
        R = "R",
        L = "L";
    let
        i = 0,
        balance = 0,
        substringCount = 0;
    while (i < s.length) {
        if (s[i] === R) {
            balance--;
        }
        if (s[i] === L) {
            balance++;
        }
        if (balance === 0) {
            substringCount++;
            balance = 0;
        }
        i++
    }
    return substringCount;
};

balancedStringSplit("RLRRLLRLRL");



var maxDepth = function(s) {
    const 
      stack = [],
      LEFT = "(",
      RIGTH = ")"
    let 
      i = 0,
      maxDepth = 0,
      savedDepth = 0;

    while (i < s.length) {
      if (s[i] === LEFT) {
        stack.push(LEFT);
        maxDepth++;
      } 
      if (s[i] === RIGTH) {
        if (stack.length > 1) {
            stack.pop();
            maxDepth--;
        }
      }
      savedDepth = Math.max(maxDepth, savedDepth);
      i++; 
    }
    if (stack.length > 1) return -1;
    return savedDepth;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const 
        stack = [];

    let 
        i = 0,
        counter = 0;

    while (i < s.length) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(1);
            counter++
        } else {
            if (stack.length === 0) {
                return false;
            }
            const lastOpeningBracket = stack.pop();
            if ((s[i] === ')' && lastOpeningBracket !== '(') || (s[i] === '}' && lastOpeningBracket !== '{') || (s[i] === ']' && lastOpeningBracket !== '[')
            ) {
                return false; 
            }
        }
        i++;
    }
    return stack.length === 0;
};

isValid("()")

/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    let 
        i = 0,
        counter = 0,
        AB = "AB",
        CD = "CD";
    if (s.indexOf(AB)  === -1 || s.indexOf(CD) === - 1) {
        return s.length;
    }
    while (i < s.length) {
        if (s[i] === "A" && s[i+1] === "B") {
            counter++;
            i += 2;
            continue;
        }
        if (s[i] === "C" && s[i + 1] === "D") {
            counter++;
            i+=2;
        }
        i++;
    }
    
};

minLength("ABFCACDB")


function validBraces(string) {
    let
    i = 0;
    const 
    stack = [];

    while (i < string.length) {
        if (string[i] === "(" || string[i] === "{" || string[i] === "[") {
            stack.push(string[i]);
        } else {
            if (stack.length > 0) {
                    const last = stack[stack.length - 1];
                    if ((string[i] === ')' && last === '(') || (string[i] === '}' && last === '{') || (string[i] === ']' && last === '[')) {
                        stack.pop()
                    } 
        } else { 
            return false;
        }}
    
        i++
    }
    return stack.length === 0;
}

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





function nextPermutation(nums) {
 let i = nums.length - 2;
  // Step 1: Find the first pair of adjacent elements where the left element is smaller than the right element
 while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
 }

 
  // Step 2: Find the smallest element to the right of nums[i] that is greater than nums[i]
  if (i >= 0) {
    let j = nums.length - 1;
    while (j > i && nums[j] <= nums[i]) {
      j--;
    }
    // Step 3: Swap the elements nums[i] and nums[j]
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  let left = i + 1;
  let right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
  console.log(nums);
}

function nextBigger(n) {
    const
        nums = Array.from(String(n), Number);
    
    let
        i = nums.length - 2;
    
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i++;
    }

    if (i >= 0) {
        let j = nums.length - 1;
        while (j > i && nums[j] <= nums[i]) {
          j--;
        }
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
      }
      return Number(nums.join(""));
}

nextBigger(2017);



function latinSquares(n) {
    const 
    arr = [];

    let 
        i = 0,
        j = 0;
    const zuzamen = n;
    while (i <= zuzamen) {
        let set = new Set()
        if (zuzamen === 0) {
            zuzamen += 1;
        }
        for (let j = 0; j < zuzamen; j++) {
            while (set.size < zuzamen) set.add(Math.floor(Math.random() * zuzamen))
        }
        arr.push(Array.from(set));
        i++;
    }
    return arr;
}

latinSquares(10);

let
i = 0;
d = 100,
k = 10
result = 910;
   
function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let 
      j = 0,
      day = 0,
      currentHeigth = 0
      while (j < desiredHeight) {
        day++;
        currentHeigth += upSpeed
        if (currentHeigth >= desiredHeight) {
            break;
        }
        currentHeigth -= downSpeed;
      }
      return day;
    }


function isSatorSquare(tablet) {
    
}

// const zuzamen = [
//       ['S', 'A', 'L', 'A', 'S'],
//       ['A', 'R', 'E', 'N', 'A'],
//       ['L', 'E', 'V', 'E', 'L'],
//       ['A', 'R', 'E', 'N', 'A'],
//       ['S', 'A', 'L', 'A', 'S']];
const nikita = [
    ["N", "O", "T"],
    ["O", "V", "O"],
    ["N", "O", "T"]
]


    function isSatorSquare(tablet) {
        let iterateRigth = 0;
        let iterateLeft = 0;
        let iterateDown = 0;
        let iterateUp = 0;
        let goDownStep = 0;
        let rightToLeft = tablet[0].length - 1;
        let goLeft = 0
        let downRes = "";
        let rightRes = "";
        let rightToLeftRes = "";
        let found = false;
        const reverseStr = str => str
            .split("")
            .reverse()
            .join("");

        const doesITMatch = [];
      
        let z = 0;
        while (z < tablet.length) {
            while (iterateDown < tablet[z].length) {
                downRes += tablet[z][iterateDown];
                iterateDown++;
            }
      
            while(iterateRigth < tablet[z].length) {
                rightRes += tablet[iterateRigth][goDownStep];
                iterateRigth++
            } 
      
            while (rightToLeft >= 0) {
                rightToLeftRes += tablet[goLeft][rightToLeft];
                rightToLeft--;
            }
          
            if (downRes === rightRes && downRes === reverseStr(rightToLeftRes) && rightRes === reverseStr(rightToLeftRes) && downRes === rightRes) {
                doesITMatch.push(true);
            } else {
                doesITMatch.push(false);
            }
      
            iterateRigth = 0;
            iterateDown++;
            goDownStep++;
            iterateLeft = 0;
            rightToLeft = tablet[0].length - 1;
            goLeft++;
            z++;
            downRes = "";
            rightRes = "";
            rightToLeftRes = "";
            

        }
        console.log(doesITMatch);
      }

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


function smaller(nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        let count = 0;

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                count++;
            }
        }

        result.push(count);
    }
    console.log(result);
    return result;
}

// smaller([5,4,3,2,1]);
// smaller([1,2,3])
// smaller([1,2, 0]);
// smaller([1,2,1]);
// smaller([1, 1, -1, 0, 0])
// Better: Write a function that given, an array arr, returns an array containing 
// at each index i the amount of numbers arr[j] that are smaller than arr[i] for j>i.
// assert.deepEqual(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]);


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

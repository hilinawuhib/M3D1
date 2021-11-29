/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */

function sum(int1, int2) {
  if (int1 === int2) {
    return (int1 + int2) * 3;
  } else {
    return int1 + int2;
  }
}
console.log(sum(2, 3));

/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */
function checkint(x, y) {
  if (x === 50 || y === 50 || x + y === 50) {
    return true;
  } else {
    return false;
  }
}
console.log(checkint(10, 30));

/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */
function removeCharacter(str, position) {
  strfirstpart = str.substring(0, position);
  strsecondpart = str.substring(position + 1, str.length);
  return strfirstpart + strsecondpart;
}
console.log(removeCharacter("strive", 0));
/* 4. Create a function to find and return the largest of three given integers. */
function largest(n1, n2, n3) {
  if (n1 >= n2 && n1 >= n3) {
    return n1;
  } else if (n2 >= n1 && n2 >= n3) {
    return n2;
  } else {
    return n3;
  }
}
console.log(largest(23, 100, 78));
/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */
function checkNumbers(number1, number2) {
  if (
    (number1 >= 40 && number1 <= 60 && number2 >= 40 && number2 <= 60) ||
    (number1 >= 70 && number1 <= 100 && number2 >= 70 && number2 <= 100)
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(checkNumbers(35, 25));
/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */

function createMultipleString(str, n) {
  if (n > 0) {
    return str.repeat(n);
  }
}
console.log(createMultipleString("strive", 4));
/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */
function displayCityName(cityname) {
  if (
    cityname.length >= 3 &&
    (cityname.substring(0, 3) == "Los" || cityname.substring(0, 3) == "New")
  ) {
    return cityname;
  }
  return "";
}
console.log(displayCityName("New york"));
/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
    Pass the array as a parameter. */
function sumOfAllElements([x1, x2, x3]) {
  return x1 + x2 + x3;
}
console.log(sumOfAllElements([1, 6, 3]));

/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3. 
      Return `true` is it does, `false` if it doesn't. */
function testAnArray(arr) {
  let x = arr[0],
    y = arr[1];
  return (x === 1 && y === 1) || (x === 3 && y === 3);
}
console.log(testAnArray([1, 1]));

/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */
function test(numbers) {
  if (!numbers.includes(1) && !numbers.includes(3)) {
    return true;
  } else {
    return false;
  }
}

console.log(test([1, 3]));
/* 11. Create a function to find the longest string from a given array of strings. 
    Pass the array as parameter and return the longest string. */


/* 12. Create a function to find the types of a given angle:
  1. Acute angle â‡’ between 0 and 90 degrees. Return `acute`.
    2. Right angle â‡’ 90 degree. Return `right`
    3. Obtuse angle â‡’ between 90 and 180. Return `obtuse`
    4. Straight angle â‡’ 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/
function typesOfAngle(angle) {
  if (angle < 90) {
    return "Acute angle.";
  } else if (angle === 90) {
    return "Right angle.";
  } else if (angle < 180) {
    return "Obtuse angle.";
  } else if (angle === 180) return "Straight angle.";
}
console.log(typesOfAngle(180));

/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */
function largestNumberIndex(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    const currNum = arr[i];
    if (max < currNum) {
      max = currNum;
    }
  }

  const indexOfNum = arr.indexOf(max);
  return indexOfNum;
}
console.log(largestNumberIndex([100, 9999, 849]));

/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */
function largestEven(arr) {
  arr.sort((x, y) => y - x);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) return arr[i];
  }
}
console.log(largestEven([12, 400, 42, 38]));
/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */
function checkPositiveOrNegative(a, b) {
  if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
    return true;
  } else {
    return false;
  }
}
console.log(checkPositiveOrNegative(2, 2));
/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case. 
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */
function createAndReturn(str) {
  if (str.length < 3) {
    return str.toUpperCase();
  }
  partOne = str.substring(0, 3).toLowerCase();
  partTwo = str.substring(3, str.length);
  return partOne + partTwo;
}
console.log(createAndReturn("STRive"));
/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */
function sumOfIntegers(integer1, integer2) {
  let sum = integer1 + integer2;
  if (sum >= 50 && sum <= 80) {
    return 65;
  } else {
    return 80;
  }
}
console.log(sumOfIntegers(32, 43));
/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor â‡’ return `Diego`
    The number has 5 as a factor â‡’ return `Riccardo`
    The number has 7 as a factor â‡’ return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    âš ï¸ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */
function numToStringByFactor(num) {
  let str = "";

  if (num % 3 !== 0 && num % 7 !== 0 && num % 5 !== 0) return num;

  if (num % 3 === 0) str += "Diego";
  if (num % 5 === 0) str += "Riccardo";
  if (num % 7 === 0) str += "Stefano";
  return str;
}
console.log(numToStringByFactor(34));
/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */



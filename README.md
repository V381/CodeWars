Coding_Kata_A_Day
=================

<b>Day 1 - For the sake of argument:</b>

   Description:

Write a function named numbers that returns true if all the parameters it is passed are numbers.
Otherwise, the function should return false. The function should accept any number of parameters.

Example usage:

numbers(1, 4, 3, 2, 5); // true
numbers(1, "a", 3); // false

http://www.codewars.com/kata/5258b272e6925db09900386a

<b>Day 2 - Calculating averages </b>

   Description:

Let's build a calculator that can calculate the average for an arbitrary number of arguments.

The test expects you to provide a Calculator object with an average method:

Calculator.average()

The test also expects that when you pass no arguments, it returns 0. The arguments are expected to be integers.

It expects Calculator.average(3,4,5) to return 4.

<a>http://www.codewars.com/kata/529f32794a6db5d32a00071f</a>

<b>Day 3 - FizzBuzz </b>

"Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”."

<b>Day 4 - Bubble sort algorithm</b>

<b>Day 5 - Javascript filter - 1</b>

While developing a website, you detect that some of the members have troubles logging in. Searching through the code you find that all logins ending with a "_" make problems. So you want to write a function that takes an array of pairs of login-names and e-mails, and outputs an array of all login-name, e-mails-pairs from the login-names that end with "_".

If you have the input-array:

<code>[ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ]</code>
it should output

<code>[ [ "bar_", "bar@bar.com" ] ]</code>

You have to use the filter-method of Javascript, which returns each element of the array for which the filter-method returns true.

<a>https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter</a>
<a>http://www.codewars.com/kata/525d9b1a037b7a9da7000905/train/javascript</a>

<b>Day 6 - Building Strings From a Hash</b>

Description:

Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

Example:

<code>solution({a: 1, b: '2'})</code> // should return "a = 1,b = 2"

<b>Day 7 - Array Helpers</b>

In this kata we want to test, if you are able to extend the functionality of standard prototypes. Extend the Array prototype in order to support the methods square(), cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared, the original array must not be changed
cube() must return a copy of the array, containing all values cubed, the original array must not be changed
average() must return the average of all array values, average() on an empty array must return NaN
sum() must return the sum of all array values
even() must return an array of all even numbers, the original array must not be changed
odd() must return an array of all odd numbers, the original array must not be changed

Examples:

<code>   
var numbers = [1, 2, 3, 4, 5];

numbers.square(); // must return [1, 4, 9, 16, 25]
numbers.cube(); // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum(); // must return 15
numbers.even(); // must return [2, 4]
numbers.odd(); // must return [1, 3, 5]
</code>

<b>Day 8 - Create A Phone Number</b>

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge. 
Don't forget the space after the closing parenthese!

http://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

<b>Day 9 - Christmas tree </b>

Create a function christmasTree(height) that returns a christmas tree of the correct height

Height passed is always an integer between 0 and 100.

Use \n for newlines between each line.

Pad with spaces so each line is the same length. The last line having only stars, no spaces.

<b>Day 10 - Shifty Closures</b>

Functional closures can get overly attached. Set them straight!

Why doesn't greet_abe() actually greet Abe?

<b>Day 11 = Reverse Words</b>

Write a reverseWords function that accepts a string a parameter, and reverses each word in the string.

<code>reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"</code>

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

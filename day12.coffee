###
  Complete the solution so that it returns true if the first argument(string)
   passed in ends with the 2nd argument (also a string).
###

solution = (str, ending) ->
  str.substr(str.length - 2) is ending or str.substr(str.length - 1) is ending

solution('abc', 'bc') # returns true
solution('abc', 'd') # returns false
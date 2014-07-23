
###
  Implement pluck, which takes an array of objects and a property name, and returns an array containing the named property of each object.
###

pluck = (objs, name) ->
  niz = []
  i = 0

  while i < objs.length
    niz.push objs[i][name]
    i++
  niz
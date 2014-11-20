arraysSimilar = (arr1, arr2) ->
  # TODO: Implement your arraysSimilar
  sort = (arr) =>
    for i, index in arr by -1
      for j, index in arr
        if arr[index] > arr[index + 1]
          temp = arr[index]
          arr[index] = arr[index + 1]
          arr[index + 1] = temp
  sort(arr1)
  sort(arr2)
  if arr1.length isnt arr2.length
      return false
  for i, index in arr1 when arr1[index] isnt arr2[index]
      return false
  true

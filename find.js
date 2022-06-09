// ищем число в массиве numbers, которое меньше чем limit
function firstUnder(numbers, limit){
  return numbers.find(function (el){
    return el < limit
  })
}

// ищет строку в массиве strings, которая начинается с указанной буквы
function startsWith(strings, letter) {
  return strings.find(function (el){
    return el[0] === letter
  })
}

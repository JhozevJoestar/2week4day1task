/* добавляет восклицательный знак в конец каждого элемента массива */
function exclamations(strings) {
  return strings.map(function (el){
    return el + '!'
  })
}

/* преобразует все числа из массива в квадрат */
function squareAll(numbers) {
  return numbers.map(function (el){
    return el * el
  })
}

/* заменяет все слова в массиве на их первые буквы */
function firstLetters(words) {
  return words.map(function (el){
    return el[0]
  })
}

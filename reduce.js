function sum(numbers) {
  return numbers.reduce(function (sum, el){
    return sum + el
  })
}

/* ставит тире между словами */
function hyphenate(words) {
  return words.reduce(function (sum, el){
    return `${sum}-${el}`
  })
}

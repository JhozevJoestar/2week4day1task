function oddIntegers(numbers){
  return numbers.filter(function (el){
    return el%2 ===1;
  })
}

function longStrings(strings, minimumLength) {
  return strings.filter(function (el){
    return el.length >= minimumLength;
  })
}

function getNotEmptyPhoneNumbers(phoneNumbers) {
  return phoneNumbers.filter(function (el){
    return el.phone !== undefined
  })
}

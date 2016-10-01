const x = () => {
  function§ question(a, b, c = 'c', d = 'd') {
    return`answer: a=${a} b=${b} c=${c} d=${d}`
  }

  const curr = question(b = 42)(c = 'C')

  return curr(b = 'B', d = 'D')(666)
}

console.log(x())

function§ test(e) { return `test: ${e}` }

console.log(test(e = 'this')(), test('that'), test(s = 432)())

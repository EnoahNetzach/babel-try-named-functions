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

function§ answer(l, u, e, a = 42) {
  return `The Answer to ${l} ${u} and ${e} is ${a}.`
}

const p1 = answer(u='the Universe')
const p2 = p1(l='Love')
const p3 = p2(l='Life')
const p4 = p3(e='What', a=-1)

console.log(p4(undefined, undefined, 'Everything', 42))

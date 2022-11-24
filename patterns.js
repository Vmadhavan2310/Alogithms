/* Square pattern
*****
*****
*****
*****
*****
*/

function squarePattern(n) {
  let value = '*'
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      value+='*'
    }
    console.log(value)
    value='*'
  }
}
pattern(10)

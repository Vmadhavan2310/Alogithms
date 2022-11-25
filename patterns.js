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

//pyramidPattern
    *
   ***
  *****
 *******
*********
  function pyramidPattern(n){
  let value=''
  for(let i=1;i<=n;i++){
    for(let j=0;j<n-i;j++){
      value+=' '
    }
    for(let k=0;k<2*i-1;k++){
      value+='*'
    }
    value+='\n'
  }
  return value;
}

console.log(pyramidPattern(5))

const a = parseInt(prompt('Enter the first number '));
const b = parseInt(prompt('Enter the second number '));
function max(a, b){
  if (a>b){
    return a;
  }else{
    return b;
  };
};
console.log(max(a,b) );
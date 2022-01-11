const m = parseInt(prompt('Enter lenghth in feet f or inches i: '));
if (m == 'i' ){
const a = parseInt(prompt('Enter lenghth in Inches: '));
const inches = a ;
const feet = inches / 12;
const leftover = inches % 12;
console.log(feet);
} else{

const a = parseInt(prompt('Enter lenghth in feet: '));
const feet = a ;
const inches = feet * 12;
console.log(inches);
}
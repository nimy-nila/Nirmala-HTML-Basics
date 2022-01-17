const fruits = ['apple', 'banana', 'orange', 'grape']
console.log('Length of Array: ', fruits.length);
console.log('A new Fruit is added at the end :', fruits.push('kiwi'));
console.log(fruits);
console.log('To remove a Fruit from last:', fruits.pop());
console.log(fruits);
console.log('To find index of banana in an array:', fruits.indexOf('banana'));
console.log('If the berry is not present index will be -1 in an array:', fruits.indexOf('berry'));
console.log('To remove a fruit from the middle of an array use index', fruits.splice(2, 1));
console.log(fruits);
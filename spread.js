const max = Math.max(6, 4,8,88,44,33)
const numbers = [3, 5, 2, 45, 5, 43, 90, 32, 15];
const arrayMax = Math.max(...numbers);
// console.log(...numbers)
console.log(arrayMax);

// use spread operator to copy
const friends = [4, 5, 87, 9]
const bondhu = friends;
const dosto = [...friends]
console.log(dosto);
friends.push(100)
console.log(dosto);
console.log(friends);

// bondhu.push(12);
// console.log(bondhu);
// console.log(friends);

// advanced
const sonkha = [...friends, 999] // add extra elements while copy
console.log(sonkha);

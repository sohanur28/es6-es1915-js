const actor = {
    name: 'Reyad',
    age: 18,
    phone: '01229282828',
    money: 1233443545634
}
// if right side is an object left side of destructuring will be object as well
const {phone, age: boyos} = actor

// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;

console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(boyos);


// array destructuring
const numbers = [45, 90]
const [first, second] = numbers;
const [x, y] = [12, 66];

// advanced
function doubleThem(a, b){
    return [a*2, b*2];
}

const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo);

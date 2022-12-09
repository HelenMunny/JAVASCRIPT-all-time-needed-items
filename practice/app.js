
// Object.keys(), Object.values (), Object.entries()
const person = {
 name: 'john',
 age: 25,
 status: 'married',
 profession: 'developer',
}
const keys = Object.keys(person);
console.log(keys)
const values = Object.values(person);
console.log(values)
const entries = Object.entries(person);
console.log(entries)
const newEntries = entries.map(entry => {
 const [first, second] = entry;
 console.log(first, second);
})

// set objects
const unique = new Set();
const third = 'third';

unique.add('first');
unique.add('second');
unique.add(third);
unique.add('first');  // only unique value would be added. first will be added just for once
unique.delete('first');
unique.has('first');   //false
unique.clear()   //clears/deletes all items

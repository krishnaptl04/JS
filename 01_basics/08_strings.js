const name = "krishna"
const repoCount = 50

// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("krishnapatel");

console.log(gameName[0]);
console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0, 4)
console.log(newString);


const anotherString = gameName.slice(-1, 2)
console.log(anotherString);

const newStringOne = "   Krishna   "
console.log(newString);
console.log(newStringOne.trim());


const url = "https://krishna.com/krishnapatel"

console.log(url.replace('%8', '-'))

console.log(url.includes('krishna'))

console.log(gameName.split('-'));





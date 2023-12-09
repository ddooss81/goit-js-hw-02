const start = 6;
const end = 17;
let number = start+1;
for (number; number < end; number++) {
  if (number % 5 === 0) {
    break;
  }
}
console.log(number);

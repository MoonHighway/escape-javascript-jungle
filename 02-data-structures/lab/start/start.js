let name = argval("name");
let age = parseInt(argval("age"));

const jsBirthday = new Date("9/1/1995");
const today = new Date();

const yearsOld = today.getFullYear() - jsBirthday.getFullYear();

let ageCheckString =
  age > yearsOld
    ? `${age - yearsOld} years older than`
    : age < yearsOld
    ? `${yearsOld - age} years younger than`
    : `the same age as`;

console.log(`${name} is ${ageCheckString} JavaScript!`);

function argval(flag) {
  let valueIndex = process.argv.indexOf(`--${flag}`) + 1;
  return process.argv[valueIndex];
}

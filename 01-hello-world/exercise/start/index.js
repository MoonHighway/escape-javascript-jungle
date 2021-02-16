const today = new Date();
const jsBirthday = new Date("9/1/1995");
const jsAge =
  today.getFullYear() - jsBirthday.getFullYear();

const inputName = document.getElementById("name");
const inputAge = document.getElementById("age");

const button = document.querySelector("main>button");

const data = [];

button.onclick = function () {
  const results =
    inputAge.value > jsAge
      ? `${inputName.value} is ${
          inputAge.value - jsAge
        } years older than JavaScript`
      : inputAge.value < jsAge
      ? `${inputName.value} is ${
          jsAge - inputAge.value
        } years younger than JavaScript`
      : `${inputName.value} is the same age as JavaScript`;

  data.push({
    timestamp: new Date().getTime(),
    results
  });
  const p = document.createElement("p");
  p.innerText = results;
  document.getElementById("output").appendChild(p);
  inputName.value = "";
  inputAge.value = "";
};

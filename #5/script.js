let plainText = document.getElementById("plainText"),
  shift = document.getElementById("shift"),
  run = document.getElementById("run");

let regEx = /[a-zA-Z]/g;

// Check if the given string is lowerCase or not
let isLowerCase = (char) => char === char.toLowerCase();

//returning a number between [97-122]: [a - z]
let toLowerCaseCharCode = (num) =>
  num < 97
    ? toLowerCaseCharCode(num + 26)
    : num > 122
    ? toLowerCaseCharCode(num - 26)
    : num;

//returning a number between [65-90]: [A - Z]
let toUpperCaseCharCode = (num) =>
  num < 65
    ? toUpperCaseCharCode(num + 26)
    : num > 90
    ? toUpperCaseCharCode(num - 26)
    : num;

function caesar(str, shift) {
  let stringToArray = str.split("");
  let newString = [];
  for (let char of stringToArray) {
    if (regEx.test(char)) {
      newString.push(
        String.fromCharCode(
          isLowerCase(char)
            ? toLowerCaseCharCode(char.charCodeAt(0) + shift)
            : toUpperCaseCharCode(char.charCodeAt(0) + shift)
        )
      );
    } else {
      newString.push(char);
    }
  }
  return newString.join("");
}


function clearLastParagraph() {
  let elem = document.getElementById("result");

  // if there was such element, remove it
  if (elem) elem.remove();
}

function addElement(val) {
  // delete the last result
  clearLastParagraph();

  // create a new div element
  const newPara = document.createElement("p");

  // setting an id for our new element
  newPara.setAttribute("id", "result");

  // and give it some content
  const divContent = document.createTextNode(`The Resault is: ${val}`);

  // add the text node to the newly created div
  newPara.appendChild(divContent);

  // add the newly created element and its content into the DOM
  document.body.appendChild(newPara);
}

run.addEventListener("click", function () {
  // printing out the resault by clicking the RUN button
  addElement(caesar(plainText.value, shift.value));
});

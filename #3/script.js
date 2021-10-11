let text = document.getElementById("text"),
  runBtn = document.getElementById("run");

function textTrim(text) {
  return (
    text
      // removing all punctuations from the text
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")

      // removing all extra spaces from the text
      .replace(/\s{2,}/g, " ")
  );
}

function palindromes(text) {
  //converting the palindromes()'s parameter into string
  text = text + "";

  // turin the text into lower-case letter and then try to trim it
  text = textTrim(text.toLowerCase());

  // comparing the trimed palindromes()'s parameter with it's reversed version. if true, it is palindrome and if false, it's not!
  return text.split("").reverse().join("") == text;
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

runBtn.addEventListener("click", function () {
  // printing out the resault by clicking the RUN button
  addElement(
    `${text.value === "" ? '"Empty String"' : text.value} is${
      palindromes(text.value) ? "" : "n't"
    } palindrome`
  );
});

let str = document.getElementById("stringToRepeat"),
  count = document.getElementById("repeatRate"),
  btn = document.getElementById("run");

let repeatString = (stringToRepeat, repeatRate) => {  
  // checking if repeatRate has a value of type "number" except NaN
  if (typeof Number(repeatRate) !== "number" || isNaN(Number(repeatRate))) {
    let error = "Your second argument passed to the repeatString() function, is not a number! Please change it to a proper number.";
    addElement(error)
    throw new Error(error);
  } 

  // an empty string to store the final result
  let result = "";

  // converting repeatRate's value to a number, whether it is a number or a string of a number
  repeatRate = Number(repeatRate);
  
  // filling the result variable with enough amount of stringToRepeat concatenated to each other
  for (let count = 1; count <= repeatRate; ++count) {
    result += stringToRepeat;
  }

  // tossing out the final result
  return result;
};

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
  const divContent = document.createTextNode(`The Result is: ${val}`);

  // add the text node to the newly created div
  newPara.appendChild(divContent);

  // add the newly created element and its content into the DOM
  document.body.appendChild(newPara);
}

btn.addEventListener("click", function () {
  // printing out the result by clicking the RUN button
  addElement(repeatString(str.value, count.value));
});
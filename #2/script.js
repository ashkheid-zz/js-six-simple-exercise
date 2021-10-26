let firstNumber = document.getElementById("firstNumber"),
  secondNumber = document.getElementById("secondNumber"),
  runBtn = document.getElementById("run");

function isNum(num) {
  // checking if num isn't empty
  let error;
  if (num === "") {
    error = "Did you forget to enter a number?!";
    addElement(error); // just print out the error msg in HTML
    throw new Error(error);
  }

  // checking if num has a value of type "number" except NaN
  if (typeof Number(num) !== "number" || isNaN(Number(num))) {
    error = "Only pass a number please!";
    addElement(error); // just print out the error msg in HTML
    throw new Error(error);
  }
}

function switchArgs(firstArg, secondArg) {
  // switching two given items
  return [secondArg, firstArg];
}

function sumRange_init(num1, num2) {
  // it's like calling isNum(num1); and then isNum(num2);
  [...arguments].forEach((num) => isNum(num));

  // put the parameters as number-type value into an array to have more flexibility to working with
  let range = [Number(num1), Number(num2)];

  // tossing out a sorted array
  return range[0] > range[1] ? switchArgs(range[0], range[1]) : range;
}

function sumRange_recursive(startNumber, endNumber) {
  if (startNumber === endNumber) {
    return endNumber;
  }
  return startNumber + sumRange_recursive(startNumber + 1, endNumber);
}

function sumRange_loop(startNumber, endNumber) {
  let result = 0;
  let rangeCount = endNumber - startNumber + 1;
  for (let i = 1; i <= rangeCount; ++i) {
    result += startNumber++;
  }
  return result;
}

function sumRange(startNumber, endNumber) {
  // there was some steps before putting the function to work on numbers,
  // like checking their type, sorting the numbers to have an ascending range, etc.
  // Thus, I wrap them all into a function called sumRange_init() which handle this initialize-like step for me.
  let range = sumRange_init(startNumber, endNumber);

  // ATTENTION: I have two implementations of sumRange(). One by using a for loop, and the other one by using recursive function. comment/uncomment yuo wish to try.

  return sumRange_recursive(range[0], range[1]);
  // return sumRange_loop(range[0], range[1]);
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
  const divContent = document.createTextNode(`The Result is: ${val}`);

  // add the text node to the newly created div
  newPara.appendChild(divContent);

  // add the newly created element and its content into the DOM
  document.body.appendChild(newPara);
}

runBtn.addEventListener("click", function () {
  // printing out the result by clicking the RUN button
  addElement(sumRange(firstNumber.value, secondNumber.value));
});

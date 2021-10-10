function isNum(num) {
  let error;
  if (num === "") {
    error = "Did you forget to enter a number?!";
    addElement(error);
    throw new Error(error);
  }

  if (typeof Number(num) !== "number" || isNaN(Number(num))) {
    error = "Only pass a number please!";
    addElement(error);
    throw new Error(error);
  }
}

function switchArgs(firstArg, secondArg) {
  return [secondArg, firstArg];
}

function sumRange_init(num1, num2) {
  [...arguments].forEach((num) => isNum(num));
  let range = [Number(num1), Number(num2)];
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
  let range = sumRange_init(startNumber, endNumber);

  return sumRange_recursive(range[0], range[1]);
  // return sumRange_loop(range[0], range[1]);
}

module.exports = sumRange;

let repeatString = (stringToRepeat, repeatRate) => {
  if (typeof Number(repeatRate) !== "number" || isNaN(Number(repeatRate))) {
    throw new Error(
      "Your second argument passed to the repeatString() function, is not a number! Please change it to a proper number."
    );
  }
  let result = "";
  repeatRate = Number(repeatRate);
  for (let count = 1; count <= repeatRate; ++count) {
    result += stringToRepeat;
  }
  return result;
};

module.exports = repeatString;

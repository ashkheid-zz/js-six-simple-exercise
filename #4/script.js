let objCount = document.getElementById("objCount"),
  getPrfrmrs = document.getElementById("getPrfrmrs"),
  getTtl = document.getElementById("getTtl");

let namesIndex, // going to store indexes of names array
  booksIndex, // going to store indexes of books array
  names = [
    "Balbina Olofsson",
    "Pippi Janssens",
    "Sveinn Ljungman",
    "Narelle Anthonsen",
    "Apostol Kurucz",
    "Daphne Van Wieren",
    "Malcolm Szilvia",
    "Stanislava Chaplarl",
    "Zsuzsanna Aurelio",
    "Seumas Wickaninnish",
    "Kirabo Connla",
    "Hasan Elmar",
    "Angela Arrington",
    "Nechtan Kimball",
    "Pavlos Bonitus",
    "Tullius Giselle",
    "Erebus Westerberg",
    "Erika Galaktion",
    "Aliyah Romijn",
    "Caelia Guillory",
  ],
  books = [
    "Woman From The Mountains",
    "Harlequin Stalks Me",
    "Companion Deal",
    "Jester Delusion",
    "Companion And Friend",
    "Stranger And Rebel",
    "Gags With Stunts",
    "Gags Of Gags",
    "Embarrassed By Traditions",
    "Ambition Of The Plan",
    "Comedian Of The Village",
    "Clown Has A Secret Life",
    "Robot Lives With Me",
    "Criminal And My Journey",
    "Friend And Buffoon",
    "Wife And Pig",
    "Smoke In The Hallway",
    "Injury Of Parody",
    "Offense Of My Intentions",
    "Ambition Of My Village",
  ];

function randomUniqueNum(range, outputCount) {
  // This function is going to create an array,
  // with (outputCount) items, filled with random number between 0 to(range)
  // the result would be an array filled with random unique numbers
  let arr = [];
  for (let i = 0; i < range; i++) {
    arr.push(i);
  } // output: arr = [0, 1, 2, 3, ..., i-1]

  let result = [];

  for (let i = 1; i <= outputCount; i++) {
    // (outputCount) is the amount of numbers that user wish to have at the end
    const random = Math.floor(Math.random() * (range - i)); // generating a random number between 0 to (range - i) | 0 <= random < (range - i)
    result.push(arr[random]);
    arr[random] = arr[range - i]; //replacing each picked (random) number in array with another unused one.
  }

  return result;
}

// creating two arrays filled with random unique numbers between 0 to 19
// it's going to help creating a random object.values
namesIndex = randomUniqueNum(20, 20);
booksIndex = randomUniqueNum(20, 20);

function eventGenerator(count) {
  if (count > 0 && count <= 20) { // I'm not gonna let you create more than 20 events. You can't enter zero or negative value either.
    let result = [];
    let obj = {};
    for (let i = 0; i < count; ++i) { // filling the result with randomized-value object
      obj = {
        performer: names[namesIndex[i]],
        title: books[booksIndex[i]],
      };
      result.push(obj);
    }
    return result;
  } else {
    let error =
      "Nothing Created! The number you add should be greater than 0 and less than 21";
    addElement(error); // printing the error message into HTML document
    throw new Error(error);
  }
}

function getThePerformers(object) {
  // returning an array of values out of given array filled with objects
  let result = [];
  for (let obj of object) {
    result.push(obj.performer);
  }
  return result;
}

function getTheTitles(object) {
  // returning an array of values out of given array filled with objects
  let result = [];
  for (let obj of object) {
    result.push(obj.title);
  }
  return result;
}

function arrayPrint(arr) {
  // creating an array-like string to print it out in HTML document
  let result = "[";
  for (let item of arr) {
    result += `"${item}", `;
  }
  return result.slice(0, -2) + "]";
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

getPrfrmrs.addEventListener("click", function () {
  // printing out the result by clicking the RUN button
  addElement(`${arrayPrint(getThePerformers(eventGenerator(objCount.value)))}`);
});

getTtl.addEventListener("click", function () {
  // printing out the result by clicking the RUN button
  addElement(`${arrayPrint(getTheTitles(eventGenerator(objCount.value)))}`);
});

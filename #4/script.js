let objCount = document.getElementById("objCount"),
  getPrfrmrs = document.getElementById("getPrfrmrs"),
  getTtl = document.getElementById("getTtl");

let namesIndex,
  booksIndex,
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
  let arr = [];
  for (let i = 0; i < range; i++) {
    arr.push(i);
  }

  let result = [];

  for (let i = 1; i <= outputCount; i++) {
    const random = Math.floor(Math.random() * (range - i));
    result.push(arr[random]);
    arr[random] = arr[range - i];
  }

  return result;
}

namesIndex = randomUniqueNum(20, 20);
booksIndex = randomUniqueNum(20, 20);

function eventGenerator(count) {
  if (count > 0 && count <= 20) {
    let result = [];
    let obj = {};
    for (let i = 0; i < count; ++i) {
      obj = {
        performer: names[namesIndex[i]],
        title: books[booksIndex[i]],
      };
      result.push(obj);
    }
    return result;
  } else {
    let error =
      "Notting Created! The number you add should be greater than 0 and less than 21";
    addElement(error);
    throw new Error(error);
  }
}

function getThePerformers(object) {
  let result = [];
  for (let obj of object) {
    result.push(obj.performer);
  }
  return result;
}

function getTheTitles(object) {
  let result = [];
  for (let obj of object) {
    result.push(obj.title);
  }
  return result;
}

function arrayPrint(arr) {
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
  const divContent = document.createTextNode(`The Resault is: ${val}`);

  // add the text node to the newly created div
  newPara.appendChild(divContent);

  // add the newly created element and its content into the DOM
  document.body.appendChild(newPara);
}

getPrfrmrs.addEventListener("click", function () {
  // printing out the resault by clicking the RUN button
  addElement(`${arrayPrint(getThePerformers(eventGenerator(objCount.value)))}`);
});

getTtl.addEventListener("click", function () {
  // printing out the resault by clicking the RUN button
  addElement(`${arrayPrint(getTheTitles(eventGenerator(objCount.value)))}`);
});

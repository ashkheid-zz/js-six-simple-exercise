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

module.exports = {
  eventGenerator,
  getThePerformers,
  getTheTitles
};

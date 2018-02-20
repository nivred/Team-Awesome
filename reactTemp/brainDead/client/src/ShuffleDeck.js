import shuffle from 'shuffle-array';
// const shuffle = require("shuffle-array");



const cards = [
  {
    "id": 1,
    "image": "./assets/images/zombie1.jpg",
    "clicked": false
  },
  {
    "id": 2,
    "image": "./assets/images/zombie2.jpg",
    "clicked": false
  },
  {
    "id": 3,
    "image": "./assets/images/zombie3.jpg",
    "clicked": false
  },
  {
    "id": 4,
    "image": "./assets/images/zombie4.jpg",
    "clicked": false
  },
  {
    "id": 5,
    "image": "./assets/images/zombie5.jpg",
    "clicked": false
  },
  {
    "id": 6,
    "image": "./assets/images/zombie6.jpg",
    "clicked": false
  },
  {
    "id": 7,
    "image": "./assets/images/zombie7.jpg",
    "clicked": false
  },
  {
    "id": 8,
    "image": "./assets/images/zombie8.jpg",
    "clicked": false
  },
  {
    "id": 9,
    "image": "./assets/images/zombie9.jpg",
    "clicked": false
  },
  {
    "id": 10,
    "image": "./assets/images/zombie10.jpg",
    "clicked": false
  },
  {
    "id": 11,
    "image": "./assets/images/zombie11.jpg",
    "clicked": false
  },
  {
    "id": 12,
    "image": "./assets/images/zombie12.jpg",
    "clicked": false
  }
];
const numCards=6;

let newShuffleDeck= shuffle(cards).slice(0,numCards);
console.log(newShuffleDeck);
const completeDeck = complete => {
    let newCompleteDeck = [];
    for (let i=0;i<complete.length;i++){
        for (let j=0;j<2;j++){
            newCompleteDeck.push(complete[i]);
        }
    }
// console.log(newCompleteDeck);
return(newCompleteDeck);
}
shuffle(newShuffleDeck= completeDeck(newShuffleDeck));
console.log(newShuffleDeck);
export default newShuffleDeck
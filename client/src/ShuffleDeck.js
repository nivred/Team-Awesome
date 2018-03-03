import React from "react";
import shuffle from 'shuffle-array';
// const shuffle = require("shuffle-array");
// import API from './utils/API';


const cards = [
	{
	id: 1,
	position: 0,
	image: "./assets/images/zombie1.jpg",
	flipped: false,
	faceDown: "./assets/images/zombie12.jpg"
	},
	{
	id: 2,
	position: 0,
	image: "./assets/images/zombie2.jpg",
	flipped: false,
	faceDown: "./assets/images/zombie12.jpg"
	},
	{
	id: 3,
	position: 0,
	image: "./assets/images/zombie3.jpg",
	flipped: false,
	faceDown: "./assets/images/zombie12.jpg"
	},
	{
	id: 4,
	position: 0,
	image: "./assets/images/zombie4.jpg",
	flipped: false,
	faceDown: "./assets/images/zombie12.jpg"
	},
	{
	id: 5,
	position: 0,
	image: "./assets/images/zombie5.jpg",
	flipped: false,
	faceDown: "./assets/images/zombie12.jpg"
	},
	{
	id: 6,
	position: 0,
	image: "./assets/images/zombie6.jpg",
	flipped: false,
	faceDown: "./assets/images/zombie12.jpg"
	},
	{
	id: 7,
	position: 0,
	image: "./assets/images/zombie7.jpg",
	flipped: false,
	faceDown: "./assets/images/zombie12.jpg"
	},
	{
	id: 8,
	position: 0,
	image: "./assets/images/zombie8.jpg",
	flipped: false,
	faceDown: "./assets/images/zombie12.jpg"
	},
	{
	id: 9,
	position: 0,
	image: "./assets/images/zombie9.jpg",
	flipped: false,
	faceDown: "./assets/images/zombie12.jpg"
	},
	{
	id: 10,
	position: 0,
	image: "./assets/images/zombie10.jpg",
	flipped: false,
	faceDown: "./assets/images/zombie12.jpg"
	}
]



// const ShuffleDeck = () => {
// 	 API.getCards()
// .then(res => {
// 	console.log("this is res")
// 	console.log(res);
// 	let cardLoc = res.data.result;
// 	// cardloc.map(image=>cards
// 	for(let i = 0; i< cards.length; i++) {
// 		cards[i].image = cardLoc[i].image_url;
// 	}
	
// }).then(res =>{
// 	console.log("here")
// 	const numCards = 6;

// 	let newShuffleDeck = shuffle(cards).slice(0,numCards);

// 	newShuffleDeck.map(obj => newShuffleDeck.push({...obj}));

// 	let completeDeck = shuffle(newShuffleDeck);

// 	for(let i = 0; i < completeDeck.length; i++) {
// 	  completeDeck[i].position = i;
// 	}

// 	console.log(completeDeck);

// 	return completeDeck;
// })
// .catch(err => console.log(err))


	 
const ShuffleDeck = () => {
	const numCards = 6;

	let newShuffleDeck = shuffle(cards).slice(0,numCards);

	newShuffleDeck.map(obj => newShuffleDeck.push({...obj}));

	let completeDeck = shuffle(newShuffleDeck);

	for(let i = 0; i < completeDeck.length; i++) {
	  completeDeck[i].position = i;
	  completeDeck[i].flipped = false;
	}

	console.log(completeDeck);

	return completeDeck;

}

export default ShuffleDeck
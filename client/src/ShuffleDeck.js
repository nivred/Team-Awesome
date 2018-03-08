
import shuffle from 'shuffle-array';

//this will take cards and select 6 random and shuffle them
const ShuffleDeck = (cards) => {
	const numCards = 6;

	let newShuffleDeck = shuffle(cards).slice(0,numCards);

	newShuffleDeck.map(obj => newShuffleDeck.push({...obj}));

	let completeDeck = shuffle(newShuffleDeck);

	for(let i = 0; i < completeDeck.length; i++) {
	  completeDeck[i].position = i;
	  completeDeck[i].flipped = false;
	}

	return completeDeck;

}

export default ShuffleDeck
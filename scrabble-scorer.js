// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  name: "Scrabble",
  description: "The traditional scoring algorighm.",
  scorerFunction: "Uses the oldScrabbleScorer() function to determine the score for a given word.",
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

const simpleScoreStructure = {
  //name: "Simple Score",
  //description: "Each letter is worth 1 point.",
  //scorerFunction: "A function that returns a score based on the number of vowels and consonants.",
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T', 'D', 'G','B', 'C', 'M', 'P','F', 'H', 'V', 'W', 'Y','K','J', 'X', 'Q', 'Z']
};

const vowelBonusScoreStructure = {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts. consonants are 1 pt.",
  scorerFunction: "A function that returns a score based on the number of vowels and consonants.",
  1: ['A', 'E', 'I', 'O', 'U', 'Y'],
  3: ['L', 'N', 'R', 'S', 'T', 'D', 'G','B', 'C', 'M', 'P','F', 'H', 'V', 'W', 'Y','K','J', 'X','Q', 'Z']
};



function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some Scrabble!");
  word = input.question("\n\nEnter a word to score: ");
  console.log(oldScrabbleScorer(word));
  console.log(simpleScore(word));
  console.log(vowelBonusScore(word));
  };

  
function simpleScore(word){
word = word.toUpperCase();
let simpleScore = "";

for (let i = 0; i < word.length; i++) {
   for (const pointValue in simpleScoreStructure) {
     if (simpleScoreStructure[pointValue].includes(word[i])){
      simpleScore += `Points for '${word[i]}': ${pointValue}\n`
     }
   }
  }

return simpleScore;

}

function vowelBonusScore (word) {
  word = word.toUpperCase();
 let vowelBonusScore = "";


for (let i = 0; i < word.length; i++) {
  for (const pointValue in vowelBonusScoreStructure) {
    if (vowelBonusScoreStructure[pointValue].includes(word[i])) 
    {
      vowelBonusScore += `Points for ${word[i]}: ${pointValue}\n`
    }
  }
}

return vowelBonusScore;

}


let scrabbleScore;

let simpleScorer = {
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scorerFunction: simpleScore 
};

let vowelBonusScorer = {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts. consonants are 1 pt.",
  scorerFunction: vowelBonusScore
};

let oldScrabbleScorerer = {
  name: "Scrabble",
  description: "The traditional scoring algorighm.",
  scorerFunction: oldScrabbleScorer
};


const scoringAlgorithms = [simpleScorer, vowelBonusScorer, oldScrabbleScorerer];

function scorerPrompt() {}




function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};


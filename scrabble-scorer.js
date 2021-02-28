// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

const simpleScoreStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T', 'D', 'G','B', 'C', 'M', 'P','F', 'H', 'V', 'W', 'Y','K','J', 'X', 'Q', 'Z']
};

const vowelBonusScoreStructure = {
  3: ['A', 'E', 'I', 'O', 'U', 'Y'],
  1: ['L', 'N', 'R', 'S', 'T', 'D', 'G','B', 'C', 'M', 'P','F', 'H', 'V', 'W', 'Y','K','J', 'X','Q', 'Z']
};



function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
  let totalPointValue = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      totalPointValue += Number(pointValue);
      //console.log(totalPointValue);

		 }
 
	  }
	}
	return totalPointValue;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some Scrabble!");
  word = input.question("\n\nEnter a word to score: ");
  console.log(`Old Scrabble Scorer Value:  ${oldScrabbleScorer(word)}`);
  console.log(`Simple Scorer Value: ${simpleScore(word)}`);
  console.log(`Vowel Bonus Scorer Value: ${vowelBonusScore(word)}`);
  console.log("algorithm name: ", scoringAlgorithms[0].name);
  console.log("scorerFunction result: ", scoringAlgorithms[0].scorerFunction(word));
  return word;
  };

  
function simpleScore(word){
word = word.toUpperCase();
let simpleScore = "";

let totalPointValue = 0
for (let i = 0; i < word.length; i++) {
   for (const pointValue in simpleScoreStructure) {
     if (simpleScoreStructure[pointValue].includes(word[i])){
      simpleScore += `Points for '${word[i]}': ${pointValue}\n`
      totalPointValue += Number(pointValue);

     }
   }
  }

return totalPointValue;

}

function vowelBonusScore (word) {
  word = word.toUpperCase();
  let vowelBonusScore = "";
  let totalPointValue = 0;

for (let i = 0; i < word.length; i++) {
  for (const pointValue in vowelBonusScoreStructure) {
    if (vowelBonusScoreStructure[pointValue].includes(word[i])) 
    {
      vowelBonusScore += `Points for '${word[i]}': ${pointValue}\n`
      totalPointValue += Number(pointValue);
    }
  }
}

return totalPointValue;

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
  description: "The traditional scoring algorithm.",
  scorerFunction: oldScrabbleScorer
};


const scoringAlgorithms = [simpleScorer, vowelBonusScorer, oldScrabbleScorerer];

function scorerPrompt(word) {


value = input.question(`Which scoring algorithm would you like to use?\n \n0 - Simple: One point per character \n1 - Vowel Bonus: Vowels are worth 3 points \n2 - Scrabble: Uses scrabble point system\nEnter 0 , 1, or 2: `);

count = Number(value);

if (count === 0) {
 //console.log("algorithm name: ", scoringAlgorithms[0].name);
 console.log("Score for: " + "'" + word + "'" + ":", scoringAlgorithms[0].scorerFunction(word));

};

if (count === 1) {
 //console.log("algorithm name: ", scoringAlgorithms[1].name);
 console.log("Score for: " + "'" + word + "'" + ":", scoringAlgorithms[1].scorerFunction(word));
  }

if (count === 2){
 //console.log("algorithm name: ", scoringAlgorithms[2].name);
 console.log("Score for " + "'" + word + "'" + ":", scoringAlgorithms[2].scorerFunction(word));
 };

};


function transform(newPointStructure) {




};

const newPointStructure = {

  'a': 1, 
  'b': 3,
  'c': 3,
  'd': 2,
  'e': 1,
  'f': 4,
  'g': 2,
  'h': 4,
  'i': 1,
  'j': 8,
  'k': 5,
  'l': 1,
  'm': 3,
  'n': 1,
  'o': 1,
  'p': 3,
  'q': 10,
  'r': 1,
  'd': 1,
  't': 1,
  'u': 1,
  'v': 4,
  'w': 4,
  'x': 8,
  'y': 4,
  'z': 10, 
  //1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  //2: ['D', 'G'],
  //3: ['B', 'C', 'M', 'P'],
  //4: ['F', 'H', 'V', 'W', 'Y'],
  //5: ['K'],
  //8: ['J', 'X'],
  //10: ['Q', 'Z']
};



function runProgram() {
  //scorerPrompt();
  initialPrompt();
  scorerPrompt(word); 
  console.log("letter a: ", newPointStructure.a);
  console.log("letter j: ", newPointStructure.j);
  console.log("letter z: ", newPointStructure["z"]);

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


// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function theBeatlesPlay(musicians, instruments) {
  var array = [];
for (let i=0; i < musicians.length; i++){
  array.push(`${musicians[i]} playes ${instruments[i]}`);
}
return array;
}

function johnLennonFacts(array){

}

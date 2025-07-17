/** DICTIONNAIRE ANNEXE  1**/
const latinToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

/** CODE **/

/**ETAPE  1**/
function getLatinCharacterList(string) {
  console.log(string.split(""));
  return string.split("");
}

getLatinCharacterList("Hello WOrld");

/**ETAPE 2 **/
function translateLatinCharacter(character) {
  // for ( A in objet latinToMorse: 
  // 	if (character === latinToMorse.A){
  // 		return  A.value
  // 	}
  // }
  for (const letter in latinToMorse) {
    if (character === letter) {
      console.log(latinToMorse[letter]);
	  return latinToMorse[letter]
    }
  }
}

translateLatinCharacter("A");
translateLatinCharacter("B");

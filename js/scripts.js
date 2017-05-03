var vowels     = ["a","e","i","o","u"];
var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"]

function translateWord(word) {
  var newWord;
  if (vowels.indexOf(word[0]) !== -1) {
    newWord = word + "way";
  }

  if ((vowels.indexOf(word[0]) === -1)) {
    var moved = ["", 0];

    if (word[0] + word[1] === "qu") {
      newWord = word.slice(2) + word.slice(0,2) + "ay";
    } else {
      for (var i = 0; i < word.length; i++) {
        if (consonants.indexOf(word[i]) !== -1) {
          moved[0] += word[i];
          moved[1] += 1;
        } else {
          break
        }
      }
      newWord = word.slice(moved[1]) + moved[0] + "ay"
    }
  } else {
    return word;
  }
  return newWord;
}

function translateSentence(string) {
var newSentence = "";
//strip all punctuation and split into words
var wordArray = string.split(" ");
// .forEach(function(element) {
//   element.replace(/\W/g, "");
// });
// console.log(wordArray);
//pass all words through translateWord
for (var i = 0; i < wordArray.length; i++) {
  newSentence += translateWord(wordArray[i].toLowerCase()) + " ";
}
//repunctuate, recapitalize sentence? Ugh.
newSentence = newSentence[0].toUpperCase() + newSentence.slice(1);
return newSentence;
}

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("textarea[name='input-area']").val();
    var result = translateSentence(userInput);    $("#output").text(result);
  });
});

// how should "wyoming" be handled?
//don't forget capitalization when parsing sentences:
// word[1].toUpperCase() + word.slice(2) + word[0,1]
//remove consonants array?
//acount for uppercase

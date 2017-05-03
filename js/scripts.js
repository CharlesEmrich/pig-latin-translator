var vowels      = ["a","e","i","o","u"];
var consonants  = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","z"];
var punctuation = [",","!","."];

function translateWord(word) {
  var newWord;
  if (vowels.indexOf(word[0]) !== -1) {
    //KNOWN BUG: This broke in the final ten minutes. We should be able to use the return on line 33. Determine why we can't.
    newWord = word + "way";
    return newWord;
  }
  // var expression = new Regex();

  if ((consonants.indexOf(word[0]) !== -1) || word[0] === "y") {
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
var newArr = [];
var wordArray = string.split(/\s/g);
// Prototype for loop to grab punctuation from words
// KNOWN BUG: This code breaks 67, with 66 a decent fix. And causes letters after commas to go untranslated?.
for (var i = 0; i < wordArray.length; i++) {
  if (punctuation.indexOf(wordArray[i][0]) !== -1) {
    wordArray.splice(i, 1,
                    wordArray[i][0],
                    wordArray[0].slice(1));
    i+= 2;
  }
  if (punctuation.indexOf(wordArray[i][wordArray[i].length - 1]) !== -1) {
    // console.log([wordArray[i],
    //             wordArray[i].slice(0, wordArray[i].length - 1),
    //             wordArray[i][wordArray[i].length - 1]]);
    wordArray.splice(i, 1,
                    wordArray[i].slice(0, wordArray[i].length - 1),
                    wordArray[i][wordArray[i].length - 1]);
    i+= 2;
  }
}
//pass all words through translateWord
for (var i = 0; i < wordArray.length; i++) {
  if (punctuation.indexOf(wordArray[i]) !== -1) {
    newSentence += translateWord(wordArray[i].toLowerCase());
  } else {
    newSentence += " " + translateWord(wordArray[i].toLowerCase());
  }
}
//repunctuate, recapitalize sentence? Ugh.
newSentence = newSentence[1].toUpperCase() + newSentence.slice(2);
// newSentence = newSentence[0].toUpperCase() + newSentence.slice(1);
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

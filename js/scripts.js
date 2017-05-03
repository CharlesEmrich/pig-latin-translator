var vowels     = ["a","e","i","o","u"];
var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"]

function translateWord(word) {
  var newWord
  if (vowels.indexOf(word[0]) !== -1) {
    newWord = word + "way";
  }

  if ((consonants.indexOf(word[0]) !== -1)) {
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
  }
  return newWord;
}

function translateSentence(string) {

}

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("textarea[name='input-area']").val();
    var result = translateWord(userInput);    $("#output").text(result);
  });
});

// how should "wyoming" be handled?
//don't forget capitalization when parsing sentences:
// word[1].toUpperCase() + word.slice(2) + word[0,1]

var vowels     = ["a","e","i","o","u"];
var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"]

function translateWord(word) {
  var newWord
  if (vowels.indexOf(word[0]) !== -1) {
    newWord = word.slice(1) + word.slice(0,1) + "way";
  }
  return newWord;
}

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("textarea[name='input-area']").val();
    var result = translateWord(userInput);    $("#output").text(result);
  });
});

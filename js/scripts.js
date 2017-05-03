$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("textarea[name='input-area']").val();

    $("#output").text(userInput);
  });
});

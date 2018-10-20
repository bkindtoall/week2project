$(document).ready (function() {
  $("#formOne").submit (function(event) {
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var verbInput = $("input#verb").val();
    var clothingInput = $("input#clothing").val();
    var nounInput = $("input#noun").val();
    var pluralnoun1Input = $("input#pluralnoun1").val();
    var bodyInput = $("input#body").val();
    var pluralnoun2Input = $("input#pluralnoun2").val();
    var bodypartInput = $("input#bodypart").val();
    var noun2Input = $("input#noun2").val();
    var noun3Input = $("input#noun3").val();
    var actionInput = $("input#action").val();
    var adjective2Input = $("input#adjective2").val();
    var adjective3Input = $("input#adjective3").val();

    $(".pluralnoun").text(pluralnounInput);
    $(".adverb").text(adverbInput);
    $(".verb").text(verbInput);
    $(".clothing").text(clothingInput);
    $(".noun").text(nounInput);
    $(".pluralnoun1").text(pluralnoun1Input);
    $(".body").text(bodyInput);
    $(".pluralnoun2").text(pluralnoun2Input);
    $(".bodypart").text(bodypartInput);
    $(".noun2").text(noun2Input);
    $(".noun3").text(noun3Input);
    $(".action").text(actionInput);
    $(".adjective2").text(adjective2Input);
    $(".adjective3").text(adjective3Input);

    $("#submit").click(function(){
        alert($('input[name=codeFun]').val());
    });
 });

    event.preventDefault();

  });
});

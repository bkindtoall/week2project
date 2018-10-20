$(document).ready (function() {
  $("#needs-validation").submit (function(event) {
    var forms = document.getElementsByClassName('needs-validation');
    console.log(forms);  
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var q1answer1Input = $("input#q1answer1").val();
    var q1answer2Input = $("input#q1answer2").val();
    var q1answer3Input = $("input#q1answer3").val();
    var q1answer4Input = $("input#q1answer4").val();
    var q2answer1Input = $("input#q2answer1").val();
    var q2answer2Input = $("input#q2answer2").val();
    var q2answer3Input = $("input#q2answer3").val();
    var q2answer4Input = $("input#q2answer4").val();
    var q3answer1Input = $("input#q3answer1").val();
    var q3answer2Input = $("input#q3answer2").val();
    var q3answer3Input = $("input#q3answer3").val();
    var q4answer1Input = $("input#q4answer1").val();
    var q4answer2Input = $("input#q4answer2").val();
    var q4answer3Input = $("input#q4answer3").val();
    var q5answer1Input = $("input#q5answer1").val();
    var q5answer2Input = $("input#q5answer2").val();
    var q5answer3Input = $("input#q5answer3").val();
    var q5answer4Input = $("input#q5answer4").val();
    var q5answer5Input = $("input#q5answer5").val();
    var q5answer6Input = $("input#q5answer6").val();



    $(".lastName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".q1answer1").text(q1answer1Input);
    $(".q1answer2").text(q1answer2Input);
    $(".q1answer3").text(q1answer3Input);
    $(".q1answer4").text(q1answer4Input);
    $(".q2answer1").text(q2answer1Input);
    $(".q2answer2").text(q2answer2Input);
    $(".q2answer3").text(q2answer3Input);
    $(".q2answer4").text(q2answer4Input);
    $(".q3answer1").text(q3answer1Input);
    $(".q3answer2").text(q3answer2Input);
    $(".q3answer3").text(q3answer3Input);
    $(".q4answer1").text(q4answer1Input);
    $(".q4answer2").text(q4answer2Input);
    $(".q4answer3").text(q4answer3Input);
    $(".q5answer1").text(q5answer1Input);
    $(".q5answer2").text(q5answer2Input);
    $(".q5answer3").text(q5answer3Input);
    $(".q5answer4").text(q5answer4Input);
    $(".q5answer5").text(q5answer5Input);
    $(".q5answer6").text(q5answer6Input);

    $("#questionnaire").show();

    event.preventDefault();
    });
 });

 /*$("#submit").click(function(){
 text($('input[name=codeFun]').val());*/

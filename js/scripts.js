$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var q1 = document.getElementsByName('q1CodeFun');
    var q2 = document.getElementsByName('q2CodeFun');
    var q3 = document.getElementsByName('q3CodeFun');
    var q4 = document.getElementsByName('q4CodeFun');
    var q5 = document.getElementsByName('q5CodeFun');
    var q6 = document.getElementsByName('q6CodeFun');

    var didCheck1;
    var didCheck2;
    var didCheck3;
    var didCheck4;
    var didCheck5;


    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);

    for(var i=0; i < q1.length; i++) {
        if(q1[i].checked){
            didCheck1 = q1[i].value;
        }
      }
        for(var i=0; i < q2.length; i++) {
        if(q2[i].checked){
            didCheck2 = q2[i].value;
            console.log(didCheck2)

        }
      }
    for(var i=0; i < q3.length; i++) {
        if(q3[i].checked){
            didCheck3 = q3[i].value;
            console.log(didCheck3)
        }
      }
    for(var i=0; i < q4.length; i++) {
        if(q4[i].checked){
            didCheck4 = q4[i].value;
            console.log(didCheck4)
        }
      }
    for(var i=0; i < q5.length; i++) {
        if(q5[i].checked){
            didCheck5 = q5[i].value;
            console.log(didCheck5)
        }
      }

    });

    $("#questionnaire").show();

 });


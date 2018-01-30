$(document).ready(function(){
			$("#clock").hide();
			$("#trivia-questions").hide();
			$("#submit").hide();
			$("#results").hide();

			$("#start").click(function(){
				$("#start").hide();
				$("#clock").show();
				$("#trivia-questions").show();
				$("#submit").show();
			})

			$("#submit").click(function(){
				$("#submit").hide();
        $("#h1").hide();
				$("#trivia-questions").hide();
				$("#clock").hide();
				$("#results").show();
				$("#time-up").hide();
        $("#right").show();
				
			})
	})

	var number = 60;

    var intervalId;
  
    function run() {
   
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
      
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#clock").html("<h2> Time Remaining: " + number + " seconds </h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();
        $("#trivia-questions").hide();
        $("#time-up").show();
        $("#results").show();
        $("#submit").hide();
		    $("#clock").hide();
		    $("h1").hide();
		    $("#thanks").hide();		

        //  Alert the user that time is up.
       
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    //  Execute the run function.
    run();


    // get the answers from the user
   
    var answers = ["C", "B", "A", "D", "D", "A", "C", "B"]
    var right = 0;
    var wrong = 0;
    var unanswered = 0;
    

    var q1 = $('input[name="Q0"]:checked').val();
                console.log(q1);
    
    var q2 = $('input[name="Q1"]:checked').val();
                console.log(q2);

    var q3 = $('input[name="Q2"]:checked').val();
                console.log(q3);

    var q4 = $('input[name="Q3"]:checked').val();
                console.log(q4);

    var q5 = $('input[name="Q4"]:checked').val();
                console.log(q5);

    var q6 = $('input[name="Q5"]:checked').val();
                console.log(q6);

    var q7 = $('input[name="Q6"]:checked').val();
                console.log(q7);

    var q8 = $('input[name="Q7"]:checked').val();
                console.log(q8);

    // if q1 === answers[0] {
    //   right +=;
    // }
    // else {
    //   wrong +=;
    //     return wrong;
//     };

//     if q2 == answers[1] {
//       right +=;
//     }
//     else {
//       wrong +=;
//     };

//     if q3 == answers[2] {
//       right +=;
//     }
//     else {
//       wrong +=;
//     };

//     if q4  == answers[3] {
//       right +=;
//     }
//     else {
//       wrong +=;
//     };

//     if q5 == answers[4]{
//       right +=;
//     }
//     else {
//       wrong +=;
//     };

//     if q6 == answers[5]{
//       right +=;
//     }
//     else {
//       wrong +=;
//     };

//     if q7 == answers[6]{
//       right +=;
//     }
//     else {
//       wrong +=;
//     };

//     if q8 == answers[7]{
//       right +=;
//     }
//     else {
//       wrong +=;
//     };

    
// function returnValues() {
//     $("#right").text("<h2>Right answers: " + right + "</h2>");
//     $("#wrong").text("<h2>Wrong answers: " + wrong + "</h2>");
//     $("#blank").text("<h2>Unanswered questions: " + unanswered + "</h2>");
//        };

//       returnValues();
     
    





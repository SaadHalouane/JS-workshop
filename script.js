function calculateResult (){
    var quizform = document.getElementById("quiz-html");
    var responseQuestion1 = quizform.a1.value;
    var score = 0

    if (responseQuestion1 == 2){
    score ++
    }
    var responseQuestion2 = quizform.a2.value;

    if (responseQuestion2 == 1){
    score ++
    }
    var responseQuestion3 = quizform.a3.value;

    if (responseQuestion3 == 2){
    score ++
    }
    alert("You scored" +" "+score + " out of 3")
}
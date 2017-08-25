    var correct = 0
    var incorrect = 0
    var message=""
    var userName=""

    //name//
      function name (){
        userName = prompt("Oh, hi. Wanna learn about Grandmother? Tell me your name.", "");
        message += "Well hey there " +userName + "! Welcome to Grandmother Trivia!";
        console.log("userName is " +userName)
        document.getElementById("TriviaResponses").innerHTML = "<br>"+message
      }

    function askQuestion (question, correctMessage, incorrectMessage) {
      var usersAnswer = prompt(question, "yes/no").toLowerCase();

      message += "<p>" + question + "<p>"

      if (usersAnswer == "yes" || usersAnswer == "y")
      {
        message += correctMessage
        correct = correct +1;
        message = "<img src='http://i.imgur.com/AkPCdGb.jpg' align='left' width='100' height='100' />"+ message;
      }
      else if (usersAnswer == "no" || usersAnswer == "n")
      {
        message += incorrectMessage
        incorrect = incorrect +1;
        message = "<img src='http://i.imgur.com/Zzrpn3s.png' align='left' width='100' height='100' />"+ message;
      }

      document.getElementById("TriviaResponses").innerHTML = "<br>"+message
    }

//age//
  function Q4 (){
    var eightySeven = "How old is Grandmother?"
    var age = prompt(eightySeven);
    message = "<p>" +eightySeven+"</p>"
    if (age == "87")
    {
      message += "<p class = \"correct\">You guessed right! Grandmother will be 87 forever, she found that Tuck Everlasting juice and went wild.</p>";
      message = "<img src= 'http://i.imgur.com/AkPCdGb.jpg' align='left' width='100' height='100' />"+message;
      correct = correct + 1;
      console.log("user responded correctly to question three.")
    }
    else if (age >= 88)
    {
      message += "<p class =\"incorrect\">Don't be rude. She's not dead. Your guess is too high! Try again.</p>"
      message = "<img src='http://i.imgur.com/Zzrpn3s.png' align='left' width='100' height='100' />"+message;
      incorrect = incorrect + 1;
      console.log ("user responded incorrectly to question four")
  }
    else if (age <=86) {
    message += "<p class=\"incorrect\">Grandmother thanks you for your kindness. Your guess is too low."
    message = "<img src='http://i.imgur.com/Zzrpn3s.png' align='left' width='100' height='100' />"+message;
    incorrect = incorrect + 1;
  }
      console.log("user responded incorrectly to question four")
      document.getElementById("TriviaResponses").innerHTML += "<br>"+message
  }
//while loop to repeat a question (as in a wrong answer to Grandmother's age)

//final score//
  function finalScore () {
    message="<p class =\"correct\">You earned " + correct + " of 4 gold stars.</p>"
    message+="<p class =\"incorrect\">You missed " + incorrect + " of 4 gold stars.</p>"
    document.getElementById("TriviaResponses").innerHTML += "<br>" +message

  }

  function triviaGame() {
    name();
    var questions = new Array(
      "First things first. Is Grandmother's very favorite thing her green dress?",
      "Is Grandmother's #1 celebrity crush Jason Hardy?",
      "Did Grandmother get close to touching the Mona Lisa?",
  )
    console.log (questions)

    var correctMessage = new Array(
      "<p class=\"correct\">Gold star for you, "  +userName + "! Green dress is correct!</p>",
      "<p class=\"correct\">Gold Star for you " +userName + "! Jason is a celebrity in Grandmother's eyes. *Aww*</p>",
      "<p class=\"correct\">You would think that. Classic " +userName + ". You're right, Smarty Pants.</p>",
  )

   var incorrectMessage = new Array(
     "<p class=\"incorrect\">Negative, ghost rider. Green dress is number one. No gold star for " +userName + ". Bummer!</p>",
     "<p class=\"incorrect\">You're totally wrong right now.</p>",
     "<p class=\"incorrect\">Trick question! She didn't touch the Mona Lisa, but boy, she sure got close! No gold star this time.</p>"

   )
    for (var i = 0; i< questions.length; i++) {
      askQuestion (questions[i], correctMessage[i], incorrectMessage[i])
      console.log(i)
    }
    Q4();
    finalScore();
  }

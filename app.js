    var correct = 0
    var incorrect = 0
    var message=""
    var userName=""

    function triviaGame() {
      name(); Q1(); Q2(); Q3(); Q4(); finalScore();
    }

//name//
  function name (){
    userName = prompt("Oh, hi. Wanna learn about Grandmother? Tell me your name.", "");
    message = "Well hey there " +userName + "! Welcome to Grandmother Trivia!";
    console.log("userName is " +userName)
    document.getElementById("TriviaResponses").innerHTML = "<br>"+message
  }

//favoriteThing//
  function Q1 (){
    var greenDress = "First things first. Is Grandmother's very favorite thing her green dress?"
    var favoriteThing = prompt(greenDress, "yes/no");
    var favoriteThingLowerCase = favoriteThing.toLowerCase()
    message = "<p>" + greenDress +"</p>";
    if (favoriteThingLowerCase == "yes" || favoriteThingLowerCase == "y")
    {
      message += "<p class=\"correct\">Gold star for you, "  +userName + "! Green dress is correct!</p>";
      correct = correct + 1;
      console.log("user responded yes to question one")
    }
    else if (favoriteThingLowerCase == "no" || favoriteThingLowerCase == "n")
    {
      message += "<p class=\"incorrect\">Negative, ghost rider. Green dress is number one. No gold star for " +userName + ". Bummer!</p>";
      incorrect = incorrect +1;
      console.log("user anwsners no to question one")
    }
    else
    {
      message+="Yes or no answers only, please.";
    }
    document.getElementById("TriviaResponses").innerHTML = "<br>"+message;
  }

//crush//
  function Q2 (){
    var jason = "Is Grandmother's #1 celebrity crush Jason Hardy?"
    var crush = prompt(jason, "yes/no");
    var crushLowerCase = crush.toLowerCase()
    message = "<p>" + jason +"</p>";
    if (crushLowerCase == "yes" || crushLowerCase == "y")
    {
      message+="<p class=\"correct\">Gold Star for you " +userName + "! Jason is a celebrity in Grandmother's eyes. *Aww*</p>";
      correct = correct +1;
      console.log("user responded yes to question two.")
    }
    else if (crushLowerCase == "no" || crushLowerCase == "n")
    {
      message += "<p class=\"incorrect\">You're totally wrong right now.</p>";
      incorrect = incorrect +1;
      console.log("user responded no to questions two.")
    }
    else {alert ("Yes or no answers only, please.");
    }
    document.getElementById("TriviaResponses").innerHTML += "<br>"+message;

  }

//mona//
  function Q3 (){
    var trickQuestion = "Has Grandmother touched the Mona Lisa?"
    var mona = prompt(trickQuestion, "yes/no");
    var monaLowerCase = mona.toLowerCase()
    message = "<p>" + trickQuestion +"</p>"
    if (monaLowerCase == "yes" || monaLowerCase == "y")
    {
      message += "<p class=\"incorrect\">Trick question! She didn't touch the Mona Lisa, but boy, she sure got close! No gold star this time.</p>";
      incorrect = incorrect +1;
      console.log("user responded no to question three.")
    }
    else if (monaLowerCase == "no" || monaLowerCase == "n")
    {
      message += "<p class=\"correct\">You would think that. Classic " +userName + ". You're right, Smarty Pants.</p>";
      correct = correct + 1;
      console.log("user responded no to question three.")
    }
    else {alert ("Yes or no answers only, please.")
    }
    document.getElementById("TriviaResponses").innerHTML += "<br>"+message
  }

//age//
  function Q4 (){
    var eightySeven = "How old is Grandmother?"
    var age = prompt(eightySeven);
    message = "<p>" +eightySeven+"</p>"
    if (age == "87")
    {
      message += "<p class = \"correct\">You guessed right! Grandmother will be 87 forever, she found that Tuck Everlasting juice and went wild.</p>";
      correct = correct + 1;
      console.log("user responded correctly to question three.")
    }
    else if (age >= 88)
    {
      message += "<p class =\"incorrect\">Don't be rude. She's not dead. Your guess is too high! Try again.</p>"
      incorrect = incorrect + 1;
      console.log ("user responded incorrectly to question four")
  }
    else if (age <=86) {message = "Grandmother thanks you for your kindness. Your guess is too low."
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

    var correct = 0
    var incorrect = 0


    var userName = prompt("Oh, hi. Wanna learn about Grandmother? Tell me your name.", "");
    alert("Well hey there " +userName + "! Welcome to Grandmother Trivia!");
    console.log("userName is " +userName)
  //favoriteThing//
    var favoriteThing = prompt("First things first. Is Grandmother's very favorite thing her green dress?", "yes/no");
    var favoriteThingLowerCase = favoriteThing.toLowerCase()
    if (favoriteThingLowerCase == "yes" || favoriteThingLowerCase == "y")
    {
      alert("Gold star for you " +userName + "! That's correct!");
      correct = correct + 1;
      console.log("user responded yes to question one")
    }
    else if (favoriteThingLowerCase == "no" || favoriteThingLowerCase == "n")
    {
      alert ("Negative, ghost rider. Green dress is number one. No gold star for " +userName + ". Bummer!");
      incorrect = incorrect +1;
    console.log("user anwsners no to question one")
    }
    else
    {
      alert ("Yes or no answers only, please.");
    }
  //crush//
    var crush = prompt("Is Grandmother's #1 celebrity crush Jason Hardy?", "yes/no");
    var crushLowerCase = crush.toLowerCase()
    if (crushLowerCase == "yes" || crushLowerCase == "y")
    {
      alert("Gold Star for you " +userName + "! Jason is a celebrity in Grandmother's eyes. *Aww*");
      correct = correct +1;
      console.log("user responded yes to question two.")
    }
    else if (crushLowerCase == "no" || crushLowerCase == "n")
    {
      alert ("You're totally wrong right now.");
      incorrect = incorrect +1;
    console.log("user responded no to questions two.")
    }
    else {alert ("Yes or no answers only, please.");
    }
//mona//
    var mona = prompt("Has Grandmother touched the Mona Lisa?", "yes/no");
    var monaLowerCase = mona.toLowerCase()
    if (monaLowerCase == "yes" || monaLowerCase == "y")
    {
    alert("Trick question! She didn't touch the Mona Lisa, but boy, she sure got close! No gold star this time.");
    incorrect = incorrect +1;
    console.log("user responded no to question three.")
    }
    else if (monaLowerCase == "no" || monaLowerCase == "n")
    {
      alert ("You would think that. Classic " +userName + ". You're right, Smarty Pants.");
    correct = correct + 1;
    console.log("user responded no to question three.")
    }
    else {alert ("Yes or no answers only, please.")
    }
  //age//
    var age = prompt("How old is Grandmother?");
    if (age == "87")
    {
      alert("You guessed right! Grandmother will be 87 forever, she found that Tuck Everlasting juice and went wild.");
      correct = correct + 1;
      console.log("user responded correctly to question four.")
    }
    else if (age >= 88)
    {
      alert ("Don't be rude. She's not dead. Your guess is too high!")
    incorrect = incorrect + 1;
    }
    else if (age <=86) {alert ("Grandmother thanks you for your kindness. Your guess is too low.")
    incorrect = incorrect + 1;
  }
    console.log("user responded incorrectly to question four")



    alert("You earned " + correct + " of 4 gold stars.")
    alert("You missed " + incorrect + " of 4 gold stars.")

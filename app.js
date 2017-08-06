

  var userName = prompt("Oh, hi. Wanna learn about Grandmother? Tell me your name.", "");
  alert("Well hey there " +userName + "! Welcome to Grandmother Trivia!");
  console.log("userName is " +userName)

  var favoriteThing = prompt("First things first. Is Grandmother's very favorite thing her green dress?", "yes/no");
  var favoriteThingLowerCase = favoriteThing.toLowerCase()
  if (favoriteThingLowerCase == "yes" || favoriteThingLowerCase == "y"){
    alert("Gold star for you " +userName + "! That's correct!");
    console.log("user responded yes to question one")
  }
  else {
    alert ("Negative, ghost rider. Green dress is number one. No gold star for " +userName + ". Bummer!");
    console.log("user anwsners no to question one")
  }
  var crush = prompt("Is Grandmother's #1 celebrity crush Jason Hardy?", "yes/no");
  var crushLowerCase = crush.toLowerCase()
  if (crushLowerCase == "yes" || crushLowerCase == "y")
  {
    alert("Gold Start for you " +userName + "! Jason is a celebrity in Grandmother's eyes. *Aww*");
    console.log("user responded yes to question two.")
  }

  else {alert ("You're totally wrong right now.");
  console.log("user responded no to questions two.")
}
var mona = prompt("Has Grandmother touched the Mona Lisa?", "yes/no");
var monaLowerCase = mona.toLowerCase()
if (monaLowerCase == "yes" || monaLowerCase == "y")
{
  alert("Trick question! She didn't touch the Mona Lisa, but boy, she sure got close! No gold star this time.");
  console.log("user responded no to question three.")
}

else {alert ("You would think that. Classic " +userName + ". Smarty Pants.");
console.log("user responded no to question three.")
}

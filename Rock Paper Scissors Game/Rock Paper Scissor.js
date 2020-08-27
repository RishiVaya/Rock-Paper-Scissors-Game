// Rock paper scissors

function rpsGame(yourChoice) {
  var human, bot;
  human = yourChoice.id;
  //console.log(human);
  function rand() {
    return Math.floor(Math.random() * 3); // Math.floor makes everything whole numbers.......Math.random chooses number between 0 & 1
  }
  bot = ["Rock", "Paper", "Scissors"][rand()];
  console.log(bot);

  function rpsFrontEnd(human, bot, result) {
    // remove all options when something is clicked
    document.getElementById("Rock").remove();
    document.getElementById("Paper").remove();
    document.getElementById("Scissors").remove();

    var humandiv = document.createElement("div");
    var botdiv = document.createElement("div");
    var messagediv = document.createElement("div");

    humandiv.innerHTML =
      "<h1 style='color: black " +
      "; font-size: 45px; padding:30px; '>" +
      human +
      "</h1>";
    messagediv.innerHTML =
      "<h1 style='color: " +
      result["color"] +
      "; font-size: 45px; padding:30px; '>" +
      result["message"] +
      "</h1>";
    botdiv.innerHTML =
      "<h1 style='color: black " +
      "; font-size: 45px; padding:30px; '>" +
      bot +
      "</h1>";

    document.getElementById("flex-box-rps-div").appendChild(humandiv);
    document.getElementById("flex-box-rps-div").appendChild(messagediv);
    document.getElementById("flex-box-rps-div").appendChild(botdiv);
  }

  var result = decidewinner(human, bot);
  rpsFrontEnd(human, bot, result);

  function decidewinner(human, bot) {
    if (human === bot) {
      return { message: "It's a TIE", color: "yellow" };
    } else if (
      (human === "Rock" && bot === "Scissors") ||
      (human === "Paper" && bot === "Rock") ||
      (human === "Scissors" && bot === "Paper")
    ) {
      return { message: "You WIN", color: "green" };
    } else {
      return { message: "You LOSE", color: "red" };
    }
    // Second WAY
    // var rpsDatabase = {
    //     'Rock': {'Scissors':1, 'Rock':0.5, 'Paper':0},
    //     'Paper': {'Scissors':0, 'Rock':1, 'Paper':0.5},
    //     'Scissors': {'Scissors':0.5, 'Rock':0, 'Paper':1},
    // };
    // var yourscore = rpsDatabase[human][bot];
    // var compscore = rpsDatabase[bot][human];

    // return [yourscore, compscore];
  }
  console.log(decidewinner(human, bot));
}

function resetGame() {
  window.location.reload(); // refreshes the browser page
}

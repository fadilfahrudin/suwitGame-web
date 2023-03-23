// 1. function for get computer choice
function computerChoice() {
  const comp = Math.random();

  if (comp < 0.34) return "elephent";
  if (comp >= 0.34 && comp < 0.67) return "boy";
  return "ant";
}

// 2. function for rules game
function rulesGame(player, comp) {
  if (player == comp) return "DRAW!";
  if (player == "elephent")
    return (hasil = comp == "boy" ? "YOU WIN!" : "YOU LOSE!");
  if (player == "boy")
    return (hasil = comp == "elephent" ? "YOU LOSE!" : "YOU WIN!");
  if (player == "ant")
    return (hasil = comp == "boy" ? "YOU LOSE!" : "YOU WIN!");
}

// 3. a spin function while the computer is selecting an option
function spin() {
  const compImg = document.querySelector(".kom-img");
  document.getElementsByTagName("h2")[0].innerHTML = `MATCH LOADING...`;

  const allImg = ["elephent", "boy", "ant"];
  let i = 0;

  const start = new Date().getTime();

  setInterval(function () {
    if (new Date().getTime() - start > 1000) {
      clearInterval;
      return;
    }
    compImg.setAttribute("src", `img/${allImg[i++]}.svg`);
    if (i == allImg.length) i = 0;
  }, 100);
}

// 4. get img tag in li tag
const choices = document.querySelectorAll("li img");
// 5. looping
choices.forEach(function (choice) {
  // 6. get img while img click by user and run function for result game
  choice.addEventListener("click", function () {
    const cards = document.querySelectorAll(".card");
    const signColor = document.getElementsByClassName("innerSign")[0];
    const signShadow = document.getElementsByClassName("sign")[0];

    signColor.style.backgroundColor = "#FFCB35";
    signShadow.style.filter = "drop-shadow(0px 12px 5px #AA8A2F)";

    cards.forEach(function (card) {
      card.classList.remove("active");
      card.addEventListener("click", function () {
        card.classList.add("active");
      });
    });

    const resComp = computerChoice();

    const resPlayer = choice.className;

    const resultGame = rulesGame(resPlayer, resComp);

    spin();

    setTimeout(function () {
      const getImgComputer = document.querySelector(".kom-img");
      getImgComputer.setAttribute("src", `img/${resComp}.svg`);

      const hasil = document.getElementsByTagName("h2")[0];
      hasil.innerHTML = `${resultGame}`;

      if (resultGame == "YOU LOSE!") {
        signColor.style.backgroundColor = "#FF6060";
        signShadow.style.filter = "drop-shadow(0px 12px 5px #FF6060)";
      } else if (resultGame == "YOU WIN!") {
        signColor.style.backgroundColor = "#54F180";
        signShadow.style.filter = "drop-shadow(0px 12px 5px #9BF173)";
      } else {
        signColor.style.backgroundColor = "#B5A8A8";
        signShadow.style.filter = "drop-shadow(0px 12px 5px #B5A8A8)";
      }
    }, 1000);
  });
});

// MET EN EVIDENCE LE BOUTON QUAND ON LE SURVOLE
for (const button of faux) {
  if (button instanceof HTMLButtonElement && !button.disabled) {
    button.addEventListener("mouseenter", function changeBC() {
      this.style.backgroundColor = "#ff7556";
    });
    button.addEventListener("mouseleave", function changeBC() {
      this.style.backgroundColor = "#F26444";
    });
  }
}
for (const button of vrai) {
  if (button instanceof HTMLButtonElement && !button.disabled) {
    button.addEventListener("mouseenter", function changeBC() {
      this.style.backgroundColor = "#12c794";
    });
    button.addEventListener("mouseleave", function changeBCback() {
      this.style.backgroundColor = "#0aa67a";
    });
  }
}

// WHEN USER CHOOSES CORRECT ANSWER

correctButton.addEventListener("click", () => {
  questionText.style.backgroundColor = "#0aa67a";
  questionText.innerText = questionCards[indexQuestionCourante - 1].answer;
  correctButton.disabled = true;
  incorrectButton.disabled = true;
});

// WHEN USER CHOOSES INCORRECT ANSWER
incorrectButton.addEventListener("click", () => {
  questionText.style.backgroundColor = "#F26444";
  questionText.innerText = questionCards[indexQuestionCourante - 1].answer;
  correctButton.disabled = true;
  incorrectButton.disabled = true;
});

// GRISE LE BOUTON INCORRECT QUAND USER CHOISIT UNE REPONSE (à nettoyer)
for (i in faux) {
  if (
    answerButton[i] instanceof HTMLButtonElement &&
    (answerButton[i].className === "true" ||
      answerButton[i].className === "false")
  ) {
    answerButton[i].addEventListener("click", function () {
      if (answerButton[i].className === "true") {
        incorrectButton[i].style.backgroundColor = "#0aa67ab5";
      } else {
        incorrectButton[i].style.backgroundColor = "#f2644492";
      }
    });
  }
}
/* #f2644492 */ // QUAND FAUX EST INCORRECT
/* #0aa67ab5  */ // QUAND VRAI EST INCORRECT

/* userChoice.forEach(function (button) {

userChoice.forEach(function (button) {
  button.addEventListener("click", function () {
    const parentDiv = button.parentElement; // Récupérez l'élément parent du bouton
    const incorrectButton = parentDiv.querySelector(".incorrect"); // Sélectionnez le bouton incorrect dans le même conteneur que le bouton cliqué
    const correctButton = parentDiv.querySelector(".correct");
    if (incorrectButton.classList.contains("true")) {
      // Vérifiez si le bouton incorrect a la classe "vrai"
      incorrectButton.style.backgroundColor = "#0aa67ab5"; // Modifiez la couleur de fond du bouton incorrect
      correctButton.style.backgroundColor = "#ff7556";
    } else {
      // Si le bouton incorrect a la classe "faux"
      incorrectButton.style.backgroundColor = "#f2644492"; // Modifiez la couleur de fond du bouton incorrect
      correctButton.style.backgroundColor = "#12c794";
    }
  });

});

});
 */
console.log("coucou");

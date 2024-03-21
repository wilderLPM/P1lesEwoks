function afficherQuestion(question) {
  // Remplir les éléments HTML avec les données de la question actuelle
  questionImg.src = question.img;
  questionImg.alt = question.alt;
  questionText.textContent = question.question;

  // Remettre la couleur d'origine des boutons
  trueButton.style.backgroundColor = "#0aa67a";
  falseButton.style.backgroundColor = "#F26444";

  // Changer la classe des boutons en fonction de la question
  trueButton.classList.remove("correct", "incorrect");
  falseButton.classList.remove("correct", "incorrect");
  trueButton.classList.add(question.vrai);
  falseButton.classList.add(question.faux);

  // Réactiver les boutons vrai/faux
  correctButton.disabled = false;
  incorrectButton.disabled = false;

  // On enlève les eventListener obsolètes pour éviter qu'ils se cumulent
  incorrectButton.removeEventListener("click", clickIncorrect);
  correctButton.removeEventListener("click", clickCorrect);

  // On récupère les boutons vrai et faux selon leur nouvelle classe
  incorrectButton = document.querySelector(".incorrect");
  correctButton = document.querySelector(".correct");

  // On réassigne les eventListener au bons bouttons
  correctButton.addEventListener("click", clickCorrect);
  incorrectButton.addEventListener("click", clickIncorrect);

  // On disable le bouton suivant
  btnSuivant.disabled = true;
}

function questionSuivante() {
  // Vérifier si nous avons atteint ou non la fin du tableau
  if (indexQuestionCourante < questionCards.length) {
    // Afficher la question suivante
    afficherQuestion(questionCards[indexQuestionCourante]);

    // Incrémenter la valeur de la barre de progression de 10
    progressBarValue += 10;

    // Mettre à jour la valeur de la balise <meter>
    progressBar.value = progressBarValue;

    // Afficher le numéro de la question actuelle
    questionNumber.innerHTML = `Question n°${progressBarValue / 10}`;
    questionText.style.backgroundColor = "#f28c11"; // On remet le fond de la question en orange

    // Mettre à jour le score sur la page ranking
    const scoreDisplay = document.getElementsByClassName("score")[0];
    scoreDisplay.innerText = `Your score : ${score}/10`;
  }
  if (indexQuestionCourante === questionCards.length - 1) {
    // Si c'est la dernière question
    btnSuivant.innerText = "Résultats";
  } else if (indexQuestionCourante === questionCards.length) {
    // Si nous sommes arrivés à la fin du tableau, afficher la page ranking
    goResult();
  }

  indexQuestionCourante++;
}

btnNext.forEach((btn) => {
  btn.addEventListener("click", questionSuivante);
});

// ------------ Start the game -----------------

function startQuestions() {
  homepage.style.display = "none";
  questionsScreen.style.display = "block";
  footerScreen.style.display = "none";
  btnSuivant.style.display = "block";
}
btnStart.addEventListener("click", startQuestions);

// ------------- See ranking ---------------

function goResult() {
  questionsScreen.style.display = "none";
  resultScreen.style.display = "block";
  btnSuivant.style.display = "none";
}

// ------------- PLAY AGAIN ----------------

function backHome() {
  resultScreen.style.display = "none";
  homepage.style.display = "block";
  footerScreen.style.display = "block";
  indexQuestionCourante = 0;
  progressBarValue = 0;
  score = 0;
  btnSuivant.innerText = "Suivant";
}
playAgain.addEventListener("click", backHome);

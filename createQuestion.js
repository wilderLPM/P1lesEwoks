function afficherQuestion(question) {
  // Remplir les éléments HTML avec les données de la question actuelle
  questionImg.src = question.img;
  questionImg.alt = question.alt;
  questionText.textContent = question.question;

  // Changer la classe des boutons en fonction de la question
  trueButton.classList.remove("correct", "incorrect");
  trueButton.classList.add(question.vrai);
  falseButton.classList.remove("correct", "incorrect");
  falseButton.classList.add(question.faux);
  correctButton.disabled = false;
  incorrectButton.disabled = false;
  console.log(correctButton);
  correctButton.removeEventListener("click", countScore);
  correctButton = document.querySelector(".correct");
  correctButton.addEventListener("click", countScore);
  console.log(score);
}

function questionSuivante() {
  // Vérifier si nous avons atteint la fin du tableau
  if (indexQuestionCourante < questionCards.length) {
    // Afficher la question suivante
    afficherQuestion(questionCards[indexQuestionCourante]);

    // Incrémenter la valeur de la barre de progression de 10
    progressBarValue += 10;
    // CODE POUR AFFICHER LE NUMERO DE LA QUESTION ACTUELLE
    questionNumber.innerHTML = `Question n°${progressBarValue / 10}`;
    questionText.style.backgroundColor = "#f28c11"; // On remet le fond de la question en orange

    // Mettre à jour la valeur de la balise <meter>
    progressBar.value = progressBarValue;
    // Kana - ca marche pas maintenant,il faut creer le class pour dernier button "suivant" -> Kana faire lundi
    const scoreDisplay = document.getElementsByClassName("score")[0];
    scoreDisplay.innerText = `Your score : ${score}/10`;
  }
  if (indexQuestionCourante === questionCards.length - 1) {
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
  btnSuivant.innerText = "Suivant";
}
playAgain.addEventListener("click", backHome);

// Kana compter des scores de utiliseteur, il faut s'affichier sur chque page-> Je le fait dans la semaine prochaine.

let score = 0;
function countScore() {
  score = score + 1;
}

// MET EN EVIDENCE LE BOUTON QUAND ON LE SURVOLE
trueButton.addEventListener("mouseenter", hoverTrue);
falseButton.addEventListener("mouseenter", hoverFalse);
trueButton.addEventListener("mouseleave", resetColorTrue);
falseButton.addEventListener("mouseleave", resetColorFalse);

function hoverTrue() {
  if (trueButton.disabled === false) {
    trueButton.style.backgroundColor = "#36c099";
  }
}
function resetColorTrue() {
  if (trueButton.disabled === false) {
    trueButton.style.backgroundColor = "#0aa67a";
  }
}
function hoverFalse() {
  if (trueButton.disabled === false) {
    falseButton.style.backgroundColor = "#f27544";
  }
}
function resetColorFalse() {
  if (trueButton.disabled === false) {
    falseButton.style.backgroundColor = "#f26444";
  }
}

// WHEN USER CHOOSES CORRECT ANSWER

function clickCorrect() {
  questionText.style.backgroundColor = "#0aa67a";
  questionText.innerText = questionCards[indexQuestionCourante - 1].answer;
  correctButton.disabled = true;
  incorrectButton.disabled = true;
  score++;
}

// WHEN USER CHOOSES INCORRECT ANSWER

function clickIncorrect() {
  questionText.style.backgroundColor = "#F26444";
  questionText.innerText = questionCards[indexQuestionCourante - 1].answer;
  correctButton.disabled = true;
  incorrectButton.disabled = true;
}

// GRISE LE BOUTON INCORRECT QUAND USER CHOISIT UNE REPONSE (à nettoyer)

trueButton.addEventListener("click", greyIncorrect);
falseButton.addEventListener("click", greyIncorrect);

function greyIncorrect() {
  if (incorrectButton.classList.contains("true")) {
    incorrectButton.style.backgroundColor = "#0aa37862"; //#0aa37862 ou #0aa67ab5
    correctButton.style.backgroundColor = "#ff7556";
  } else {
    incorrectButton.style.backgroundColor = "#f2644492";
    correctButton.style.backgroundColor = "#12c794";
  }
}

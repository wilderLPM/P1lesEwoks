let header_screen = document.getElementById("homepage");
let questions_screen = document.getElementById("questions_screen");
let questions_screen2 = document.getElementById("questions_screen2");
let questions_screen3 = document.getElementById("questions_screen3");
let questions_screen4 = document.getElementById("questions_screen4");
let questions_screen5 = document.getElementById("questions_screen5");
let questions_screen6 = document.getElementById("questions_screen6");
let questions_screen7 = document.getElementById("questions_screen7");
let questions_screen8 = document.getElementById("questions_screen8");
let questions_screen9 = document.getElementById("questions_screen9");
let questions_screen10 = document.getElementById("questions_screen10");
let result_screen = document.getElementById("result_screen");

function startQuestions() {
  header_screen.style.display = "none";
  questions_screen.style.display = "block";
}
let btn_start = document.getElementById("btn_start");
btn_start.addEventListener("click", startQuestions);

function startQuestions2() {
  questions_screen.style.display = "none";
  questions_screen2.style.display = "block";
}
let btn_next = document.getElementById("btn_next");
btn_next.addEventListener("click", startQuestions2);

function startQuestions3() {
  questions_screen2.style.display = "none";
  questions_screen3.style.display = "block";
}
let btn_next2 = document.getElementById("btn_next2");
btn_next2.addEventListener("click", startQuestions3);

function startQuestions4() {
  questions_screen3.style.display = "none";
  questions_screen4.style.display = "block";
}
let btn_next3 = document.getElementById("btn_next3");
btn_next3.addEventListener("click", startQuestions4);

function startQuestions5() {
  questions_screen4.style.display = "none";
  questions_screen5.style.display = "block";
}
let btn_next4 = document.getElementById("btn_next4");
btn_next4.addEventListener("click", startQuestions5);

function startQuestions6() {
  questions_screen5.style.display = "none";
  questions_screen6.style.display = "block";
}
let btn_next5 = document.getElementById("btn_next5");
btn_next5.addEventListener("click", startQuestions6);

function startQuestions7() {
  questions_screen6.style.display = "none";
  questions_screen7.style.display = "block";
}
let btn_next6 = document.getElementById("btn_next6");
btn_next6.addEventListener("click", startQuestions7);

function startQuestions8() {
  questions_screen7.style.display = "none";
  questions_screen8.style.display = "block";
}
let btn_next7 = document.getElementById("btn_next7");
btn_next7.addEventListener("click", startQuestions8);

function startQuestions9() {
  questions_screen8.style.display = "none";
  questions_screen9.style.display = "block";
}
let btn_next8 = document.getElementById("btn_next8");
btn_next8.addEventListener("click", startQuestions9);

function startQuestions10() {
  questions_screen9.style.display = "none";
  questions_screen10.style.display = "block";
}
let btn_next9 = document.getElementById("btn_next9");
btn_next9.addEventListener("click", startQuestions10);

function startResult() {
  questions_screen10.style.display = "none";
  result_screen.style.display = "block";
}
let btn_next10 = document.getElementById("btn_next10");
btn_next10.addEventListener("click", startResult);
// ------------- PLAY AGAIN ----------------

function backHome() {
  result_screen.style.display = "none";
  homepage.style.display = "block";
}
let playagain = document.getElementById("playagain");
playagain.addEventListener("click", backHome);

// Code optimisé
/*  let header_screen = document.getElementById("homepage");
  let questions_screen = document.getElementById("questions_screen");
  let questions_screen2 = document.getElementById("questions_screen2");
  let questions_screen3 = document.getElementById("questions_screen3");
  let questions_screen4 = document.getElementById("questions_screen4");
  let questions_screen5 = document.getElementById("questions_screen5");
  let questions_screen6 = document.getElementById("questions_screen6");
  let questions_screen7 = document.getElementById("questions_screen7");
  let questions_screen8 = document.getElementById("questions_screen8");
  let questions_screen9 = document.getElementById("questions_screen9");
  let questions_screen10 = document.getElementById("questions_screen10");
  let result_screen = document.getElementById("result_screen");
  
  function startQuestions(currentScreenId, nextScreenId) {
    currentScreenId.style.display = "none";
    nextScreenId.style.display = "block";
  }
  
  function setupQuestionNavigation(buttonId, currentScreenId, nextScreenId) {
    let button = document.getElementById(buttonId);
    button.addEventListener("click", function () {
      startQuestions(currentScreenId, nextScreenId);
    });
  }
  
  setupQuestionNavigation("btn_start", header_screen, questions_screen);
  setupQuestionNavigation("btn_next", questions_screen, questions_screen2);
  setupQuestionNavigation("btn_next2", questions_screen2, questions_screen3);
  setupQuestionNavigation("btn_next3", questions_screen3, questions_screen4);
  setupQuestionNavigation("btn_next4", questions_screen4, questions_screen5);
  setupQuestionNavigation("btn_next5", questions_screen5, questions_screen6);
  setupQuestionNavigation("btn_next6", questions_screen6, questions_screen7);
  setupQuestionNavigation("btn_next7", questions_screen7, questions_screen8);
  setupQuestionNavigation("btn_next8", questions_screen8, questions_screen9);
  setupQuestionNavigation("btn_next9", questions_screen9, questions_screen10);
  setupQuestionNavigation("btn_next10", questions_screen10, result_screen);
  */
// ----------- CODE TEST -------------

//-----------CODE DE LEO-----------------
const correctButtons = document.getElementsByClassName("correct");
const incorrectButtons = document.getElementsByClassName("incorrect");
const questions = document.querySelectorAll(".question>p");
const buttons = document.getElementsByTagName("button"); // VérifieR qu'il s'agit bien d'un boutton (et non une classe qui contient 'button')
/* const vrai = document.getElementsByClassName("vrai");
const faux = document.getElementsByClassName("faux"); */
const vrai = Array.from(document.getElementsByClassName("vrai"));
const faux = Array.from(document.getElementsByClassName("faux"));
const userChoice = vrai.concat(faux);

// MET EN EVIDENCE LE BOUTON QUAND ON LE SURVOLE
for (i in faux) {
  if (faux[i] instanceof HTMLButtonElement) {
    faux[i].addEventListener("mouseenter", function changeBC() {
      this.style.backgroundColor = "#ff7556";
    });
    faux[i].addEventListener("mouseleave", function changeBC() {
      this.style.backgroundColor = "#F26444";
    });
  }
}
for (i in vrai) {
  if (vrai[i] instanceof HTMLButtonElement) {
    vrai[i].addEventListener("mouseenter", function changeBC() {
      this.style.backgroundColor = "#12c794";
    });
    vrai[i].addEventListener("mouseleave", function changeBCback() {
      this.style.backgroundColor = "#0aa67a";
    });
  }
}
// WHEN USER CHOOSES CORRECT ANSWER
for (let i = 0; i < correctButtons.length; i++) {
  correctButtons[i].addEventListener("click", function () {
    questions[i].style.backgroundColor = "#0aa67a";
  });
}
// WHEN USER CHOOSES INCORRECT ANSWER
for (let i = 0; i < incorrectButtons.length; i++) {
  incorrectButtons[i].addEventListener("click", function () {
    questions[i].style.backgroundColor = "#F26444";
  });
}
// GRISE LE BOUTON INCORRECT QUAND USER CHOISIT UNE REPONSE
for (i in faux) {
  if (
    buttons[i] instanceof HTMLButtonElement &&
    (buttons[i].className === "vrai" || buttons[i].className === "faux")
  ) {
    buttons[i].addEventListener("click", function () {
      if (buttons[i].className === "vrai") {
        incorrectButtons[i].style.backgroundColor = "#0aa67ab5";
      } else {
        incorrectButtons[i].style.backgroundColor = "#f2644492";
      }
    });
  }
}
/* #f2644492 */ // QUAND FAUX EST INCORRECT
/* #0aa67ab5  */ // QUAND VRAI EST INCORRECT

userChoice.forEach(function (button) {
  button.addEventListener("click", function () {
    const parentDiv = button.parentElement; // Récupérez l'élément parent du bouton
    const incorrectButton = parentDiv.querySelector(".incorrect"); // Sélectionnez le bouton incorrect dans le même conteneur que le bouton cliqué
    const correctButton = parentDiv.querySelector(".correct");
    if (incorrectButton.classList.contains("vrai")) {
      // Vérifiez si le bouton cliqué a la classe "vrai"
      incorrectButton.style.backgroundColor = "#0aa67ab5"; // Modifiez la couleur de fond du bouton incorrect
      correctButton.style.backgroundColor = "#ff7556";
    } else {
      // Si le bouton cliqué a la classe "faux"
      incorrectButton.style.backgroundColor = "#f2644492"; // Modifiez la couleur de fond du bouton incorrect
      correctButton.style.backgroundColor = "#12c794";
    }
  });
});

let avatarButton1 = document.getElementsByClassName("avatar1");
let avatarButton2 = document.getElementsByClassName("avatar2");
let avatarButton3 = document.getElementsByClassName("avatar3");
let avatarButton4 = document.getElementsByClassName("avatar4");
let lastClickedAvatar = null;
function configureAvatarButton(avatarButtons) {
  for (let i = 0; i < avatarButtons.length; i++) {
    avatarButtons[i].addEventListener("click", function (event) {
      event.preventDefault();
      // Réinitialise les styles du dernier bouton cliqué (s'il existe)
      if (lastClickedAvatar) {
        lastClickedAvatar.style.transform = "scale(1)";
        lastClickedAvatar.style.backgroundColor = "";
        lastClickedAvatar.style.borderRadius = "";
      }
      // Met à jour les styles du bouton actuel
      this.style.transform = "scale(1.2)";
      this.style.backgroundColor = "#f28c11";
      this.style.borderRadius = "50%";
      // Met à jour la référence du dernier bouton cliqué
      lastClickedAvatar = this;
    });
  }
}
configureAvatarButton(avatarButton1, 1);
configureAvatarButton(avatarButton2, 2);
configureAvatarButton(avatarButton3, 3);
configureAvatarButton(avatarButton4, 4);

function validerPseudo() {
  // Récupérer la valeur du pseudo
  let pseudo = document.getElementById("pseudo").value;

  // Vérifier si le pseudo est vide
  if (pseudo.trim() === "") {
    alert("Veuillez saisir un pseudo");
    return;
  }
  // Afficher le pseudo dans le résultat
  document.getElementById("pseudoAffiche").innerText = pseudo;

  // Afficher le résultat
  document.getElementById("resultat").style.display = "block";
}

// ----------------------Function go to top page Kana------------------

const goTopageTop = document.getElementById("playagain");

// This funtion works, back to top but too much
goTopageTop.addEventListener("click", function () {
  window.location.href = "#pageTop";
});

//If we will not go scroll page, this can be worked.
// const pageTop = document.getElementById("pageTop");
// const pageRanking = document.getElementById("pageRanking");
//goTopageTop.addEventListener('click', function () {
//     // I will change button color later
//     // goToPageTop.style.backgroundColor = 'red';
//     // Hide pageRanking
//     pageRanking.classList.remove('pageRanking');
//     // Show pageTop
//     pageTop.classList.add('pageTop');
// });

// Scroll to the top of the page another way
// goTopageTop.addEventListener('click', function () {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// });

// ----------------------Function change color on each ranking container  (WIP) Kana------------------

const changeColorRanking = document.getElementsByTagName("li");

for (let i = 0; i < changeColorRanking.length; i++) {
  changeColorRanking[i].addEventListener("click", function () {
    this.style.backgroundColor = "red";
  });
}

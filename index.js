

//-----------CODE DE LEO-----------------
const correctButtons = document.getElementsByClassName("correct");
const incorrectButtons = document.getElementsByClassName("incorrect");
const questions = document.querySelectorAll(".question>p");
const buttons = document.getElementsByTagName("button");// VérifieR qu'il s'agit bien d'un boutton (et non une classe qui contient 'button')
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
    if (buttons[i] instanceof HTMLButtonElement && (buttons[i].className === "vrai" || buttons[i].className === "faux")) {
        buttons[i].addEventListener("click", function () {
            if (buttons[i].className === "vrai") {
                incorrectButtons[i].style.backgroundColor = "#0aa67ab5";
            }
            else {
                incorrectButtons[i].style.backgroundColor = "#f2644492";
            }
        })
    }
}
/* #f2644492 */ // QUAND FAUX EST INCORRECT
/* #0aa67ab5  */// QUAND VRAI EST INCORRECT


userChoice.forEach(function (button) {
    button.addEventListener("click", function () {
        const parentDiv = button.parentElement; // Récupérez l'élément parent du bouton
        const incorrectButton = parentDiv.querySelector(".incorrect"); // Sélectionnez le bouton incorrect dans le même conteneur que le bouton cliqué
        const correctButton = parentDiv.querySelector(".correct");
        if (incorrectButton.classList.contains("vrai")) { // Vérifiez si le bouton cliqué a la classe "vrai"
            incorrectButton.style.backgroundColor = "#0aa67ab5"; // Modifiez la couleur de fond du bouton incorrect
            correctButton.style.backgroundColor = "#ff7556";
        } else { // Si le bouton cliqué a la classe "faux"
            incorrectButton.style.backgroundColor = "#f2644492"; // Modifiez la couleur de fond du bouton incorrect
            correctButton.style.backgroundColor = "#12c794";
        }
    });
});
=======
let avatarButton1 = document.getElementsByClassName("avatar1");
let avatarButton2 = document.getElementsByClassName("avatar2");
let avatarButton3 = document.getElementsByClassName("avatar3");
let avatarButton4 = document.getElementsByClassName("avatar4");
let lastClickedAvatar = null;
function configureAvatarButton(avatarButtons, avatarId) {
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
goTopageTop.addEventListener('click', function () {
    window.location.href = '#pageTop';

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
    changeColorRanking[i].addEventListener('click', function () {
        this.style.backgroundColor = 'red';

    });
}


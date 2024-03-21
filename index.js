//-----------CODE DE LEO-----------------

const correctButtons = document.getElementsByClassName("correct");
const incorrectButtons = document.getElementsByClassName("incorrect");
const correctButtonsArray = Array.from(correctButtons);
const incorrectButtonsArray = Array.from(incorrectButtons);
const questions = document.querySelectorAll(".question-text");
const buttons = document.getElementsByClassName("answer-button"); // VérifieR qu'il s'agit bien d'un boutton (et non une classe qui contient 'button')

const vrai = Array.from(document.getElementsByClassName("true"));
const faux = Array.from(document.getElementsByClassName("false"));
const userChoice = vrai.concat(faux);

console.log("Correct buttons:", correctButtons);
console.log("Incorrect buttons:", incorrectButtons);
console.log("Questions:", questions);
console.log(typeof correctButtons);
console.log(typeof incorrectButtons);

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
correctButtonsArray.forEach((button, index) => {
    button.addEventListener("click", () => {
        questions[index].style.backgroundColor = "#0aa67a";
        correctButtonsArray[index].disabled = true;
        incorrectButtonsArray[index].disabled = true;
    });
});

// WHEN USER CHOOSES INCORRECT ANSWER
incorrectButtonsArray.forEach((button, index) => {
    button.addEventListener("click", () => {
        questions[index].style.backgroundColor = "#F26444";
        correctButtonsArray[index].disabled = true;
        incorrectButtonsArray[index].disabled = true;
    });
});


// GRISE LE BOUTON INCORRECT QUAND USER CHOISIT UNE REPONSE
for (i in faux) {
    if (
        buttons[i] instanceof HTMLButtonElement &&
        (buttons[i].className === "true" || buttons[i].className === "false")
    ) {
        buttons[i].addEventListener("click", function () {
            if (buttons[i].className === "true") {
                incorrectButtons[i].style.backgroundColor = "#0aa67ab5";
            } else {
                incorrectButtons[i].style.backgroundColor = "#f2644492";
            }
        });
    }
}
/* #f2644492 */ // QUAND FAUX EST INCORRECT
/* #0aa67ab5  */ // QUAND VRAI EST INCORRECT

// userChoice.forEach(function (button) {
//     button.addEventListener("click", function () {
//         const parentDiv = button.parentElement; // Récupérez l'élément parent du bouton
//         const incorrectButton = parentDiv.querySelector(".incorrect"); // Sélectionnez le bouton incorrect dans le même conteneur que le bouton cliqué
//         const correctButton = parentDiv.querySelector(".correct");
//         if (incorrectButton?.classList.contains("true")) {
//             // Vérifiez si le bouton incorrect a la classe "vrai"
//             incorrectButton.style.backgroundColor = "#0aa67ab5"; // Modifiez la couleur de fond du bouton incorrect
//             correctButton.style.backgroundColor = "#ff7556";
//         } else {
//             // Si le bouton incorrect a la classe "faux"
//             incorrectButton?.style.backgroundColor = "#f2644492"; // Modifiez la couleur de fond du bouton incorrect
//             correctButton.style.backgroundColor = "#12c794";
//         }
//     });
// });

//--------------CODE DE THIEN-----------------

let header_screen = document.getElementById("homepage");
let questions_screen = document.getElementById("questions_screen");
let result_screen = document.getElementById("result_screen");

function startQuestions() {
    header_screen.style.display = "none"; // La classe a changé
    questions_screen.style.display = "block";
}
let btn_start = document.getElementById("btn_start");
btn_start.addEventListener("click", startQuestions);



function startResult() {
    questions_screen10.style.display = "none";
    result_screen.style.display = "block";
}
let btn_next10 = document.getElementById("btn_next10"); // A Modifier
btn_next10?.addEventListener("click", startResult);
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
    changeColorRanking[i].addEventListener('click', function () {
        // si le bouton sur lequel tu cliaue est gris
        // theoriquement il ne peut y avoir qu4un seul bouton gris donc pas besoin den chercher d4autre
        // on rend le bouton blanc et on stop la fonction avec return 

        // si le bouton sur lequel tu clique est blanc
        // il faut trouver dans la liste des bouton lequel est gris pour le ;ettre en blanc
        // boucle for sur changeColorRanking si gris alors devient blanc
        // une fois laboucle fini normalement tout les bouton son blanc
        // maintenant tu peut colorer en gris le bouton sur lequel tu qs cliquer  
        if (this.style.backgroundColor === '') {
            this.style.backgroundColor = 'grey';
        }
        else {
            this.style.backgroundColor = '';
        }
    });
}

// ----------------------Function star  (WIP) Kana------------------
//Star maker
function starMaker(n) {
    // creation d4un element <div class="star">★</div>
    var star = document.createElement("div");
    star.className = "star";
    star.textContent = "★";
    for (var i = 0; i < n; i++) {
        starSet(star);
    }
}

// // Kana a modifier 
//Setting start
// function starSet(clone) {
//     // creation d4un clone de l3element star
//     var starClone = clone.cloneNode(true);
//     var starStyle = starClone.style;

//     // Star position（left）,（animation-delay）、size（font-size）random decision 
//     starStyle.left = 100 * Math.random() + "%";
//     starStyle.animationDelay = 8 * Math.random() + "s";
//     starStyle.fontSize = ~~(50 * Math.random() + 20) + "px";
//     document.body.appendChild(starClone);

//     // create new starts when it ends  il y a une animation dans le css, quand elle se fini ca supprime l4etoile et la recrer pour que lanimation recommece
//     starClone.addEventListener("animationend", function () {
//         starClone.parentNode.removeChild(starClone);
//         var star = document.createElement("div");
//         star.className = "star";
//         star.textContent = "★";
//         starSet(star);
//     }, false)
// }

// //50 stars 
// starMaker(30)

// CODE POUR AFFICHER LE NUMERO DE LA QUESTION ACTUELLE
let questionNumber = document.getElementsByClassName("question-number")[0];
questionNumber.innerHTML = `Question n°${document.getElementsByClassName("enabled").length}`;
// Il faut créer le code JS pour ajouter la classe "enabled" aux questions cards dont le display est block



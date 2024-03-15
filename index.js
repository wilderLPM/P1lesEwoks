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
// ------------- PLAY AGAIN ----------------


// ----------------------Function star  (WIP) Kana------------------
//Star maker
// function starMaker(n) {
//     var star = document.createElement("div");
//     star.className = "star";
//     star.textContent = "★";
//     for (var i = 0; i < n; i++) {
//         starSet(star);
//     }
// }

// //Setting start
// function starSet(clone) {
//     var starClone = clone.cloneNode(true);
//     var starStyle = starClone.style;

//     //Star position（left）,（animation-delay）、size（font-size）random decision 
//     starStyle.left = 100 * Math.random() + "%";
//     starStyle.animationDelay = 8 * Math.random() + "s";
//     starStyle.fontSize = ~~(50 * Math.random() + 20) + "px";
//     document.body.appendChild(starClone);

//     //create new starts when it ends 
//     starClone.addEventListener("animationend", function () {
//         this.parentNode.removeChild(this);
//         var star = document.createElement("div");
//         star.className = "star";
//         star.textContent = "★";
//         starSet(star);
//     }, false)
// }

// //50 stars 
// starMaker(30)


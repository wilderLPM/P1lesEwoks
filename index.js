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
      activerFonctionClass();
    });
  }
}
configureAvatarButton(avatarButton1, 1);
configureAvatarButton(avatarButton2, 2);
configureAvatarButton(avatarButton3, 3);
configureAvatarButton(avatarButton4, 4);

function createAvatar10() {
  let avatar10 = document.createElement("img");
  avatar10.classList.add("playerAvatar");
  avatar10.src = "images/avatar1.svg";
  questionHeader.appendChild(avatar10);
}

function createAvatar20() {
  let avatar20 = document.createElement("img");
  avatar20.classList.add("playerAvatar");
  avatar20.src = "images/avatar2.svg";
  questionHeader.appendChild(avatar20);
}

function createAvatar30() {
  let avatar30 = document.createElement("img");
  avatar30.classList.add("playerAvatar");
  avatar30.src = "images/avatar3.svg";
  questionHeader.appendChild(avatar30);
}

function createAvatar40() {
  let avatar40 = document.createElement("img");
  avatar40.classList.add("playerAvatar");
  avatar40.src = "images/avatar4.svg";
  questionHeader.appendChild(avatar40);
}

function activerFonctionClass() {
  if (lastClickedAvatar) {
    if (lastClickedAvatar.classList.contains("avatar1")) {
      // Appeler la fonction pour la classe avatar1
      return createAvatar10();
    } else if (lastClickedAvatar.classList.contains("avatar2")) {
      // Appeler la fonction pour la classe avatar2
      return createAvatar20();
    } else if (lastClickedAvatar.classList.contains("avatar3")) {
      // Appeler la fonction pour la classe avatar3
      return createAvatar30();
    } else if (lastClickedAvatar.classList.contains("avatar4")) {
      // Appeler la fonction pour la classe avatar4
      return createAvatar40();
    }
  }
}
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

// ----------------------Function change color on each ranking container  (WIP) Kana------------------

// Idée : quand on clique sur un btn blanc, ts les btn deviennent blancs
// puis le bouton cliqué devient gris.

for (let i = 0; i < changeColorRanking.length; i++) {
  changeColorRanking[i].addEventListener("click", function () {
    if (this.style.color === "grey") {
      // si le bouton sur lequel tu clique est gris
      this.style.color = "white"; // theoriquement il ne peut y avoir qu4un seul bouton gris donc pas besoin den chercher d4autre
      return; // on rend le bouton blanc et on stop la fonction avec return
    }

    if (this.style.color === "white") {
      //si le bouton sur lequel tu clique est blanc
      //il faut trouver dans la liste des bouton lequel est gris pour le mettre en blanc
      // boucle for sur changeColorRanking si gris alors devient blanc
      for (let z = 0; z < changeColorRanking.length; z++) {
        // une fois laboucle fini normalement tout les bouton son blanc
        changeColorRanking[z].style.color = "white";
      }
      return (this.style.color = "grey"); // maintenant tu peut colorer en gris le bouton sur lequel tu qs cliquer
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

function starSet(clone) {
  // creation d4un clone de l3element star
  var starClone = clone.cloneNode(true);
  var starStyle = starClone.style;

  // Star position（left）,（animation-delay）、size（font-size）random decision
  starStyle.left = 100 * Math.random() + "%";
  starStyle.animationDelay = 8 * Math.random() + "s";
  starStyle.fontSize = ~~(50 * Math.random() + 20) + "px";
  resultScreen.appendChild(starClone);

  // create new starts when it ends  il y a une animation dans le css, quand elle se fini ca supprime l4etoile et la recrer pour que lanimation recommece
  starClone.addEventListener(
    "animationend",
    function () {
      starClone.parentNode.removeChild(starClone);
      var star = document.createElement("div");
      star.className = "star";
      star.textContent = "★";
      starSet(star);
    },
    false
  );
}

//combien stars
starMaker(30);

//---------------------------------------------PSEUDO FORM --------------------------------------------------------------------------
document
  .getElementById("nameForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    let name = document.getElementById("nameInput").value;
    let pseudoChange = document.getElementById("pseudoChange").value; // Récupération de la valeur du deuxième mot
    let pseudoChange2 = document.getElementById("pseudoChange2").value; // Récupération de la valeur du troisième mot

    // Vérification si le champ du pseudo est vide
    if (name.trim() === "") {
      alert("Mets un Pseudo on t'a dit !");
      return; // Arrête l'exécution de la fonction
    }

    let replacedText = "Salut [NOM] ! Prêt à jouer ? Appuie sur Start !"; // Texte à remplacer

    // Remplacement du premier mot
    let updatedText = replacedText.replace("[NOM]", name);
    // Remplacement du deuxième mot
    updatedText = updatedText.replace("[AUTRE_MOT]", pseudoChange);
    updatedText = updatedText.replace("[pseudoChange2]", pseudoChange2);

    document.getElementById("output").innerText = updatedText;
    document.getElementById("pseudoChange").innerText = name;
    document.getElementById("pseudoChange2").innerText = name;
  });

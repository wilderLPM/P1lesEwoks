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

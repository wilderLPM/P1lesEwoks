function createQuestion(card) {
    // On récupère le parent dans lequel toutes nos question cards vont aller
    let questionScreen = document.getElementsByClassName("questions_screen")[0];

    // On crée la div "question-card" pour y insérer <img/> et <p></p> qu'on va créer !
    let questionCard = document.createElement("div");
    questionCard.classList.add("question-card");

    // On crée la div "card-buttons" pour y insérer les bouttons vrai/faux que l'on va créer !
    let cardButtons = document.createElement("div");
    cardButtons.classList.add("card-buttons");

    let questionImg = document.createElement("img"); // On crée une balise <img/> virtuelle
    questionImg.classList.add("question-img") // On lui donne la classe "question-img"
    questionCard.appendChild(questionImg); // On met la balise <img/> créée, en enfant du div "question-card"
    questionImg.setAttribute("src", card.img)

    let questionText = document.createElement("p");
    questionText.classList.add("question-text");
    questionText.innerText = card.question;
    questionCard.appendChild(questionText); // Deuxième enfant de questionCard

    let buttonTrue = document.createElement("button");
    buttonTrue.innerText = "VRAI";
    buttonTrue.classList.add("true", "answer-button", card.vrai);  // On donne au boutton la classe 
    // correct/incorrect en fonction de la question
    cardButtons.appendChild(buttonTrue); // On met la balise <button> créée, en enfant du div "cardButtons"

    let buttonFalse = document.createElement("button");
    buttonFalse.innerText = "FAUX";
    buttonFalse.classList.add("false", "answer-button", card.faux);
    cardButtons.appendChild(buttonFalse); // Deuxième enfant de cardButtons

    questionCard.appendChild(cardButtons); // Troisème enfant de questionCard
    questionScreen.appendChild(questionCard);
    questionScreen.appendChild(cardButtons);
}
// On crée les 10 questionCards à l'aide d'une boucle
for (const value of questionCards) {
    createQuestion(value);
    console.log("Done"); // Message de vérification
}
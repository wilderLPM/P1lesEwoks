//---------------- AVATAR -----------------------
let avatarButton1 = document.getElementsByClassName("avatar1");
let avatarButton2 = document.getElementsByClassName("avatar2");
let avatarButton3 = document.getElementsByClassName("avatar3");
let avatarButton4 = document.getElementsByClassName("avatar4");

const changeColorRanking = document.getElementsByTagName("li");

//---------------- QUESTIONS -----------------------

const questionImg = document.querySelector(".questionImg");
const questionText = document.querySelector(".questionText");

let questionNumber = document.querySelector(".questionNumber"); // NUMERO QUESTION ACTUELLE

const progressBar = document.getElementById("progressBar"); // ProgressBar

const headerScreen = document.getElementById("homepage");
const questionsScreen = document.getElementById("questionsScreen");
const resultScreen = document.getElementById("resultScreen");
const footerScreen = document.getElementById("footerScreen");

//---------------- BOUTTONS -----------------------

const btnNext = document.querySelectorAll(".btnNext"); // START et SUIVANT
const btnStart = document.getElementById("btnStart"); // START
const btnSuivant = document.getElementById("btnSuivant"); // SUIVANT
const playAgain = document.getElementById("playAgain"); // PLAY AGAIN

let correctButton = document.querySelector(".correct"); // CORRECT
let incorrectButton = document.querySelector(".incorrect"); // INCORRECT
const answerButton = document.getElementsByClassName("answerButton"); // VRAI et FAUX

const trueButton = document.querySelector(".true"); // VRAI
const falseButton = document.querySelector(".false"); // FAUX

//---------------- OTHER -----------------------

let score = 0;
let indexQuestionCourante = 0;
let progressBarValue = 0;

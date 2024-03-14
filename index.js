




















































































































































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
    var star = document.createElement("div");
    star.className = "star";
    star.textContent = "★";
    for (var i = 0; i < n; i++) {
        starSet(star);
    }
}

//Setting start
function starSet(clone) {
    var starClone = clone.cloneNode(true);
    var starStyle = starClone.style;

    //Star position（left）,（animation-delay）、size（font-size）random decision 
    starStyle.left = 100 * Math.random() + "%";
    starStyle.animationDelay = 8 * Math.random() + "s";
    starStyle.fontSize = ~~(50 * Math.random() + 20) + "px";
    document.body.appendChild(starClone);

    //create new starts when it ends 
    starClone.addEventListener("animationend", function () {
        this.parentNode.removeChild(this);
        var star = document.createElement("div");
        star.className = "star";
        star.textContent = "★";
        starSet(star);
    }, false)
}

//50 stars 
starMaker(50)


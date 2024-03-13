




















































































































































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


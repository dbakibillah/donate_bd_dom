const btnDonateEl = document.getElementById("btn-donate");
const btnHistoryEl = document.getElementById("btn-history");
const sectionDonationEl = document.getElementById("donation-section");
const sectionHistoryEl = document.getElementById("history-section");

btnDonateEl.addEventListener("click", function () {
    sectionDonationEl.style.display = "block";
    sectionHistoryEl.style.display = "none";
    
    // button active
    btnDonateEl.classList.add("btn-active");
    btnDonateEl.classList.add("bg-greenyellow");
    btnHistoryEl.classList.remove("btn-active");
    btnHistoryEl.classList.remove("bg-greenyellow");
});

btnHistoryEl.addEventListener("click", function () {
    sectionDonationEl.style.display = "none";
    sectionHistoryEl.style.display = "block";

    // button active
    btnDonateEl.classList.remove("btn-active");
    btnDonateEl.classList.remove("bg-greenyellow");
    btnHistoryEl.classList.add("btn-active");
    btnHistoryEl.classList.add("bg-greenyellow");
});

document.getElementById("btn-blog").addEventListener("click", function () {
    window.location.href = "blog.html";
});
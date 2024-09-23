const btnDonateEl = document.getElementById("btn-donate");
const btnHistoryEl = document.getElementById("btn-history");
const sectionDonationEl = document.getElementById("donation-section");
const sectionHistoryEl = document.getElementById("history-section");
const availableBalanceEl = document.getElementById("available-balance");

const donationBalanceEl1 = document.getElementById("donation-balance1");
const inputAmountEl1 = document.getElementById("input-amount1");
const btnCardEl1 = document.getElementById("btn-card1");

const donationBalanceEl2 = document.getElementById("donation-balance2");
const inputAmountEl2 = document.getElementById("input-amount2");
const btnCardEl2 = document.getElementById("btn-card2");

const donationBalanceEl3 = document.getElementById("donation-balance3");
const inputAmountEl3 = document.getElementById("input-amount3");
const btnCardEl3 = document.getElementById("btn-card3");

const donationTitleEl1 = document.getElementById("donation-title1");
const donationTitleEl2 = document.getElementById("donation-title2");
const donationTitleEl3 = document.getElementById("donation-title3");

btnDonateEl.addEventListener("click", function () {
    sectionDonationEl.style.display = "block";
    sectionHistoryEl.style.display = "none";

    btnDonateEl.classList.add("btn-active", "bg-greenyellow");
    btnHistoryEl.classList.remove("btn-active", "bg-greenyellow");
});

btnHistoryEl.addEventListener("click", function () {
    sectionDonationEl.style.display = "none";
    sectionHistoryEl.style.display = "block";

    btnHistoryEl.classList.add("btn-active", "bg-greenyellow");
    btnDonateEl.classList.remove("btn-active", "bg-greenyellow");
});

document.getElementById("btn-blog").addEventListener("click", function () {
    window.location.href = "blog.html";
});

function getAvailableBalance() {
    let availableBalance = parseInt(availableBalanceEl.innerText);

    if (isNaN(availableBalance) || availableBalance <= 0) {
        alert("Insufficient Balance!");
        availableBalanceEl.innerText = 0;
        return 0;
    }
    return availableBalance;
}

function inputValidation(input) {
    let inputAmount = parseInt(input.value);

    if (isNaN(inputAmount) || inputAmount <= 0) {
        alert("Invalid Input! Please enter a valid donation amount.");
        return null;
    }
    return inputAmount;
}

function updateHistory(inputAmount, title) {
    const currentDate = new Date();

    sectionHistoryEl.innerHTML += `
    <div class="p-2 lg:p-8 space-y-2 shadow-xl border border-blue-300 rounded-lg">
        <h2 class="text-xl lg:text-2xl font-bold"><span>${inputAmount}</span> BDT Donated for <span>${title.innerText}</span></h2>
        <p class="text-gray-500">Date: <span>${currentDate}</span></p>
    </div>
    `;
}

function donateNow(input, cardBalance, title) {
    let availableBalance = getAvailableBalance();

    if (availableBalance === 0) return;

    let inputAmount = inputValidation(input);
    if (inputAmount === null) return;

    let cardBalanceAmount = parseInt(cardBalance.innerText);

    if (inputAmount > availableBalance) {
        alert("Insufficient Balance!");
        return;
    }

    document.getElementById("my_modal_1").showModal();

    availableBalance -= inputAmount;
    availableBalanceEl.innerText = availableBalance;
    cardBalanceAmount += inputAmount;
    cardBalance.innerText = cardBalanceAmount;

    updateHistory(inputAmount, title);
}

btnCardEl1.addEventListener("click", function () {
    donateNow(inputAmountEl1, donationBalanceEl1, donationTitleEl1);
});

btnCardEl2.addEventListener("click", function () {
    donateNow(inputAmountEl2, donationBalanceEl2, donationTitleEl2);
});

btnCardEl3.addEventListener("click", function () {
    donateNow(inputAmountEl3, donationBalanceEl3, donationTitleEl3);
});

const form = document.querySelector('.card-checkout__form');
const name = document.querySelector('.card-checkout__cardholder-first-name');
const lastName = document.querySelector('.card-checkout__cardholder-last-name');
const errorElement = document.getElementById('error')

form.addEventListener('submit', (event) => {
    let messages = [];
    if (name.value === '' || name.value === null) {
        messages.push('Required field. Can’t be empty')
    }

    if (lastName.value === '' || lastName.value === null) {
        messages.push('Required field. Can’t be empty')
    }

    if (messages.length > 0) {
        event.preventDefault();
        errorElement.innerText = messages.join(', ')
    }
});

// Credit card type validation by number
// https://stackoverflow.com/questions/72768/how-do-you-detect-credit-card-type-based-on-number
//https://www.youtube.com/watch?v=nzHUbbK9izY&t=152s

function getCreditNumber() {
    return document.getElementById('creditNumber').value;
}

function luhnCheck() {
    let ccNum = getCreditNumber();
    let ccNumSplit = ccNum.split('');
    let sum = 0;
    const validCard = false;
    let singleNum = [], doubleNum = [], finalArray = undefined;

    return !((!/\d{15,16}(~\W[a-zA-Z])*$/g.test(ccNum)) || (ccNum.length > 16));
}

document.getElementById("submitBtn").addEventListener("click", function() {
   document.getElementById("resultDiv").innerHTML = luhnCheck();
}, false);

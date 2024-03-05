let reservation =
{
    startDate: null,
    endDate: null,
    guestsCount: 0,
    roomType: null,
    name: null,
    phone: null,
    email: null
}

//questioner java script
function changeContent(className) {
    document.querySelectorAll('.custom-form').forEach(div => div.classList.add('hidden'));
    if( document.querySelector(`.${className}`) != null){
    document.querySelector(`.${className}`).classList.remove('hidden');
    }
}

document.querySelector('#new-reservation').addEventListener('click', (e) => cleanData(e));


function cleanData(e) {

    e.preventDefault();
    changeContent('confirm-reservation-content');
}
//add verifier javascript:
document.querySelector('#confirm-back-btn').addEventListener('click', (e) => getBackToPersonalData(e));

function getBackToPersonalData(e) {
    e.preventDefault();
    changeContent('confirm-reservation-content');
}


document.querySelector('#confirm-reservation').addEventListener('click', (e) => showThanksPage(e));

function showThanksPage(e) {
    e.preventDefault();
    changeContent('thank-you-content');
}


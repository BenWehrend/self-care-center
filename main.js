var receiveMessageButton = document.getElementById('meditate-image');
var mantrasRadioButton = document.getElementById('mantra-message')
var affirmationRadioButton = document.getElementById('affirmation-message')
var newMantra = document.getElementById('mantra-text');
var radioButton = document.getElementById('radio-button');
var clearMessage = document.getElementById('clear-message-button');

var currentAffirmation;
var currentMantra;

var affirmations = [
    'My body is healthy and my mind is at peace.',
    'I am confident and I am enough.',
    'I am ready and capable to handle everything.',
    'I am loved and supported by the Universe.',
    'I deserve love and happiness.',
    'I love myself yesterday, today, and tomorrow.',
    'I am at peace in my body, my mind, and my life.',
    'I am worthy of love.',
    'Today I take another step toward positive change.',
    'Productivity does not define my value.'
];

var mantras = [
    'All is well, right here, right now',
    'Do not be afraid to give up the good and go for the great',
    'Laughter lightens my load',
    'Be a warrior, not a worrier',
    'I choose to be calm and at peace',
    'I am blessed with an incredible family and wonderful friends',
    'I let go of anything not for my highest good',
    'Love radiates out from me in all directions and returns to me multiplied',
    'All I need comes to me when I need it.',
    'I am not just a drop in the ocean. I am the ocean in one drop.'
];

document.getElementById('affirmation-message').onclick = function() {
    document.getElementById('receive-message-button').disabled = false;
};

document.getElementById('mantra-message').onclick = function() {
    document.getElementById('receive-message-button').disabled = false;
};

function receiveMessageClick() {
    var message = '';
    receiveMessageButton.style.visibility = "hidden";
    if (affirmationRadioButton.checked) {
        message = randAffirmation(affirmations);
       }
    if (mantrasRadioButton.checked) {
        message = randMantra(mantras);
     }
     newMantra.innerText = message;
     newMantra.style.visibility = "visible";
     document.getElementById('clear-message-button').disabled = false;
};

function clearMessageClick() {
    newMantra.innerText = '';
    receiveMessageButton.style.visibility = "visible";
};

function randAffirmation(affirmations) {
    return affirmations[getRandomIndex(affirmations)];

};

function randMantra(mantras) {
    return mantras[getRandomIndex(mantras)];
};

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};


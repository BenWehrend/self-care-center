// var receiveMsgBtn = document.querySelector('button');
var receiveMsgBtn = document.getElementById('meditate');
var mantraMsg = document.getElementById('mantraMsg')
var affirmationMsg = document.getElementById('affirmationMsg')
var newMantra = document.getElementById('mantra-text');

function receiveMsgClick() {
    var message = '';
    receiveMsgBtn.style.visibility = "hidden";
    if (affirmationMsg.checked) {
        message = 'aff check';
       }
    if (mantraMsg.checked) {
         message = 'man check'
     }
     newMantra.innerText = message;
     newMantra.style.visibility = "visible";
 }
    // if (receiveMsgBtn.style.visibility === "visible") {
    //   receiveMsgBtn.style.visibility = "hidden";
    // }

function randMantra() {

}

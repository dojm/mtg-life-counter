// UI elements
const tensUp = document.getElementById('tens-up');
const tensDown = document.getElementById('tens-down');
const onesUp = document.getElementById('ones-up');
const onesDown = document.getElementById('ones-down');
const tensContainer = document.getElementById('tens-digit');
const onesContainer = document.getElementById('ones-digit');
let tensDigit = parseInt(document.getElementById('tens-digit').textContent);
let onesDigit = parseInt(document.getElementById('ones-digit').textContent);

// listen for click
tensUp.addEventListener('click', dialUp);
tensDown.addEventListener('click', dialDown);
onesUp.addEventListener('click', dialUp);
onesDown.addEventListener('click', dialDown);

// turn dial up or down
function dialUp(e) {
  if(e.target === tensUp){
    if(tensDigit === 9) {
      tensDigit = 0;
      tensContainer.textContent = tensDigit;
    } else {
      tensDigit++;
      tensContainer.textContent = tensDigit;
    }
  } else if (e.target === onesUp) {
    if(onesDigit === 9) {
      onesDigit = 0;
      onesContainer.textContent = onesDigit;
    } else {
      onesDigit++;
      onesContainer.textContent = onesDigit;
    }
  }
}

function dialDown(e) {
  if(e.target === tensDown) {
    if(tensDigit === 0) {
      tensDigit = 9;
      tensContainer.textContent = tensDigit;
    } else {
      tensDigit--;
      tensContainer.textContent = tensDigit;
    }
  } else if (e.target === onesDown) {
    if(onesDigit === 0) {
      onesDigit = 9;
      onesContainer.textContent = onesDigit;
    } else {
      onesDigit--;
      onesContainer.textContent = onesDigit;
    }
  }
}
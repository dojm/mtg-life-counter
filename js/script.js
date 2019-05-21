// listen for click
wrapper.addEventListener('click', dialUp);
wrapper.addEventListener('click', dialDown);
wrapper.addEventListener('click', reset);


// turn dial up or down
function dialUp(e) {
  if(e.target.classList.contains('tens-up')){
    let tensDigit = parseInt(e.target.nextElementSibling.textContent);

    if(tensDigit === 9) {
      tensDigit = 0;
      e.target.nextElementSibling.textContent = tensDigit;
    } else {
      tensDigit++;
      e.target.nextElementSibling.textContent = tensDigit;
    }
  } else if (e.target.classList.contains('ones-up')) {
    let onesDigit = parseInt(e.target.nextElementSibling.textContent);

    if(onesDigit === 9) {
      onesDigit = 0;
      e.target.nextElementSibling.textContent = onesDigit;
    } else {
      onesDigit++;
      e.target.nextElementSibling.textContent = onesDigit;
    }
  }
}

function dialDown(e) {
  if(e.target.classList.contains('tens-down')) {
    let tensDigit = parseInt(e.target.previousElementSibling.textContent);

    if(tensDigit === 0) {
      tensDigit = 9;
      e.target.previousElementSibling.textContent = tensDigit;
    } else {
      tensDigit--;
      e.target.previousElementSibling.textContent = tensDigit;
    } 
  } else if (e.target.classList.contains('ones-down')) {
    let onesDigit = parseInt(e.target.previousElementSibling.textContent);

    if(onesDigit === 0) {
      onesDigit = 9;
      e.target.previousElementSibling.textContent = onesDigit;
    } else {
      onesDigit--;
      e.target.previousElementSibling.textContent = onesDigit;
    }
  }
}

function reset(e) {
  if(e.target.classList.contains('reset')) {
    let tensDigit = e.target.previousElementSibling.previousElementSibling.querySelector('.tens-digit');
    let onesDigit = e.target.previousElementSibling.querySelector('.ones-digit');
    
    onesDigit.textContent = 0;
    tensDigit.textContent = 0;
  }
}
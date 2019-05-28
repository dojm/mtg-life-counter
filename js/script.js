// listen for click
wrapper.addEventListener('click', dialUp);
wrapper.addEventListener('click', dialDown);
wrapper.addEventListener('click', reset);
wrapper.addEventListener('click', expand);
wrapper.addEventListener('click', counterUp);
wrapper.addEventListener('click', counterDown);
wrapper.addEventListener('click', addNewCounter);


// turn life counter dial up or down
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

// reset life counter
function reset(e) {
  if(e.target.classList.contains('reset')) {
    let tensDigit = e.target.previousElementSibling.previousElementSibling.querySelector('.tens-digit');
    let onesDigit = e.target.previousElementSibling.querySelector('.ones-digit');

    onesDigit.textContent = 0;
    tensDigit.textContent = 2;
  }
}

// expand/collapse custom counters
function expand(e) {
  if(e.target.classList.contains('fa-angle-double-down')) {
    e.target.classList.toggle('fa-angle-double-down');
    e.target.classList.toggle('fa-angle-double-up');
    e.target.parentElement.nextElementSibling.nextElementSibling.style.opacity = '1';
    e.target.parentElement.nextElementSibling.style.height = e.target.parentElement.nextElementSibling.scrollHeight + 'px';

  } else if(e.target.classList.contains('fa-angle-double-up')){
    e.target.classList.toggle('fa-angle-double-down');
    e.target.classList.toggle('fa-angle-double-up');
    e.target.parentElement.nextElementSibling.nextElementSibling.style.opacity = '0';
    e.target.parentElement.nextElementSibling.style.height = null;
  } 
}

// custom counter dials
function counterUp(e) {
  if(e.target.classList.contains('counter-add')) {
    let counter;
    if(e.target.nextElementSibling.nextElementSibling.textContent == null) {
      counter = 1;
      e.target.nextElementSibling.nextElementSibling.textContent = counter;
    } else{
      counter = e.target.nextElementSibling.nextElementSibling.textContent;
      counter++;
      e.target.nextElementSibling.nextElementSibling.textContent = counter;
    }
  }
}

function counterDown(e) {
  if(e.target.classList.contains('counter-minus')) {
    let counter;
    if(e.target.nextElementSibling.textContent == null) {
      counter = 1;
      e.target.nextElementSibling.textContent = counter;
    } else{
      counter = e.target.nextElementSibling.textContent;
      counter--;
      e.target.nextElementSibling.textContent = counter;
    }
  }
}

// add more custom counters
function addNewCounter(e) {
  if(e.target.classList.contains('add-new-counter')) {
    let newCounter = document.createElement('div');
    let newInput = document.createElement('input');
    let newCounterUp = document.createElement('i');
    let newCounterDown = document.createElement('i');
    let newCounterOutput = document.createElement('div');

    newCounter.setAttribute('class', 'add-counter');
    newInput.setAttribute('type', 'text');
    newInput.setAttribute('class', 'counter-name');
    newInput.setAttribute('placeholder', 'Counter Name...');
    newCounterUp.setAttribute('class', 'fas fa-caret-up counter-add');
    newCounterDown.setAttribute('class', 'fas fa-caret-down counter-minus');
    newCounterOutput.setAttribute('class', 'counter-output');

    newCounter.appendChild(newInput);
    newCounter.appendChild(newCounterUp);
    newCounter.appendChild(newCounterDown);
    newCounter.appendChild(newCounterOutput);
    e.target.parentElement.previousElementSibling.appendChild(newCounter);
    e.target.parentElement.previousElementSibling.style.height = e.target.parentElement.previousElementSibling.scrollHeight + 'px';

  }
}
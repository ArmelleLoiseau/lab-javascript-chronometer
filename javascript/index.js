const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

let intervalId = null;

function printTime() {
  intervalId = setInterval(() => {
    printMinutes();
    printSeconds();
  }, 1000);
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  return chronometer.split();
}

function clearSplits() {
  const allLis = document.querySelectorAll('li');
  console.log(allLis)
  for (let i=0; i<allLis.length; i++) {
    allLis[i].remove();
  }
}

function setStopBtn() {
  // This changes the class of the left btn so it displays "stop"
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
  btnLeftElement.innerHTML = 'STOP';
}

function setSplitBtn() {
  // This changes the class of the rigth btn so it displays "split"
    btnRightElement.classList.remove('reset');
    btnRightElement.classList.add('split');
    btnRightElement.innerHTML = 'SPLIT';
}

function setStartBtn() {
  // This changes the class of the left btn so it displays "start"
  btnLeftElement.classList.remove('stop');
  btnLeftElement.classList.add('start');
  btnLeftElement.innerHTML = 'START';
}

function setResetBtn() {
  // This changes the class of the rigth btn so it displays "reset"
  btnRightElement.classList.remove('split');
  btnRightElement.classList.add('reset');
  btnRightElement.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // this condition changes the behaviour of the button from start to stop or vice versa
  if(btnLeftElement.classList.contains('stop')) {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
    clearInterval(intervalId);
  } else if(btnLeftElement.classList.contains('start')) {
    setStopBtn();
    setSplitBtn();
    chronometer.start();
    printTime();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // this condition changes the behaviour from reset to split or vice versa
  if (btnRightElement.classList.contains('split')) {
    const newLI = document.createElement("li");
    newLI.textContent = printSplit();
    splitsElement.appendChild(newLI);
  } else if(btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    printMinutes();
    printSeconds();
    clearSplits();
  }
});

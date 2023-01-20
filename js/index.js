const form = document.getElementById('formulario');
form.addEventListener('submit', handleSubmit);

let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const guess = {
  max: 10,
  attemptsNumber: 0,
  numberdrawn: function randomValue() {
  return Math.round(Math.random() * this.max);
  }
};

  let numberdrawn = guess.numberdrawn();

function updateValueAttempt() {
 return guess.attemptsNumber = guess.attemptsNumber +1 
}


function updateAttempt(attempt, gattemptsNumber ) {
  attempt.innerHTML = 'tentativa: ' + gattemptsNumber
  console.log ('teste', gattemptsNumber)
};

function handleSubmit(e) {
  e.preventDefault();

  let inputvalue = document.getElementById('imputNumber').value;

  if(!inputvalue) {
    alert('Digite algum valor!');
    return;
  };

  updateAttempt(attempt, updateValueAttempt() );

  if(numberdrawn == inputvalue) {
    playAgain();
    status.innerHTML = 'Parabéns, você acertou!';
    result.style.transition = '0.4s';
    result.style.backgroundColor = '#37c978';
    result.style.color = '#fff';
    status.style.color = '#fff';
    clear ();
  } else if (numberdrawn > inputvalue) {
    status.innerHTML = 'O número é maior!'
    status.style.color = '#de4251';
    clear ();

  } else if (numberdrawn < inputvalue) {
    status.innerHTML = 'O número é menor!'
    status.style.color = '#de4251';
    clear ();
  }
};

function playAgain() {
  document.getElementById('btnRestart').style.display = 'flex';
};

function restart () {
  document.location.reload (true)
};

function clear () {
  document.getElementById('imputNumber').value = '';
};


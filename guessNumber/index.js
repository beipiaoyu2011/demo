window.onload = newGame;
window.onpopstate = popstate;

var state, ui;

function newGame(playagain) {
  ui = {
    heading: null,
    prompt: null,
    input: null,
    low: null,
    mid: null,
    high: null
  };

  for (var id in ui) ui[id] = document.getElementById(id);

  ui.input.onchange = handleGuess;

  state = {
    n: Math.floor(Math.random() * 99) + 1,
    low: 0,
    high: 100,
    guessNum: 0,
    guess: undefined
  };

  display(state);

  if (playagain == true) save(state);
}

//添加新纪录
function save(state) {
  if (!history.pushState) return;

  var url = '#guess' + state.guessNum;
  history.pushState(state, "", url);
}

//replace 
function popstate(event) {
  if (event.state) {
    state = event.state;
    display(state);
  } else {
    history.replaceState(state, "", '#guess' + state.guessNum)
  }
}

//handle input
function handleGuess() {
  var g = parseInt(this.value);
  if (g > state.low && g < state.high) {
    if (g < state.n) {
      state.low = g;
    } else if (g > state.n) {
      state.high = g;
    }
    state.guess = g;
    state.guessNum++;
    save(state);
    display(state);
  } else {
    alert('invalid')
  }
}

//display

function display(state) {
  ui.heading.innerHTML = document.title = "I'm think a number between " + state.low + " and " + state.high;

  ui.low.style.width = state.low + '%';
  ui.mid.style.width = (state.high - state.low) + '%';
  ui.high.style.width = state.high + '%';

  ui.input.value = '';
  ui.input.style.visibility = 'visible';
  ui.input.focus();

  if (state.guess == undefined) {
    ui.prompt.innerHTML = 'Type your guess and press enter';
  } else if (state.guess < state.n) {
    ui.prompt.innerHTML = state.guess + ' is too low, guess again';
  } else if (state.guess > state.n) {
    ui.prompt.innerHTML = state.guess + ' is too high, guess again';
  } else {
    ui.input.style.visibility = 'hidden'
    ui.heading.innerHTML = document.title = state.guess + ' is correct';
    ui.prompt.innerHTML = "You win, <button onclick='newGame(true)'>play again</button>"
  }

}

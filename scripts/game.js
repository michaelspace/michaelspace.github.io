
var Length = 3;
var CurrentPlayer = 'X';
var CountOfMoves = 0;

function StartNewGame() {
  var field = document.createElement('table');
  field.setAttribute('border', 1);

  CountOfMoves = 0;
  CurrentPlayer = 'X';

  for (var i = 1; i <= Length; i++) {
    var row = document.createElement('tr');
    field.appendChild(row);

    for (var j = 1; j <= Length; j++) {
      var column = document.createElement('td');
      column.onclick = _onPlayerSet;

      column.setAttribute('height', 100);
      column.setAttribute('width', 100);
      column.setAttribute('align', 'center');
      
      column.classList.add('row' + i, 'column' + j);
      if (j == i) {
        column.classList.add('cross1');
      }
      if (j == Length - i + 1) {
        column.classList.add('cross2');
      }
      
      row.appendChild(column);
    }
  }
  document.getElementsByClassName('game-field')[0].innerHTML = '<div id="game"></div>' + document.getElementsByClassName('game-field')[0].innerHTML;
  document.getElementById('game').appendChild(field);
  document.getElementById('currentPlayer').innerText = 'Gracz: ' + CurrentPlayer;
}

function _onPlayerSet() {
  if (this.innerHTML !== '') {
    return;
  } else {
    this.innerHTML = CurrentPlayer;
    CountOfMoves += 1;
  }
  if (CheckWinner(this)) {
    setTimeout(function() {
      alert('Wygrywa: ' + CurrentPlayer);
	  var child = document.getElementById('game');
	  child.parentNode.removeChild(child);
      StartNewGame();
    }, 200);
  } else if (CountOfMoves === 9) {
    setTimeout(function() {
      alert('Remis!');
	  var child = document.getElementById('game');
	  child.parentNode.removeChild(child);
      StartNewGame();
    }, 200);
  } else {
    if (CurrentPlayer === 'X') {
      CurrentPlayer = 'O';
    } else {
      CurrentPlayer = 'X';
    }
    document.getElementById('currentPlayer').innerText = 'Gracz: ' + CurrentPlayer;
  }
}

function CheckWinner(cell) {
  var cellClasses = cell.className.split(' ');
  for (var i = 0; i < cellClasses.length; i++) {
	var possibleWinner = [].filter.call(document.querySelectorAll('#game .' + cellClasses[i]), function(element) {
      return CurrentPlayer === element.innerText;
    });
    if (possibleWinner.length === Length) {
      return true;
    }
  }
  return false;
}

StartNewGame();
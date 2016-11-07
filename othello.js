  var turn = "1";
  var bw = 400;
  var bh = 400;
  var p = 0;
  var canvas = document.getElementById("game");
  var context = canvas.getContext("2d");
  var board = JSON.parse(boardArray);
  var blackdiskCount = 0;
  var whitediskCount = 0;
  function drawBoard(){
    for (var x = 0; x <= bw; x += 50) {
        context.moveTo(0.5 + x + p, p);
        context.lineTo(0.5 + x + p, bh + p);
    }
    for (var x = 0; x <= bh; x += 50) {
        context.moveTo(p, 0.5 + x + p);
        context.lineTo(bw + p, 0.5 + x + p);
    }
    context.strokeStyle = "black";
    context.stroke();

    for (var i = 0; i <= 63; i++) {
      if (board[i]["x"] == 0) {
        x = 25;
      } else if (board[i]["x"] == 1) {
        x = 75;
      } else if (board[i]["x"] == 2) {
        x = 125;
      } else if (board[i]["x"] == 3) {
        x = 175;
      } else if (board[i]["x"] == 4) {
        x = 225;
      } else if (board[i]["x"] == 5) {
        x = 275;
      } else if (board[i]["x"] == 6) {
        x = 325;
      } else if (board[i]["x"] == 7) {
        x = 375;
      }

      if (board[i]["y"] == 0) {
        y = 25;
      } else if (board[i]["y"] == 1) {
        y = 75;
      } else if (board[i]["y"] == 2) {
        y = 125;
      } else if (board[i]["y"] == 3) {
        y = 175;
      } else if (board[i]["y"] == 4) {
        y = 225;
      } else if (board[i]["y"] == 5) {
        y = 275;
      } else if (board[i]["y"] == 6) {
        y = 325;
      } else if (board[i]["y"] == 7) {
        y = 375;
      }

      if(board[i]["color"] == "white") {
        context.beginPath();
        context.arc(x, y, 20, 0, Math.PI*2, true);
        context.closePath();
        context.fillStyle = "#FFFFFF";
        context.fill();
      } else if(board[i]["color"] == "black") {
        context.beginPath();
        context.arc(x, y, 20, 0, Math.PI*2, true);
        context.closePath();
        context.fillStyle = "#000000";
        context.fill();
      } else if(board[i]["color"] == "clear") {
        context.clearRect(x-24 , y-24, 49, 49);
      }
      else if(board[i]["color"] == "viable") {
        context.beginPath();
        context.arc(x, y, 1, 0, Math.PI*2, true);
        context.closePath();
        context.fillStyle = "#000000";
        context.fill();
      }
    }
  }

  drawBoard();

  showScore();

  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }
  function drawDisk(e) {
    var pos = getMousePos(canvas, e);
    var posx = pos.x;
    var posy = pos.y;
    var x;
    var y;
    var canaddturn;
    if(posx <= 50) {
      x = 25;
    } else if(posx <= 100) {
      x = 75;
    } else if(posx <= 150) {
      x = 125;
    } else if(posx <= 200) {
      x = 175;
    } else if(posx <= 250) {
      x = 225;
    } else if(posx <= 300) {
      x = 275;
    } else if(posx <= 350) {
      x = 325;
    } else if(posx <= 400) {
      x = 375;
    }
    if(posy <= 50) {
      y = 25;
    } else if(posy <= 100) {
      y = 75;
    } else if(posy <= 150) {
      y = 125;
    } else if(posy <= 200) {
      y = 175;
    } else if(posy <= 250) {
      y = 225;
    } else if(posy <= 300) {
      y = 275;
    } else if(posy <= 350) {
      y = 325;
    } else if(posy <= 400) {
      y = 375;
    }
    var boardx;
    var boardy;

    if (x == 25) {
      boardx = 0;
    } else if (x == 75) {
      boardx = 1;
    } else if (x == 125) {
      boardx = 2;
    } else if (x == 175) {
      boardx = 3;
    } else if (x == 225) {
      boardx = 4;
    } else if (x == 275) {
      boardx = 5;
    } else if (x == 325) {
      boardx = 6;
    } else if (x == 375) {
      boardx = 7;
    }

    if (y == 25) {
      boardy = 0;
    } else if (y == 75) {
      boardy = 1;
    } else if (y == 125) {
      boardy = 2;
    } else if (y == 175) {
      boardy = 3;
    } else if (y == 225) {
      boardy = 4;
    } else if (y == 275) {
      boardy = 5;
    } else if (y == 325) {
      boardy = 6;
    } else if (y == 375) {
      boardy = 7;
    }
    for (var i = 0;i < 64;i++){
      if(board[i]["x"] == boardx && board[i]["y"] == boardy /* && board[i]["color"] == "clear"  */ ) {
        canaddturn = 1;
        if ((turn % 2) != 0)
        {
          board[i]["color"] = "black";
        }
        else
        {
          board[i]["color"] = "white";
        }
      }
    }
    if (canaddturn)
    {
      console.log(turn);
      turn++;
    }
    console.log(board);
    drawBoard();
    showScore();
  }

  function findViableMoves(event)
  {
    console.log(turn);
    var color;
    var countercolor;
    if ((turn % 2) != 0)
    {
      color = "white";
      countercolor = "black"
    }
    else
    {
      color = "black";
      countercolor = "white";
    }
    for (var i = 0; i < 64; i++) {
      if(board[i]["color"] == "viable")
      {
        board[i]["color"] = "clear";
      }
      else if(board[i]["color"] == color)
      {
        // console.log(board[i]);
        var current = board[i];

        var left = board[i-1];
        var right = board[i+1];


        var up = board[i-8];
        var down = board[i+8];

        var upRight = board[i-7];
        var upLeft = board[i-9];

        var downRight = board[i+7];
        var downLeft = board[i+9];

        var pairs =
        [
          [down, up, 0],
          [right, left, 1],
          [upRight, downLeft, 2],
          [upLeft, downRight, 3],
        ];
        // console.log("Array");
        // console.log(pairs[0][2]);
        // for (var ind = 0; ind < pairs.length; ind++) {
          if (down["color"] == countercolor)
          {
            if (!up)
            {
              console.log("stable piece");
            }
            else if (up["color"] == "clear")
            {
              up["color"] = "viable";
            }
            else if (up["color"] == color)
            {
              for (var i2 = 1; i2 < 8; i2++) {

                var mpc = i - 8 * i2;
                if (mpc > 0 && mpc < 64)
                {
                  var check = board[mpc];
                  if (check["color"] == color)
                  {
                    continue;
                  }
                  else if (check["color"] == "clear" || check["color"] == "viable")
                  {
                    check["color"] = "viable";
                    break;
                  }
                  else if (check["color"] == countercolor)
                  {
                    break;
                  }
                }
                else
                {
                  i2 = 8 ;
                }

              }
            }
          }
        // }
      }
      drawDisk(event);
    }
  }

  function newGame() {
    board = JSON.parse(boardArray);
    drawBoard();
	showScore();
  }

  function getWinner() {
    for (var i = 0; i < 64; i++) {
      var viability = 0;
      var blackScore = 0;
      var whiteScore = 0;
      if (board[i]["color"] == "viable")
      {
        viability++;
      }
      else if (board[i]["color"] == "black")
      {
        blackScore++;
      }
      else if (board[i]["color"] == "white")
      {
        whiteScore++;
      }
      if (viability == 0)
      {
        var winner = (blackScore > whiteScore) ? "Black won!":"White won!";
        if (blackScore == whiteScore)
        {
          winner = "Tie!";
        }
      }
    }
  }

  function getPlayerScore(){
	for (var i = 0; i < 64; i++) {
		if (board[i]["color"] == "black") {
			blackdiskCount = blackdiskCount + 1;
		}
	}
	var playerScore = blackdiskCount.toString();
	blackdiskCount = 0;
	document.getElementById('playerscore').innerHTML= playerScore;
}

  function getOpponentScore(){
	for (var i = 0; i < 64; i++) {
		if (board[i]["color"] == "white") {
			whitediskCount = whitediskCount + 1;
		}
	}
	var opponentScore = whitediskCount.toString();
	whitediskCount = 0;
	document.getElementById('opponentscore').innerHTML= opponentScore;
}

function showScore(){
	getPlayerScore();
	getOpponentScore();
}

  var turn = "1";
  var bw = 400;
  var bh = 400;
  var p = 0;
  var canvas = document.getElementById("game");
  var context = canvas.getContext("2d");
  var board = JSON.parse(boardArray);
  var blackdiskCount = 0;
  var whitediskCount = 0;
  var disksToFlip = new Array(64);
  var noMove = 0;
  var skip = false;
  var has_clear = false;

  function drawBoard()
  {
    for (var x = 0; x <= bw; x += 50)
    {
        context.moveTo(0.5 + x + p, p);
        context.lineTo(0.5 + x + p, bh + p);
    }
    for (var x = 0; x <= bh; x += 50)
    {
        context.moveTo(p, 0.5 + x + p);
        context.lineTo(bw + p, 0.5 + x + p);
    }
    context.strokeStyle = "black";
    context.stroke();

    for (var i = 0; i <= 63; i++)
    {
      if (board[i]["x"] == 0)
      {
        x = 25;
      }
      else if (board[i]["x"] == 1)
      {
        x = 75;
      }
      else if (board[i]["x"] == 2)
      {
        x = 125;
      }
      else if (board[i]["x"] == 3)
      {
        x = 175;
      }
      else if (board[i]["x"] == 4)
      {
        x = 225;
      }
      else if (board[i]["x"] == 5)
      {
        x = 275;
      }
      else if (board[i]["x"] == 6)
      {
        x = 325;
      }
      else if (board[i]["x"] == 7)
      {
        x = 375;
      }

      if (board[i]["y"] == 0)
      {
        y = 25;
      }
      else if (board[i]["y"] == 1)
      {
        y = 75;
      }
      else if (board[i]["y"] == 2)
      {
        y = 125;
      }
      else if (board[i]["y"] == 3)
      {
        y = 175;
      }
      else if (board[i]["y"] == 4)
      {
        y = 225;
      }
      else if (board[i]["y"] == 5)
      {
        y = 275;
      }
      else if (board[i]["y"] == 6)
      {
        y = 325;
      }
      else if (board[i]["y"] == 7)
      {
        y = 375;
      }

      if(board[i]["color"] == "white")
      {
        context.beginPath();
        context.arc(x, y, 20, 0, Math.PI*2, true);
        context.closePath();
        context.fillStyle = "#FFFFFF";
        context.fill();
      }
      else if(board[i]["color"] == "black")
      {
        context.beginPath();
        context.arc(x, y, 20, 0, Math.PI*2, true);
        context.closePath();
        context.fillStyle = "#000000";
        context.fill();
      }
      else if(board[i]["color"] == "clear")
      {
        context.clearRect(x-24 , y-24, 49, 49);
      }
      else if(board[i]["color"] == "viable")
      {
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

  findViableMoves();

  function getMousePos(canvas, evt)
  {
    var rect = canvas.getBoundingClientRect();
    return { x: evt.clientX - rect.left, y: evt.clientY - rect.top };
  }


  
  
  function clearViableMoves()
  {
    for (var i = 0; i < 64; i++)
    {
      if(board[i]["color"] == "viable")
      {
        board[i]["color"] = "clear";
      }
    }
	disksToFlip = new Array(64);
  }

  function drawDisk(e)
  {
if (!skip){
	var pos = getMousePos(canvas, e);
    var posx = pos.x;
    var posy = pos.y;
    var x;
    var y;
    var canaddturn;
	var boardx;
    var boardy;

    if(posx <= 50)
    {
      x = 25;
    }
    else if(posx <= 100)
    {
      x = 75;
    }
    else if(posx <= 150)
    {
      x = 125;
    }
    else if(posx <= 200)
    {
      x = 175;
    }
    else if(posx <= 250)
    {
      x = 225;
    }
    else if(posx <= 300)
    {
      x = 275;
    }
    else if(posx <= 350)
    {
      x = 325;
    }
    else if(posx <= 400)
    {
      x = 375;
    }

    if(posy <= 50)
    {
      y = 25;
    }
    else if(posy <= 100)
    {
      y = 75;
    }
    else if(posy <= 150)
    {
      y = 125;
    }
    else if(posy <= 200)
    {
      y = 175;
    }
    else if(posy <= 250)
    {
      y = 225;
    }
    else if(posy <= 300)
    {
      y = 275;
    }
    else if(posy <= 350)
    {
      y = 325;
    }
    else if(posy <= 400)
    {
      y = 375;
    }



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
	
	if((typeof(e.detail.boardx) !== 'undefined')&&(typeof(e.detail.boardy) !== 'undefined')){
		boardx = e.detail.boardx;
		boardy = e.detail.boardy;
	}
	
    for (var i = 0;i < 64;i++){
      if(board[i]["x"] == boardx && board[i]["y"] == boardy && board[i]["color"] == "viable") {
		//canaddturn = 1;
        if ((turn % 2) != 0)
        {
          board[i]["color"] = "black";
        }
        else
        {
          board[i]["color"] = "white";
        }
        for (var i2 = 0; i2 < disksToFlip[i].length; i2++)
        {
          var diskFinder = disksToFlip[i][i2];
          board[diskFinder]["color"];
          if ((turn % 2) != 0)
          {
            board[diskFinder]["color"] = "black";
          }
          else
          {
            board[diskFinder]["color"] = "white";
          }
        }
      }
    }
     } turn++;
    drawBoard();
    showScore();
	clearViableMoves();
    findViableMoves();
	if (!((turn % 2) != 0)) {
		console.log(turn);
		setTimeout(randomAI,200);
		}
		console.log("noMove : " + noMove);
		
  }

  Array.prototype.contains = function(obj)
  {
    var i = this.length;
    while (i--)
    {
      if (this[i] === obj)
      {
        return true;
      }
    }
    return false;
  }


  function findViableMoves()
  {
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

      if(board[i]["color"] == color)
      {
        var current = board[i];
        var left = board[i-1];
        var right = board[i+1];


        var up = board[i-8];
        var down = board[i+8];
        var upRight = board[i-7];
        var upLeft = board[i-9];

        var downRight = board[i+9];
        var downLeft = board[i+7];

        var pairs =
        [
          [down, up, -8],
          [up, down, 8],
          [right, left, -1],
          [left, right, 1],
          [upRight, downLeft, 7],
          [downLeft, upRight, -7],
          [upLeft, downRight, 9],
          [downRight, upLeft, -9],
        ];
        var sides = [
          0,1,2,3,4,5,6,7,8,15,16,23,24,31,32,39,40,47,48,55,56,57,58,59,60,61,62,63
        ];

    		var left_edge = [
    		  0,8,16,24,32,40,48,56
    		];
    		var right_edge = [
    		  7,15,23,31,39,47,55,63
    		];
        var up_edge = [
          0,1,2,3,4,5,6,7
        ];
        var down_edge = [
          63,62,61,60,59,58,57,56
        ]

        if (i<56 && i>7) {checkViable(-8, up, up_edge);}
        if (i>7 && i<56) {checkViable(8, down, down_edge);}
        if (i>0 && i<63) {checkViable(-1, left, left_edge);}
        if (i>0 && i<63) {checkViable(1, right, right_edge);}
        if (i<55 && i>8) {checkViable(-9, upLeft, sides);}
        if (i<57 && i>6) {checkViable(-7, upRight, sides);}
        if (i>6 && i<57) {checkViable(7, downLeft, sides);}
        if (i>8 && i<55) {checkViable(9, downRight, sides);}

        function checkViable(add, dir, edge) {
          if (dir == up)
          {
            counterdir = down;
          } else if (dir == down)
          {
            counterdir = up;
          } else if (dir == left)
          {
            counterdir = right;
          } else if (dir == right)
          {
            counterdir = left;
          } else if (dir == upRight)
          {
            counterdir = downLeft;
          } else if (dir == downRight)
          {
            counterdir = upLeft;
          } else if (dir == upLeft)
          {
            counterdir = downRight;
          } else if (dir == downLeft)
          {
            counterdir = upRight;
          }

          if (counterdir["color"] == countercolor)
          {
      		  var x_check = board[i]["x"];
      		  var x_previous = board[i-add]["x"];
      		  var x_next = board[i+add]["x"];

      		  var y_check = board[i]["y"];
      		  var y_previous = board[i-add]["y"];
      		  var y_next = board[i+add]["y"];

      		  var x_pre_diff = x_check - x_previous;
      		  var y_pre_diff = y_check - y_previous;
      		  var x_next_diff = x_check - x_next;
      		  var y_next_diff = y_check - y_next;

        		if ((x_pre_diff >= -1) && (x_pre_diff <= 1) && (y_pre_diff >= -1) && (y_pre_diff <= 1)&&(x_next_diff >= -1) && (x_next_diff <= 1) && (y_next_diff >= -1) && (y_next_diff <= 1))
        		{
              var tempArray = [];
        		  if (!counterdir)
              {
                console.log("stable piece");
              }
              else if ((dir["color"] == "clear") || (dir["color"] == "viable"))
              {
                if (disksToFlip[i+add])
                {
                  if (disksToFlip[i+add].length != 0)
                  {
                    tempArray = disksToFlip[i+add];
                  }
                }
                tempArray.push(i);
				
                disksToFlip.splice(i + add, 1, tempArray);
				//console.log(disksToFlip);
      		      dir["color"] = "viable";
              }
              else if ((dir["color"] == color))
              {
                for (var i2 = 1; i2 < 8; i2++)
                {
                  var mpc = i + add * i2;
                  if (mpc >= 0 && mpc < 64)
      		        {
            			  var x_check = board[mpc]["x"];
            			  var x_previous = board[mpc-add]["x"];

            			  var y_check = board[mpc]["y"];
            			  var y_previous = board[mpc-add]["y"];

            			  var x_pre_diff = x_check - x_previous;
            			  var y_pre_diff = y_check - y_previous;

            			  if  ((x_pre_diff >= -1) && (x_pre_diff <= 1) && (y_pre_diff >= -1) && (y_pre_diff <= 1))
                    {
                      var check = board[mpc];

                      if (check["color"] == color)
                      {
                        if(tempArray.length == 0)
                        {
                          tempArray.push(mpc - add);
                        }
                        tempArray.push(mpc);
                        continue;
                      }
                      else if (check["color"] == "clear" || check["color"] == "viable")
                      {
      				          check["color"] = "viable";
                        disksToFlip.splice(mpc, 1, tempArray);
                        break;
                      }
                      else if (check["color"] == countercolor)
                      {
                        break;
                      }
                    }
                    else
                    {
                      break;
                    }
      	          }
                }
              }
            }
      		}
        }
      }
    }
	skipTurnCheck();
	console.log(skip);
    drawBoard();
  }

  function newGame()
  {
    turn = 1;
	noMove = 0;
    board = JSON.parse(boardArray);
    drawBoard();
    findViableMoves();
	  showScore();
	  skip = false;
  has_clear = false;
  document.getElementById('winner').innerHTML= "";
  }

  function getWinner()
  {
    
      var viability = 0;
      var blackScore = 0;
      var whiteScore = 0;
	  var winner;
      var gameRequestArray = {};
      var id = localStorage.getItem("userId");
      var url = "https://project-studies-2.herokuapp.com/users/"+id+"/games";
		for (var i = 0; i < 64; i++)
		{
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
	}
      if (viability == 0)
      {
        if (blackScore == whiteScore)
        {
          winner = "It's a tie !";
        }
        else if (blackScore > whiteScore)
        {
          winner = "You won !";
		  gameRequestArray = {"win":1};
        }
        else
        {
          winner = "You lost !";
        }
		document.getElementById('winner').innerHTML= winner;
		console.log(winner);

        /*logRequest.send(gameRequestJSON);
        var gameRequestJSON = JSON.stringify(gameRequestArray);

        logRequest = new XMLHttpRequest();
        logRequest.open("POST", url, false);
        logRequest.setRequestHeader("Content-type", "application/json");
        logRequest.onreadystatechange = function ()
        {
          if (logRequest.readyState == 4 && logRequest.status == 200)
          {
            gameReturnJSON = JSON.parse(logRequest.responseText);
          }
        }*/
      }
    
  }

  function getPlayerScore()
  {
  	for (var i = 0; i < 64; i++)
    {
  		if (board[i]["color"] == "black")
      {
  			blackdiskCount = blackdiskCount + 1;
  		}
  	}
  	var playerScore = blackdiskCount.toString();
  	blackdiskCount = 0;
  	document.getElementById('playerscore').innerHTML= playerScore;
  }

  function getOpponentScore()
  {
  	for (var i = 0; i < 64; i++)
    {
  		if (board[i]["color"] == "white")
      {
  			whitediskCount = whitediskCount + 1;
  		}
  	}
  	var opponentScore = whitediskCount.toString();
  	whitediskCount = 0;
  	document.getElementById('opponentscore').innerHTML= opponentScore;
  }

function showScore()
{
	getPlayerScore();
	getOpponentScore();
}

function skipTurnCheck(){
	var has_viable = false;
	has_clear = false;
	for (var i = 0; i < 64; i++)
    {
      if (board[i]["color"] == "viable")
      {
		has_viable = true;
	  }
	  else if (board[i]["color"] == "clear")
      {
		has_clear = true;
	  }
	}
	if (has_viable){
		noMove = 0;
		skip = false;
	} else {
		skip = true;
		noMove++;
	}
	if (noMove == 2 ||((noMove ==1)&&(!has_clear))){
		getWinner(); 
		// Not too sure about if both conditions are needed
		// since it seems to me that you can't have both players pass in Othello.
		// That if one pass, it will automatically give a viable move to the other...
		// But I can be wrong !
	}
}


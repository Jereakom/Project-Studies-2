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
        if(board[i]["color"] == "viable")
        {
          board[i]["color"] = "clear";
        }
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
      turn++;
    }
    drawBoard();
    showScore();
    findViableMoves();
  }

  Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
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
        // console.log(board[i]);
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

        // console.log("Array");
        // console.log(pairs[0][2]);
        // for (var ind = 0; ind < pairs.length; ind++) {
  if(i<56 && i>7) {checkViable(-8, up, up_edge);}
  if(i>7 && i<56) {checkViable(8, down, down_edge);}
  if (i>0 && i<63) {checkViable(-1, left, left_edge);}
  if (i>0 && i<63) {checkViable(1, right, right_edge);}
  if(i<55 && i>8) {checkViable(-9, upLeft, sides);}
  if(i<57 && i>6) {checkViable(-7, upRight, sides);}
  if(i>6 && i<57) {checkViable(7, downLeft, sides);}
  if(i>8 && i<55) {checkViable(9, downRight, sides);}

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
		  if (!counterdir)
          {
            console.log("stable piece");
          }
          else if ((dir["color"] == "clear"))
          {
			      dir["color"] = "viable";
				  console.log("x_check : " + x_check);
				  console.log("x_of_i : " + x_previous);
			  console.log("y_check : " + y_check);
			  console.log("y_of_i : " + y_previous);
			  console.log("i : " + i);
          }
          else if ((dir["color"] == color))
          {
            for (var i2 = 1; i2 < 8; i2++) {
              var mpc = i + add * i2;

              if (mpc >= 0 && mpc < 64)
			  { 
			  var x_check = board[mpc]["x"];
			  var x_previous = board[mpc-add]["x"];
			  
			  var y_check = board[mpc]["y"];
			  var y_previous = board[mpc-add]["y"];
			  
			  var x_pre_diff = x_check - x_previous;
			  var y_pre_diff = y_check - y_previous;
			  
			  /*console.log("x_diff : " + x_diff);
			  console.log("y_diff : " + y_diff);
			  console.log("mpc : " + mpc);*/
			  
			  if  ((x_pre_diff >= -1) && (x_pre_diff <= 1) && (y_pre_diff >= -1) && (y_pre_diff <= 1))
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
              }else
              {
                break;
              }
			  }
              
            }
          }
        }
		}
  }



	// if(i>7)
	// {
	// 	if (up["color"] == countercolor)
  //   {
  //     if (!down)
  //     {
  //       console.log("stable piece");
  //     }
  //     else if (down["color"] == "clear")
  //     {
	//       down["color"] = "viable";
  //     }
  //     else if (down["color"] == color)
  //     {
  //       for (var i2 = 1; i2 < 8; i2++) {
  //         var mpc = i + 8 * i2;
  //         if (mpc > 0 && mpc < 64)
  //         {
  //           var check = board[mpc];
  //           if (check["color"] == color)
  //           {
  //             continue;
  //           }
  //           else if (check["color"] == "clear" || check["color"] == "viable")
  //           {
	// 	          check["color"] = "viable";
  //             break;
  //           }
  //           else if (check["color"] == countercolor)
  //           {
  //             break;
  //           }
  //         }
  //         else
  //         {
  //           i2 = 8 ;
  //         }
  //       }
  //     }
  //   }
	// }
  //
  //   if(i<56)
	// {
	// 	if (down["color"] == countercolor)
  //       {
  //         if (!up)
  //         {
  //           console.log("stable piece");
  //         }
  //         else if (up["color"] == "clear")
  //         {
  //           up["color"] = "viable";
  //         }
  //         else if (up["color"] == color)
  //         {
  //           for (var i2 = 1; i2 < 8; i2++) {
  //             var mpc = i - 8 * i2;
  //             if (mpc > 0 && mpc < 64)
  //             {
  //               var check = board[mpc];
  //               if (check["color"] == color)
  //               {
  //                 continue;
  //               }
  //               else if (check["color"] == "clear" || check["color"] == "viable")
  //               {
  //                 check["color"] = "viable";
  //                 break;
  //               }
  //               else if (check["color"] == countercolor)
  //               {
  //                 break;
  //               }
  //             }
  //             else
  //             {
  //               i2 = 8 ;
  //             }
  //
  //           }
  //         }
	// 	}
	// }
  //
  //       if (left["color"] == countercolor)
  //       {
  //         if (sides.indexOf(i) != -1)
  //         {
  //           console.log("stable piece");
  //         }
  //         else if (right["color"] == "clear")
  //         {
  //           right["color"] = "viable";
  //         }
  //         else if (right["color"] == color)
  //         {
  //           for (var i2 = 1; i2 < 8; i2++) {
  //             var mpc = i + 1 * i2;
  //             if (mpc > 0 && mpc < 64)
  //             {
  //               var check = board[mpc];
  //               if (!left_edge.contains(mpc))
	// 			{
	// 				break;
	// 			}
	// 			else if (check["color"] == color)
  //               {
  //                 continue;
  //               }
  //               else if (check["color"] == "clear" || check["color"] == "viable")
  //               {
  //                 check["color"] = "viable";
  //                 break;
  //               }
  //               else if (check["color"] == countercolor)
  //               {
  //                 break;
  //               }
  //             }
  //             else
  //             {
  //               i2 = 8 ;
  //             }
  //
  //           }
  //         }
  //       }
  //
  //       if (right["color"] == countercolor)
  //       {
  //         if (sides.indexOf(i) != -1)
  //         {
  //           console.log("stable piece");
  //         }
  //         else if (left["color"] == "clear")
  //         {
  //           left["color"] = "viable";
  //         }
  //         else if (left["color"] == color)
  //         {
  //           for (var i2 = 1; i2 < 8; i2++) {
  //             var mpc = i - 1 * i2;
  //             if (mpc > 0 && mpc < 64)
  //             {
  //               var check = board[mpc];
	// 			if (!right_edge.contains(mpc))
	// 			{
	// 				break;
	// 			}
  //               else if (check["color"] == color)
  //               {
  //                 continue;
  //               }
  //               else if (check["color"] == "clear" || check["color"] == "viable")
  //               {
  //                 check["color"] = "viable";
  //                 break;
  //               }
  //               else if (check["color"] == countercolor)
  //               {
  //                 break;
  //               }
  //             }
  //             else
  //             {
  //               i2 = 8 ;
  //             }
  //
  //           }
  //         }
  //       }
	// if(i>6)
	// {
  //       if (upRight["color"] == countercolor)
  //       {
  //         if (!downLeft)
  //         {
  //           console.log("stable piece");
  //         }
  //         else if (downLeft["color"] == "clear")
  //         {
  //           downLeft["color"] = "viable";
  //         }
  //         else if (downLeft["color"] == color)
  //         {
  //           for (var i2 = 1; i2 < 8; i2++) {
  //             var mpc = i + 7 * i2;
  //             if (mpc > 0 && mpc < 64)
  //             {
  //               var check = board[mpc];
	// 			if (!sides.contains(mpc))
	// 			{
	// 				break;
	// 			}
  //               if (check["color"] == color)
  //               {
  //                 continue;
  //               }
  //               else if (check["color"] == "clear" || check["color"] == "viable")
  //               {
  //                 check["color"] = "viable";
  //                 break;
  //               }
  //               else if (check["color"] == countercolor)
  //               {
  //                 break;
  //               }
  //             }
  //             else
  //             {
  //               i2 = 8 ;
  //             }
  //
  //           }
  //         }
  //       }
	// }
	// if(i<55)
	// {
  //       if (downLeft["color"] == countercolor)
  //       {
  //         if (!upRight)
  //         {
  //           console.log("stable piece");
  //         }
  //         else if (upRight["color"] == "clear")
  //         {
  //           upRight["color"] = "viable";
  //         }
  //         else if (upRight["color"] == color)
  //         {
  //           for (var i2 = 1; i2 < 8; i2++) {
  //             var mpc = i - 7 * i2;
  //             if (mpc > 0 && mpc < 64)
  //             {
  //               var check = board[mpc];
	// 			if (!sides.contains(mpc))
	// 			{
	// 				break;
	// 			}
  //               if (check["color"] == color)
  //               {
  //                 continue;
  //               }
  //               else if (check["color"] == "clear" || check["color"] == "viable")
  //               {
  //                 check["color"] = "viable";
  //                 break;
  //               }
  //               else if (check["color"] == countercolor)
  //               {
  //                 break;
  //               }
  //             }
  //             else
  //             {
  //               i2 = 8 ;
  //             }
  //
  //           }
  //         }
	// 	}
	// }
	// if(i>8)
	// {
  //       if (upLeft["color"] == countercolor)
  //       {
  //         if (!downRight)
  //         {
  //           console.log("stable piece");
  //         }
  //         else if (downRight["color"] == "clear")
  //         {
  //           downRight["color"] = "viable";
  //         }
  //         else if (downRight["color"] == color)
  //         {
  //           for (var i2 = 1; i2 < 8; i2++) {
  //             var mpc = i + 9 * i2;
  //             if (mpc > 0 && mpc < 64)
  //             {
  //               var check = board[mpc];
	// 			if (!sides.contains(mpc))
	// 			{
	// 				break;
	// 			}
  //               if (check["color"] == color)
  //               {
  //                 continue;
  //               }
  //               else if (check["color"] == "clear" || check["color"] == "viable")
  //               {
  //                 check["color"] = "viable";
  //                 break;
  //               }
  //               else if (check["color"] == countercolor)
  //               {
  //                 break;
  //               }
  //             }
  //             else
  //             {
  //               i2 = 8 ;
  //             }
  //
  //           }
  //         }
	// 	}
	// }
	// if(i<57)
	// {
  //       if (downRight["color"] == countercolor)
  //       {
  //         if (!upLeft)
  //         {
  //           console.log("stable piece");
  //         }
  //         else if (upLeft["color"] == "clear")
  //         {
  //           upLeft["color"] = "viable";
  //         }
  //         else if (upLeft["color"] == color)
  //         {
  //           for (var i2 = 1; i2 < 8; i2++) {
  //             var mpc = i - 9 * i2;
  //             if (mpc > 0 && mpc < 64)
  //             {
  //               var check = board[mpc];
	// 			if (!sides.contains(mpc))
	// 			{
	// 				break;
	// 			}
  //               if (check["color"] == color)
  //               {
  //                 continue;
  //               }
  //               else if (check["color"] == "clear" || check["color"] == "viable")
  //               {
  //                 check["color"] = "viable";
  //                 break;
  //               }
  //               else if (check["color"] == countercolor)
  //               {
  //                 break;
  //               }
  //             }
  //             else
  //             {
  //               i2 = 8 ;
  //             }
  //
  //           }
  //         }
	// 	}
	// }

        // }
      }
    }
    drawBoard();
  }

  function newGame() {
    board = JSON.parse(boardArray);
    drawBoard();
	showScore();
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

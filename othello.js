

var boardString = '000000000000000000000000000120000002100000000000000000000000000000000000';

var boardArray = '{' +
  '"0" : {"color" : "clear", "x" : 0, "y" : 0},' +
  '"1" : {"color" : "clear", "x" : 1, "y" : 0},' +
  '"2" : {"color" : "clear", "x" : 2, "y" : 0},' +
  '"3" : {"color" : "clear", "x" : 3, "y" : 0},' +
  '"4" : {"color" : "clear", "x" : 4, "y" : 0},' +
  '"5" : {"color" : "clear", "x" : 5, "y" : 0},' +
  '"6" : {"color" : "clear", "x" : 6, "y" : 0},' +
  '"7" : {"color" : "clear", "x" : 7, "y" : 0},' +
  '"8" : {"color" : "clear", "x" : 0, "y" : 1},' +
  '"9" : {"color" : "clear", "x" : 1, "y" : 1},' +
  '"10" : {"color" : "clear", "x" : 2, "y" : 1},' +
  '"11" : {"color" : "clear", "x" : 3, "y" : 1},' +
  '"12" : {"color" : "clear", "x" : 4, "y" : 1},' +
  '"13" : {"color" : "clear", "x" : 5, "y" : 1},' +
  '"14" : {"color" : "clear", "x" : 6, "y" : 1},' +
  '"15" : {"color" : "clear", "x" : 7, "y" : 1},' +
  '"16" : {"color" : "clear", "x" : 0, "y" : 2},' +
  '"17" : {"color" : "clear", "x" : 1, "y" : 2},' +
  '"18" : {"color" : "clear", "x" : 2, "y" : 2},' +
  '"19" : {"color" : "clear", "x" : 3, "y" : 2},' +
  '"20" : {"color" : "clear", "x" : 4, "y" : 2},' +
  '"21" : {"color" : "clear", "x" : 5, "y" : 2},' +
  '"22" : {"color" : "clear", "x" : 6, "y" : 2},' +
  '"23" : {"color" : "clear", "x" : 7, "y" : 2},' +
  '"24" : {"color" : "clear", "x" : 0, "y" : 3},' +
  '"25" : {"color" : "clear", "x" : 1, "y" : 3},' +
  '"26" : {"color" : "clear", "x" : 2, "y" : 3},' +
  '"27" : {"color" : "white", "x" : 3, "y" : 3},' +
  '"28" : {"color" : "black", "x" : 4, "y" : 3},' +
  '"29" : {"color" : "clear", "x" : 5, "y" : 3},' +
  '"30" : {"color" : "clear", "x" : 6, "y" : 3},' +
  '"31" : {"color" : "clear", "x" : 7, "y" : 3},' +
  '"32" : {"color" : "clear", "x" : 0, "y" : 4},' +
  '"33" : {"color" : "clear", "x" : 1, "y" : 4},' +
  '"34" : {"color" : "clear", "x" : 2, "y" : 4},' +
  '"35" : {"color" : "black", "x" : 3, "y" : 4},' +
  '"36" : {"color" : "white", "x" : 4, "y" : 4},' +
  '"37" : {"color" : "clear", "x" : 5, "y" : 4},' +
  '"38" : {"color" : "clear", "x" : 6, "y" : 4},' +
  '"39" : {"color" : "clear", "x" : 7, "y" : 4},' +
  '"40" : {"color" : "clear", "x" : 0, "y" : 5},' +
  '"42" : {"color" : "clear", "x" : 2, "y" : 5},' +
  '"41" : {"color" : "clear", "x" : 1, "y" : 5},' +
  '"43" : {"color" : "clear", "x" : 3, "y" : 5},' +
  '"44" : {"color" : "clear", "x" : 4, "y" : 5},' +
  '"45" : {"color" : "clear", "x" : 5, "y" : 5},' +
  '"46" : {"color" : "clear", "x" : 6, "y" : 5},' +
  '"47" : {"color" : "clear", "x" : 7, "y" : 5},' +
  '"48" : {"color" : "clear", "x" : 0, "y" : 6},' +
  '"49" : {"color" : "clear", "x" : 1, "y" : 6},' +
  '"50" : {"color" : "clear", "x" : 2, "y" : 6},' +
  '"52" : {"color" : "clear", "x" : 4, "y" : 6},' +
  '"51" : {"color" : "clear", "x" : 3, "y" : 6},' +
  '"53" : {"color" : "clear", "x" : 5, "y" : 6},' +
  '"54" : {"color" : "clear", "x" : 6, "y" : 6},' +
  '"55" : {"color" : "clear", "x" : 7, "y" : 6},' +
  '"56" : {"color" : "clear", "x" : 0, "y" : 7},' +
  '"57" : {"color" : "clear", "x" : 1, "y" : 7},' +
  '"58" : {"color" : "clear", "x" : 2, "y" : 7},' +
  '"59" : {"color" : "clear", "x" : 3, "y" : 7},' +
  '"60" : {"color" : "clear", "x" : 4, "y" : 7},' +
  '"61" : {"color" : "clear", "x" : 5, "y" : 7},' +
  '"62" : {"color" : "clear", "x" : 6, "y" : 7},' +
  '"63" : {"color" : "clear", "x" : 7, "y" : 7}' +
  '}'


  var bw = 400;
  var bh = 400;
  var p = 0;
  var canvas = document.getElementById("game");
  var context = canvas.getContext("2d");
  var board = JSON.parse(boardArray);
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
    }
  }
  drawBoard();
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
    for (var i = 0;i < 63;i++){
      if(board[i]["x"] == boardx && board[i]["y"] == boardy) {
        board[i]["color"] = "black";
      }
    }
    drawBoard();
  }

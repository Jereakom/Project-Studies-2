

var boardString = '000000000000000000000000000120000002100000000000000000000000000000000000';

String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

function saveNewBoard (x, y) {
	var charPos = 0;
	if (y == 25) {charPos = charPos;}
	else if (y == 75) {charPos = charPos + 8;}
	else if (y == 125) {charPos = charPos + 16;}
	else if (y == 175) {charPos = charPos + 24;}
	else if (y == 225) {charPos = charPos + 32;}
	else if (y == 275) {charPos = charPos + 40;}
	else if (y == 325) {charPos = charPos + 48;}
	else if (y == 375) {charPos = charPos + 56;}

	if (x == 25) {charPos = charPos;}
	else if (x == 75) {charPos = charPos + 1;}
	else if (x == 125) {charPos = charPos + 2;}
	else if (x == 175) {charPos = charPos + 3;}
	else if (x == 225) {charPos = charPos + 4;}
	else if (x == 275) {charPos = charPos + 5;}
	else if (x == 325) {charPos = charPos + 6;}
	else if (x == 375) {charPos = charPos + 7;}

	boardString = boardString.replaceAt(charPos,"2");
	console.log(boardString);

}


  var bw = 400;
  var bh = 400;
  var p = 0;
  var canvas = document.getElementById("game");
  var context = canvas.getContext("2d");
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

  }
  drawBoard();
  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }
  function drawDisk(e, board) {
    var pos = getMousePos(canvas, e);
    var posx = pos.x;
    var posy = pos.y;
    var x;
    var y = 25;
    var disk;
    function draw(y, istart, iend) {
      x = 25;
      for (var i = istart; i <= iend; i++) {
        disk = board.charAt(i);
        if(disk == "1") {
          context.beginPath();
          context.arc(x, y, 25, 0, Math.PI*2, true);
          context.closePath();
          context.fillStyle = "#FFFFFF";
          context.fill();
        } else if(disk == "2") {
          context.beginPath();
          context.arc(x, y, 25, 0, Math.PI*2, true);
          context.closePath();
          context.fillStyle = "#000000";
          context.fill();
        }
        x = x + 50;
    }
  }
  draw(y, 0, 7);
  y = y + 50;
  draw(y, 8, 15);
  y = y + 50;
  draw(y, 16, 23);
  y = y + 50;
  draw(y, 24, 31);
  y = y + 50;
  draw(y, 32, 39);
  y = y + 50;
  draw(y, 40, 47);
  y = y + 50;
  draw(y, 48, 55);
  y = y + 50;
  draw(y, 56, board.length);
  y = y + 50;
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
    context.beginPath();
    context.arc(x, y, 25, 0, Math.PI*2, true);
    context.closePath();
    context.fillStyle = "#000000";
    context.fill();
  saveNewBoard(x,y);

  }

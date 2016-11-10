function randomAI()
{
  var play = true;
  if (is_player)
  {
    if ((turn % 2) != 0)
    {
      play = false;
    }
  }
  if (play) {
    var viable_moves = [];
    for (var i = 0; i < 64; i++)
    {
      if (board[i]["color"] == "viable")
      {
        viable_moves.push(i);
      }
    }
    if (viable_moves.length > 0)
    {
      var random_move_position = viable_moves[Math.floor(Math.random() * (viable_moves.length - 1))];
      var evt = new CustomEvent('click', {
        'detail':{
          'boardx': board[random_move_position]["x"],
          'boardy': board[random_move_position]["y"]
        }
      });
      drawDisk(evt);
    }
    else
    {
      console.log("no viable moves");
      drawDisk(evt);
    }
  }
  else
  {
    drawDisk(evt);    
  }
}

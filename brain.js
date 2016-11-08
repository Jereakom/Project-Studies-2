function randomAI() {
    var viable_moves = [];
    console.log(turn);
    console.log(!((turn % 2) != 0));
    if (!((turn % 2) != 0)) {
        for (var i = 0; i < 64; i++) {
            console.log(board[i]["color"]);
            if (board[i]["color"] == "viable") {
                viable_moves.push(i);
                console.log(viable_moves);
            }
        }
        if (viable_moves.length > 0) {
            var random_move_position = viable_moves[Math.floor(Math.random() * (viable_moves.length - 1))];
            console.log((turn % 2) != 0);

            console.log(random_move_position);

            board[random_move_position]["color"] = "white";

        } else {
            console.log("no viable moves");
        }
        turn++;
    }
    drawBoard();
    showScore();
    clearViableMoves();
    findViableMoves();
}
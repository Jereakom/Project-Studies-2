function randomAI() {
    var viable_moves = [];
    if (!((turn % 2) != 0)) {
        for (var i = 0; i < 64; i++) {
            if (board[i]["color"] == "viable") {
                viable_moves.push(i);
            }
        }
        if (viable_moves.length > 0) {
            var random_move_position = viable_moves[Math.floor(Math.random() * (viable_moves.length - 1))];
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
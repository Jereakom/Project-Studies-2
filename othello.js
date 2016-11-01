

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


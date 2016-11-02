

getPlayerDiskCount(){
	var diskCount = 0;
	for (i = 0; i <= boardArray.length; i++;) {
		if (boardArray[i].color == "black") {
			diskCount = diskCount + 1;
		}
	}
	return diskCount.toString();
}

getAIDiskCount(){
	var diskCount = 0;
	for (i = 0; i <= boardArray.length; i++;) {
		if (boardArray[i].color == "white") {
			diskCount = diskCount + 1;
		}
	}
	return diskCount.toString();
}
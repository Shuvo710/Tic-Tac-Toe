let cheeker = 0;
let isTie = false;
let playerTurn = 'X';
let array = new Array(9);

function action(number) {
    let isValid = true;

    if (array[number] != null) {
        isValid = false;
    }

    if (isValid) {
        array[number] = playerTurn;
        if (!isTie) {
            document.getElementById(number).innerHTML = playerTurn;
            if(playerTurn == 'X'){
                document.getElementById(number).style.color = "pink";
            }else{
            document.getElementById(number).style.color = "lightgreen";
            }
        
        if (gameOver(playerTurn)) {
            document.getElementById('announcer').innerHTML = playerTurn + " is Win!";
            isTie = true;
        }
        else if (cheeker == 9) {
            document.getElementById('announcer').innerHTML = " Game is Tie";
        }
        turn();
        }
    }
}

function turn() {
    if (playerTurn == 'X') {
        playerTurn = 'O';
    }
    else {
        playerTurn = 'X';
    }
}

function gameOver(symble) {
    if (array[0] == symble && array[1] == symble && array[2] == symble) {
        return true;
    }
    if (array[3] == symble && array[4] == symble && array[5] == symble) {
        return true;
    }
    if (array[6] == symble && array[7] == symble && array[8] == symble) {
        return true;
    }
    if (array[0] == symble && array[3] == symble && array[6] == symble) {
        return true;
    }
    if (array[1] == symble && array[4] == symble && array[7] == symble) {
        return true;
    }
    if (array[2] == symble && array[5] == symble && array[8] == symble) {
        return true;
    }
    if (array[0] == symble && array[4] == symble && array[8] == symble) {
        return true;
    }
    if (array[2] == symble && array[4] == symble && array[6] == symble) {
        return true;
    }
    cheeker++;
    return false;
}


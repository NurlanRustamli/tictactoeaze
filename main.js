var board;
var playerO = "O";
var playerX = "X";
var currPlayer = playerO;
var gameOver = false;

window.onload = function () {
    setGame();
}


function setGame() {
    board=[
        [" "," "," "],
        [" "," "," "],
        [" "," "," "]
    ]

    for (let i = 0; i < 3; i++) {
        for (let c = 0; c < 3; c++) {
          let tile  = document.createElement("div");
          tile.id = i.toString()+ '-'+ c.toString();
          tile.classList.add("tile")     
          if (i===0 || i===1) {
            tile.classList.add('horizontal-line')
          }if (c === 0 || c===1) {
            tile.classList.add('vertical-line')
          }
          tile.addEventListener("click",setTile)
          document.querySelector(".board").append(tile)
        }
        
    }
}
function setTile() {
    if (gameOver) {
        return;
    }
    let coords = this.id.split("-")
    let r = parseInt(coords[0])
    let c = parseInt(coords[1])
    if (board[r][c]!=" ") {
        return;
    }
    board[r][c] = currPlayer;
    this.innerText = currPlayer;

    if (currPlayer== playerO) {
        currPlayer =playerX;
    }else{
        currPlayer = playerO
    }
    checkWinner()
}
function checkWinner() {
    for (let i = 0; i < 3; i++) {
        if (board[i][0]==board[i][1]&& board[i][1]==board[i][2]&&board[i][0]!=" ") {
           for (let r = 0; r < 3; r++) {
            let tile = document.getElementById(i.toString()+"-"+r.toString())
            tile.classList.add("winner")
           }
           gameOver=true
           return;
        }
        
    }
    for (let c = 0; c < 3; c++) {
        if (board[0][c]==board[1][c]&& board[1][c]==board[2][c]&&board[0][c]!=" ") {
            for (let d = 0; d < 3; d++) {
             let tile = document.getElementById(d.toString()+"-"+c.toString())
             tile.classList.add("winner")
            }
            gameOver=true
            return;
         }    
    }
    if (board[0][0]==board[1][1]&& board[1][1]==board[2][2]&&board[0][0]!=" ") {
        for (let e = 0; e < 3; e++) {
         let tile = document.getElementById(e.toString()+"-"+e.toString())
         tile.classList.add("winner")
        }
        gameOver=true
        return;
     } 
     if (board[0][2]==board[1][1]&& board[1][1]==board[2][0]&&board[0][2]!=" ") {
       let tile = document.getElementById("0-2")
       tile.classList.add("winner")
        tile = document.getElementById("1-1")
        tile.classList.add("winner")
        tile = document.getElementById("2-0")
        tile.classList.add("winner")
        gameOver = true;
        return
    }  
}
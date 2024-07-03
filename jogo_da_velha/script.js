let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const handleMove = (position) => {
    if (gameActive && board[position] === '') {
        board[position] = currentPlayer;
        document.getElementsByClassName('cell')[position].innerText = currentPlayer;
        
        if (checkWin()) {
            document.querySelector('.status').innerText = `O jogador ${currentPlayer} venceu!`;
            gameActive = false;
            return;
        }
        
        if (checkDraw()) {
            document.querySelector('.status').innerText = 'Empate!';
            gameActive = false;
            return;
        }
        
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        document.querySelector('.status').innerText = `Vez do jogador ${currentPlayer}`;
    }
};

const checkWin = () => {
    for (let condition of winningConditions) {
        let [a, b, c] = condition;
        if (board[a] !== '' && board[a] === board[b] && board[b] === board[c]) {
            return true;
        }
    }
    return false;
};

const checkDraw = () => {
    return board.every((cell) => cell !== '');
};

const resetGame = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
    document.querySelector('.status').innerText = `Vez do jogador ${currentPlayer}`;
};

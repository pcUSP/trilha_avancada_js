const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const box = 20;
let snake = [{ x: 200, y: 200 }];
let dx = box;
let dy = 0;
let food = { x: 0, y: 0 };
let score = 0;

const drawSnake = () => {
    snake.forEach((segment, index) => {
        ctx.fillStyle = index === 0 ? '#0f0' : '#00f';
        ctx.fillRect(segment.x, segment.y, box, box);
        ctx.strokeStyle = '#000';
        ctx.strokeRect(segment.x, segment.y, box, box);
    });
};

const drawFood = () => {
    ctx.fillStyle = '#f00';
    ctx.fillRect(food.x, food.y, box, box);
};

const moveSnake = () => {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        score++;
        document.getElementById('score').innerText = score;
        generateFood();
    } else {
        snake.pop();
    }
};

const generateFood = () => {
    food.x = Math.floor(Math.random() * (canvas.width / box)) * box;
    food.y = Math.floor(Math.random() * (canvas.height / box)) * box;
};

const checkCollision = () => {
    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            return true;
        }
    }

    return (
        snake[0].x < 0 ||
        snake[0].x >= canvas.width ||
        snake[0].y < 0 ||
        snake[0].y >= canvas.height
    );
};

const gameOver = () => {
    clearInterval(gameLoop);
    alert('Game Over! Pontuação final: ' + score);
    snake = [{ x: 200, y: 200 }];
    dx = box;
    dy = 0;
    score = 0;
    document.getElementById('score').innerText = score;
    generateFood();
    gameLoop = setInterval(main, 100);
};

const main = () => {
    if (checkCollision()) {
        gameOver();
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawFood();
        drawSnake();
        moveSnake();
    }
};

const startGame = () => {
    canvas.width = 400;
    canvas.height = 400;
    generateFood();
    gameLoop = setInterval(main, 100);
};

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowUp' && dy === 0) {
        dx = 0;
        dy = -box;
    } else if (e.key === 'ArrowDown' && dy === 0) {
        dx = 0;
        dy = box;
    } else if (e.key === 'ArrowLeft' && dx === 0) {
        dx = -box;
        dy = 0;
    } else if (e.key === 'ArrowRight' && dx === 0) {
        dx = box;
        dy = 0;
    }
});

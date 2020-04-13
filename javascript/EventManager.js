var pageWidth = window.innerWidth || document.body.clientWidth;
var treshold = Math.max(1, Math.floor(0.01 * (pageWidth)));
var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;

const limit = Math.tan(45 * 1.5 / 180 * Math.PI);
const gestureZone = document.getElementById('canvas-container');

gestureZone.addEventListener('touchstart', function (event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

gestureZone.addEventListener('touchend', function (event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture(event);
}, false);

function handleGesture(e) {
    e.preventDefault;
    var x = touchendX - touchstartX;
    var y = touchendY - touchstartY;
    var xy = Math.abs(x / y);
    var yx = Math.abs(y / x);
    gameOver = gameIsOver();
    if (gameOver) {
        fadeCanvas();
    } else if (Math.abs(x) > treshold || Math.abs(y) > treshold) {
        if (yx <= limit) {
            if (x < 0) {
                move("left");
            } else {
                move("right");
            }
        }
        if (xy <= limit) {
            if (y < 0) {
                move("up");
            } else {
                move("down");
            }
        }
    }
    setTimeout(function () {
        for (var i = 0; i < SIZE; i++) {
            for (var j = 0; j < SIZE; j++) {
                mergedTiles[i][j] = null;
            }
        }
    }, TIMEOUT_SPEED / 4);
    if (moved) {
        setTimeout(function () {
            addRandomPiece(board, 1)
            moved = false;
        }, TIMEOUT_SPEED);
    }

}

newGameButton.addEventListener("click", function () {
    gameStart();
});

window.addEventListener("keydown", function (event) {
    gameOver = gameIsOver();
    if (gameOver) {
        fadeCanvas();
    } else {
        switch (event.key) {
            case "ArrowRight":
                move("right");
                break;
            case "ArrowLeft":
                move("left");
                break;
            case "ArrowUp":
                move("up");
                break;
            case "ArrowDown":
                move("down");
                break;
        }
        setTimeout(function () {
            for (var i = 0; i < SIZE; i++) {
                for (var j = 0; j < SIZE; j++) {
                    mergedTiles[i][j] = null;
                }
            }
        }, TIMEOUT_SPEED / 4);
        if (moved) {
            setTimeout(function () {
                addRandomPiece(board, 1)
                moved = false;
            }, TIMEOUT_SPEED);
        }
    }
});
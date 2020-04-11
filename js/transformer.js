var transformer = {
    rotatateBoard: function(direction, tiles) {
        if (direction === "left") {
            rotateCounterClockwise(tiles);
            rotateCounterClockwise(tiles);
        } else if (direction === "up") {
            rotateClockwise(tiles);
        } else if (direction === "down") {
            rotateCounterClockwise(tiles);
        }
    },
    
    rotateBack: function(direction, tiles) {
        if (direction === "left") {
            rotateCounterClockwise(tiles);
            rotateCounterClockwise(tiles);
        } else if (direction === "up") {
            rotateCounterClockwise(tiles);
        } else if (direction === "down") {
            rotateClockwise(tiles);
        }
    }
}

// mirrorHorizontal: function(array) {
//     for (var i = 0; i < array.length; i++) {
//         array[i].reverse();
//     }
// },

function rotateClockwise (array) {
    var size = array.length;
    for (var i = 0; i < size / 2; i++) {
        for (var j = i; j < size - i - 1; j++) {
            var temp = array[i][j];
            array[i][j] = array[size - j - 1][i];
            array[size - j - 1][i] = array[size - i - 1][size - j - 1];
            array[size - i - 1][size - j - 1] = array[j][size - i - 1];
            array[j][size - i - 1] = temp;
        }
    }
    return true
}

function rotateCounterClockwise(array) {
    var size = array.length;
    for (var i = 0; i < size / 2; i++) {
        for (var j = i; j < size - i - 1; j++) {
            var tmp = array[i][j];
            array[i][j] = array[j][size - i - 1];
            array[j][size - i - 1] = array[size - i - 1][size - j - 1];
            array[size - i - 1][size - j - 1] = array[size - j - 1][i];
            array[size - j - 1][i] = tmp;
        }
    }
    return false
}
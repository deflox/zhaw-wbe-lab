let state = {
    board: [
      [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ],
      [ 'h', 'i', 'j', 'k', 'l', 'm', 'n' ],
      [ 'o', 'p', 'q', 'r', 's', 't', 'u' ],
      [ 'v', 'w', 'x', 'y', 'z', '1', '2' ],
      [ '3', '4', '5', '6', '7', '8', '9' ],
      [ 'ä', 'ö', 'ü', '{', '}', '[', ']' ],
    ]
  }

let lastPosY = 1
let lastPosX = 0

console.log(state.board[lastPosY][lastPosX])
console.log('')

let yMax = state.board.length
let xMax = state.board[0].length

let [yStart,xStart] = lastPosX+lastPosY > yMax-2 ? [yMax-1,lastPosX-(yMax-1-lastPosY)] : [lastPosY+lastPosX,0]
console.log(yStart,xStart)
for (let x = xStart, y = yStart; x < xMax && y >= 0; x++, y--) {
    //console.log(state.board[y][x])
}

// x >= yMax -> [yMax,?]
// else [?,0]

// [3,1]
// [4,0]

// [2,4]
// [3,3]
// [4,2]
// [5,1] [yMax,yMax-4]

// [0,2]
// [1,1]
// [2,0] [xCurrent,0]
module.exports = class Game {
  constructor() {
    this.game = {
      squares: Array(9).fill(null),
      next: 'X',
      winner: null
    };
    this.xIsNext = true;
    this.remaining = 9;
  }
  makeMove(sqr) {
    if (!this.game.squares[sqr] && !this.game.winner) {
      this.game.squares[sqr] = this.game.next;
      this.game.winner = calculateWinner(this.game.squares);
      if (!this.game.winner) {
        this.remaining --;
        if (this.remaining === 0) {
          this.game.winner = 'Draw, no one';
        }
        this.xIsNext = !this.xIsNext;
        this.game.next = this.xIsNext ? 'X' : 'O';
      }
    }
  }
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
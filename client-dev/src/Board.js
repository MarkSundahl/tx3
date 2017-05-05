import React from 'react';
import './App.css';
import Square from './Square.js';

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={ this.props.game.squares[i] } onMove={ () => this.props.onMove(i) } />;
  }
  render() {
    const status = this.props.game.winner ?
      this.props.game.winner + ' wins!' :
      'Next player: ' + this.props.game.next;
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <button onClick={this.props.onNewGame} >New Game</button>
      </div>
    );
  }
}

export default Board;
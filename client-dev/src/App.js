import React, { Component } from 'react';
import './App.css';
import Board from './Board.js';
import io from 'socket.io-client';

class App extends Component {
  constructor() {
  	super();
  	this.socket = io();
		this.socket.on('update', (game) => {
			this.setState({'game': game});
			console.log(this.state.game);
		});
  }
  handleMove(num) {
		if(!this.state.game.winner) {
			this.socket.emit('move', num);
		}
  }
	handleNewGame() {
		this.socket.emit('new game');
	}
  render() {
    return (
      <div className="game">
        <div className="game-board">
					{ this.state !== null &&
						<Board
							game={ this.state.game }
							onMove={ this.handleMove.bind(this) }
							onNewGame={ () => this.handleNewGame() }
						/>
					}
        </div>
      </div>
    );
  }
}

export default App;
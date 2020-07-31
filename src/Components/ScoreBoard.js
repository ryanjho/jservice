import React, { Component } from 'react'

class ScoreBoard extends Component {
    constructor(props) {
        super(props);
    }

    increaseScore = () => {
        this.props.updateScore('increase');
    }

    decreaseScore = () => {
        this.props.updateScore('decrease');
    }

    resetScore = () => {
        this.props.updateScore('reset');
    }

    render() {
        return (
            <div className="score-board">
                <h2>Score: {this.props.score}</h2>
                <button onClick={this.decreaseScore}>Decrease</button>
                <button onClick={this.increaseScore}>Increase</button>
                <button onClick={this.resetScore}>Reset</button>
            </div>
        )
    }
}

export default ScoreBoard

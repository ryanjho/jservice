import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScoreBoard from './Components/ScoreBoard';
import Questions from './Components/Questions';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          score: 0,
          questions: null,
          searchURL: 'https://jservice.io/api/random'
      }
  }
  async getData() {
      try {
          const response = await fetch(this.state.searchURL);
          const result = await response.json();
          this.setState({
              questions: result
          })
      } catch (err) {
          console.log('ERROR', err);
      }
  }

  getQuestions = () => {
      this.getData();
  }

  updateScore = action => {
      if (action === 'increase') {
          this.setState( { score: this.state.score + 1 });
      } else if (action === 'decrease') {
          this.setState( { score: this.state.score -1 });
      } else if (action === 'reset') {
          this.setState( { score: 0 });
      }
  }

  render() {
      return (
          <div className="container">
              <h1>Welcome To Jeopardy!</h1>
              <ScoreBoard score={this.state.score} updateScore={this.updateScore} />
              <Questions questions={this.state.questions} getQuestions={this.getQuestions} onChange={this.eventHandler}/>
          </div>
      )
  }
}

export default App;
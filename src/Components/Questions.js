import React, { Component } from 'react'
import QuestionComponent from './QuestionComponent';

class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            revealAnswer: false
        }
    }

    getQuestions = () => {
        this.props.getQuestions();
        this.setState({ revealAnswer: false});
    }

    clickRevealAnswer = () => {
        this.setState( {revealAnswer: !this.state.revealAnswer});
    }

    render() {
        let questions;
        if (this.props.questions) {
            questions = this.props.questions.map(question => {
                return (
                    <QuestionComponent 
                        question={question} 
                        clickRevealAnswer={this.clickRevealAnswer} 
                        revealAnswer={this.state.revealAnswer} 
                    />
                )
            })
        }

        return (
            <div class="questions">
                <h3>Let's Play!</h3>
                <button onClick={this.getQuestions}>Get Question</button>
                { questions ? questions : '' }
            </div>
        )
    }
}

export default Questions;

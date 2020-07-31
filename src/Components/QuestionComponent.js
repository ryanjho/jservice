import React, { Component } from 'react'

class QuestionComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="question-component">
                <h3><span class="category">Category:</span> {this.props.question.category.title}</h3>
                <h3><span class="points">Points:</span> {this.props.question.value}</h3>
                <h3><span class="question">Question:</span> {this.props.question.question}</h3>
                <button onClick={this.props.clickRevealAnswer}>Click To Review Answer</button>
                { this.props.revealAnswer ? <div className="answer"><h3>Answer: {this.props.question.answer}</h3></div> : ''}
            </div>
        )
    }
}

export default QuestionComponent

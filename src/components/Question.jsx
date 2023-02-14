import React, { Component } from 'react';
import { connect } from 'react-redux';
// import mixAnswers from '../helpers/gameFunctions';

// mixAnswers(questions);

class Question extends Component {
  render() {
    // const { questions } = this.props;

    return (
      <main>
        <section>
          <div data-testid="question-category">Question category text HERE</div>
          <div data-testid="question-text">Question text HERE</div>
        </section>
        <section>
          <div>Timer HERE (as component?)</div>
        </section>
        <section>
          <div>
            <div>Answer1</div>
            <div>Answer2</div>
            <div>Answer3</div>
            <div>Answer4</div>
            <div>Answer5</div>
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.results,
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps/* , mapDispatchToProps */)(Question);

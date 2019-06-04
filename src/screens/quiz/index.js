import React from 'react'
import { get as getThePropertyObject } from 'lodash'
import { connect } from 'react-redux'

import {
  Text,
  View,
  Button
} from 'react-native'

import { QUIZ } from './Constants'
import { FinishedQuiz } from './components'
import { HeaderBar } from '../../components'

import styles from '../styles'

class QuizScreen extends React.Component {
  state = {
    questionNumber: 0,
    showAnswer: false,
    totalCorrect: 0,
    totalIncorrect: 0
  }

  onPressInQuizScreen (action) {
    if (action === QUIZ.ON_PRESS.CORRECT) {
      const { totalCorrect, questionNumber } = this.state
      this.setState({ totalCorrect: (totalCorrect + 1), questionNumber: (questionNumber + 1) })
    } else if (action === QUIZ.ON_PRESS.INCORRET) {
      const { totalIncorrect, questionNumber } = this.state
      this.setState({ totalIncorrect: (totalIncorrect + 1), questionNumber: (questionNumber + 1) })
    }
  }

  show (showAnswer) {
    this.setState({ showAnswer: !showAnswer })
  }

  render () {
    const { selectedDeck, lastScreen } = this.props.navigation.state.params
    const questions = getThePropertyObject(this.props.decks, selectedDeck).questions
    const { questionNumber, showAnswer } = this.state

    const finishedQuestions = questionNumber === questions.length

    return (
      <View style={styles.container}>

        <HeaderBar
          titlePage={`QUIZ OF DECK ${selectedDeck}`}
          navigate={this.props.navigation.navigate}
          lastScreen={lastScreen}
          hideBackScreen={finishedQuestions}
        />

        <View style={styles.welcomeContainer}>
          <Text>Questions { finishedQuestions ? questionNumber : questionNumber + 1 } of { questions.length } </Text>
        </View>

        { finishedQuestions &&
          (
            <FinishedQuiz
              correct={this.state.totalCorrect}
              incorrect={this.state.totalIncorrect}
              navigate={this.props.navigation.navigate}
              deck={selectedDeck}
            />
          )
        }

        { !showAnswer && !finishedQuestions &&
          (
            <View style={styles.getStartedContainer}>
              <Text style={styles.getStartedText}>{ questions[questionNumber].question }</Text>
              <Text style={styles.getStartedText} onPress={() => this.show(showAnswer)}> Show Answer </Text>
            </View>
          )
        }

        { showAnswer && !finishedQuestions &&
          (
            <View style={styles.getStartedContainer}>
              <Text style={styles.getStartedText}>{ questions[questionNumber].answer }</Text>
              <Text style={styles.getStartedText} onPress={() => this.show(showAnswer)}> Show Question </Text>
            </View>
          )
        }

        { !finishedQuestions &&
          (
            <View style={styles.getStartedContainer}>
              <Button
                title='CORRECT'
                onPress={() => this.onPressInQuizScreen(QUIZ.ON_PRESS.CORRECT)}
              />

              <Button
                title='ICONRRECT'
                onPress={() => this.onPressInQuizScreen(QUIZ.ON_PRESS.INCORRET)}
              />
            </View>
          )
        }
      </View>
    )
  }
}

const mapStateToProps = ({ decks }) => ({ decks })

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizScreen)

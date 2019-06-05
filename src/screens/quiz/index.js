import React from 'react'
import { get as getThePropertyObject } from 'lodash'
import { connect } from 'react-redux'

import {
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import { Text as TextTitle } from 'react-native-elements'

import { FinishedQuiz } from './components'
import { HeaderBar } from '../../components'
import { clearLocalNotification, setLocalNotification } from '../../utils'

import { styles, QUIZ } from '../../constants'

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

  reestartQuiz () {
    this.setState({
      questionNumber: 0,
      showAnswer: false,
      totalCorrect: 0,
      totalIncorrect: 0
    })
  }

  componentWillMount () {
    clearLocalNotification()
      .then(setLocalNotification)
  }

  render () {
    const { selectedDeck, lastScreen } = this.props.navigation.state.params
    const questions = getThePropertyObject(this.props.decks, selectedDeck).questions
    const { questionNumber, showAnswer } = this.state

    const finishedQuestions = questionNumber === questions.length

    return (
      <View style={styles.container}>

        <HeaderBar
          titlePage={`QUIZ: ${selectedDeck.toUpperCase()}`}
          navigate={this.props.navigation.navigate}
          lastScreen={lastScreen}
          lastScreenParams={{ selectedDeck, lastScreen }}
          hideBackScreen={finishedQuestions}
        />

        <View style={styles.welcomeContainer}>
          <Text>Questions { finishedQuestions ? questionNumber : questionNumber + 1 } of { questions.length } </Text>
          {finishedQuestions && (
            <View style={styles.buttonsFlexRow}>
              <TouchableOpacity
                style={{ backgroundColor: 'black' }}
                onPress={() => this.reestartQuiz()}
              ><Text style={{ color: 'white' }}> RESTART QUIZ </Text></TouchableOpacity>

              <TouchableOpacity
                style={{ marginLeft: '2%', backgroundColor: 'black' }}
                onPress={() => this.props.navigation.navigate(lastScreen, { selectedDeck, lastScreen })}
              ><Text style={{ color: 'white' }}> BACK TO DECK </Text></TouchableOpacity>
            </View>
          )}

        </View>

        { finishedQuestions &&
          (
            <View style={{ alignContent: 'center' }}>
              <FinishedQuiz
                correct={this.state.totalCorrect}
                incorrect={this.state.totalIncorrect}
                navigate={this.props.navigation.navigate}
                navigateParams={{ selectedDeck, lastScreen }}
                deck={selectedDeck}
                reestartQuiz={this.reestartQuiz}
              />
            </View>
          )
        }

        <View style={{ height: '100%', width: '100%', alignItems: 'center' }}>
          { !showAnswer && !finishedQuestions &&
          (
            <View style={{ marginTop: '10%', width: '80%' }}>
              <TextTitle h3 style={{ textAlign: 'center', marginBottom: '5%' }}>{ questions[questionNumber].question }</TextTitle>
              <Text style={styles.getStartedText} onPress={() => this.show(showAnswer)}> Show Answer </Text>
            </View>
          )
          }

          { showAnswer && !finishedQuestions &&
          (
            <View style={{ marginTop: '10%', width: '80%' }}>
              <TextTitle h3 style={{ textAlign: 'center', marginBottom: '5%', color: '#3D6DCC' }}>{ questions[questionNumber].answer }</TextTitle>
              <Text style={styles.getStartedText} onPress={() => this.show(showAnswer)}> Show Question </Text>
            </View>
          )
          }

          { !finishedQuestions &&
          (
            <View style={{ width: '80%', ...styles.getStartedContainer }}>

              <TouchableOpacity
                style={{ ...styles.buttons, marginTop: '7%', backgroundColor: 'green', width: '100%' }}
                onPress={() => this.onPressInQuizScreen(QUIZ.ON_PRESS.CORRECT)}
              >
                <TextTitle h4 style={{ color: '#fff', textAlign: 'center' }}>CORRECT</TextTitle>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ ...styles.buttons, marginTop: '7%', backgroundColor: 'red', width: '100%' }}
                onPress={() => this.onPressInQuizScreen(QUIZ.ON_PRESS.INCORRET)}
              >
                <TextTitle h4 style={{ color: '#fff', textAlign: 'center' }}>ICONRRECT</TextTitle>
              </TouchableOpacity>

            </View>
          )
          }
        </View>

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

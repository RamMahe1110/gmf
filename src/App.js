import React from 'react'
import _ from 'lodash'
import './App.scss'
import data from './data.js'
import Notifier from './components/Notifier'
import WinContainer from './components/WinContainer'
import Indication from './components/Indication'
import Letters from './components/Letters'
import Words from './components/Words'

class App extends React.Component {
  state = JSON.parse(JSON.stringify(data.initialState))

  onLetterSelect = (idx) => {
    const { selectedLetters, letters } = this.state
    let { currWord } = this.state
    const updatedSelectedLetters = { ...selectedLetters }
    currWord += letters[idx]
    updatedSelectedLetters[idx] = true
    this.setState({
      selectedLetters: updatedSelectedLetters,
      currWord,
    })
  }

  onReset = () => {
    this.setState(JSON.parse(JSON.stringify(data.initialState)))
  }

  checkWin = () => {
    const { possibleWords } = this.state
    let countSelected = 0
    for (let letter in possibleWords) {
      if (possibleWords[letter].selected) {
        countSelected = countSelected + 1
      }
    }
    if (countSelected >= 5) {
      return true
    }
    return false
  }

  setNotifierString = (forReset, str) => {
    this.setState({
      notifierString: { forReset, str },
    })
    setTimeout(() => {
      this.setState({
        notifierString: {
          forReset: false,
          str: '',
        },
      })
    }, 1500)
  }

  componentDidUpdate(prevProps, prevState) {
    const { currWord, possibleWords, letters } = this.state
    if (currWord !== prevState.currWord) {
      if (possibleWords[currWord] && !possibleWords[currWord].selected) {
        let updatedPossibleWords = JSON.parse(JSON.stringify(possibleWords))
        updatedPossibleWords[currWord].selected = true
        this.setNotifierString(false, currWord)
        this.setState({
          possibleWords: updatedPossibleWords,
          currWord: '',
          selectedLetters: {},
        })
      } else if (currWord.length >= letters.length) {
        this.setNotifierString(true, 'resetting...')
        this.setState({
          currWord: '',
          selectedLetters: {},
        })
      }
    }
    if (!_.isEqual(prevState.possibleWords, possibleWords)) {
      this.setState({
        allSelected: this.checkWin(),
      })
    }
  }

  getPercentWordCount = () => {
    const { possibleWords } = this.state
    let percent = 0
    for (let word in possibleWords) {
      if (possibleWords[word].selected) {
        percent += 20
      }
    }
    return percent
  }

  render() {
    const {
      letters,
      selectedLetters,
      possibleWords,
      currWord,
      allSelected,
      notifierString,
    } = this.state

    return (
      <div className="app">
        <div className="main-container">
          <Notifier notifierString={notifierString} />
          <WinContainer allSelected={allSelected} onReset={this.onReset} />
          <div className="curr-word-bar">
            {currWord.length ? <span className="word">{currWord}</span> : null}
          </div>
          <Indication width={this.getPercentWordCount()} />
          <Letters
            letters={letters}
            selectedLetters={selectedLetters}
            onLetterSelect={this.onLetterSelect}
          />
          <Words possibleWords={possibleWords} />
          <div className="design">
            <img alt="design" src={require('./assets/bottom-design.png')} />
          </div>
        </div>
      </div>
    )
  }
}

export default App

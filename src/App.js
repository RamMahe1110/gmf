import React from 'react'
import _ from 'lodash'
import './App.scss'

let initialState = {
  currWord: '',
  possibleWords: {
    apple: {
      selected: false,
    },
    head: {
      selected: false,
    },
    place: {
      selected: false,
    },
    space: {
      selected: false,
    },
    help: {
      selected: false,
    },
  },
  letters: ['p', 'l', 'p', 't', 's', 'a', 'c', 'e', 'h', 'd'],
  selectedLetters: {},
  allSelected: false,
}

class App extends React.Component {
  state = JSON.parse(JSON.stringify(initialState))

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
    this.setState(JSON.parse(JSON.stringify(initialState)))
  }

  checkWin = () => {
    const { possibleWords } = this.state
    let allSelected = true
    for (let letter in possibleWords) {
      if (!possibleWords[letter].selected) {
        allSelected = false
      }
    }
    return allSelected
  }

  componentDidUpdate(prevProps, prevState) {
    const { currWord, possibleWords, letters } = this.state
    if (currWord !== prevState.currWord) {
      if (possibleWords[currWord] && !possibleWords[currWord].selected) {
        let updatedPossibleWords = JSON.parse(JSON.stringify(possibleWords))
        updatedPossibleWords[currWord].selected = true
        this.setState({
          possibleWords: updatedPossibleWords,
          currWord: '',
          selectedLetters: {},
        })
      } else if (currWord.length >= letters.length) {
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

  render() {
    const {
      letters,
      selectedLetters,
      possibleWords,
      currWord,
      allSelected,
    } = this.state
    return (
      <div className="app">
        {allSelected ? (
          <div className="win-container">
            <div className="content">
              <h1>You Won!</h1>
              <button onClick={this.onReset}>RESET</button>
            </div>
          </div>
        ) : (
          <div className="main-container">
            <div className="curr-word-bar">
              {[...currWord].map((item, idx) => (
                <span className="word" key={idx}>
                  {item}
                </span>
              ))}
            </div>
            <div className="letters">
              {letters.map((item, idx) => (
                <span key={idx} className="letter-wrap">
                  {selectedLetters[idx] ? (
                    <span className="letter letter-inv">{item}</span>
                  ) : (
                    <span
                      className="letter"
                      onClick={() => this.onLetterSelect(idx)}
                    >
                      {item}
                    </span>
                  )}
                </span>
              ))}
            </div>
            <div className="words">
              <div className="words">
                {Object.keys(possibleWords).map((item, idx) => {
                  if (possibleWords[item].selected) {
                    return (
                      <div key={idx} className="word-wrap">
                        <span className="word">{item}</span>
                        <span className="word-length">{item.length}</span>
                      </div>
                    )
                  } else {
                    return null
                  }
                })}
              </div>
            </div>
            <div className="design">
              <img alt="design" src={require('./assets/bottom-design.png')} />
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default App

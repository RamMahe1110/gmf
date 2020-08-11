import React from 'react'

const Words = ({ possibleWords }) => {
  return (
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
  )
}

export default Words

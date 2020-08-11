import React from 'react'

const Letters = ({ letters, selectedLetters, onLetterSelect }) => {
  return (
    <div className="letters">
      {letters.map((item, idx) => (
        <span key={idx} className="letter-wrap">
          {selectedLetters[idx] ? (
            <span className="letter letter-inv">{item}</span>
          ) : (
            <span className="letter" onClick={() => onLetterSelect(idx)}>
              {item}
            </span>
          )}
        </span>
      ))}
    </div>
  )
}

export default Letters

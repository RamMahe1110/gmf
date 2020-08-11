import React from 'react'

const WinContainer = ({ allSelected, onReset }) => {
  if (allSelected) {
    return (
      <div className="win-container">
        <div className="content">
          <h2>You Won!</h2>
          <button onClick={onReset}>Reset</button>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default WinContainer

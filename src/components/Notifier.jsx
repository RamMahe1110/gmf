import React from 'react'

const Notifier = ({ notifierString }) => {
  if (notifierString.str.length) {
    return (
      <div className="notifier">
        {notifierString.forReset ? (
          <span>No Word Found:</span>
        ) : (
          <span>You Got it:</span>
        )}
        <span className="word">{notifierString.str}</span>
      </div>
    )
  } else {
    return null
  }
}

export default Notifier

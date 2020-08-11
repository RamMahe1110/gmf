import React from 'react'

const Indication = ({ width }) => {
  return (
    <div className="indication">
      <h1 className="title">Give me Five</h1>
      <div className="bar-cont">
        <div
          className="bar"
          style={{
            width: `${width}%`,
          }}
        ></div>
      </div>
    </div>
  )
}

export default Indication

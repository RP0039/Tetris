import React from 'react'
import { StyledDisplay } from './style/StyledDisplay.js'

const Display = ({ gameOver, text }) => {
  return (
    <StyledDisplay gameOver={gameOver}>
      {text}
    </StyledDisplay>
  )
}

export default Display
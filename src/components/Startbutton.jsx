import React from 'react'
import { StyledStartButton } from './style/StyledButton'

const StartButton = ( callback ) => {
  return (
    <StyledStartButton onClick={callback}>
      Start Game
    </StyledStartButton>
  )
}

export default StartButton
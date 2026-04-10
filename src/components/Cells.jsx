import React from 'react'
import { StyledCell } from './style/StyledCell'
import { TETROMINOS } from './Tetrominos'

const Cell = ({ type }) => {
    return (
    <StyledCell type={'L'} color={TETROMINOS['L'].color} >{type !== 0 ? 'cell' : ''}</StyledCell>
    )
}

export default Cell
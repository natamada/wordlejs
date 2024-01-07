import React from 'react'
import Keyboard from './KeyBoard/Keyboard'
import Grid from './GameBoard/Grid'

const Wordle = () => {
  return (
    <div>
        <h1 className='font-bold text-5x1'>WORDLEjs</h1>
        <Grid />
        <Keyboard />
        <small className='m-5'>Refresh page to play again with different word</small>
    </div>
  )
}

export default Wordle
import React, { useContext } from 'react'
import Grid from './GameBoard/Grid'
import Keyboard from './KeyBoard/Keyboard'
import { WordleContext } from '../App'

const Wordle = () => {
  const {answer} = useContext(WordleContext)
  return (
    <div>
        <h1 className='font-extrabold text-5xl'>WORDLEjs</h1>
        <Grid />
        <Keyboard />
        <small className='rotate-180 text-[4px'>{answer}</small>
    </div>
  )
}

export default Wordle
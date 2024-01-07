import { useState } from 'react'
import './App.css'
import Row from './components/GameBoard/Row'
import Grid from './components/GameBoard/Grid'
import Keyboard from './components/KeyBoard/Keyboard'

function App() {

  return (
    <>
      <div className='App'>
        <Grid />
        <Keyboard />
        </div>
    </>
  )
}

export default App

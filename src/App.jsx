import './App.css'
import Wordle from './components/Wordle'
import { createContext, useState } from 'react'

export const WordleContext = createContext()

function App() {
  const [answer, setAnswer] = useState('PLANT')
  const [guess, setGuess] = useState("")
  const [currentRow, setCurrentRow] = useState(0)
  const [completedRows , setCompletedRows] = useState([])

  function guessTheWord(char){
    if(guessTheWord.length === 5) return
      setGuess(guess.concat(char))
    
  }

  function pressEnter(){
    if(currentRow > 5) return alert('Oh no! You used all your guesses ')
    if(guess.length<5) return
    // if(!dictionary.includes(guessWord.toLocaleLowerCase())) return alert('Word not found')
    if(guess === answer) alert('You guessed the wordle!')
    
    console.log('Enter pressed' + currentRow)
    setCurrentRow(currentRow + 1)
    setCompletedRows([...completedRows ,currentRow])
    setGuess('')
    

  }

  function backspace(){
    setGuess(guess.slice(0 , guess.length-1))

  }



  return (
    <>
      <WordleContext.Provider value={{
      guessTheWord,
       pressEnter,
        completedRows,
         currentRow,
         answer,
         guess,
        backspace 

    }} >
        <Wordle/>
    </ WordleContext.Provider>
    </>
  )
}

export default App

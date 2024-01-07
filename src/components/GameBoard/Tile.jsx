import React, { useState, useContext, useEffect } from 'react'
import { WordleContext } from '../../App';

const Tile = (id, rowId) => {
  const [letter, setLetter] = useState("");
  const [completed, setCompleted] = useState(true);
  const [colors, setColors] = useState({ back: "white", font: "black" });
  const {answer, guess, currentRow, completedRows} = useContext(WordleContext)
  
  useEffect(()=>{   
    if(currentRow === rowId){
        setLetter(guess[id])
    }
    if(completedRows.includes(rowId) && completed){
        changeColors()
        setCompleted(false)
    }
  },
  [guess, completedRows])

  function changeColors(){
    const arrayWord = answer.split('')
    if(arrayWord.includes(letter)){
        if (arrayWord[id]===letter){  
            return setColors({back:'lightgreen' , font:'white'})
        }
        return setColors({back:'gold', font:'white'})
    }
    return setColors({back:"grey" , font:"white"})
}

  return (
    <div className="flex justify-center my-[2px] m-[2px] items-center  w-[62px] h-[62px] border-2">
     
      <p className="flex self-center mb-2 font-bold text-5xl">{letter}</p>
    </div>
  );
}

export default Tile
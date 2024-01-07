import React, { useContext } from 'react';
import { WordleContext } from '../../App'

const Keys = (props) => {
    const {guessTheWord, backspace, pressEnter} = useContext(WordleContext)

    function handleClickForBig(){
        if(props.letter === "Enter"){
            pressEnter()
        } else {
            backspace()
        }
    }
  if (props.big) {
    return (
      <button
        onClick={() => handleClickForBig()}
        style={{
          width: 66,
          height: 50,
          margin: 3,
          borderRadius: 5,
          display: 'grid',
          placeItems: 'center',
          fontSize: 14,
          backgroundColor: '#d3d6da',
          color: 'black',
          fontFamily: 'Arial',
          cursor: 'pointer',
          border: 0,
          fontWeight: 'bold',
        }}
      >
        {props.letter}
      </button>
    );
  }

  return (

    <button
      onClick={() => guessTheWord(props.letter)}
      style={{
        width: 46,
        height: 50,
        margin: 3,
        borderRadius: 5,
        display: 'grid',
        placeItems: 'center',
        fontSize: 12,
        backgroundColor: '#d3d6da',
        color: 'black',
        fontFamily: 'Arial',
        cursor: 'pointer',
        border: 0,
      }}
    >
      {props.letter}
    </button>
  );
};

export default Keys;

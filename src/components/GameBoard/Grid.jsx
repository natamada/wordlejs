import React from 'react'
import Row from './Row'

const Grid = () => {
    const attemptRows = [1,2,3,4,5,6]

  return (
    <div className='m-4'>
        {
            attemptRows.map((row, index) => (<Row key={index} id={index} />))
        }
    </div>
  )
}

export default Grid
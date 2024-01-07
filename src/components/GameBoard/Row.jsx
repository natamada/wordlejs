import React from 'react'
import Tile from './Tile'

const Row = (props) => {
    const rowNumber = [1,2,3,4,5]
    return (
        <div className="flex flex-row justify-center items-center" >
            {
                rowNumber.map((item, index) => (<Tile rowId={props.id} key={index} id={index} />))
            }
            
        </div>
    )
}

export default Row
import React from 'react'

const Card = (props) => {
  
  return (
    <div className="shrink-0 gap-0.3">
        <img className="h-screen p-4 w-85 rounded-4xl" src={props.image} />
    </div>
  )
}

export default Card


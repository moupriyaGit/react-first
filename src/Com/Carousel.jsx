import React from 'react'
import Card from './Card'

const Carousel = (props) => {
  console.log(props.users)
  return (
    <div className="w-2/3 mt-15 ml-20 flex flex-nowrap overflow-x-auto">

      {props.users?.map(function(elem, idx) {
        return <Card key={idx} image={elem.image} />
      })}

    </div>
  )
}

export default Carousel
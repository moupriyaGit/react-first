import React from 'react'
import Logo from './Logo'
import Carousel from './Carousel'

const Content = (props) => {
  console.log(props);
  
  return (
    <div className="flex">
      <Logo />
      <Carousel users={props.users}/>
    </div>
  )
}

export default Content
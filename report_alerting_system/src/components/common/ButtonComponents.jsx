import React from 'react'
import '../common/css/ButtonComponents.css'

function ButtonComponents(props) {
  return (
    <div className='buttons'><img src={props.path}/></div>
  )
}

export default ButtonComponents
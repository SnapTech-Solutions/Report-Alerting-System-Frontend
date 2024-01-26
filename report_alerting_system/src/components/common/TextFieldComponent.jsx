import React from 'react'
import '../common/css/TextFieldComponent.css'

function TextFieldComponent() {
  return (

    <div className='TextFieldDiv'>
      <input type='text' className='textField'>{props.massege}</input>
    </div>
  )
}

export default TextFieldComponent
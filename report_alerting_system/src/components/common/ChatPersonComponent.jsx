import React from 'react'
import '../common/css/ChatPersonComponent.css'

function ChatPersonComponent(props) {
  return (
    <div className='chatPersonDiv'>
      <div className='chatPersondivSmall'>
        <h4>{props.name}</h4>
      </div>

    </div>
  )
}

export default ChatPersonComponent
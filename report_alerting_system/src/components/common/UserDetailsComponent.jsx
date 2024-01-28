import React from 'react'
import '../common/css/UserDetailsComponent.css'

function UserDetailsComponent(props) {
  return (
    <div className='UserDetailsDiv'>
      
      {props.name}
      <img src='src/assets/social_13895602.png'  className='UserDetails' /> 
    </div>
  )
}

export default UserDetailsComponent
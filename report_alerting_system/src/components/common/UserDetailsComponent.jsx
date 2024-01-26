import React from 'react'
import '../common/css/UserDetailsComponent.css'

function UserDetailsComponent(props) {
  return (
    <div className='UserDetailsDiv'>
      <img src='' alt='UserDetials' className='UserDetails' /> {props.name}
    </div>
  )
}

export default UserDetailsComponent
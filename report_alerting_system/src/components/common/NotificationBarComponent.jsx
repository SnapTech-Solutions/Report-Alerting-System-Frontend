import React from 'react'
import '../common/css/NotificationBarComponent.css'
import UserDetailsComponent from './UserDetailsComponent'
import ButtonComponents from './ButtonComponents'

function NotificationBarComponent() {
  return (
    <div class="col-12 NotificationBar">


      <ul class="nav justify-content-end bg-dark  " >
        <li class="nav-item mr-4">
          <a class="nav-link active" href="#"><ButtonComponents path='src/assets/communication_13894348.png'/></a>
        </li>
        <li class="nav-item mr-4">
          <a class="nav-link" href="#"><ButtonComponents path='src/assets/bell_13912720.png' /></a>
        </li>
        <li class="nav-item mr-4 ">
         <UserDetailsComponent name="ward 1"/>
        </li>
     
      </ul>
    </div>
  )
}

export default NotificationBarComponent
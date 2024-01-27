import React from 'react'
import '../common/css/NotificationBarComponent.css'
import UserDetailsComponent from './UserDetailsComponent'

function NotificationBarComponent() {
  return (
    <div class="col-11 NotificationBar">


      <ul class="nav justify-content-end bg-dark  " >
        <li class="nav-item mr-4">
          <a class="nav-link active" href="#"><img src='src/assets/communication_13894348.png'/></a>
        </li>
        <li class="nav-item mr-4">
          <a class="nav-link" href="#"><img src='src/assets/bell_13912720.png' /></a>
        </li>
        <li class="nav-item mr-4 ">
         <UserDetailsComponent name="ward 1"/>
        </li>
     
      </ul>
    </div>
  )
}

export default NotificationBarComponent
import React from 'react'
import '../common/css/NotificationBarComponent.css'

function NotificationBarComponent() {
  return (
    <div class="col-11 NotificationBar">


      <ul class="nav justify-content-end bg-dark">
        <li class="nav-item">
          <a class="nav-link active" href="#"><img src='src/assets/communication_13894348.png'/></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><img src='src/assets/bell_13912720.png'/></a>
        </li>
        <li class="nav-item ">
         <a class="nav-link ml-4" href="#"><img src='src/assets/social_13895602.png'/></a>
        </li>
     
      </ul>
    </div>
  )
}

export default NotificationBarComponent
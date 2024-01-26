import React from 'react'
import '../common/css/NavBarComponent.css'

function NavBarComponent() {
  return (
    <>
    <div className='NavBarDiv col-1'>
    <div class="d-flex flex-column flex-shrink-1 NavBar ">
     
      <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li class="nav-item">
          <a href="/patient" class="nav-link  py-5" aria-current="page" title="Home" data-bs-toggle="tooltip" data-bs-placement="right">
          <img src='src/assets/internet_13895721.png' />     </a>
        </li>
        <li>
          <a href="/report" class="nav-link py-5" title="Dashboard" data-bs-toggle="tooltip" data-bs-placement="right">
            <img src='src/assets/people_13895698.png' />
          </a>
        </li>
        <li>
          <a href="/chat" class="nav-link py-5" title="Orders" data-bs-toggle="tooltip" data-bs-placement="right">
          <img src='src/assets/monitor_13895562.png' /></a>
        </li>
        
        <li>
          <a href="#" class="nav-link py-5 " title="Customers" data-bs-toggle="tooltip" data-bs-placement="right">
            <svg class="bi" width="24" height="24" role="img" aria-label="Customers"><use xlink:href="#people-circle" /></svg>
          </a>
        </li>
      </ul>
    </div>
    </div>
    </>
  )
}

export default NavBarComponent
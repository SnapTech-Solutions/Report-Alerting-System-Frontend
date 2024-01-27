import React from 'react'
import '../common/css/NavBarComponent.css'
import LogOutComponent from './LogOutComponent'

function NavBarComponent() {
  return (
    <>
   
    <div className='NavBarDiv col-1'>
    <img src='src/assets/images-removebg-preview.png'className='SriLankanLogo'/>
    <div class="d-flex flex-column flex-shrink-1 NavBar ">
     
      <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
      
      <li><a href="/report" class="nav-link pt-5" title="Dashboard" data-bs-toggle="tooltip" data-bs-placement="right">
            <img src='src/assets/internet_13895721.png' />
          </a>
        </li>
        <li>
          <a href="/report" class="nav-link pt-5" title="Dashboard" data-bs-toggle="tooltip" data-bs-placement="right">
            <img src='src/assets/people_13895698.png' />
          </a>
        </li>
        <li>
          <a href="/chat" class="nav-link pt-5" title="Orders" data-bs-toggle="tooltip" data-bs-placement="right">
          <img src='src/assets/monitor_13895562.png' /></a>
        </li>
        
        <li>
          <a href="#" class="nav-link pt-5" title="Customers" data-bs-toggle="tooltip" data-bs-placement="right">
          <img src='src/assets/settings_13895710.png' /> </a>
        </li>
        <li>
          <a href="#" class="nav-link py-4 mt-6" title="Customers" data-bs-toggle="tooltip" data-bs-placement="right">
        <LogOutComponent/></a>
        </li>
      </ul>
    </div>
    </div>
    </>
  )
}

export default NavBarComponent
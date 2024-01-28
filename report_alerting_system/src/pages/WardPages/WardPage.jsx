import React from 'react'
import './WardPage.css'
import NavBarComponent from '../../components/common/NavBarComponent'
import HeaderComponnet from '../../components/common/HeaderComponnet'
import NotificationBarComponent from '../../components/common/NotificationBarComponent'
import WardChat from './WardChat/WardChat'
function WardPage() {
  return (
    <div >
   <div> <HeaderComponnet />
        <NavBarComponent /></div>
       <NotificationBarComponent/>
      <div>
     ,<WardChat/>
      </div>
       
      
      </div>
  )
}

export default WardPage
import './App.css'
import HeaderComponnet from './components/common/HeaderComponnet'
import NavBarComponent from './components/common/NavBarComponent'
import NotificationBarComponent from './components/common/NotificationBarComponent'
import WardHomePage from './pages/WardPages/WardHomePage/WardHomePage'
function App() {

  return (
    <>
      <div >
        <div> <HeaderComponnet />
        <NavBarComponent /></div>
       <NotificationBarComponent/>
       <WardHomePage/>
        
      
      </div>
    </>
  )
}

export default App

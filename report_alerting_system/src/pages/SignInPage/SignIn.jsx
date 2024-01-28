import React from 'react'
import './SignIn.css'
import Flag from '../../assets/NationalFlag.png'
import BG from '../../assets/BackGround.jpg'

function SignIn() {
  return (
    <>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <div className="row" id='mainHeader'>
        <div className="col-sm-3">
          <img src={Flag} alt="" className='headerImg' />
        </div>
        <div className="col-sm-9">
          <h3>COLOMBO SOUTH TEACHING HOSPITAL KALUBOWILA</h3>
        </div>
      </div>
      <div className="row" id='loginRow'>
        <img src={BG} className='mainBG' />
        <div className="login-box" >
          <div className='wrapper'>
            <form action="">
              <h1>Login</h1>
              <div className='input-box'>
                <input type="text" placeholder='Username' required />
                <i class='bx bxs-user'></i>
              </div>
              <div className='input-box'>
                <input type="password" placeholder='Password' required />
                <i class='bx bxs-lock-alt'></i>
              </div>
              <div className='forgot'>

                <a href="a">Forgot Password?</a>
              </div>

              <button type='submit' className='btn'>Login</button>
            </form>


          </div>
          {/* <img src={Test} alt="" className='imgClass' /> */}
        </div>
      </div>
    </>
  )
}

export default SignIn
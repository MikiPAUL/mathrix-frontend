import React from 'react'
import colors from '../constants/colors'
import icon from "../favicon.png"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div style={{flexDirection:"row",background:colors.bg}}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src={icon} alt="" style={{height:50,width:50}} />
          <a className="navbar-brand" href='/' style={{fontSize:35,fontWeight:'bolder',color:'white'}}>MATHRIX 2024</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className='container'>
          <div className="collapse navbar-collapse" id="navbarNav" style={{marginLeft:250}}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className={"nav-link"} style={{color:colors.grey}} href='/about' aria-current="page">ABOUT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{color:colors.grey}} href="/events">EVENTS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{color:colors.grey}} href="/schedules">SCHEDULE</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{color:colors.grey}} href="/workshop">WORKSHOP</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{color:colors.grey}} href="/">CONTACTS</a>
              </li>
            </ul>
            </div>
          </div>
          <button style={{background:colors.buttons,fontSize:16}} type="button" className="btn btn-dark animate__animated animate__heartBeat">March 16 & 17, 2024</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
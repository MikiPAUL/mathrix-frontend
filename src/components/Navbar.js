import React from 'react'
import colors from '../constants/colors'
import icon from "../favicon.png"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div id='navbar' style={{flexDirection:"row",background:colors.bg}}>
      <nav className="navbar navbar-light navbar-expand-lg bg-body-tertiary">
        <div id='c' className="container-fluid ">
          <img id='nim' src={icon} alt=""/>
          <a className="navbar-brand" id='mathrix' href='/' >MATHRIX 2024</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span id='nbti' className="navbar-toggler-icon"></span>
          </button>
          <div className='container col-6 col-md-4'>
          <div className="collapse navbar-collapse" id="navbarNav">
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
          <div id='buttn' style={{fontSize:16}}>
          <button style={{background:colors.buttons}} type="button" className="btn btn-dark animate__animated animate__heartBeat">March 16 & 17, 2024</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
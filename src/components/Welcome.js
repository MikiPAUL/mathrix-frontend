import React from 'react'
import colors from '../constants/colors'
import "./Welcome.css"

export default function Welcome() {
  return (
    <div id='home' className="container animate__animated animate__pulse" style={{ marginTop: 70, backgroundImage: 'linear-gradient(to bottom right, rgba(10,10,25,0.9), rgba(255, 255, 255, 0.143))', backdropFilter: "blur(10px)", boxShadow: "0 0 50px 15px #7E30E1", borderRadius: 15, padding: 70 }}>
      <div id="welcome" style={{ flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
        <div>
          <h1 id='h1tags'>MATHRIX 2024</h1>
          <h1 id='h1tags'>Inter College Math-Tech</h1>
          <h1 id='h1tags'>Symposium</h1>
          <p style={{ marginTop: 15, color: "GrayText" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus atque maiores neque </p>
        </div>
        <div style={{ marginTop: 40 }}>
          <button  style={{height:45,width:300, background: colors.buttons, fontSize: 16, borderRadius: 10 }} type="button" className="btn btn-dark">CHECK OUT THE EVENTS LIST HERE</button>
          <div className="d-grid gap-2 col-6 mx-auto" style={{ flexDirection: "row", padding: 15 }}></div>
          <button  style={{height:45,width:300, background: colors.buttons, fontSize: 16, borderRadius: 10 }} type="button" className="btn btn-dark">REGISTER/LOGIN</button>
        </div>
      </div>
    </div>
  )
}

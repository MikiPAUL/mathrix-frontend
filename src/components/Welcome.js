import React from 'react'
import colors from '../constants/colors'
import "./Welcome.css"

export default function Welcome() {
  return (
    <div style={{ flex: 1, alignItems: "center", justifyContent: "center",flexDirection:"row"}}>
      <div>
        <h1 style={{ color: "white", fontWeight: "bold",marginBottom:15 }}>MATHRIX 2024</h1>
        <h1 style={{ color: "white", fontWeight: "bold" }}>Inter College Math-Tech</h1>
        <h1 style={{ color: "white", fontWeight: "bold" }}>Symposium</h1>
        <p style={{marginTop:15,color:"GrayText"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus atque maiores neque </p>
      </div>
      <div style={{marginTop:40}}>
        <div className="d-grid gap-2 col-6 mx-auto" style={{flexDirection:"row",padding:15}}>
        <button style={{background:colors.buttons,fontSize:16,height:45,width:400,borderRadius:10}} type="button" className="btn btn-dark">CHECK OUT THE EVENTS LIST HERE</button>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto" style={{flexDirection:"row",padding:15}}></div>
        <button style={{background:colors.buttons,fontSize:16,height:45,width:400,borderRadius:10}} type="button" className="btn btn-dark">REGISTER/LOGIN</button>
        </div>
    </div>
  )
}

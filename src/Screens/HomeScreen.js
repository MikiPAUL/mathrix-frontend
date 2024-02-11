import React from 'react'
import Welcome from '../components/Welcome'

function HomeScreen() {
  return (
      <div className="container animate__animated animate__pulse" style={{marginTop:70,backgroundImage:'linear-gradient(to bottom right, rgba(10,10,25,0.9), rgba(255, 255, 255, 0.143))',backdropFilter:"blur(10px)",boxShadow:"0 0 50px 15px #7E30E1",borderRadius:15,padding:70}}>
      <Welcome />
      </div>
  )
}

export default HomeScreen
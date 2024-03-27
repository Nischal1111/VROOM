import React from 'react'
import Videobg from "../assets/Video.mp4"
import "../css/home.css"

const Home = () => {
  return (
    <div>
      <video src={Videobg} autoPlay loop muted className='video'></video>
    </div>
  )
}

export default Home

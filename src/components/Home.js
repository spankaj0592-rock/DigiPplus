import React from 'react'
import { HiSpeakerphone } from 'react-icons/hi';

function Home() {
  return (
    <div className='home-div'>
      <div className='home-div-items'>
        <div className='center'>
          <img src='https://media-exp1.licdn.com/dms/image/C510BAQGLEMCUFDlYlw/company-logo_200_200/0/1556790275592?e=2147483647&v=beta&t=VB2QBZ6GdkIevV4PB95cP1NLFONNWuq3Zokm1peYXV8' height='100px' alt="Home"/>
          <h1>WELCOME TO DIGIPPLUS</h1>
        </div>

        <h3 className='announcements'>Announcements <HiSpeakerphone /></h3>
        <h3 className='text-noty'>We are working on adding Project and Internship Details.</h3>
        <h2 className='color'>Work Action</h2>
        <h3 className='box-shadow' style={{ display: "inline" }}>View Intern Data</h3>
        <h2 className='color'>Internship</h2>
        <div className='solution-writting box-shadow' >
          <h2 style={{ color: "chocolate" }}>Solution Writting</h2>
          <h4 style={{ padding: "1rem" }}>Write Solution</h4>
        </div>
      </div>
    </div>
  )
}

export default Home
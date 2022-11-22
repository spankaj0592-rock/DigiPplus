import React from 'react'
import { HiSpeakerphone} from 'react-icons/hi'; 

function MyJob() {
  return (
    <div class="container">

      <nav>
        <ul>
          <li className='color'><h1>Job</h1></li>
          <li className='text-noty selected'>Solution Writting</li>
          <li className='color'>For Job Application</li>
          <li className='text-noty'>Screening tasks</li>
          <li className='color'>Application Status</li>
          <li className='text-noty'>Job Application Status</li>
        </ul>
      </nav>
      <div>
      <div className='card-width box-shadow' >
          <h2 style={{color:"chocolate"}}>K10 Maths Text Book Solution</h2>
          <h4 style={{padding: "1rem 0rem"}}>Intern Digipplus</h4>
        </div>
      </div>
      <aside>
        <h2 className='job-announcements'>Announcements <HiSpeakerphone/><HiSpeakerphone/></h2>
        <h3 className='text-noty'>We are working on adding Project and Internship Details. So just fill up profile only.</h3>
      </aside>
    </div>
  )
}

export default MyJob
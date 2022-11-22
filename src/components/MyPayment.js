import React from 'react'

function MyPayment() {
  return (
    <div class="container">
      
      <nav>
      <ul>
          <li className='color'>Payment Navigation</li>
          <li className='text-noty selected'>INVOICE</li>
          <li className='text-noty'>MY BANK DETAILS</li>
        </ul>
      </nav>
      <main>
        <ul>
          <li style={{margin:"0.5rem"}}><h4>Payment Date: Oct 25, 2022 Amount Paid: &#x20B9;3150</h4></li>
          <li style={{margin:"0.5rem"}}><h4>Payment mode For Project</h4></li>
          <li style={{margin:"0.5rem"}}><h4>K10 Maths Text Book Solution</h4></li>
          <li style={{margin:"0.5rem"}}><h4>K10 Maths Text Book Solution</h4></li>
        </ul>
        </main>
      <aside>
      <ul>
          <li style={{margin:"0.5rem"}}><h3>Lifetime <br/> <b>&#x20B9;3150</b></h3></li>
          <li style={{margin:"0.5rem"}}><h3>This month earning <br/><b>&#x20B9;0</b></h3></li>
      </ul>
        </aside>    
    </div>
  )
}

export default MyPayment
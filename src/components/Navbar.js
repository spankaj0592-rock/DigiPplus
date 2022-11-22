import React, { useState } from 'react'

import { GiHamburgerMenu} from 'react-icons/gi';
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../components/logo.png'

function Navbar() {

    const [showHamburger, setShowHamburger] = useState(false)
    const [select, setSelect] = useState('home')

  return (
    <div>
        <nav className="main-nav">
            {/* logo */}
            <div className='logo'>
            <img src={logo} alt='' style={{height:"40px"}}/>
                <h2><span style={{color:"tan"}}>DIGI</span><span style={{color:"chocolate"}}>PPLUS</span></h2>
            </div>

            {/* Menu list */}
            <div className={showHamburger ? "menu-link mobile-menu" : "menu-link"}>
                <ul>
                    <li><Link to="/"><h4 onClick={()=>setSelect('home')} className={select === 'home'? "is-selected": 'menu-item'}>Home</h4></Link></li>
                    <li><Link to="/myjob"><h4 onClick={()=>setSelect('job')} className={select === 'job'? "is-selected": 'menu-item'}>Job</h4></Link></li>
                    <li><Link to="/mypaymant"><h4 onClick={()=>setSelect('payment')} className={select === 'payment'? "is-selected": 'menu-item'}>Payment</h4></Link></li>
                    <li><Link to="/myoffertter"><h4 onClick={()=>setSelect('offerletter')} className={select === 'offerletter'? "is-selected": 'menu-item'}>OfferLetter</h4></Link></li>
                    <li><Link to="/mycertificate"><h4 onClick={()=>setSelect('certificate')} className={select === 'certificate'? "is-selected": 'menu-item'}>Certificates</h4></Link></li>
                </ul>
            </div>
            
            {/* Profile */}
            <div className='profile'>
                <ul className='profile-desktop'>
                    <li style={{border:"1px solid black",borderRadius:"50%",width:"40px",textAlign:"center",color:"white",backgroundColor:"black"}}> P</li>
                </ul>
                {/* hamburger icon */}
                <div className='hamburger-menu' onClick={()=> setShowHamburger(!showHamburger)}>
                    <GiHamburgerMenu/>
                </div>
            </div>

        </nav>
    </div>
  )
}

export default Navbar
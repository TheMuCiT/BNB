import React, { useState } from 'react'

import { ReactComponent as LogoMain } from '../../icons/LogoMain.svg'

import MainIMG from '../../images/Main.png'

import './navbar.css'

const Navbar = () => {
     const [Mobile] = useState(false)
     return (
          <div className='navbar'>
               <img src={MainIMG} alt='' className='MainImg' />
               <div className='navbarMobileButton'>
                    {/*<MobileMenu className={Mobile ? 'MobileDN' : 'Mobile'} />
                    <MobileMenuOpen className={Mobile ? 'Mobile' : 'MobileDN'} />*/}
                    <div className={Mobile ? 'navbarMenu active' : 'navbarMenu'}>
                         <div className='navbarMobileTop'></div>
                         <div className='navbarMobileMain'>
                              <div className='navbarCenterLink'>mobile</div>
                              <div className='navbarCenterLink'>mobile</div>
                         </div>
                    </div>
               </div>
               <div className='navbarContainer'>
                    <div className='navbarLeft'>
                         <LogoMain />
                    </div>
                    <div className='navbarCenter'>
                         <div className='navbarCenterLink'>Rooms</div>
                         <div className='navbarCenterLink'>Roomates</div>
                         <div className='navbarCenterLink'>Info</div>
                    </div>
                    <div className='navbarRight'>
                         <div className='navbarRightIcon'>
                              <div className='navbarRightIconText'>Login</div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Navbar

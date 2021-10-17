import React, { useEffect, useState } from 'react'

import { ReactComponent as LogoMain } from '../../icons/LogoMain.svg'
import { ReactComponent as ButtonLogin } from '../../icons/ButtonLogin.svg'

import './navbar.css'

const Navbar = () => {
     const [Mobile, setMobile] = useState(false)
     return (
          <div className='navbar'>
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
                              <ButtonLogin className='navbarRightIconBC' />
                              <div className='navbarRightIconText'>Login</div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Navbar

import React from 'react'

import { ReactComponent as Twitter } from '../../icons/Twitter.svg'
import { ReactComponent as Instagram } from '../../icons/Instagram.svg'
import { ReactComponent as Youtube } from '../../icons/Youtube.svg'
import { ReactComponent as LinkedIn } from '../../icons/LinkedIn.svg'
import { ReactComponent as Mail } from '../../icons/Mail.svg'

import { ReactComponent as Logo } from '../../icons/Logo.svg'

import './footer.css'
const Footer = () => {
     return (
          <div className='footer'>
               <div className='footerContainer'>
                    <div className='footerLeft'>
                         <div className='footerLeftIcon'>
                              <div className='footerLeftIconText'>
                                   <Logo />
                              </div>
                         </div>
                         <div className='footerLeftText'>Follow us with our social links</div>
                         <div className='footerLeftLinks'>
                              <div className='footerLeftItem'>
                                   <Instagram />
                              </div>
                              <div className='footerLeftItem'>
                                   <Twitter />
                              </div>
                              <div className='footerLeftItem'>
                                   <Youtube />
                              </div>
                              <div className='footerLeftItem'>
                                   <LinkedIn />
                              </div>
                              <div className='footerLeftItem'>
                                   <Mail />
                              </div>
                         </div>
                         <div className='footerLeftC'>&copy; All Rights reserved 2021 Tokenera</div>
                    </div>
                    <div className='footerRight'>
                         <div className='footerRightColumn'>
                              <div className='footerRightTitle'>About us</div>
                              <div className='footerRightLink'>Risk warning</div>
                              <div className='footerRightLink '>Terms of Use</div>
                              <div className='footerRightLink '>Privacy notice</div>
                              <div className='footerRightLink '>Cookie policy</div>
                         </div>
                         <div className='footerRightColumn'>
                              <div className='footerRightTitle'>Follow us</div>
                              <div className='footerRightLink'>Facebook</div>
                              <div className='footerRightLink'>Instagram</div>
                              <div className='footerRightLink'>Twitter</div>
                              <div className='footerRightLink'>Youtube</div>
                         </div>
                         <div className='footerRightColumn'>
                              <div className='footerRightTitle'>Legal</div>
                              <div className='footerRightLink'>Terms</div>
                              <div className='footerRightLink'>FAQs</div>
                              <div className='footerRightLink'>Privacy & Policy</div>
                              <div className='footerRightLink'>Support</div>
                         </div>
                    </div>
                    <div className='footerLeftCMobile'>&copy; All Rights reserved 2021 Pandalan-Hukuk</div>
               </div>
          </div>
     )
}

export default Footer

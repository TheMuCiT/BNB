import React from 'react'

import SafetyBC from '../../images/SafetyBC.png'

import ButtonSafety from '../../images/ButtonSafety.png'

import './safety.css'
const Safety = () => {
     return (
          <div className='safety'>
               <img src={SafetyBC} alt='' className='safetyBC' />
               <div className='safetyContainer'>
                    <div className='safetyTitle'>We Prioritise Safety</div>
                    <div className='safetyText'>
                         Our mission is to grow, promote and foster an all-inclusive atmosphere for anyone looking
                         for safe rentals. No matter where you are in the world, you deserve to feel at home in
                         your space.
                    </div>
                    <div className='safetyButton'>
                         <div className='safetyButtonBC'>
                              <img src={ButtonSafety} alt='' className='safetyButtonBCIMG' />
                         </div>
                         <div className='safetyButtonText'>Contact us</div>
                    </div>
               </div>
          </div>
     )
}

export default Safety

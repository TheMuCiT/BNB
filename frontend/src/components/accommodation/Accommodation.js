import React from 'react'

import { ReactComponent as Search } from '../../icons/Search.svg'
import { ReactComponent as Marker } from '../../icons/Marker.svg'
import { ReactComponent as Calendar } from '../../icons/Calendar.svg'
import { ReactComponent as User } from '../../icons/User.svg'
import { ReactComponent as ButtonLogin } from '../../icons/ButtonLogin.svg'

import './accommodation.css'

const Accommodation = () => {
     return (
          <div className='accommodation'>
               <div className='accommodationContainer'>
                    <div className='accommodationMainText'>Gay Share Accommodation</div>
                    <div className='accommodationSearch'>
                         <div className='accommodationSearchSectionOne'>
                              <div className='accommodationSearchSectionOneIcon'>
                                   <Marker />
                              </div>
                              <div className='accommodationSearchSectionOneText'>
                                   <div className='accommodationSearchSectionOneTitle'>Location</div>
                                   <div className='accommodationSearchSectionOneTitleText'>
                                        Where are you going?
                                   </div>
                              </div>
                         </div>
                         <div className='accommodationSearchSectionTwo'>
                              <div className='accommodationSearchSectionOneIcon'>
                                   <Calendar />
                              </div>
                              <div className='accommodationSearchSectionOneText'>
                                   <div className='accommodationSearchSectionOneTitle'>Check in/Check out</div>
                                   <div className='accommodationSearchSectionOneTitleText'>Add dates</div>
                              </div>
                         </div>
                         <div className='accommodationSearchSectionThird'>
                              <div className='accommodationSearchSectionOneIcon'>
                                   <User />
                              </div>
                              <div className='accommodationSearchSectionOneText'>
                                   <div className='accommodationSearchSectionOneTitle'>Guest and rooms</div>
                                   <div className='accommodationSearchSectionOneTitleText'>Rooms or Roomates?</div>
                              </div>
                         </div>
                         <div className='accommodationSearchSectionSearch'>
                              <ButtonLogin className='accommodationSearchSectionSearchBC' />
                              <div className='accommodationSearchSectionSearchIcon'>
                                   <Search />
                              </div>
                              <div className='accommodationSearchSectionSearchText'>Search</div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Accommodation

import React from 'react'
import Navbar from './components/navbar/Navbar'
import Main from './pages/main/Main'
import Footer from './components/footer/Footer'

import MainIMG from './images/Main.png'

const App = () => {
     return (
          <>
               <Navbar />
               <Main />
               <Footer />
               <img src={MainIMG} alt='' className='MainImg' />
          </>
     )
}

export default App

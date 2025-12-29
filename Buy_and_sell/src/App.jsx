import React from 'react'
import Navbar from './components/header/navbar'
import Front_section from './components/front_section/front_section'
import Freatured_section from './components/featured_section/featured_section'
import How_it_works from './components/How_it_works_section/How_it_works'
import Students_say from './components/Students_say_section/students_say'
import Ready from './components/Ready_to_get_started_section/Ready'
import Footer from './components/footer/footer'
import {Route, Routes} from 'react-router-dom'
import SignUp from './components/SignUp_LogIn/SignUp'
import LogIn from './components/SignUp_LogIn/Login'

const HomePage = () =>{
  return(
      <div>
      <Navbar />
      <Front_section />
      <Freatured_section />
      <How_it_works />
      <Students_say />
      <Ready />
      <Footer />
      </div>
  )
}

const App = () => {
  return (
      <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/LogIn' element={<LogIn/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      </Routes>
  )
}

export default App

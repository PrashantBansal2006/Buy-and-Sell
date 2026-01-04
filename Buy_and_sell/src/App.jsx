import React from 'react'
import Navbar from './components/front_page/header/navbar'
import Front_section from './components/front_page/front_section/front_section'
import Freatured_section from './components/front_page/featured_section/featured_section'
import How_it_works from './components/front_page/How_it_works_section/How_it_works'
import Students_say from './components/front_page/Students_say_section/students_say'
import Ready from './components/front_page/featured_section/Ready_to_get_started_section/Ready'
import Footer from './components/front_page/footer/footer'
import {Route, Routes} from 'react-router-dom'
import SignUp from './components/SignUp_LogIn/SignUp'
import LogIn from './components/SignUp_LogIn/Login'
import Dashboard from './components/User_Page/Dashboard/Dashboard'
import Browse from './components/User_Page/Browse/Browse'
import Sell from './components/User_Page/Sell/Sell'
import MyItems from './components/User_Page/MyItems/MyItems'
import Messages from './components/User_Page/Messages/Messages'
import Profile from './components/User_Page/Profile/Profile'
import Settings from './components/User_Page/Settings/Settings'

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
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/Browse' element={<Browse/>}/>
      <Route path='/Sell' element={<Sell/>}/>
      <Route path='/MyItems' element={<MyItems/>}/>
      <Route path='/Messages' element={<Messages/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/Settings' element={<Settings/>}/>

      </Routes>
  )
}

export default App

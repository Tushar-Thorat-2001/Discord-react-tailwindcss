import React from 'react'
import Navbar from './layouts/Navbar'
import Home from './components/Home'
import Invite from './components/Invite'
import Voice from './components/Voice'
import Freedom from './components/Freedom'
import Tech from './components/Tech'

const App = () => {
  return (
   <div className='overflow-hidden'>
     <Navbar/>
      <Home/>
      <Invite/>
      <Voice/>
      <Freedom/>
      <Tech/>
   </div>
  )
}

export default App
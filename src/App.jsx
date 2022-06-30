import { useState } from 'react'
import './App.css'
import {Route,Routes,Link} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Choose from './pages/Choose'
import Find from './pages/Find'
import Mine from './pages/Mine'

function App() {

  return (
    <div className="App">
        <Header/>
          <Routes>
            <Route path='/' element={<Choose/>}></Route>
            <Route path='/choose' element={<Choose/>}></Route>
            <Route path='/find' element={<Find/>}></Route>
            <Route path='/mine' element={<Mine/>}></Route>
          </Routes>
        <Footer/>
    </div>
  )
}

export default App
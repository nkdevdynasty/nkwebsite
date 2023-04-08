import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Service from './components/Service'
import About from './components/About'
import Contact from './components/Contact'
import Navbaar from './components/Navbaar'
const App = () => {
  return <>

  <BrowserRouter>
    <Navbaar />
  <Routes>
    <Route path='/' element={<Home /> }/>
    <Route path='/service' element={<Service /> }/>
    <Route path='/about' element={<About /> }/>
    <Route path='/contact' element={<Contact /> }/>
  </Routes>
  </BrowserRouter>

  
  
  </>
}

export default App
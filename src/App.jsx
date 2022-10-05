import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import NotFound from './pages/notFound/NotFound'
import Navbar from './components/Navbar'
import Projects from './pages/projects/Projects'
import Footer from './components/Footer'


const App = () => {
  
  return (
    <BrowserRouter>
      <Navbar/>      
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/' element={<Navigate to="/home"/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
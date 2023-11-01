import './App.scss'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './componets/layout/Index'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './componets/Home/Index';
import About from './componets/About/Index';
import Portfolio from './componets/works/Index';
import Contact from './componets/contact/Index';

function App() {
  
  return (
    <>
    
    <BrowserRouter>
    <Layout/>
    <Routes>
      <Route index element ={<Home/>}/>
      <Route path='/About'element={<About/>}/>
      <Route path= '/works' element={<Portfolio/>}/>
      <Route path='/contact' element={<Contact/>}/>
      
      

    </Routes> 
    
    </BrowserRouter>
    
  
  
    </>
  )
}

export default App

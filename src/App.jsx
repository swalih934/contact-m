import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home'
import { Route,Routes } from 'react-router-dom'
import View from './Pages/View'
import './App.css'
import './bootstrap.min.css'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Contacts from './Pages/Contacts'
function App() {

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/view' element={<View/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Contacts' element={<Contacts/>}/>

     </Routes>
     <Footer/>
    </>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

import Header from './components/Navigation/Header'
import Reservation from './components/Reservation'
import Footer from './components/Footer'
import Food from './pages/Food'
import Drink from './pages/Drink'
import Contact from './pages/Contact'



function App() {
  return (
    <>
      <Router>
        <div className='h-full max-w-full mx-auto overflow-hidden bg-repeat bg-pattern'>
          <Header />
          <Routes>
            <Route path='/' index exact element={<Home />}></Route>
            <Route path='/food' index exact element={<Food />}></Route>
            <Route path='/drink' index exact element={<Drink />}></Route>
            <Route path='/contact' index exact element={<Contact />}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App

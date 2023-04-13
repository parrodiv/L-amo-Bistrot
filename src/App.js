import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify'
import Header from './components/Navigation/Header'
import Footer from './components/Footer'
import Food from './pages/Food'
import Drink from './pages/Drink'
import { I18nextProvider } from 'react-i18next'
import Contact from './pages/Contact'
import SelectLang from './components/Layout/SelectLang'
import 'react-toastify/dist/ReactToastify.css'
import i18n from './i18n'

function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Router>
          <div className='h-full max-w-full mx-auto overflow-hidden bg-repeat bg-pattern'>
            <Header />
            <SelectLang />
            <Routes>
              <Route path='/' index exact element={<Home />}></Route>
              <Route path='/food' index exact element={<Food />}></Route>
              <Route path='/drink' index exact element={<Drink />}></Route>
              <Route path='/contact' index exact element={<Contact />}></Route>
            </Routes>
            <Footer />
          </div>
        </Router>
      </I18nextProvider>
      <ToastContainer autoClose={5000} />
    </>
  )
}

export default App

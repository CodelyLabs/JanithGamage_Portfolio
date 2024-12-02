import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './component/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chemistry from './component/Chemistry';
import Business from './component/Business';
import Aboutme from './component/Aboutme';

function App() {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Router>
          <Navbar />
          <div className='flex-1'>
          <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/class' element={<Chemistry/>}/>
             <Route path='/businesses' element={<Business/>} />
             <Route path='/aboutme' element={<Aboutme/>} />
          </Routes>
          </div>
        </Router>
      <Footer/>
      </div>
    </>
  )
}

export default App

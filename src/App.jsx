import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './component/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chemistry from './component/Chemistry';
import Business from './component/Business';
import Aboutme from './component/Aboutme';
import {PastPapers} from './component/PastPapers';
import { MarkingSchemes } from './component/MarkingSchemes';
import { Analysis } from './component/Analysis';
import {ResourceBooks} from  './component/Resource Books'
import { ClassifiedMCQ } from './component/ClassifiedMCQ'
import ContactMe from './component/ContactMe';
import Other from './component/Other';
function App() {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Router basename="/JanithGamage_Portfolio">
          <Navbar />
          <div className='flex-1'>
          <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/class' element={<Chemistry/>}/>
             <Route path='/businesses' element={<Business/>} />
             <Route path='/aboutme' element={<Aboutme/>} />
             <Route path='/pastpapers' element={<PastPapers/>} />
             <Route path='/markingschemes' element={<MarkingSchemes/>} />
             <Route path='/analysis' element={<Analysis/>} />
             <Route path='/resorcebooks' element={<ResourceBooks/>}/>
             <Route path='/classifiedmcq' element={<ClassifiedMCQ/>}/>
             <Route path='/contactme' element={<ContactMe/>}/>
             <Route path='/others' element={<Other/>}/>
          </Routes>
          </div>
        </Router>
      <Footer/>
      </div>
    </>
  )
}

export default App

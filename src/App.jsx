import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, useLocation} from 'react-router-dom'
import Loader from './components/Loader'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import GrowWithUs from './pages/GrowWithUs'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Careers from './pages/Careers'
import Team from './pages/Team'
import Support from './pages/Support'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndServices from './pages/TermsAndServices'
import ServicesSingle from './pages/ServicesSingle'
import GrowWithUsTC from './pages/GrowWithUsTC'

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {isLoading && <Loader />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/grow-with-us' element={<GrowWithUs />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/our-team' element={<Team />} />
        <Route path='/support' element={<Support />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-of-service' element={<TermsAndServices />} />
        <Route path='/services/:id' element={<ServicesSingle />} />
        <Route path='/grow-with-us-tc' element={<GrowWithUsTC />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App

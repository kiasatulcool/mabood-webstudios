import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Services from './Services'
import Portfolio from './Portfolio'
import Pricing from './Pricing'
import Contact from './Contact'
import Login from './Login'
import SignUp from './SignUp'
import PrivacyPolicy from './PrivacyPolicy'
import TermsOfService from './TermsOfService'
import { AuthProvider } from './AuthProvider'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  )
}

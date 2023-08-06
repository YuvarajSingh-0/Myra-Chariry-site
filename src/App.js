import { Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import PaymentPage from './pages/PaymentPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Support from './pages/Support';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/transactioned' element={<PaymentPage/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/terms-of-service' element={<TermsOfService/>}/>
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import PaymentPage from './pages/PaymentPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/transactioned' element={<PaymentPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

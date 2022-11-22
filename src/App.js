import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import MyCertificate from './components/MyCertificate';
import MyJob from './components/MyJob';
import MyOfferLetter from './components/MyOfferLetter';
import MyPayment from './components/MyPayment';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/myjob' element={< MyJob />}></Route>
        <Route exact path='/mypaymant' element={< MyPayment />}></Route>
        <Route exact path='/myoffertter' element={< MyOfferLetter />}></Route>
        <Route exact path='/mycertificate' element={< MyCertificate />}></Route>
      </Routes>
    </div>
  );
}

export default App;

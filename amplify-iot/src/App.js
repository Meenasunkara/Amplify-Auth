import { Route, Routes } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import SiteNav from './components/common/SiteNav';
import SiteFooter from './components/common/SiteFooter';

import Homepage from './components/home/Homepage';
import Loginpage from './components/auth/Loginpage';
import Register from './components/auth/Register';

function App() {
  return (
    <div >
      <SiteNav/>
      <Routes>
        <Route path="*" element={<Homepage/>}/>
        <Route path="/" exact={true} element={<Homepage/>}/>
        <Route path="/Login" element={<Loginpage/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes> 
      <SiteFooter/>
    </div>
  );
}

export default App;

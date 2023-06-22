import { Route, Routes } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import SiteNav from './components/common/SiteNav';
import SiteFooter from './components/common/SiteFooter';

import Homepage from './components/home/Homepage';
import Loginpage from './components/auth/Loginpage';
import Register from './components/auth/Register';
import Devicedetails from './components/Devices/Devicedetails';

// import { Amplify } from 'aws-amplify';
// import { Authenticator, View, Image, useTheme, Text  } from '@aws-amplify/ui-react';
// import awsExports from './aws-exports';


function App() {
  return (
    <div >
      <SiteNav/>
      <Routes>
        <Route path="*" element={<Homepage/>}/>
        <Route path="/" exact={true} element={<Homepage/>}/>
        <Route path="/Login" element={<Loginpage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/Devices" element={<Devicedetails/>}/>
      </Routes> 
      <SiteFooter/>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import SiteNav from './components/common/SiteNav';
import SiteFooter from './components/common/SiteFooter';

import Homepage from './components/home/Homepage';

import Devicedetails from './components/Devices/Devicedetails';

import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

function App() {
  return (
    <Authenticator loginMechanisms={'username'}>
      {({signOut, user}) => (
    <div >
      <SiteNav LogOut={signOut}/>
      <Routes>
        <Route path="*" element={<Homepage/>}/>
        <Route path="/" exact={true} element={<Homepage/>}/>
       
        <Route path="/Devices" element={<Devicedetails/>}/>
      </Routes> 
      <SiteFooter/>
    </div>
    )}
    </Authenticator>
  );

}

export default App;
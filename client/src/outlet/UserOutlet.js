import React from 'react';

import {Outlet} from 'react-router-dom';
import NavBar from '../Layout/NavBar/NavBar';
import Footer from '../Layout/Footer/Footer';
function UserOutlet() {
  return (

<>
<NavBar/>
      <Outlet/>
      {/* <Footer/> */}
</>  
      
  )
}

export default UserOutlet

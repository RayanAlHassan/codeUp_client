import React, { Component } from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../Pages/Home';
import NavBar from '../Layout/NavBar/NavBar';
import Footer from '../Layout/Footer/Footer';
import UserOutlet from '../outlet/UserOutlet';

export class AppRoute extends Component {
  static propTypes = {

  }

  render() {
    return (
     <Routes>
<Route path='/' element={<UserOutlet/>}>
        <Route path='/' element={<Home/>}></Route>
        </Route>
     </Routes>
    )
  }
}

export default AppRoute

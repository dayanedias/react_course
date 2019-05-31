import React from 'react'
import './App.css'
import { HashRouter } from 'react-router-dom'
//import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

//import Header from '../components/template/Header'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'
import Routes from './Routes'
import Logo from '../components/template/Logo';

export default props =>
    <HashRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </HashRouter>
import React from 'react'
import { ReactDOM } from 'react';
import '../App.css';
import Header from './Header';
import Section from './Section';
import Whoweare from './Whoweare';
import Intro from './Intro';
import FooterHome from './FooterHome';
// import Login from '../Login';
function Home() {
    return (<>
    <Header/>
    <Section/>
    <Whoweare/>
    <Intro/>
    <FooterHome/>
    {/* <Login/> */}
    </>);
}
export default Home;
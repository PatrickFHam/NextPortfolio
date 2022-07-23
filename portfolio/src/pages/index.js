import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import React, { useState } from 'react';
import {Card, Button, Container, Row, Col, Text} from '@nextui-org/react';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import Home from '../components/Home';
// import AboutMe from '../components/AboutMe';
// import Resume from '../components/Resume';
// import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function landing () {

  const [currentPage, setCurrentPage] = useState('Porfolio');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    /* if (currentPage === 'AboutMe') {
      return <AboutMe />;
    } */
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    /* if (currentPage === 'Contact') {
      return <Contact setCurrentPage={setCurrentPage} />;
    }
    if (currentPage === 'Resume') {
      return <Resume />
    } */
    return (<div></div>);
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
    <Head>
      <title>PFH - Full Stack Developer</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Container>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </Container>
    </div>
  )
};

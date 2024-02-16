import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header'
import { useState, useEffect } from 'react';
import GlobalStyles from './styles/Global';
 
const App = () => {



  return (
    <>
      <GlobalStyles />
        <Header />
    </>
  );
}

export default App;
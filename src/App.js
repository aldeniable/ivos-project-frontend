import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header'
import GlobalStyles from './styles/Global';
import TopStreams from './TopStreams';
const App = () => {

  return (
    <>
      <GlobalStyles />
        <Header />
        <Routes>
          <Route path = "/TopStreams" element = {<TopStreams />} /> 
        </Routes>
    </>
  );
}

export default App;
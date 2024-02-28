import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header'
import GlobalStyles from './styles/Global';
import TopStreams from './TopStreams';
import TopTrending from './TopTrending';
const App = () => {

  return (
    <>
      <GlobalStyles />
        <Header />
        <Routes>
          <Route path = "/TopStreams" element = {<TopStreams />} /> 
          <Route path = "/TopTrending" element = {<TopTrending />} /> 
        </Routes>
    </>
  );
}

export default App;
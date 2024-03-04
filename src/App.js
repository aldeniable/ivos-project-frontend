import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header'
import GlobalStyles from './styles/Global';
import TopStreams from './TopStreams';
import TopTrending from './TopTrending';
import ArtistAnalytics from './ArtistAnalytics';

const App = () => {

  return (
    <>
      <GlobalStyles />
        <Header />
        <Routes>
          <Route path = "/TopStreams" element = {<TopStreams />} /> 
          <Route path = "/TopTrending" element = {<TopTrending />} />
          <Route path = "/ArtistAnalytics" element = {<ArtistAnalytics />} />
        </Routes>
    </>
  );
}

export default App;
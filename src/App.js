import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';
import GlobalStyles from './styles/Global';
import TopStreams from './TopStreams';
import TopTrending from './TopTrending';
import ArtistAnalytics from './ArtistAnalytics';
import AboutTheCreator  from './AboutTheCreator';
import Signup from './Signup';

const App = () => {
  return (
    <>
      <GlobalStyles />
        <Header />
            <Routes>
              <Route path="/TopStreams" element={<TopStreams />} />
              <Route path="/TopTrending" element={<TopTrending />} />
              <Route path="/ArtistAnalytics" element={<ArtistAnalytics />} />
              <Route path ="/AboutTheCreator" element = {<AboutTheCreator/>}/>
              <Route path ="/Signup" element = {<Signup/>} />
            </Routes>

    </>
  );
}

export default App;
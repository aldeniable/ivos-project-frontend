import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Header from './Header';
import GlobalStyles from './styles/Global';
import TopStreams from './TopStreams';
import TopTrending from './TopTrending';
import ArtistAnalytics from './ArtistAnalytics';
import AboutTheCreator  from './AboutTheCreator';
import Signup from './Signup';
import Login from './Login';
import Posts from './Posts';
import Timeline from './Timeline';
import { Wrapper } from './styles/App.styled'
import UserProfile from './UserProfile';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header />
            <Routes>
              <Route path="/" element={<Navigate to="/TopStreams" replace />} />
              <Route path="/TopStreams" element={<TopStreams />} />
              <Route path="/TopTrending" element={<TopTrending />} />
              <Route path="/ArtistAnalytics" element={<ArtistAnalytics />} />
              <Route path ="/AboutTheCreator" element = {<AboutTheCreator/>}/>
              <Route path ="/Signup" element = {<Signup/>} />
              <Route path = "/Login" element = {<Login/>} />
              <Route path = "/Posts" element = {<Posts/>} />
              <Route path = "/Timeline" element = {<Timeline/>} />
              <Route path = "/UserProfile" element = {<UserProfile/>} />
            </Routes>
      </Wrapper>

    </>
  );
}

export default App;
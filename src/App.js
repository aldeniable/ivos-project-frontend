import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Singles from './Singles';
import Header from './Header'
import {useState, useEffect} from 'react';
import GlobalStyles from './styles/Global';
 
const App = () => {

  const [singles,setSingles] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/singles_stats/')
      .then(res => { return res.json(); })
      .then(data => { setSingles (data)});

//    .catch(error => console.error('Error fetching data: ', error));
  }, []
  );

  return (
    <>
      <GlobalStyles />
        <Header />
        <div>
          {singles && <Singles singles = {singles} /> }
        </div>
    </>
  );
}

export default App;

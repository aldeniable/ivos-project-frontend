import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Singles from './Singles';
import Header from './Header'
import SinglesFilter from './SinglesFilter'
import { useState, useEffect } from 'react';
import GlobalStyles from './styles/Global';
 
const App = () => {

  const [singles,setSingles] = useState([]);
  const [filterTxtValue, setfilterTxtValue] = useState('all');
  const filteredSingles = singles.filter((single) => {
      if(filterTxtValue === 'IV OF SPADES') {
        return single.artist_name === 'IV OF SPADES';
      } else if (filterTxtValue === 'Zild Benitez') {
        return single.artist_name === 'Zild Benitez';
      } else if (filterTxtValue === 'Unique Salonga') {
        return single.artist_name === 'Unique Salonga';
      } else if (filterTxtValue === 'Blaster Silonga') {
        return single.artist_name === 'Blaster Silonga';
      } else {
        return single;
      }

  })
  function onFilterSelected (filterValue)  {
    setfilterTxtValue(filterValue);
  }

  useEffect(() => {
    fetch('http://127.0.0.1:8000/singles_stats/')
      .then( res => { return res.json(); } )
      .then( data => { setSingles (data) } );
  }, []
  );

  return (
    <>
      <GlobalStyles />
        <Header />
        <div>
          <SinglesFilter filterSelected = {onFilterSelected}></SinglesFilter>
          {singles && <Singles singles = {filteredSingles} /> }
        </div>
    </>
  );
}

export default App;

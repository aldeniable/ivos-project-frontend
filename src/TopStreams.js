import React, { useState, useEffect} from 'react';
import { TopStreamsContainer, StyledTopStreams, List, Table, TableHeader, TableRow, TableCell} from './styles/TopStreams.styled';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header'
import TopStreamsFilter from './TopStreamsFilter'
import GlobalStyles from './styles/Global';


const TopStreams = () => {

  const [singles,setSingles] = useState([]);
  const [filterTxtValue, setfilterTxtValue] = useState('all');
  function onFilterSelected (filterValue)  {
    setfilterTxtValue(filterValue);
  }
  useEffect(() => {
    fetch('http://127.0.0.1:8000/singles_stats/')
      .then( res => { return res.json(); } )
      .then( data => { setSingles (data) } );
  }, []

  );
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
  });

  return (
    <>
    <TopStreamsFilter filterSelected = {onFilterSelected}></TopStreamsFilter>
    <TopStreamsContainer>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Title</TableHeader>
            <TableHeader>Streams</TableHeader>
            <TableHeader>Artist</TableHeader>
            <TableHeader>Album</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {filteredSingles.map((single) => (
            <TableRow key={single.singles_stats_id}>
              <TableCell>{single.title}</TableCell>
              <TableCell> {single.max_fetch_data_streams}</TableCell>
              <TableCell>{single.artist_name}</TableCell>
              <TableCell> {single.album_name}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TopStreamsContainer>
    </>
  );
}

export default TopStreams;
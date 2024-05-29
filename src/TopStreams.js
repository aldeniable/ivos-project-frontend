import React, { useState, useEffect} from 'react';
import { TopStreamsContainer, TopStreamsTitle, Table, TableHeader, TableRow, TableCell} from './styles/TopStreams.styled';
import TopStreamsFilter from './TopStreamsFilter'
import TopStreamsLogo from './images/topstreamslogo.png';
import SpotifyLogo from './images/spotify.png';
import ClapClapClap from './images/clapclapclap.jpg';
import Daisy from './images/daisy.jpg';
import Grandma from './images/grandma.jpg';
import HomeworkMachine from './images/homework.jpg';
import Huminga from './images/huminga.jpg';
import KosmikIslandDisk from './images/kosmik.jpg';
import Medisina from './images/medisina.jpg';
import Pangalan from './images/pangalan.jpg';
import NoAlbum from './images/orangeera.jpg';


const TopStreams = () => {

  const [singles,setSingles] = useState([]);
  const [filterTxtValue, setfilterTxtValue] = useState('all');

  function onFilterSelected (filterValue)  {
    setfilterTxtValue(filterValue);
  }

  const filteredSingles = singles.filter((single) => {
    if (filterTxtValue === 'IV OF SPADES') {
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

  const getAlbumImage = (album) => {
    switch (album) {
      case 'CLAPCLAPCLAP!':
        return ClapClapClap;
      case 'Grandma':
        return Grandma;
      case 'Pangalan:':
        return Pangalan;
      case 'Homework Machine':
        return HomeworkMachine;
      case 'Huminga':
        return Huminga;
      case 'Medisina':
        return Medisina;
      case 'Kosmik Island Disk':
        return KosmikIslandDisk;
      case 'Daisy': 
        return Daisy;
      default:
        return NoAlbum;
    }
  }

  useEffect(() => {
    fetch('http://127.0.0.1:8000/topStreams/')
      .then( res => { return res.json(); } )
      .then( data => { setSingles (data) } );
  }, [] );

  return (
    <>
      <TopStreamsContainer>
        <TopStreamsTitle>
          <img src = {TopStreamsLogo} alt = "" />
          <h1> Top streamed tracks </h1>
        </TopStreamsTitle>
        <TopStreamsFilter filterSelected = {onFilterSelected}></TopStreamsFilter>
          <Table>
            <thead>
              <TableRow>
                <TableHeader> </TableHeader>
                <TableHeader> Title </TableHeader>
                <TableHeader> Streams <img src = {SpotifyLogo} alt = "" /></TableHeader>
                <TableHeader> Artist </TableHeader>
                <TableHeader> Album </TableHeader>
              </TableRow>
            </thead>
            <tbody>
              {filteredSingles.map((single, index) => (
                <TableRow key={single.singles_stats_id} isTopTen={index < 10}>
                  <TableCell><indexcell> {index + 1} </indexcell></TableCell>
                  <TableCell><img src = {getAlbumImage(single.album_name)} alt=""/> {single.title} </TableCell>
                  <TableCell> {single.max_fetch_data_streams.toLocaleString()}</TableCell>
                  <TableCell> {single.artist_name}</TableCell>
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
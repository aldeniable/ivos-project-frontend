import React, { useState, useEffect} from 'react';
import { TopStreamsContainer, TopStreamsTitle, Table, TableHeader, TableRow, TableCell} from './styles/TopStreams.styled';
import TopStreamsFilter from './TopStreamsFilter'
import TopTrendingLogo from './images/trending.webp'
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

const TopTrending = () => {

  const [singles,setSingles] = useState([]);
  const [trendingdates,setTrendingDates] = useState([]);
  const [filterTxtValue, setfilterTxtValue] = useState('all');

  function onFilterSelected (filterValue)  {
    setfilterTxtValue(filterValue);
  }

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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'long', day: 'numeric', year: 'numeric'};
    return date.toLocaleDateString('en-US', options);
  };

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
    const fetchData = async () => {
      try {
        const [dataDates, dataSingles] = await Promise.all([
          fetch('http://127.0.0.1:8000/topTrendingDates/').then(res => res.json()),
          fetch('http://127.0.0.1:8000/topTrending/').then(res => res.json())
        ]);
        setTrendingDates(dataDates);
        setSingles(dataSingles);
      } catch (error) { }
    };
    fetchData();
  }, []);

  return (
    <>
      <TopStreamsContainer>
        <TopStreamsTitle>
          <img src = {TopTrendingLogo} alt = "" />
          <h1>
          Trending ({formatDate(trendingdates[1]?.fetch_dates)} to {formatDate(trendingdates[0]?.fetch_dates)})
          </h1>
        </TopStreamsTitle>
        <TopStreamsFilter filterSelected = {onFilterSelected} ></TopStreamsFilter>
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
                <TableCell><plusstreams> + {single.difference_streams.toLocaleString()} </plusstreams></TableCell>
                <TableCell> {single.artist_name} </TableCell>
                <TableCell> {single.album_name} </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TopStreamsContainer>
    </>
  );
}

export default TopTrending;
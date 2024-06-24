import React, { useState, useEffect} from 'react';
import { Modal, ArtistAnalyticsContainer, ArtistAnalyticsTitle, Table, TableHeader, TableRow, TableCell} from './styles/ArtistAnalytics.styled..js';
import ivofspades from './images/ivofspades.jpg';
import uniquesalonga from './images/uniquesalonga.jpg';
import zildbenitez from './images/zildbenitez.jpg';
import blastersilonga from './images/blastersilonga.jpg';
import artistlogo from './images/artist.png';
import sortlogo from './images/sort.png';
import infologo from './images/INFO.png';

const ArtistAnalytics = () => {

  const [artist, setArtists] = useState([]);
  const [order, setOrder] = useState("asc");
  const [clickedColumn, setClickedColumn] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  }

  const handleLeave = () => {
    setIsHovered(false);
  }

  const sorting = (col) => {
    if(order === "asc"){
      const sorted = [...artist].sort((a,b) =>
        a[col] > b[col] ? 1 : -1
      );
      setArtists(sorted);
      setOrder("dsc");
      setClickedColumn(col);
    }
    if(order==="dsc"){
      const sorted = [...artist].sort((a,b) =>
        a[col] < b[col] ? 1 : -1
      );
      setArtists(sorted);
      setOrder("asc");
      setClickedColumn(col);
    }
  }

  const getArtistImage = (album) => {
    switch (album) {
      case 'Zild Benitez':
        return zildbenitez;
      case 'Unique Salonga':
        return uniquesalonga;
      case 'IV OF SPADES':
        return ivofspades;
      case 'Blaster Silonga':
        return blastersilonga;
      default:
        return null;
    }
  }

  useEffect(() => {
    fetch('https://ivos-app-api.onrender.com/artistAnalytics/')
      .then( res => { return res.json(); } )
      .then( data => { setArtists (data) } );
  }, []
  );

  return (
    <>
      <ArtistAnalyticsContainer>
        <ArtistAnalyticsTitle>
          <img src = {artistlogo} alt = ""/>
          <h1> Artist Analytics </h1>
        </ArtistAnalyticsTitle>
        <Table>
          <thead>
            <TableRow>
              <TableHeader> </TableHeader>
              <TableHeader> </TableHeader>
              <TableHeader onMouseEnter={handleHover} onMouseLeave = {handleLeave} onClick = {() => sorting("consistent_fans_score")} sorted = {clickedColumn === "consistent_fans_score"}> Stream Consistency <img src = {sortlogo} alt = "" />   
              {isHovered && (
                <Modal>
                  <text>
                    To rank artists based on the stream consistency of their tracks, coefficient of variation was the statistical property used to measure the dispersion.
                  </text>
                </Modal>
                )}
              </TableHeader>
              <TableHeader onClick = {() => sorting("total_streams")} sorted = {clickedColumn === "total_streams"}> Total Streams  <img src = {sortlogo} alt = "" /></TableHeader>
              <TableHeader onClick = {() => sorting("song_count")} sorted = {clickedColumn === "song_count"}> Song count  <img src = {sortlogo} alt = "" /></TableHeader>
              <TableHeader><smol> 1-million streams </smol></TableHeader>
              <TableHeader><smol> 10-million streams </smol></TableHeader>
              <TableHeader><smol> 50-million streams </smol></TableHeader>
              <TableHeader><smol> 100-million streams </smol></TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {artist.map((artist, index) => (
              <TableRow key={artist.artist_id}>
                <TableCell><indexcell></indexcell></TableCell>
                <TableCell><div><img src = {getArtistImage(artist.artist_name)} alt=""/> <div> {artist.artist_name} </div></div></TableCell>
                <TableCell><indexcell> # {artist.consistent_fans_score}</indexcell> </TableCell>
                <TableCell> {artist.total_streams.toLocaleString()} </TableCell>
                <TableCell> {artist.song_count} </TableCell>
                <TableCell> {artist.onemil} tracks</TableCell>
                <TableCell> {artist.tenmil} tracks</TableCell>
                <TableCell> {artist.fiftymil} tracks</TableCell>
                <TableCell> {artist.hundredmil} tracks</TableCell>
             </TableRow>
            ))}
          </tbody>
        </Table>
      </ArtistAnalyticsContainer>
    </>
  );
}

export default ArtistAnalytics;
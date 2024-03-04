import React, { useState, useEffect} from 'react';
import { TopStreamsContainer, TopStreamsTitle, StyledTopStreams, List, Table, TableHeader, TableRow, TableCell} from './styles/ArtistAnalytics.styled..js';
import ivofspades from './images/ivofspades.jpg';
import uniquesalonga from './images/uniquesalonga.jpg';
import zildbenitez from './images/zildbenitez.jpg';
import blastersilonga from './images/blastersilonga.jpg';
import artistlogo from './images/artist.png';


const ArtistAnalytics = () => {

  const [artist,setArtists] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/artistAnalytics/')
      .then( res => { return res.json(); } )
      .then( data => { setArtists (data) } );
  }, []

  );

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

  return (
    <>
    <TopStreamsContainer>
    <TopStreamsTitle>
    <img src = {artistlogo} alt = "" />
    <h1>Artist Analytics</h1>
    </TopStreamsTitle>
      <Table>
        <thead>
          <TableRow>
            <TableHeader> </TableHeader>
            <TableHeader> </TableHeader>
            <TableHeader>STREAM CONSISTENCY</TableHeader>
            <TableHeader>TOTAL STREAMS</TableHeader>
            <TableHeader>TOTAL TRACKS</TableHeader>
            <TableHeader><smol>1-MILLION MARK</smol></TableHeader>
            <TableHeader><smol>10-MILLION MARK</smol></TableHeader>
            <TableHeader><smol>50-MILLION MARK</smol></TableHeader>
            <TableHeader><smol>100-MILLION MARK</smol></TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {artist.map((artist, index) => (
            <TableRow key={artist.artist_id}>
              <TableCell><indexcell>{index + 1}</indexcell></TableCell>
              <TableCell> <div><img src = {getArtistImage(artist.artist_name)} alt=""/> <div>{artist.artist_name}</div></div></TableCell>
              <TableCell> Rank {artist.consistent_fans_score}</TableCell>
              <TableCell>{artist.total_streams.toLocaleString()}</TableCell>
              <TableCell> {artist.song_count}</TableCell>
              <TableCell> {artist.onemil} tracks</TableCell>
              <TableCell> {artist.tenmil} tracks</TableCell>
              <TableCell> {artist.fiftymil} tracks</TableCell>
              <TableCell> {artist.hundredmil} tracks</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TopStreamsContainer>
    </>
  );
}

export default ArtistAnalytics;
import React, { useState, useEffect} from 'react';
import { StyledSingles, Container } from './styles/Singles.styled';

const Singles = ({singles}) => {


  return (
    <Container>
      
      {singles.map((single) => (
    
        <StyledSingles key={single.singles_stats_id}>
          <p>{single.title}</p>
          <p>Streams: {single.max_fetch_data_streams}</p>
          <p>Artist: {single.artist_name}</p>
          <p>Album: {single.album_name}</p>
          </StyledSingles>
          
      ))}
      
    </Container>
  );
}

export default Singles;
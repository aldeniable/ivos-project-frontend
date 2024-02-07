import React, { useState, useEffect} from 'react';
import { SinglesContainer, StyledSingles, List } from './styles/Singles.styled';

const Singles = ({singles}) => {


  return (
    <>
    <SinglesContainer>
    <List>
      
      {singles.map((single) => (
    
        <StyledSingles key={single.singles_stats_id}>
          <p>{single.title}</p>
          <p>Streams: {single.max_fetch_data_streams}</p>
          <p>Artist: {single.artist_name}</p>
          <p>Album: {single.album_name}</p>
          </StyledSingles>
          
      ))}
    </List>
    <h1>TOP SONGS PER ARTIST</h1>
    </SinglesContainer>
    </>
  );
}

export default Singles;
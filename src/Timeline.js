import React, { useState, useEffect} from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Groups3Icon from '@mui/icons-material/Groups3';


const Timeline = () => {

  const [timelines, setTimelines] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/timeline/')
      .then( res => { return res.json(); } )
      .then( data => { setTimelines (data) } );
  }, []
  );


  return (
    <div>
      <VerticalTimeline lineColor = '#000'>
          {timelines.map((timeline) => (
            <VerticalTimelineElement icon = {<Groups3Icon />} date = {timeline.date}>
              <h3>{timeline.title}</h3>
              <p>{timeline.deets}</p>
            </VerticalTimelineElement>
          ))}
      </VerticalTimeline>
    </div>

  );
}

export default Timeline;
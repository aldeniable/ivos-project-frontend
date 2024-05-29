import React, { useState, useEffect} from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Groups3Icon from '@mui/icons-material/Groups3';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {

  const [timelines, setTimelines] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/timeline/')
      .then( res => { return res.json(); } )
      .then( data => { setTimelines (data) } );
  }, [] );

  return (
    <div>
      <VerticalTimeline lineColor = '#ffa500'>
          {timelines.map((timeline) => (
            <VerticalTimelineElement
              icon = {<Groups3Icon />}
              date = {timeline.date}
              contentStyle={{ background: '#ffa500', color: '#000000' }}
              contentArrowStyle={{ borderRight: '7px solid  #ffa500' }}
              iconStyle={{ background: '#ffa500', color: '#000000' }}
            >
              <h3 className="vertical-timeline-element-title"> {timeline.title} </h3>
              <p className="vertical-timeline-element-subtitle"> {timeline.deets} </p>
            </VerticalTimelineElement>
          ))}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
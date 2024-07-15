import React, { useState, useEffect} from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import DateRangeIcon from '@mui/icons-material/DateRange';
import 'react-vertical-timeline-component/style.min.css';
import { ClipLoader } from 'react-spinners';

const Timeline = () => {

  const [timelines, setTimelines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://ivos-app-api.onrender.com/timeline/')
      .then( res => { return res.json(); } )
      .then( data => { setTimelines (data); setLoading(false); } );
  }, [] );

  return (
    <>
      { loading ?
        (
          <div className = "loading-spinner">
            <ClipLoader size = {50} color = {"#123abc"} loading = {loading} />
          </div>
        )
        :
        (
          <VerticalTimeline lineColor = '#F0E68C'>
            {timelines.map((timeline) => (
              <VerticalTimelineElement
                icon = {<DateRangeIcon />}
                date = {timeline.date}
                contentStyle={{ background: '#FFD700', color: '#000000' }}
                contentArrowStyle={{ borderRight: '7px solid  #FFD700' }}
                iconStyle={{ background: '#8FBC8F', color: '#000000' }}
              >
                <h3 className="vertical-timeline-element-title"> {timeline.title} </h3>
                <p className="vertical-timeline-element-subtitle"> {timeline.deets} </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        )
      }
    </>
  );
}

export default Timeline;

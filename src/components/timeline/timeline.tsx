import iconImage from "../../assets/general/Logo_small.png"
import trips from "../../data/trips";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "./timeline.scss"

const Timeline = () => {
  return (
    <div className="Timeline-wrapper">
      <VerticalTimeline>
        {trips.map((trip) => 
          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(8,31,27)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2011 - present"
          iconStyle={{ background: 'rgb(16,61,54)', color: '#fff' }}
          icon={
            <img 
              src={iconImage} 
              alt="Small logo image"
              className="Timeline-logo"
            />
          }>
            <h3 className="vertical-timeline-element-title">{trip.country}</h3>
            <h4 className="vertical-timeline-element-subtitle">{trip.description}</h4>
            <p>
              {trip.description}
            </p>
          </VerticalTimelineElement>
        )}
      </VerticalTimeline>
    </div>
  )
}

export default Timeline;
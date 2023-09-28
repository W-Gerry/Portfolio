import trips from "../../data/trips";
import { toShortWrittenDate } from "../../util/DateConversion";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "./timeline.scss"


interface TimelineProps {
  isVisible: boolean;
}

const Timeline = ({ isVisible } : TimelineProps) => {
  return (
    <div className={`Timeline-wrapper ${isVisible && `Timeline-visible`}`}>
      <VerticalTimeline>
        {trips.map((trip) => 
          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(8,31,27)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
          date={`${toShortWrittenDate(trip.startDate)} - ${toShortWrittenDate(trip.endDate)}`}
          iconStyle={{ 
            background: 'rgb(16,61,54)', 
            color: '#fff',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            objectFit: "contain",
            overflow: "hidden",
          }}
          icon={
            <img 
              src={trip.iconImage} 
              alt="Small logo image"
              className="Timeline-logo"
            />
          }
          // iconOnClick={ Function }
          >
            <h3 className="vertical-timeline-element-title">{trip.country}</h3>
            <h4 className="vertical-timeline-element-subtitle">{trip.title}</h4>
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
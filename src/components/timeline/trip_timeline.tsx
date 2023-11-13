import "react-vertical-timeline-component/style.min.css";
import "./trip_timeline.scss";

import { disableBodyScroll } from 'body-scroll-lock';
import { toShortWrittenDate } from "../../util/DateConversion";
import trips from "../../data/trips";
import Trip from "../../models/Trip";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

interface TimelineProps {
  isVisible: boolean;
  openModalAction: (trip : Trip) => void;
}

const TripTimeline = ({ isVisible, openModalAction } : TimelineProps) => {

  return (
    <div className={`Timeline-wrapper ${isVisible && `Timeline-visible`}`}>
      <VerticalTimeline>
        {trips.map((trip) => 
          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(8,31,27)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
          date={`${toShortWrittenDate(trip.startDate)} - ${toShortWrittenDate(trip.endDate)} ${trip.year}`}
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
          >
            <div className="Open-modal-container" 
              onClick={() => 
                {
                  openModalAction(trip)
                  disableBodyScroll
                }}>
              <h3 className="vertical-timeline-element-title">{trip.country}</h3>
              <h4 className="vertical-timeline-element-subtitle">{trip.title}</h4>
            </div>
            <p>
              {trip.description}
            </p>
          </VerticalTimelineElement>
        )}
      </VerticalTimeline>
    </div>    
  )
}

export default TripTimeline;
import Trip from "../models/Trip.ts";
import { cornwall23Images, costarica22Images, croatia19Images, switzerland18Images } from "./tripsimages.tsx";
import iconCornwall from "/images/tripicons/cornwall.svg"
import iconCostaRica from "/images/tripicons/costa_rica.svg"
import iconCroatia from "/images/tripicons/croatia.svg"
import iconSwitzerland from "/images/tripicons/switzerland.svg"

// Add new trips to top of list
const trips: Trip[] = [
  {
    title: "Bude",
    country: "Cornwall",
    year: "2022",
    startDate: "2021-08-28 00:00:00",
    endDate: "2021-09-26 00:00:00",
    description: "Quick trip back to the West Country to see family and friends",
    iconImage: iconCornwall,
    images: cornwall23Images,
  },
  {
    title: "Operation Raleigh",
    country: "Costa Rica",
    year: "2022",
    startDate: "2022-01-28 00:00:00",
    endDate: "2022-05-05 00:00:00",
    description: "A truly amazing experience as a Volunteer Manager working in some beautiful (and incredibly remote) parts of Costa Rica",
    iconImage: iconCostaRica,
    images: costarica22Images,
  },
  {
    title: "Rab",
    country: "Croatia",
    year: "2019",
    startDate: "2019-07-14 00:00:00",
    endDate: "2019-07-28 00:00:00",
    description: "Two weeks well-deserved relaxation on the beach",
    iconImage: iconCroatia,
    images: croatia19Images,
  },
  {
    title: "Lausanne",
    country: "Switzerland",
    year: "2018",
    startDate: "2018-01-04 00:00:00",
    endDate: "2018-12-30 00:00:00",
    description: "Lived and worked in Switzerland for a year",
    iconImage: iconSwitzerland,
    images: switzerland18Images,
  },
]

export default trips;
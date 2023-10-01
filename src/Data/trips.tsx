import Trip from "../models/Trip.ts";

import iconCostaRica from "../assets/trips/costa_rica.svg"

// Add new trips to top of list
const trips: Trip[] = [
  {
    title: "Operation Raleigh",
    country: "Costa Rica",
    startDate: "2022-01-28 00:00:00",
    endDate: "2022-05-05 00:00:00",
    description: "Placeholder",
    iconImage: iconCostaRica,
    images: [],
  },
  {
    title: "Europe Beach Time",
    country: "Croatia",
    startDate: "2019-07-14 00:00:00",
    endDate: "2019-07-28 00:00:00",
    description: "Placeholder",
    iconImage: "../assets/trips/croatia.svg",
    images: [],
  },
  {
    title: "Operation Raleigh",
    country: "Costa Rica",
    startDate: "2022-01-28 00:00:00",
    endDate: "2022-05-05 00:00:00",
    description: "Placeholder",
    iconImage: "../assets/trips/costa_rica.svg",
    images: [],
  },
  {
    title: "Operation Raleigh",
    country: "Costa Rica",
    startDate: "2022-01-28 00:00:00",
    endDate: "2022-05-05 00:00:00",
    description: "Placeholder",
    iconImage: "../assets/trips/costa_rica.svg",
    images: [],
  },
]

export default trips;
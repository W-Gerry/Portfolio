import Trip from "../models/Trip.ts";

import iconCostaRica from "../assets/trips/costa_rica.svg"
import iconCroatia from "../assets/trips/croatia.svg"
import iconSwitzerland from "../assets/trips/switzerland.svg"
import iconCornwall from "../assets/trips/cornwall.svg"

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
    title: "Bude",
    country: "Cornwall",
    startDate: "2021-08-28 00:00:00",
    endDate: "2021-09-26 00:00:00",
    description: "Placeholder",
    iconImage: iconCornwall,
    images: [],
  },
  {
    title: "Rab",
    country: "Croatia",
    startDate: "2019-07-14 00:00:00",
    endDate: "2019-07-28 00:00:00",
    description: "Placeholder",
    iconImage: iconCroatia,
    images: [],
  },
  {
    title: "Lausanne",
    country: "Switzerland",
    startDate: "2018-01-04 00:00:00",
    endDate: "2018-09-30 00:00:00",
    description: "Placeholder",
    iconImage: iconSwitzerland,
    images: [],
  },
  {
    title: "Bude",
    country: "Cornwall",
    startDate: "2022-01-28 00:00:00",
    endDate: "2022-05-05 00:00:00",
    description: "Placeholder",
    iconImage: iconCornwall,
    images: [],
  },
]

export default trips;
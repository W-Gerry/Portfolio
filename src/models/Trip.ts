interface Trip {
  title?: string;
  country: string;
  year: string;
  startDate: string;
  endDate: string;
  description: string;
  iconImage: string;
  images: {
    image: string,
    title: string,
    text: string
  }[];
}

export default Trip
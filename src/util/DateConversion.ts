import { format } from 'date-fns';

export const toShortNumberDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

export const toShortWrittenDate = (dateString: string) => {
  const date = new Date(dateString);
  return format(date, "dd MMM");
};
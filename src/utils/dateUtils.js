import { getYear, format, getDaysInMonth } from 'date-fns';

export default {
  getThisYear() {
    return getYear(new Date());
  },

  getThisMonth() {
    return format(new Date(), 'LLL');
  },

  getDaysInThisMonth() {
    return getDaysInMonth(new Date());
  },
};

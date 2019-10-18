import { dateUtils } from '../../../../../../utils';

export const helperLabels = (index) => {
  switch (index) {
    case 0:
      return ['4AM', '8AM', '12PM', '4PM', '8PM', '12AM'];
    case 1:
      return ['Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed'];
    case 2:
      return [
        `${dateUtils.getThisMonth()} 1`,
        `${dateUtils.getThisMonth()} 7`,
        `${dateUtils.getThisMonth()} 13`,
        `${dateUtils.getThisMonth()} 19`,
        `${dateUtils.getThisMonth()} 25`,
        `${dateUtils.getThisMonth()} ${dateUtils.getDaysInThisMonth()}`,
      ];
    case 3:
      return [
        `Jan ${dateUtils.getThisYear()}`,
        `Mar ${dateUtils.getThisYear()}`,
        `June ${dateUtils.getThisYear()}`,
        `Sept ${dateUtils.getThisYear()}`,
        `Dec ${dateUtils.getThisYear()}`,
      ];
    case 4:
      return [
        'Sept 2017',
        'Feb 2018',
        'Aug 2018',
        'Mar 2019',
        'Dec 2019',
      ];
    default:
      return [];
  }
};

export const helperData = (dataObject, index) => {
  switch (index) {
    case 0:
      return dataObject['24h'];
    case 1:
      return dataObject.week;
    case 2:
      return dataObject.month;
    case 3:
      return dataObject.year;
    case 4:
      return dataObject.allTime;
    default:
      return [];
  }
};

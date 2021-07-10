/* HELPERS */
/**
 * @author  David Metcalf github.com/gloriousLoaf
 * @desc    I love writing helper funcs
 * @param   null Pass in something ugly...
 * @returns ...something pretty :D
 */

/**
 * @desc    Format date to Month-Day-Year
 * @param   timestamp from db, W3C ISO format
 * @return  String
 *
 * @example
 * // returns '03-08-2021'
 * dateFix(blogpost.createdAt)
 */
export const dateFix = (date) => {
  // example: from ISO to '2021-12-31'
  const yearMonthDay = date.substring(0, 10).split('-');
  // from '2021-12-31' to '12-31-2021'
  const formattedDate = `${yearMonthDay[1]}-${yearMonthDay[2]}-${yearMonthDay[0]}`;
  return formattedDate;
};

/**
 * @desc    Format date to 'Month name, Year'
 * @param   timestamp from db, W3C ISO format
 * @return  String
 *
 * @example
 * // returns 'July, 2021'
 * joinedAt(userInfo.createdAt)
 */
export const joinedDate = (date) => {
  // example: from ISO to '2021-12-31'
  const yearMonthDay = date.substring(0, 10).split('-');
  // grabbing just the month
  let monthNum = yearMonthDay[1];

  // splitting off the leading '0' in month, if it exists
  if (monthNum[0] === '0') {
    monthNum = monthNum.substring(1);
  }

  const monthArr = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  let monthString;

  // if monthNum matches idx + 1, set that index's value for monthString
  monthArr.forEach((month, idx) => {
    if (idx + 1 === Number(monthNum)) {
      monthString = month;
    }
  });

  return `${monthString}, ${yearMonthDay[0]}`;
};

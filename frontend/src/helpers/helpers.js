/* HELPERS */

/**
 * @desc    Format date to Month-Day-Year
 * @param   timestamp from db
 * @return  String
 *
 * @example
 * // returns '03-08-2021'
 * dateFix(order.paidAt)
 */
export const dateFix = (date) => {
  const yearMonthDay = date.substring(0, 10).split('-');
  const formattedDate = `${yearMonthDay[1]}-${yearMonthDay[2]}-${yearMonthDay[0]}`;
  return formattedDate;
};

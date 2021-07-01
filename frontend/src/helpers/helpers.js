/* HELPERS */
/**
 * @author  David Metcalf github.com/gloriousLoaf
 * @desc    I love writing helper funcs
 * @param   null Pass in something ugly...
 * @returns ...something pretty :D
 */

/**
 * @desc    Format date to Month-Day-Year
 * @param   timestamp from db
 * @return  String
 *
 * @example
 * // returns '03-08-2021'
 * dateFix(blogpost.createdAt)
 */
export const dateFix = (date) => {
  const yearMonthDay = date.substring(0, 10).split('-');
  const formattedDate = `${yearMonthDay[1]}-${yearMonthDay[2]}-${yearMonthDay[0]}`;
  return formattedDate;
};

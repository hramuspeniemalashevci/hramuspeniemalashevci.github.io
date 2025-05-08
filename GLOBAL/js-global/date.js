const monthsArr = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const monthsBgNames = [
  'януари',
  'февруари',
  'март',
  'април',
  'май',
  'юни',
  'юли',
  'август',
  'септември',
  'октомври',
  'ноември',
  'декември',
];
const weekDayNamesObj = {
  пон: 'понеделник',
  вт: 'вторник',
  ср: 'сряда',
  чет: 'четвъртък',
  пет: 'петък',
  съб: 'събота',
  нед: 'неделя',
};

// Date variables
const d = new Date();
const currYear = d.getFullYear();
const currMonthIndex = d.getMonth();
const currMonthEngName = monthsArr[currMonthIndex];
const currDate = d.getDate();

// Functions
export function getDateAsText() {
  const dateAsString = `${currDate} ${monthsBgNames[currMonthIndex]} ${currYear} г.`;

  console.log(dateAsString);

  return dateAsString;
}
// Requests
export async function getCalendarRequest(year) {
  try {
    const res = await fetch(`/site/calendar/data/${year}.json`);
    const calendar = await res.json();

    return calendar;
  } catch (err) {
    console.dir(err);
    return null;
  }
}

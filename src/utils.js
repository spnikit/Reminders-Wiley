export function filterList({ list, selectedFilter }) {
  if (selectedFilter === "all" || list.length < 1) {
    return list;
  }

  let numberOfDays;

  switch (selectedFilter) {
    case "2day": {
      numberOfDays = 2;
      break;
    }

    case "1week": {
      numberOfDays = 7;
      break;
    }

    case "30days": {
      numberOfDays = 30;
      break;
    }

    default:
      numberOfDays = 0;
      break;
  }

  const result = list.filter((reminder) => {
    const todaysDate = new Date().toISOString().substr(0, 10);
    const todayTime = new Date(todaysDate).getTime();
    const dueTime = new Date(reminder.dueDate).getTime();
    return dueTime < todayTime + numberOfDays * 86400_000;
  });

  return result;
}

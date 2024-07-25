export const checkDateDifference = (newStartDate, endDate) => {
  const differenceInTime = endDate.getTime() - newStartDate.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  return differenceInDays >= 30 && differenceInDays <= 50;
};

const calculatePercent = (debit, credit) => {
  const percent = (debit + credit) * 0.01
  return [debit / percent, credit / percent]
}

const getTimeFrame = (start, end) => {
  return [start._d.getTime(), end._d.getTime()]
}


export {
  calculatePercent,
  getTimeFrame
};
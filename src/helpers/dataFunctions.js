export const ordersToHighChart = (data, filter) => {
  const month = data;
  const dataArray = [];
  month.forEach((datum) => {
    dataArray.push([datum.date, datum[`${filter}`]])
  })

  return [{ name: 'total', data: dataArray }]
}

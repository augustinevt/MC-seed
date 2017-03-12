export const ordersToHighChart = (data, filter) => {
  const month = data;
  const dataArray = [];
  month.forEach((datum) => {
    dataArray.push([datum.date, datum[`${filter}`]])
  })

  return [{ name: 'total', data: dataArray }]
}

export const ordersToChartJS = (data, filter) => {
  const sortArray = [];
  data.forEach((datum) => {
    sortArray.push(parseInt(datum.date, 10));
  })

  const sorted = sortArray.sort();
  const returnArray = [];
  data.forEach((datum, i) => {
    const scaleValue = Math.random(2, 6);
    const date = sorted[i];
    returnArray.push( {x: date, y: scaleValue })
  })

  return returnArray;
}

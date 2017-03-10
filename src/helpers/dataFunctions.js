const transformToArray = (data) => {
  const returnArray = [];
  data.forEach((datum) => {
    const {point, doint} = datum[0];
    const sum = point + doint;
    returnArray.push([sum]);
  })
  console.log(returnArray)
  return returnArray;
}

export default transformToArray;

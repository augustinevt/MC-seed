import { createSelector } from 'reselect'

const getFilters = (state) => state.filters
const getUpdateList = (state) => state.updateList;
const getOrderData = (state) => state.orders;

export const getHistoricalOrders = createSelector(
  [getFilters, getUpdateList, getOrderData ],
  (filters, updateList, orderData) => {


    console.log('hello from selector', filters, updateList, orderData)
    const sortArray = [];
    orderData.forEach((datum) => {
      sortArray.push(parseInt(datum.date, 10));
    })

    const sorted = sortArray.sort();
    const returnArray = [];
    orderData.forEach((datum, i) => {
      if ( (i % 30) === 0) {
        const scaleValue = Math.floor((Math.random() * 5) + 1) ;
        const date = sorted[i];
        returnArray.push( {x: date, y: scaleValue})
      }
    })

    return returnArray;

  }
)

import { createSelector } from 'reselect'

const getFilters = (state) => state.filters
const getOrderData = (state) => state.orders;

export const getHistoricalOrders = createSelector(
  [getFilters, getOrderData],
  (filters, orderData) => {

    console.log('hello from selector', filters, orderData)
    const sortArray = [];
    console.log("SELECTOR", filters)
    const value = filters || 100;
    console.log("VALUE", value)
    orderData.forEach((datum) => {
      sortArray.push(parseInt(datum.date, 10));
    })

    const sorted = sortArray.sort();
    const returnArray = [];
    orderData.forEach((datum, i) => {
      if ( (i % value ) === 0) {
        const scaleValue = Math.floor((Math.random() * 5) + 1) ;
        const date = sorted[i];
        returnArray.push( {x: date, y: scaleValue})
      }
    })

    console.log('Return Array', returnArray)
    return returnArray;

  }
)

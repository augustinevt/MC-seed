import { createSelector } from 'reselect'

const getDataFilters = (state) => state.filters;
const updateList = (state) => state.updateList;

//orderFilters = { seller: 'foo', category: 'foo', thing }

export const getVisibleTodos = createSelector(
  [ getDataFilters, updateList ],
  (filters, updateList) => {
    switch (filters) {
      case 'SHOW_ALL':
        return todos
      case 'SET_CATEGORY':
        return todos.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
    }
  }
)

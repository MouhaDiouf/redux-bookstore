import { CHANGE_FILTER } from '../actions/index';

const defaultState = {
  filter: 'All',
};

const filterReducer = (state = defaultState, action) => {
  if (action.type === CHANGE_FILTER) {
    if (action.filter === 'All') {
      return {
        ...action.state,
        books: action.state.books,
        filter: action.filter,
      };
    }
    return {
      ...action.state,
      books: action.state.books.filter(book => book.category === action.filter),
      filter: action.filter,
    };
  }

  return state;
};

export default filterReducer;

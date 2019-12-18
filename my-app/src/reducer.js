function movieApp(state = { movies: [] }, action) {
  switch (action.type) {
    case 'searchResults':
      return { ...state, movies: action.movies };
    case 'searchBy':
      return { ...state, searchBy: action.searchBy };
    case 'sortBy':
      return { ...state, sortBy: action.sortBy };
    default:
      return state;
  }
}

export default movieApp;

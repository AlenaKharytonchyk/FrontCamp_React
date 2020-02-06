export function searchResults(data) {
  return {
    type: 'searchResults',
    movies: data,
  };
}

export function searchResultsBy(searchBy) {
  return {
    type: 'searchBy', searchBy,
  };
}

export function sortResultsBy(sortBy) {
  return {
    type: 'sortBy',
    sortBy,
  };
}

export function getMovie(movie) {
  return {
    type: 'getMovie',
    movie,
  };
}

export function getCommonMovies(data) {
  return {
    type: 'getCommonMovies',
    commonMovies: data,
  };
}

import React from 'react';
import CardContainer from '../cardContainer/cardContainer';
import NoResults from '../notFound/notFound';

function sortByDate(a, b) {
  if (a.release_date === b.release_date) {
    return 0;
  }

  return a.release_date < b.release_date ? -1 : 1;
}

function sortByRating(a, b) {
  return a.vote_average - b.vote_average;
}

export default function MovieList({ movies, sortBy }) {
  const sorting = !sortBy || sortBy === 'RELEASE DATE' ? sortByDate : sortByRating;
  if (!movies || movies.length === 0) {
    return (<NoResults />);
  }

  return (
    <>
      {movies.sort(sorting).map((movie) => <CardContainer key={movie.id} {...movie} />)}
    </>
  );
}

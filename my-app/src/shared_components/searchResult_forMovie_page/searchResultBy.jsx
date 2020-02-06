import React from 'react';
import '../../presentational_components/searchResultString/searchResult.scss';

const SearchResultBy = (props) => {
  const { value } = props;
  return (
    <span className="result-amount">
      {`Films by ${value} Genre`}
    </span>
  );
};
export default SearchResultBy;

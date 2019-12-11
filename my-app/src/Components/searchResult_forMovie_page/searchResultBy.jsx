import React from 'react';
import '../searchResultString/searchResult.scss';

const SearchResultBy = (props) => {
  const {search_by, value} = props;
  return(
    <span className='result-amount'>Films by {value} {search_by}</span>
  )
};
export default SearchResultBy;

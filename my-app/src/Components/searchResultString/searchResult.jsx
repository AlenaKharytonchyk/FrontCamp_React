import React from 'react';
import './searchResult.scss';

const SearchResultString = (props) => {
  const {result_amount} = props;
  return(
    <span className='result-amount'>{result_amount} movie found</span>
  )
};
 export default SearchResultString;

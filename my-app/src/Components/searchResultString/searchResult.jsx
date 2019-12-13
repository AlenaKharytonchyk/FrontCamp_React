import React from 'react';
import './searchResult.scss';

const SearchResultString = (props) => {
  const {resultAmount} = props;
  return(
    <span className="result-amount">{resultAmount} movie found</span>
  )
};
 export default SearchResultString;

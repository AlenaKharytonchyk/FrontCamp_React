import React from 'react';
import './notFound.scss';

const NoResults = (props) => {
  const {result_amount} = props;
  return(
    <span className='not-found'>No films found</span>
  )
};
export default NoResults;

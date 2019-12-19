import React from 'react';
import './submitBtn.scss';

const SubmitButton = (props) => {
  const { name, className } = props;
  return (
    <input className={className} type="submit" value={name} />
  );
};

export default SubmitButton;

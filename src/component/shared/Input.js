import React from 'react';

const Input = ({label, type="text", }, ref) => {
  return (
      <div>
        <label>{label}</label>
        <input type={type} ref={ref}/>
      </div>
  )
};

export default React.forwardRef(Input);

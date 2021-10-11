import React from "react";

const Filter = ({ id, value, onChange }) => (
  <label htmlFor={id}>
    Find contacts by name
    <input id={id} type="text" name="name" value={value} onChange={onChange} />
  </label>
);

export default Filter;

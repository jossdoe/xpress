import React from 'react';

const useCheckbox = (cbGroup, id, value, stateArray, setStateArray) => {
  const localArray = [...stateArray];

  const toggle = (value) => {
    if (!localArray.includes(value)) {
      localArray.push(value);
      setStateArray(localArray);
    } else {
      const index = localArray.indexOf(value);
      localArray.splice(index, 1);
      setStateArray(localArray);
    }
  };

  return (
    <>
      <input
        type="checkbox"
        name={cbGroup}
        value={value}
        id={id}
        checked={stateArray.includes(value)}
        onChange={(e) => toggle(e.target.value)}
      />
      <label htmlFor={id}>{value}</label>
    </>
  );
};

export default useCheckbox;

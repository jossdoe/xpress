import React from 'react';

const useRadioInput = (radioGroup, id, value, groupState, setGroupState) => {
  return (
    <>
      <input
        type="radio"
        name={radioGroup}
        value={value}
        id={id}
        checked={groupState === value}
        onChange={(e) => setGroupState(e.target.value)}
      />
      <label htmlFor={id}>{value}</label>
    </>
  );
};

export default useRadioInput;

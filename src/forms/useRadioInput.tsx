import React from 'react';
import { LinkTypeFormTypes } from 'types';

const useRadioInput = (
  radioGroup: string,
  id: string,
  value: string,
  groupState: string,
  setGroupState: (value: LinkTypeFormTypes) => void
) => {
  return (
    <>
      <input
        type="radio"
        name={radioGroup}
        value={value}
        id={id}
        checked={groupState === value}
        onChange={e => {
          if (
            e.target.value === 'social' ||
            e.target.value === 'front' ||
            e.target.value === 'both'
          )
            setGroupState(e.target.value);
        }}
      />
      <label htmlFor={id}>{value}</label>
    </>
  );
};

export default useRadioInput;

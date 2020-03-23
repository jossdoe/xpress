import React from 'react';

const useTextInput = (
  name: string,
  placeholder: string,
  inputState: string,
  setInputState: (value: string) => void
) => {
  return (
    <>
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        value={inputState}
        onChange={e => setInputState(e.target.value)}
      />
    </>
  );
};

export default useTextInput;

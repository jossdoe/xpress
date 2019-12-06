import React from 'react';

const useTextInput = (name, placeholder, inputState, setInputState) => {
  return (
    <>
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        value={inputState}
        onChange={(e) => setInputState(e.target.value)}
      />
    </>
  );
};

export default useTextInput;

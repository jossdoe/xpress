import React from 'react';
import { CheckboxInput, CheckboxLabel } from './styles';
import { FiCheckCircle, FiCircle } from 'react-icons/fi';

type PropsType = {
  labelText: string;
  name: string;
  value: string;
  checked: boolean;
  changeHandler: (value: boolean) => void;
  variant?: 'light' | 'dark';
};

const CheckboxTag: React.FC<PropsType> = (props) => {
  return (
    <>
      <CheckboxInput
        type="checkbox"
        name={props.name}
        value={props.value}
        id={props.name}
        checked={props.checked}
        onChange={() => props.changeHandler(!props.checked)}
      />
      <CheckboxLabel htmlFor={props.name} dark={props.variant === 'dark'}>
        {props.checked ? (
          <FiCheckCircle
            style={{ marginRight: '5px', verticalAlign: 'middle' }}
          />
        ) : (
          <FiCircle style={{ marginRight: '5px', verticalAlign: 'middle' }} />
        )}
        <span style={{ verticalAlign: 'middle' }}>{props.labelText}</span>
      </CheckboxLabel>
    </>
  );
};

export default CheckboxTag;

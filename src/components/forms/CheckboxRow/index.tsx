import React from 'react';
import { CheckboxInput, CheckboxLabel } from './styles';
import { FiCheckCircle, FiCircle } from 'react-icons/fi';

type PropsType = {
  labelText: string;
  groupName: string;
  value: string;
  checked: boolean;
  changeHandler: (value: string) => void;
};

const CheckboxTag: React.FC<PropsType> = props => {
  return (
    <>
      <CheckboxInput
        type="checkbox"
        name={props.groupName}
        value={props.value}
        id={props.value}
        checked={props.checked}
        onChange={e => props.changeHandler(e.target.value)}
      />
      <CheckboxLabel htmlFor={props.value}>
        {props.checked ? (
          <FiCheckCircle
            style={{ marginRight: '11px', verticalAlign: 'middle' }}
          />
        ) : (
          <FiCircle style={{ marginRight: '11px', verticalAlign: 'middle' }} />
        )}
        <span style={{ verticalAlign: 'middle' }}>{props.labelText}</span>
      </CheckboxLabel>
    </>
  );
};

export default CheckboxTag;

import React from 'react';
import { LinkTypeFormTypes } from 'types';
import { RadioGroupItem, RadioInput, RadioLabel } from './styles';

type PropsType = {
  groupName: string;
  choices: Array<string>;
  switchValue: LinkTypeFormTypes;
  setSwitchValue: (value: LinkTypeFormTypes) => void;
};

const LinkRadioGroup: React.FC<PropsType> = props => {
  return (
    <>
      {props.choices.map((choice, index) => {
        return (
          <RadioGroupItem key={index}>
            <RadioInput
              type="radio"
              name="lists"
              value={choice}
              id={choice}
              checked={props.switchValue === choice}
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                if (
                  e.currentTarget.value === 'social' ||
                  e.currentTarget.value === 'front' ||
                  e.currentTarget.value === 'both'
                )
                  props.setSwitchValue(e.currentTarget.value);
              }}
            />
            <RadioLabel htmlFor={choice}>{choice}</RadioLabel>
          </RadioGroupItem>
        );
      })}
    </>
  );
};

export default LinkRadioGroup;

import React from 'react';
import { LocalListType } from 'types';
import { RadioGroupItem, RadioInput, RadioLabel } from './styles';

type PropsType = {
  groupName: string;
  lists: Array<LocalListType>;
  activeList: string;
  setActiveList: (value: string) => void;
};

const TurboRadioGroup: React.FC<PropsType> = (props) => {
  return (
    <>
      {props.lists.map((list, index) => {
        return (
          <RadioGroupItem key={index}>
            <RadioInput
              type="radio"
              name={props.groupName}
              value={list.title}
              id={list.title}
              checked={props.activeList === list.title}
              onChange={(e) => props.setActiveList(e.target.value)}
            />
            <RadioLabel htmlFor={list.title}>{list.title}</RadioLabel>
          </RadioGroupItem>
        );
      })}
    </>
  );
};

export default TurboRadioGroup;

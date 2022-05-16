import React from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { change } from 'components/Redux/Filter/slice';
import { Wrapper, Input, Label } from './Filter.styled';


const Filter = () => {
  const dispatch = useDispatch();
  const filterState = useSelector(state => state.contacts.filter);

  const filterStateChange = evt => {
    dispatch(change(evt.target.value));
  };

  return (
    <Wrapper>
      <Label htmlFor={nanoid()}>
        Find contacts by name
      </Label>
      <Input
        type="text"
        id={nanoid()}
        value={filterState}
        onChange={filterStateChange}
      />
    </Wrapper>
  );
};

export default Filter;

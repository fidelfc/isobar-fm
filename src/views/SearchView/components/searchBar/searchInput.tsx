import React, { FormEvent } from 'react';
import styled from 'styled-components';
import search from '../../../../assets/search.png';
import { Colors } from '../../../../constants/colors';
import { Devices } from '../../../../constants/devices';
interface Props {
  changeFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  searchFunction: (value: string) => void;
}
export const SearchInput = ({
  changeFunction,
  value,
  searchFunction
}: Props) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchFunction(value);
  };
  return (
    <InputWrapper onSubmit={handleSubmit}>
      <Input
        data-testid={'search-input'}
        onChange={changeFunction}
        value={value}
      />
      <Icon
        data-testid={'search-button'}
        onClick={() => searchFunction(value)}
        src={search}
        alt={'search-icon'}
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.form`
  width: fit-content;
  position: relative;
  height: 24px;
`;
const Input = styled.input`
  width: 200px;
  padding-right: 32px;
  padding-left: 12px;
  height: 100%;
  outline: none;
  box-shadow: none;
  border: 1px ${Colors.white} solid;
  border-radius: 4px;

  @media (min-width: ${Devices.desktop}) {
    width: 400px;
    margin-left: auto;
  }
`;

const Icon = styled.img`
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  position: absolute;
  cursor: pointer;
`;

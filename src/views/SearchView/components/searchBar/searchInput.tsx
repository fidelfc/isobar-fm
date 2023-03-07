import React, { FormEvent } from 'react';
import styled from 'styled-components';
import search from '../../../../assets/search.png';
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
      <Input onChange={changeFunction} value={value} />
      <Icon
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
  width: 250px;
  padding-right: 32px;
  padding-left: 12px;
  height: 100%;
  outline: none;
  box-shadow: none;
  border: 1px white solid;
  border-radius: 4px;
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

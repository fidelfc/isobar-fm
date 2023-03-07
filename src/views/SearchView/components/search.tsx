import React, { FormEvent } from 'react';
import styled from 'styled-components';
import search from '../../../assets/search.png';
interface Props {
  changeFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  searchFunction: (value: string) => void;
}
export const Search = ({ changeFunction, value, searchFunction }: Props) => {
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
  width: 100%;
  position: relative;
  height: 24px;
`;
const Input = styled.input`
  width: 100%;
  padding-right: 32px;
  padding-left: 32px;
  height: 100%;
`;

const Icon = styled.img`
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  position: absolute;
  cursor: pointer;
`;

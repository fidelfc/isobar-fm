import React, { useState } from 'react';
import OrderIcon from '../../../../assets/order_by.png';
import styled from 'styled-components';
import { Colors } from '../../../../constants/colors';
import { BandHTTPResponse } from '../../../../services/model/bandHTTPResponse';
import useOnclickOutside from 'react-cool-onclickoutside';
import { useViewController } from './OrderViewController';

interface Props {
  orderFunction: (key: keyof BandHTTPResponse) => void;
  sortConfigKey: keyof BandHTTPResponse | undefined;
}
export const Order = ({ orderFunction, sortConfigKey }: Props) => {
  const { ref, buttonsVisible, toggleVisibility } = useViewController();
  return (
    <Wrapper>
      <ButtonWrapper ref={ref}>
        <Icon onClick={toggleVisibility} src={OrderIcon} />
        {buttonsVisible && (
          <ButtonContainer>
            <Button
              $active={sortConfigKey === 'name'}
              onClick={() => orderFunction('name')}
            >
              Alphabetical
            </Button>
            <Button
              $active={sortConfigKey === 'numPlays'}
              onClick={() => orderFunction('numPlays')}
            >
              Number of Plays
            </Button>
          </ButtonContainer>
        )}
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  top: 80px;
  right: 10px;
  width: 20px;
  height: 20px;
  margin-left: auto;
`;
const Icon = styled.img`
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

const ButtonContainer = styled.div`
  background-color: ${Colors.darkGray};
  width: 100px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(0, 95%);
  padding: 8px;
`;
interface ButtonProps {
  $active?: boolean;
}
const Button = styled.div<ButtonProps>`
  display: flex;
  height: 25px;
  align-items: center;
  width: 100%;
  color: ${(props) => (props.$active ? Colors.orange : Colors.white)};
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
`;
